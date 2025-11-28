import React from 'react';
import { Link } from 'react-router-dom';
import './MassagePages.css';
import { useTranslation } from 'react-i18next';

function LymphaticDrainage() {
    const { t } = useTranslation();
    
    return (
        <div className="massage-page">
            <div className="massage-header">
                <Link to="/" className="back-button">← {t('back_to_home')}</Link>
                <h1>{t('services.lymphatic drainage')}</h1>
                <p className="massage-subtitle">{t('lymphatic.subtitle', 'Gentle detoxification and immune system boost')}</p>
            </div>
            
            <div className="massage-content">
                <div className="benefits-section">
                    <h2>{t('lymphatic.benefits_title', 'Benefits of Lymphatic Drainage')}</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <h3>💧 {t('lymphatic.benefit1_title', 'Reduces Swelling')}</h3>
                            <p>{t('lymphatic.benefit1_desc', 'Effectively reduces edema and fluid retention in the body')}</p>
                        </div>
                        <div className="benefit-card">
                            <h3>🌿 {t('lymphatic.benefit2_title', 'Natural Detox')}</h3>
                            <p>{t('lymphatic.benefit2_desc', 'Stimulates the lymphatic system to remove toxins naturally')}</p>
                        </div>
                        <div className="benefit-card">
                            <h3>🛡️ {t('lymphatic.benefit3_title', 'Boosts Immunity')}</h3>
                            <p>{t('lymphatic.benefit3_desc', 'Enhances your body\'s natural defense system')}</p>
                        </div>
                        <div className="benefit-card">
                            <h3>🌟 {t('lymphatic.benefit4_title', 'Post-Surgery Recovery')}</h3>
                            <p>{t('lymphatic.benefit4_desc', 'Speeds up healing after surgical procedures')}</p>
                        </div>
                    </div>
                </div>

                <div className="procedure-section">
                    <h2>{t('lymphatic.technique_title', 'Gentle & Effective Technique')}</h2>
                    <div className="technique-description">
                        <p>{t('lymphatic.technique_desc', 'Lymphatic drainage uses very light, rhythmic pressure to stimulate the natural flow of lymph fluid. This gentle approach is perfect for:')}</p>
                        <div className="indications">
                            <div className="indication">{t('lymphatic.indication1', 'Post-operative swelling')}</div>
                            <div className="indication">{t('lymphatic.indication2', 'Chronic inflammation')}</div>
                            <div className="indication">{t('lymphatic.indication3', 'Sinus congestion')}</div>
                            <div className="indication">{t('lymphatic.indication4', 'Fatigue and low energy')}</div>
                            <div className="indication">{t('lymphatic.indication5', 'Skin health improvement')}</div>
                        </div>
                    </div>
                </div>

                <div className="booking-cta">
                    <h3>{t('lymphatic.cta_title', 'Experience Gentle Healing')}</h3>
                    <p>{t('lymphatic.cta_desc', 'Perfect for detoxification and recovery needs')}</p>
                    <Link to="/booking" className="cta-button">
                        {t('lymphatic.book_button', 'Book Lymphatic Session')}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LymphaticDrainage;