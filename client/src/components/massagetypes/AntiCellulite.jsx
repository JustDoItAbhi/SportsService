import React from 'react';
import { Link } from 'react-router-dom';
import './MassagePages.css';
import { useTranslation } from 'react-i18next';

function AntiCellulite() {
    const { t } = useTranslation();
    
    return (
        <div className="massage-page">
            <div className="massage-header">
                <Link to="/" className="back-button">← {t('back_to_home')}</Link>
                <h1>{t('services.anti-Cellulite')}</h1>
                <p className="massage-subtitle">{t('anti_cellulite.subtitle', 'Підтягніть, тонізуйте та згладьте шкіру природним шляхом')}</p>
            </div>
            
            <div className="massage-content">
                <div className="benefits-section">
                    <h2>{t('anti_cellulite.benefits_title', 'Переваги антицелюлітного лікування')}</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <h3>✨ {t('anti_cellulite.benefit1_title', 'Гладша Шкіра')}</h3>
                            <p>{t('anti_cellulite.benefit1_desc', 'Зменшує прояв целюліту та нерівностей шкіри')}</p>
                        </div>
                        <div className="benefit-card">
                            <h3>💪 {t('anti_cellulite.benefit2_title', 'Підтягує & Тонізує')}</h3>
                            <p>{t('anti_cellulite.benefit2_desc', 'Покращує еластичність та пружність шкіри в проблемних зонах')}</p>
                        </div>
                        <div className="benefit-card">
                            <h3>🔥 {t('anti_cellulite.benefit3_title', 'Зменшення Жиру')}</h3>
                            <p>{t('anti_cellulite.benefit3_desc', 'Допомагає розщеплювати жирові відкладення та покращує метаболізм')}</p>
                        </div>
                        <div className="benefit-card">
                            <h3>🌊 {t('anti_cellulite.benefit4_title', 'Покращена Циркуляція')}</h3>
                            <p>{t('anti_cellulite.benefit4_desc', 'Покращує кровообіг у проблемних зонах для кращих результатів')}</p>
                        </div>
                    </div>
                </div>

                <div className="procedure-section">
                    <h2>{t('anti_cellulite.approach_title', 'Цільовий Підхід')}</h2>
                    <div className="target-areas">
                        <h3>{t('anti_cellulite.treatment_areas', 'Зони лікування:')}</h3>
                        <div className="areas-grid">
                            <div className="area">{t('anti_cellulite.area1', 'Стегна')}</div>
                            <div className="area">{t('anti_cellulite.area2', 'Стегна')}</div>
                            <div className="area">{t('anti_cellulite.area3', 'Сідниці')}</div>
                            <div className="area">{t('anti_cellulite.area4', 'Живіт')}</div>
                            <div className="area">{t('anti_cellulite.area5', 'Верхні частини рук')}</div>
                        </div>
                    </div>
                    <div className="treatment-info">
                        <p><strong>{t('anti_cellulite.recommended', 'Рекомендовано:')}</strong> {t('anti_cellulite.recommended_sessions', '2-3 сеанси на тиждень для оптимальних результатів')}</p>
                        <p><strong>{t('anti_cellulite.duration', 'Тривалість:')}</strong> {t('anti_cellulite.duration_time', '60-90 хвилин на сеанс')}</p>
                        <p><strong>{t('anti_cellulite.techniques', 'Техніки:')}</strong> {t('anti_cellulite.techniques_desc', 'Глибоке розминання, банкування та спеціалізовані рухи')}</p>
                    </div>
                </div>

                <div className="booking-cta">
                    <h3>{t('anti_cellulite.cta_title', 'Почніть Трансформацію Тіла')}</h3>
                    <p>{t('anti_cellulite.cta_desc', 'Досягніть гладшої, пружнішої шкіри за допомогою наших спеціалізованих технік')}</p>
                    <Link to="/booking" className="cta-button">
                        {t('anti_cellulite.book_button', 'Забронювати Антицелюлітний Сеанс')}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AntiCellulite;