import React from "react";
import "./AboutUs.css";
import Uni1 from "../images/uni1.png";
import Uni2 from "../images/uni2.png";

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <h1>About Us!</h1>
            <p>
                This project tackles the challenges of sudden cancellations and low revenue faced by a hotel group in
                Portugal. The hotel group owns two different hotels one in the resort region and one in the city.
                Students from the different fields of Data Analytics, Information Systems, and Software design
                collaborated to create a thorough plan to solve the problems the management is facing and help them make
                the right decisions and actions from the data based on metrics.
            </p>
            <p>
                The IS team worked to identify the firm’s business questions and key problems, guiding the project’s
                objectives. The Data Analytics team was provided with raw data from both hotels. Exploratory data
                analytics was conducted to explore the data and understand it using descriptive data analytics and
                inferential data analytics to explore relationships in the data and relate different features of data to
                solve the problems.
            </p>
            <p>
                Moreover, the software design team developed a user-friendly website to simplify the booking process for
                customers help them choose the best timing for their visit, and customize their stay for a personalized
                experience. This project addresses several issues to ease the process of decision-making through
                actionable insights and powerful machine learning models to improve operation efficiency, support
                long-term business growth, and enhance the guest’s experience.
            </p>
            <div className="images-container">
                <img src={Uni1} alt="uni1" className="uni1Img"/>
                <img src={Uni2} alt="uni2" className="uni2Img"/>
            </div>
        </div>
    );
};

export default AboutUs;
