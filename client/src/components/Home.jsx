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
        "Healing hands, peaceful mind, renewed spirit - at Miss Tania Ibichuk's Sanctuary",
        "Let the rhythm of massage carry your worries away",
        "In the silence between touches, find your inner peace",
        "Your journey to relaxation begins with a single touch",
        "Where stress melts away and serenity takes over",
        "The art of healing through compassionate touch",
        "Rediscover balance in body, mind, and soul"
    ];

    const services = [
        {
            id: 'general-massage',
            name: t('services.GeneralMassage'),
            description: 'Relaxing full-body massage for stress relief',
            icon: '💆‍♀️'
        },
        {
            id: 'therapeutic-preventive',
            name: t('services.therapeutic and preventive'),
            description: 'Targeted therapy for chronic muscle tension',
            icon: '✨'
        },
        {
            id: 'sports',
            name: t('services.sports'),
            description: 'Enhance performance and recovery',
            icon: '🏃‍♀️'
        },
        {
            id: 'lymphatic-drainage',
            name: t('services.lymphatic drainage'),
            description: 'Healing scents for mind and body',
            icon: '🌸'
        },
        {
            id: 'honey',
            name: t('services.honey'),
            description: 'Share the relaxation experience',
            icon: '😎'
        },
        {
            id: 'anti-cellulite',
            name: t('services.anti-Cellulite'),
            description: 'Specialized care for expecting mothers',
            icon:'❤️'

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
                <p className="quote-author">- Miss Tania Ibichuk</p>
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
                        <span className="title-main">Miss Tania Ibichuk</span>
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
                </div>
            </section>
        </div>
    );
};

export default Home;