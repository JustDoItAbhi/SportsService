import React from 'react';
import { Link } from 'react-router-dom';

function Sports() {
    return (
        <div className="massage-page">
            <div className="container">
                <Link to="/" className="back-button">← Back to Home</Link>
                <h1>Sports Massage</h1>
                <div className="massage-content">
                    <h2>Enhance Performance and Recovery</h2>
                    <p>Specialized massage for athletes and active individuals to improve performance and speed up recovery.</p>
                    
                    <h3>Benefits:</h3>
                    <ul>
                        <li>Improves Athletic Performance - Enhances muscle function</li>
                        <li>Speeds Up Recovery - Reduces muscle soreness after exercise</li>
                        <li>Prevents Injuries - Identifies and addresses problem areas</li>
                        <li>Increases Flexibility - Improves range of motion</li>
                        <li>Reduces Muscle Tension - Relieves tightness from training</li>
                    </ul>

                    <div className="booking-cta">
                        <Link to="/booking" className="cta-button">
                            Book Sports Massage
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sports;