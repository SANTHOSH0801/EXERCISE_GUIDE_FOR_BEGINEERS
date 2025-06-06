import React from 'react'
import '../App.css'

function Header() {
    return (
        <div className="sticky_navigation ">
            <h2>
                <img 
                    src="../src/assets/gym.gif" 
                    alt="Animated gym logo showing a person lifting weights in a bright and energetic gym environment. The text Fitness Trainer appears next to the logo." 
                />
                <span className="title">Fitness Trainer</span>
            </h2>
            <h5 className="actions">
                <a href="#0">Get A Trial</a>
                <a href="#0">Pay Now</a>
            </h5>
        </div>
    )
}

export default Header