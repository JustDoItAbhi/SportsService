import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import './BookingForm.css';

// Use environment variable with fallback
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://sportsservice-backend.onrender.com';

const BookingForm = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: 'general-massage',
        time: '',
        notes: ''
    });
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');
        
        try {
            console.log('Submitting to:', `${API_BASE_URL}/api/requests`);
            const response = await axios.post(`${API_BASE_URL}/api/requests`, formData, {
                timeout: 10000, // 10 second timeout
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            
            setMessage(t('success_message'));
            setFormData({ 
                name: '', 
                phone: '', 
                service: 'general-massage',
                time: '', 
                notes: '' 
            });
        } catch (error) {
            console.error("Error submitting form:", error);
            if (error.code === 'ERR_NETWORK') {
                setMessage('Network error: Cannot connect to server. Please try again later.');
            } else {
                setMessage(t('error_message'));
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="booking-form-container">
            <div className="form-header">
                <h2>{t('book_appointment')}</h2>
                <p className="form-subtitle">{t('description')}</p>
            </div>
            
            {message && (
                <div className={`message ${message.includes('success') ? 'success' : 'error'}`}>
                    {message}
                </div>
            )}
            
            <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-row">
                    <div className="form-group">
                        <label>{t('name')}</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                            placeholder={t('name_placeholder')}
                        />
                    </div>
                    <div className="form-group">
                        <label>{t('phone')}</label>
                        <input 
                            type="tel" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleChange} 
                            required 
                            placeholder={t('phone_placeholder')}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label>{t('service')}</label>
                    <select name="service" value={formData.service} onChange={handleChange}>
                        <option value="general-massage">{t('services.GeneralMassage')}</option>
                        <option value="therapeutic-preventive">{t('services.therapeutic and preventive')}</option>
                        <option value="sports">{t('services.sports')}</option>
                        <option value="lymphatic-drainage">{t('services.lymphatic drainage')}</option>
                        <option value="honey">{t('services.honey')}</option>
                        <option value="anti-cellulite">{t('services.anti-Cellulite')}</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>{t('time')}</label>
                    <input 
                        type="datetime-local" 
                        name="time" 
                        value={formData.time} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label>{t('notes')}</label>
                    <textarea 
                        name="notes" 
                        value={formData.notes} 
                        onChange={handleChange}
                        placeholder={t('notes_placeholder')}
                        rows="4"
                    ></textarea>
                </div>

                <button 
                    type="submit" 
                    className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? t('submitting') : t('submit')}
                </button>
            </form>
        </div>
    );
};

export default BookingForm;