import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function GeneralMassage() {
    const { t } = useTranslation();
    
    return (
        <div className="massage-page">
            <div className="container">
                <Link to="/" className="back-button">← {t('back_to_home')}</Link>
                <h1>{t('services.GeneralMassage')}</h1>
                <div className="massage-content">
                    <h2>{t('general_massage.benefits_title', 'Benefits of General Body Massage')}</h2>
                    <p>{t('general_massage.description', 'General (full-body) massage focuses on relaxing muscles, improving circulation, and reducing stress.')}</p>
                    
                    <h3>{t('general_massage.key_benefits', 'Key Benefits:')}</h3>
                    <ul>
                        <li>{t('general_massage.benefit1', 'Relieves Muscle Pain & Tension - Loosens tight muscles and reduces stiffness')}</li>
                        <li>{t('general_massage.benefit2', 'Improves Blood Circulation - Helps deliver more oxygen and nutrients to muscles')}</li>
                        <li>{t('general_massage.benefit3', 'Reduces Stress & Anxiety - Promotes relaxation and lowers stress hormones')}</li>
                        <li>{t('general_massage.benefit4', 'Boosts Mood - Encourages release of serotonin and dopamine')}</li>
                        <li>{t('general_massage.benefit5', 'Enhances Sleep Quality - Helps in deeper and more restful sleep')}</li>
                        <li>{t('general_massage.benefit6', 'Removes Toxins from Body - Stimulates lymphatic system')}</li>
                        <li>{t('general_massage.benefit7', 'Improves Flexibility & Joint Mobility - Loosens tight joints')}</li>
                        <li>{t('general_massage.benefit8', 'Strengthens Immune System - Better circulation improves immunity')}</li>
                        <li>{t('general_massage.benefit9', 'Increases Energy Levels - Reduces fatigue and makes body feel refreshed')}</li>
                    </ul>

                    <div className="booking-cta">
                        <Link to="/booking" className="cta-button">
                            {t('general_massage.book_button', 'Book General Massage')}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GeneralMassage;