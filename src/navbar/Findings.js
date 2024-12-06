import React from "react";
import "./Findings.css";
import plot1 from "../images/plot1.png";
import plot2 from "../images/plot2.png";
import plot3 from "../images/plot3.png";
import plot4 from "../images/plot4.png";
import plot5 from "../images/plot5.png";
import plot6 from "../images/plot6.png";
import plot9 from "../images/plot9.png";
import plot18 from "../images/plot18.png";
import plot2nd3 from "../images/plot2nd3.png";
import kf1 from "../images/kf1.png";
import kf2 from "../images/kf2.png";
import kf3 from "../images/kf3.png";
import dashboard1 from "../images/dashboard1.png";








const Findings = () => {

    const ChartSection = ({ title, imageSrc, altText, description }) => {
        return (
            <div className="chart-section">
                <h2>{title}</h2>
                <img src={imageSrc} alt={altText} className="chart-image" />
                <p>{description}</p>
            </div>
        );
    };

    const ChartSection2 = ({ title, imageSrc, altText, description }) => {
        return (
            <div className="chart-section">
                <img src={imageSrc} alt={altText} className="chart-image2" />
            </div>
        );
    };

    return (
        <div className="findings-container">
            <h1>Findings</h1>

            {/* Chart 9*/}
            <ChartSection
                title="Countries & Regions"
                imageSrc={plot9}
                altText="plot9"
                description="From this map, we can see that the majority of visitors—nearly 18k—come from Portugal, followed by 8k from the United Kingdom, followed by France, Spain, Germany, and other European nations. With the help of this map, management could increase promotions to keep existing European customers and investigate why other nationalities aren't coming to stay at the hotels."
            />


            {/* Chart 2 */}
            <ChartSection
                title="Cancellations"
                imageSrc={plot2}
                altText="plot2"
                description="We infer 37.04% of customers cancel their reservations, while 62.9% do not! The hotel is affected by last-minute cancellations. Hotels need to research the cause of this cancellation rate. Furthermore, the purpose of this project is to help management determine whether or not a customer will cancel, so they don't waste space!"
            />

            {/* Chart 3 */}
            <ChartSection
                title="City vs Hotel Cancellations"
                imageSrc={plot3}
                altText="plot3"
                description="City hotels are seeing more cancellations than the Resort hotel. Despite the cancellations, the City Hotel receives more tourists than the Resort Hotel. Meaning, despite the fact that the City Hotel has a higher number of cancellations! There are fewer tourists that choose resort hotel.

"
            />

            {/* Chart 4 */}
            <ChartSection
                title="Months Activity"
                imageSrc={plot4}
                altText="plot4"
                description= "Busiest month for both hotels is August and July. November & December have similar figures, which may aid management in coming up with similar concepts when doing offers in these months. January has the fewest visitors to both hotels. Management should focus on January"
            />

            {/* Chart 5*/}
            <ChartSection
                title="Month Reservations"
                imageSrc={plot5}
                altText="plot5"
                description="Majority of city hotel reservations are made in July and August. July is the least reserved in month for resort hotels. March is the busiest month for resort hotel reservations. This may inspire the company to run specials in similar months, such as January and February in city hotels and April and May in resort hotels. In addition, the corporation may need to offer some enticing marketing in July for resort hotels so that people choose this month to make reservations, and in December for city hotels."
            />

            {/* Chart 6*/}
            <ChartSection
                title="Reservations Timing"
                imageSrc={plot6}
                altText="plot6"
description="The lead time is clearly skewed to the right. We can observe that the mode is from 0 to 1, and there is also a significant increase between the bins 296-297, which is intriguing! It signifies that a good number of people make their reservations before the 297th day. Additionally, this plot demonstrates that the majority of people do not arrange their accommodations well in advance of their arrival."
            />

            {/* Chart 1 */}
            <ChartSection
                title="Resort vs City Reservations"
                imageSrc={plot1}
                altText="plot1"
                description="33.6% of people have made reservations at resort hotels, while 66.4% of people
        have made reservations at city hotels. Hotel owners might invest in city hotels
        more now for more revenue. However, only 33.6% of visitors booking reservations
        at resort hotels raises concern. Owners need to invest to make resort hotels more
        appealing!"
            />

            {/* Chart 18*/}
            <ChartSection
                title="City vs Resort Spendings"
                imageSrc={plot18}
                altText="plot18"
                description= "It may be deduced that resort hotels are significantly more skewed to the right, implying that people spend more money on a daily basis in resort hotels than in city hotels."
            />

            {/* Chart 2nd3*/}
            <ChartSection
                title="Res Per Month"
                imageSrc={plot2nd3}
                altText="plot2nd3"
description="This graph depicts the most popular sort of customer at each hotel and how much they spend on a daily basis. Transient customers from both hotels spend the most money. Contract customers, as well as group and transient parties, tend to spend significantly more at city hotels. This means that resort hotels are substantially more affordable for contract, group, and transient-party customers. It means that transient customers produce a greatest profit."
            />

            {/* Dashboard*/}
            <ChartSection2
                imageSrc={dashboard1}
                altText="dashboard1"
            />

            {/* KeyFinding*/}
            <ChartSection2
                imageSrc={kf1}
                altText="kf1"
            />

            {/* KeyFinding*/}
            <ChartSection2
                imageSrc={kf2}
                altText="kf2"
            />

            {/* KeyFinding*/}
            <ChartSection2
                imageSrc={kf3}
                altText="kf3"
            />




        </div>
    );
};

export default Findings;