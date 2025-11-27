import React from 'react';
import { Link } from 'react-router-dom';

function GeneralMassage() {
    return (
        <div className="massage-page">
            <div className="container">
                <Link to="/" className="back-button">← Back to Home</Link>
                <h1>General Massage</h1>
                <div className="massage-content">
                    <h2>Benefits of General Body Massage</h2>
                    <p>General (full-body) massage focuses on relaxing muscles, improving circulation, and reducing stress.</p>
                    
                    <h3>Key Benefits:</h3>
                    <ul>
                        <li>Relieves Muscle Pain & Tension - Loosens tight muscles and reduces stiffness</li>
                        <li>Improves Blood Circulation - Helps deliver more oxygen and nutrients to muscles</li>
                        <li>Reduces Stress & Anxiety - Promotes relaxation and lowers stress hormones</li>
                        <li>Boosts Mood - Encourages release of serotonin and dopamine</li>
                        <li>Enhances Sleep Quality - Helps in deeper and more restful sleep</li>
                        <li>Removes Toxins from Body - Stimulates lymphatic system</li>
                        <li>Improves Flexibility & Joint Mobility - Loosens tight joints</li>
                        <li>Strengthens Immune System - Better circulation improves immunity</li>
                        <li>Increases Energy Levels - Reduces fatigue and makes body feel refreshed</li>
                    </ul>

                    <div className="booking-cta">
                        <Link to="/booking" className="cta-button">
                            Book General Massage
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GeneralMassage;