import React from 'react';
import { Link } from 'react-router-dom';
import './MassagePages.css';

function Honey() {
    return (
        <div className="massage-page">
            <div className="massage-header">
                <Link to="/" className="back-button">← Back to Home</Link>
                <h1>Honey Massage</h1>
                <p className="massage-subtitle">Natural healing with pure honey</p>
            </div>
            
            <div className="massage-content">
                <div className="benefits-section">
                    <h2>Benefits of Honey Massage</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <h3>🍯 Deep Nourishment</h3>
                            <p>Honey penetrates deep into the skin, providing essential nutrients</p>
                        </div>
                        <div className="benefit-card">
                            <h3>🌟 Skin Rejuvenation</h3>
                            <p>Leaves skin soft, smooth, and glowing with natural vitamins</p>
                        </div>
                        <div className="benefit-card">
                            <h3>💫 Detoxification</h3>
                            <p>Draws out toxins and impurities from the skin</p>
                        </div>
                        <div className="benefit-card">
                            <h3>🌿 Antibacterial</h3>
                            <p>Natural antibacterial properties help cleanse the skin</p>
                        </div>
                    </div>
                </div>

                <div className="procedure-section">
                    <h2>Procedure of Honey Massage</h2>
                    <div className="procedure-steps">
                        <div className="step">
                            <span className="step-number">1</span>
                            <div className="step-content">
                                <h3>Consultation & Preparation</h3>
                                <p>Assessment of skin type and application of warm, pure honey to the body</p>
                            </div>
                        </div>
                        <div className="step">
                            <span className="step-number">2</span>
                            <div className="step-content">
                                <h3>Honey Application</h3>
                                <p>Pure, warm honey is applied using special techniques to maximize absorption</p>
                            </div>
                        </div>
                        <div className="step">
                            <span className="step-number">3</span>
                            <div className="step-content">
                                <h3>Therapeutic Movements</h3>
                                <p>Gentle, rhythmic strokes that help honey penetrate deep into the skin</p>
                            </div>
                        </div>
                        <div className="step">
                            <span className="step-number">4</span>
                            <div className="step-content">
                                <h3>Detox Phase</h3>
                                <p>Honey works to draw out impurities while nourishing the skin</p>
                            </div>
                        </div>
                        <div className="step">
                            <span className="step-number">5</span>
                            <div className="step-content">
                                <h3>Relaxation & Completion</h3>
                                <p>Gentle removal and final relaxation with warm towels</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="booking-cta">
                    <h3>Ready to Experience Honey Massage?</h3>
                    <p>Book your session today and feel the natural difference</p>
                    <Link to="/booking" className="cta-button">
                        Book Honey Massage
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Honey;