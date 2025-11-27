import React from 'react';
import { Link } from 'react-router-dom';
import './MassagePages.css';

function AntiCellulite() {
    return (
        <div className="massage-page">
            <div className="massage-header">
                <Link to="/" className="back-button">← Back to Home</Link>
                <h1>Anti-Cellulite Massage</h1>
                <p className="massage-subtitle">Firm, tone, and smooth your skin naturally</p>
            </div>
            
            <div className="massage-content">
                <div className="benefits-section">
                    <h2>Benefits of Anti-Cellulite Treatment</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <h3>✨ Smoother Skin</h3>
                            <p>Reduces the appearance of cellulite and skin dimpling</p>
                        </div>
                        <div className="benefit-card">
                            <h3>💪 Firms & Tones</h3>
                            <p>Improves skin elasticity and firmness in treated areas</p>
                        </div>
                        <div className="benefit-card">
                            <h3>🔥 Fat Reduction</h3>
                            <p>Helps break down fat deposits and improve metabolism</p>
                        </div>
                        <div className="benefit-card">
                            <h3>🌊 Improved Circulation</h3>
                            <p>Enhances blood flow to problem areas for better results</p>
                        </div>
                    </div>
                </div>

                <div className="procedure-section">
                    <h2>Targeted Approach</h2>
                    <div className="target-areas">
                        <h3>Common Treatment Areas:</h3>
                        <div className="areas-grid">
                            <div className="area">Thighs</div>
                            <div className="area">Hips</div>
                            <div className="area">Buttocks</div>
                            <div className="area">Abdomen</div>
                            <div className="area">Upper Arms</div>
                        </div>
                    </div>
                    <div className="treatment-info">
                        <p><strong>Recommended:</strong> 2-3 sessions per week for optimal results</p>
                        <p><strong>Duration:</strong> 60-90 minutes per session</p>
                        <p><strong>Techniques:</strong> Deep kneading, cupping, and specialized movements</p>
                    </div>
                </div>

                <div className="booking-cta">
                    <h3>Start Your Body Transformation</h3>
                    <p>Achieve smoother, firmer skin with our specialized techniques</p>
                    <Link to="/booking" className="cta-button">
                        Book Anti-Cellulite Session
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AntiCellulite;