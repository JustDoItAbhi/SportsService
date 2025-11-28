import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Sports() {
    const { t } = useTranslation();
    
    return (
        <div className="massage-page">
            <div className="container">
                <Link to="/" className="back-button">← {t('back_to_home')}</Link>
                <h1>{t('services.sports')}</h1>
                <div className="massage-content">
                    <h2>{t('sports_massage.enhance_title', 'Enhance Performance and Recovery')}</h2>
                    <p>{t('sports_massage.description', 'Specialized massage for athletes and active individuals to improve performance and speed up recovery.')}</p>
                    
                    <h3>{t('sports_massage.benefits_title', 'Benefits:')}</h3>
                    <ul>
                        <li>{t('sports_massage.benefit1', 'Improves Athletic Performance - Enhances muscle function')}</li>
                        <li>{t('sports_massage.benefit2', 'Speeds Up Recovery - Reduces muscle soreness after exercise')}</li>
                        <li>{t('sports_massage.benefit3', 'Prevents Injuries - Identifies and addresses problem areas')}</li>
                        <li>{t('sports_massage.benefit4', 'Increases Flexibility - Improves range of motion')}</li>
                        <li>{t('sports_massage.benefit5', 'Reduces Muscle Tension - Relieves tightness from training')}</li>
                    </ul>

                    <div className="booking-cta">
                        <Link to="/booking" className="cta-button">
                            {t('sports_massage.book_button', 'Book Sports Massage')}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sports;