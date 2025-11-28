import React from 'react';
import { Link } from 'react-router-dom';
import './MassagePages.css';
import { useTranslation } from 'react-i18next';

function Honey() {
    const { t } = useTranslation();
    
    return (
        <div className="massage-page">
            <div className="massage-header">
                <Link to="/" className="back-button">← {t('back_to_home')}</Link>
                <h1>{t('services.honey')}</h1>
                <p className="massage-subtitle">{t('honey_massage.subtitle', 'Natural healing with pure honey')}</p>
            </div>
            
            <div className="massage-content">
                <div className="benefits-section">
                    <h2>{t('honey_massage.benefits_title', 'Benefits of Honey Massage')}</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <h3>🍯 {t('honey_massage.benefit1_title', 'Deep Nourishment')}</h3>
                            <p>{t('honey_massage.benefit1_desc', 'Honey penetrates deep into the skin, providing essential nutrients')}</p>
                        </div>
                        <div className="benefit-card">
                            <h3>🌟 {t('honey_massage.benefit2_title', 'Skin Rejuvenation')}</h3>
                            <p>{t('honey_massage.benefit2_desc', 'Leaves skin soft, smooth, and glowing with natural vitamins')}</p>
                        </div>
                        <div className="benefit-card">
                            <h3>💫 {t('honey_massage.benefit3_title', 'Detoxification')}</h3>
                            <p>{t('honey_massage.benefit3_desc', 'Draws out toxins and impurities from the skin')}</p>
                        </div>
                        <div className="benefit-card">
                            <h3>🌿 {t('honey_massage.benefit4_title', 'Antibacterial')}</h3>
                            <p>{t('honey_massage.benefit4_desc', 'Natural antibacterial properties help cleanse the skin')}</p>
                        </div>
                    </div>
                </div>

                <div className="procedure-section">
                    <h2>{t('honey_massage.procedure_title', 'Procedure of Honey Massage')}</h2>
                    <div className="procedure-steps">
                        <div className="step">
                            <span className="step-number">1</span>
                            <div className="step-content">
                                <h3>{t('honey_massage.step1_title', 'Consultation & Preparation')}</h3>
                                <p>{t('honey_massage.step1_desc', 'Assessment of skin type and application of warm, pure honey to the body')}</p>
                            </div>
                        </div>
                        <div className="step">
                            <span className="step-number">2</span>
                            <div className="step-content">
                                <h3>{t('honey_massage.step2_title', 'Honey Application')}</h3>
                                <p>{t('honey_massage.step2_desc', 'Pure, warm honey is applied using special techniques to maximize absorption')}</p>
                            </div>
                        </div>
                        <div className="step">
                            <span className="step-number">3</span>
                            <div className="step-content">
                                <h3>{t('honey_massage.step3_title', 'Therapeutic Movements')}</h3>
                                <p>{t('honey_massage.step3_desc', 'Gentle, rhythmic strokes that help honey penetrate deep into the skin')}</p>
                            </div>
                        </div>
                        <div className="step">
                            <span className="step-number">4</span>
                            <div className="step-content">
                                <h3>{t('honey_massage.step4_title', 'Detox Phase')}</h3>
                                <p>{t('honey_massage.step4_desc', 'Honey works to draw out impurities while nourishing the skin')}</p>
                            </div>
                        </div>
                        <div className="step">
                            <span className="step-number">5</span>
                            <div className="step-content">
                                <h3>{t('honey_massage.step5_title', 'Relaxation & Completion')}</h3>
                                <p>{t('honey_massage.step5_desc', 'Gentle removal and final relaxation with warm towels')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="booking-cta">
                    <h3>{t('honey_massage.cta_title', 'Ready to Experience Honey Massage?')}</h3>
                    <p>{t('honey_massage.cta_desc', 'Book your session today and feel the natural difference')}</p>
                    <Link to="/booking" className="cta-button">
                        {t('honey_massage.book_button', 'Book Honey Massage')}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Honey;