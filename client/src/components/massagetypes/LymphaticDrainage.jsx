import React from 'react';
import { Link } from 'react-router-dom';
import './MassagePages.css';

function LymphaticDrainage() {
    return (
        <div className="massage-page">
            <div className="massage-header">
                <Link to="/" className="back-button">← Back to Home</Link>
                <h1>Lymphatic Drainage Massage</h1>
                <p className="massage-subtitle">Gentle detoxification and immune system boost</p>
            </div>
            
            <div className="massage-content">
                <div className="benefits-section">
                    <h2>Benefits of Lymphatic Drainage</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <h3>💧 Reduces Swelling</h3>
                            <p>Effectively reduces edema and fluid retention in the body</p>
                        </div>
                        <div className="benefit-card">
                            <h3>🌿 Natural Detox</h3>
                            <p>Stimulates the lymphatic system to remove toxins naturally</p>
                        </div>
                        <div className="benefit-card">
                            <h3>🛡️ Boosts Immunity</h3>
                            <p>Enhances your body's natural defense system</p>
                        </div>
                        <div className="benefit-card">
                            <h3>🌟 Post-Surgery Recovery</h3>
                            <p>Speeds up healing after surgical procedures</p>
                        </div>
                    </div>
                </div>

                <div className="procedure-section">
                    <h2>Gentle & Effective Technique</h2>
                    <div className="technique-description">
                        <p>Lymphatic drainage uses very light, rhythmic pressure to stimulate the natural flow of lymph fluid. This gentle approach is perfect for:</p>
                        <div className="indications">
                            <div className="indication">Post-operative swelling</div>
                            <div className="indication">Chronic inflammation</div>
                            <div className="indication">Sinus congestion</div>
                            <div className="indication">Fatigue and low energy</div>
                            <div className="indication">Skin health improvement</div>
                        </div>
                    </div>
                </div>

                <div className="booking-cta">
                    <h3>Experience Gentle Healing</h3>
                    <p>Perfect for detoxification and recovery needs</p>
                    <Link to="/booking" className="cta-button">
                        Book Lymphatic Session
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LymphaticDrainage;