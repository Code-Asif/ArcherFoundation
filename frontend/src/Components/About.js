import React from 'react';
import './All_Style.css';
import founderImage from '../Assets/Founder.png';

const About = () => {
    return (
        <div className="about-container">
            <br /><br /><br /><br />
            <div className="about-header">
                <img src={founderImage} alt="Founder" className="founder-image" />
                <h1>About Our Founder</h1>
            </div>
            <div className="about-content">
                <h2>Md. Amzad</h2>
                <p>
                    John Doe is the visionary behind our computer teaching institute. With over 10 years of experience in the tech industry, John has a deep passion for technology and education. He holds a Master's degree in Computer Science from a prestigious university and has worked with leading tech companies around the world.
                </p>
                <p>
                    Under John's leadership, our institute has grown from a small classroom to a renowned educational hub. His dedication to fostering a learning environment that is both innovative and inclusive has helped countless students achieve their dreams in the tech industry.
                </p>
                <p>
                    John's philosophy is simple: provide students with the tools and knowledge they need to succeed in an ever-evolving digital world. He believes in hands-on learning, real-world experience, and the power of technology to transform lives.
                </p>
            </div>
        </div>
    );
}

export default About;
