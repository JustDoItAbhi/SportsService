import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import './AdminDashboard.css';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://sportsservice-backend.onrender.com';

const AdminDashboard = () => {
    console.log("ADMIN PAGE LOADED");
    console.log("API Base URL:", API_BASE_URL);
    
    const { t } = useTranslation();
    const [requests, setRequests] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [statistics, setStatistics] = useState(null);
    const [error, setError] = useState('');

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
            setError('');
        } else {
            setError('Invalid password');
        }
    };

    const fetchRequests = async () => {
        try {
            setLoading(true);
            setError('');
            console.log('Fetching from:', `${API_BASE_URL}/api/requests`);
            const response = await axios.get(`${API_BASE_URL}/api/requests`, {
                timeout: 15000
            });
            console.log('Requests fetched:', response.data);
            setRequests(response.data);
        } catch (error) {
            console.error("Error fetching requests:", error);
            const errorMsg = error.response 
                ? `Server error: ${error.response.status} - ${error.response.data.message || error.response.statusText}`
                : `Network error: ${error.message}`;
            setError(errorMsg);
        } finally {
            setLoading(false);
        }
    };

    const fetchStatistics = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/statistics`, {
                timeout: 15000
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
                    {error && <div className="error-message">{error}</div>}
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

            {error && (
                <div className="error-message">
                    {error}
                    <button onClick={fetchRequests} style={{marginLeft: '10px'}}>
                        Retry
                    </button>
                </div>
            )}

            {/* ... rest of your component remains the same ... */}
        </div>
    );
};

export default AdminDashboard;