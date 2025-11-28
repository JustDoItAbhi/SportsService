import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import './AdminDashboard.css';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://sportsservice-backend.onrender.com';

const AdminDashboard = () => {
    const { t } = useTranslation();
    const [requests, setRequests] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [statistics, setStatistics] = useState(null);

    const ADMIN_PASSWORD = 'miss2025';

    // Map service values to translation keys
    const getServiceTranslationKey = (serviceValue) => {
        const serviceMap = {
            'general-massage': 'GeneralMassage',
            'therapeutic-preventive': 'therapeutic and preventive',
            'sports': 'sports',
            'lymphatic-drainage': 'lymphatic drainage',
            'honey': 'honey',
            'anti-cellulite': 'anti-Cellulite'
        };
        return serviceMap[serviceValue] || serviceValue;
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setIsAuthenticated(true);
            setPassword('');
        } else {
            alert('Invalid password');
        }
    };

    const fetchRequests = async () => {
        try {
            setLoading(true);
            console.log('Fetching from:', `${API_BASE_URL}/api/requests`);
            const response = await axios.get(`${API_BASE_URL}/api/requests`, {
                timeout: 10000
            });
            setRequests(response.data);
        } catch (error) {
            console.error("Error fetching requests:", error);
            alert('Error fetching requests: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchStatistics = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/statistics`, {
                timeout: 10000
            });
            setStatistics(response.data);
        } catch (error) {
            console.error("Error fetching statistics:", error);
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            fetchRequests();
            fetchStatistics();
        }
    }, [isAuthenticated]);

    const updateStatus = async (id, newStatus) => {
        try {
            await axios.put(`${API_BASE_URL}/api/requests/${id}`, { status: newStatus });
            fetchRequests();
            fetchStatistics();
        } catch (error) {
            console.error("Error updating status:", error);
            alert('Error updating status');
        }
    };

    const deleteRequest = async (id) => {
        if (window.confirm('Are you sure you want to delete this request?')) {
            try {
                await axios.delete(`${API_BASE_URL}/api/requests/${id}`);
                fetchRequests();
                fetchStatistics();
            } catch (error) {
                console.error("Error deleting request:", error);
                alert('Error deleting request');
            }
        }
    };

    const filteredRequests = selectedStatus === 'all' 
        ? requests 
        : requests.filter(req => req.status === selectedStatus);

    if (!isAuthenticated) {
        return (
            <div className="admin-login-container">
                <div className="login-form">
                    <h2>Miss Tatyana Dostagno - Admin Access</h2>
                    <p>Enter admin password to continue</p>
                    <form onSubmit={handleLogin}>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter admin password"
                            required
                        />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="admin-dashboard">
            <div className="admin-header">
                <h2>{t('admin.title')} - Miss Tatyana Dostagno</h2>
                <button 
                    onClick={() => setIsAuthenticated(false)}
                    className="logout-btn"
                >
                    Logout
                </button>
            </div>

            {/* Statistics */}
            {statistics && (
                <div className="statistics">
                    <h3>Statistics</h3>
                    <div className="stats-grid">
                        <div className="stat-card total">
                            <h4>Total</h4>
                            <p>{statistics.total}</p>
                        </div>
                        <div className="stat-card pending">
                            <h4>Pending</h4>
                            <p>{statistics.byStatus.pending}</p>
                        </div>
                        <div className="stat-card confirmed">
                            <h4>Confirmed</h4>
                            <p>{statistics.byStatus.confirmed}</p>
                        </div>
                        <div className="stat-card completed">
                            <h4>Completed</h4>
                            <p>{statistics.byStatus.completed}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Filters */}
            <div className="filters">
                <select 
                    value={selectedStatus} 
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="status-filter"
                >
                    <option value="all">All Statuses</option>
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                </select>
                <button onClick={fetchRequests} className="refresh-btn">
                    Refresh
                </button>
            </div>

            {loading ? (
                <div className="loading">Loading requests...</div>
            ) : filteredRequests.length === 0 ? (
                <p className="no-requests">{t('admin.no_requests')}</p>
            ) : (
                <div className="requests-container">
                    <table className="requests-table">
                        <thead>
                            <tr>
                                <th>{t('admin.id')}</th>
                                <th>{t('admin.client')}</th>
                                <th>{t('admin.details')}</th>
                                <th>{t('admin.status')}</th>
                                <th>{t('admin.actions')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRequests.map((req) => {
                                const serviceKey = getServiceTranslationKey(req.service);
                                return (
                                    <tr key={req.id} className={`request-row status-${req.status}`}>
                                        <td className="request-id">#{req.id}</td>
                                        <td className="client-info">
                                            <strong>{req.name}</strong><br />
                                            <span className="phone">{req.phone}</span><br />
                                            <small className="date">
                                                {new Date(req.createdAt).toLocaleDateString()}
                                            </small>
                                        </td>
                                        <td className="service-details">
                                            <span className="service-type">
                                                {t(`services.${serviceKey}`)}
                                            </span><br />
                                            <span className="appointment-time">
                                                {new Date(req.time).toLocaleString()}
                                            </span><br />
                                            {req.notes && <small className="notes">{req.notes}</small>}
                                        </td>
                                        <td className="status-cell">
                                            <select 
                                                value={req.status} 
                                                onChange={(e) => updateStatus(req.id, e.target.value)}
                                                className={`status-select status-${req.status}`}
                                            >
                                                <option value="pending">Pending</option>
                                                <option value="confirmed">Confirmed</option>
                                                <option value="completed">Completed</option>
                                                <option value="cancelled">Cancelled</option>
                                            </select>
                                        </td>
                                        <td className="actions-cell">
                                            <button 
                                                className="btn-delete"
                                                onClick={() => deleteRequest(req.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;