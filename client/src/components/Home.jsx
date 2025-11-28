import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const quotes = [
        t('quote_1', "Healing hands, peaceful mind, renewed spirit - at Miss Tatyana Dostagno's Sanctuary"),
        t('quote_2', "Let the rhythm of massage carry your worries away"),
        t('quote_3', "In the silence between touches, find your inner peace"),
        t('quote_4', "Your journey to relaxation begins with a single touch"),
        t('quote_5', "Where stress melts away and serenity takes over"),
        t('quote_6', "The art of healing through compassionate touch"),
        t('quote_7', "Rediscover balance in body, mind, and soul")
    ];

    const services = [
        {
            id: 'general-massage',
            name: t('services.GeneralMassage'),
            description: t('service_descriptions.general', 'Relaxing full-body massage for stress relief'),
            icon: '💆‍♀️'
        },
        {
            id: 'therapeutic-preventive',
            name: t('services.therapeutic and preventive'),
            description: t('service_descriptions.therapeutic', 'Targeted therapy for chronic muscle tension'),
            icon: '✨'
        },
        {
            id: 'sports',
            name: t('services.sports'),
            description: t('service_descriptions.sports', 'Enhance performance and recovery'),
            icon: '🏃‍♀️'
        },
        {
            id: 'lymphatic-drainage',
            name: t('services.lymphatic drainage'),
            description: t('service_descriptions.lymphatic', 'Detoxifying and rejuvenating treatment'),
            icon: '🌸'
        },
        {
            id: 'honey',
            name: t('services.honey'),
            description: t('service_descriptions.honey', 'Natural honey for skin nourishment'),
            icon: '🍯'
        },
        {
            id: 'anti-cellulite',
            name: t('services.anti-Cellulite'),
            description: t('service_descriptions.anti_cellulite', 'Reduce cellulite and improve skin texture'),
            icon: '❤️'
        }
    ];

    const QuoteCarousel = () => {
        const [currentQuote, setCurrentQuote] = useState(0);
        const [fade, setFade] = useState(true);

        useEffect(() => {
            const interval = setInterval(() => {
                setFade(false);
                setTimeout(() => {
                    setCurrentQuote((prev) => (prev + 1) % quotes.length);
                    setFade(true);
                }, 500);
            }, 5000);
            return () => clearInterval(interval);
        }, []);

        return (
            <div className="quote-carousel">
                <p className={`quote-text ${fade ? 'fade-in' : 'fade-out'}`}>
                    "{quotes[currentQuote]}"
                </p>
                <p className="quote-author">- {t('Miss_Tatyana_Dostagno')}</p>
            </div>
        );
    };

    const handleBookingClick = () => {
        navigate('/booking');
    };

    const handleLearnMoreClick = () => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleServiceClick = (serviceId) => {
        navigate(`/massage/${serviceId}`);
    };

    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-background">
                    <div className="floating-elements">
                        <div className="floating-element element-1">☁️</div>
                        <div className="floating-element element-2">✨</div>
                        <div className="floating-element element-3">🌙</div>
                        <div className="floating-element element-4">⭐</div>
                    </div>
                </div>
                
                <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
                    <h1 className="hero-title">
                        <span className="title-main">{t('welcome')}</span>
                        <span className="title-sub">Massage & Wellness Sanctuary</span>
                    </h1>
                    
                    <QuoteCarousel />
                    
                    <div className="hero-buttons">
                        <button 
                            className="cta-button primary"
                            onClick={handleBookingClick}
                        >
                            {t('book_now')}
                        </button>
                        <button 
                            className="cta-button secondary"
                            onClick={handleLearnMoreClick}
                        >
                            {t('learn_more')}
                        </button>
                    </div>
                </div>
                
                <div className="scroll-indicator">
                    <div className="scroll-arrow"></div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="services-section">
                <div className="container">
                    <h2 className="section-title">{t('our_services')}</h2>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div 
                                key={service.id} 
                                className="service-card clickable"
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onClick={() => handleServiceClick(service.id)}
                            >
                                <div className="service-icon">{service.icon}</div>
                                <h3 className="service-name">{service.name}</h3>
                                <p className="service-description">{service.description}</p>
                                <div className="service-learn-more">
                                    {t('learn_more')} →
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>{t('ready to relax')}</h2>
                        <p>{t('description')}</p>
                        <button 
                            className="cta-button large"
                            onClick={handleBookingClick}
                        >
                            {t('book_appointment')}
                        </button>
                    </div>
                    
                    {/* Contact Section - USING TRANSLATIONS */}
                    <div className="contact-info">
                        <h2>{t('Contact_us')}</h2>
                        <p>{t('Miss_Tatyana_Dostagno')}</p>
                        <p>
                            📞 +380977479729 {t('available_on')} 📲 {t('Viber')}, {t('Telegram')}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;