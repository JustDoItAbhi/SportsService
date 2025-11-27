import React from 'react';
import { Link } from 'react-router-dom';
import './MassagePages.css';

function TherapeuticPreventive() {
    return (
        <div className="massage-page">
            <div className="massage-header">
                <Link to="/" className="back-button">← Back to Home</Link>
                <h1>Therapeutic & Preventive Massage</h1>
                <p className="massage-subtitle">Heal existing issues and prevent future problems</p>
            </div>
            
            <div className="massage-content">
                <div className="benefits-section">
                    <h2>Benefits of Therapeutic & Preventive Massage</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <h3>🎯 Targeted Pain Relief</h3>
                            <p>Focuses on specific problem areas for effective pain management</p>
                        </div>
                        <div className="benefit-card">
                            <h3>🛡️ Injury Prevention</h3>
                            <p>Regular sessions help prevent muscle injuries and chronic pain</p>
                        </div>
                        <div className="benefit-card">
                            <h3>💪 Improved Mobility</h3>
                            <p>Enhances joint flexibility and range of motion</p>
                        </div>
                        <div className="benefit-card">
                            <h3>🌊 Stress Reduction</h3>
                            <p>Reduces both physical and mental stress before it becomes serious</p>
                        </div>
                    </div>
                </div>

                <div className="procedure-section">
                    <h2>Treatment Approach</h2>
                    <div className="two-column">
                        <div className="column">
                            <h3>🩺 Therapeutic Focus</h3>
                            <ul>
                                <li>Deep tissue work for chronic pain</li>
                                <li>Injury rehabilitation techniques</li>
                                <li>Muscle knot release</li>
                                <li>Posture correction</li>
                                <li>Inflammation reduction</li>
                            </ul>
                        </div>
                        <div className="column">
                            <h3>🛡️ Preventive Care</h3>
                            <ul>
                                <li>Regular maintenance sessions</li>
                                <li>Early tension detection</li>
                                <li>Stress management</li>
                                <li>Mobility preservation</li>
                                <li>Overall wellness support</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="booking-cta">
                    <h3>Start Your Healing Journey</h3>
                    <p>Whether for treatment or prevention, we're here to help</p>
                    <Link to="/booking" className="cta-button">
                        Book Therapeutic Session
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TherapeuticPreventive;