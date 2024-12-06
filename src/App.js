import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./App.css";

import cityImage from './assets/city.jpeg';
import breakfastImage from './assets/breakfast.jpg';
import trendsImage from './assets/summer.jpg'; // Represents "Booking Trends"
import AboutUs from "./navbar/AboutUs";
import Findings from "./navbar/Findings"; // Import Findings component
import "./navbar/AboutUs.css";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const insights = [
    {
      title: "Most Popular Hotel",
      content: "66.4% of guests prefer City Hotels over Resort Hotels.",
      image: cityImage, // Use the imported image
    },
    {
      title: "Guest Preferences",
      content: "78.8% of guests opt for 'Bed and Breakfast' meal plans.",
      image: breakfastImage, // Use the imported image
    },
    {
      title: "Booking Trends",
      content: "August and July are the busiest months, while January sees the lowest bookings.",
      image: trendsImage, // Use the imported image
    },
  ];

  // Data for the bar chart
  const chartData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "July",
      "August",
      "December",
    ],
    datasets: [
      {
        label: "Hottest Times to Book",
        data: [30, 35, 60, 40, 45, 70, 80, 50],
        backgroundColor: "rgba(255, 99, 132, 0.6)", // Red
      },
      {
        label: "Most Available Times",
        data: [70, 65, 40, 60, 55, 30, 20, 50],
        backgroundColor: "rgba(54, 162, 235, 0.6)", // Blue
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  const renderPage = () => {
    if (currentPage === "about-us") {
      return <AboutUs />;
    }
    if (currentPage === "findings") {
      return <Findings />;
    }
    return <div></div>;
  };

  return (
      <div className="container">
        <div className="header-container">
          <header className="header">
            <h1 className="header-title">Hotel Booking Insights</h1>
          </header>

          <nav className="navbar">
            <ul>
              <li>
                <button className="nav-button" onClick={() => setCurrentPage("home")}>Home</button>
              </li>
              <li>
                <button className="nav-button" onClick={() => setCurrentPage("about-us")}>About Us</button>
              </li>
              <li>
                <button className="nav-button" onClick={() => setCurrentPage("findings")}>Findings</button>
              </li>
            </ul>
          </nav>
        </div>


        <main className="main">
            {renderPage()}
            <h2 className="sub-header">Key Insights</h2>
            <div className="card-container">
              {insights.map((insight, index) => (
                  <div key={index} className="card">
                    <img
                        src={insight.image}
                        alt={insight.title}
                        className="card-image"
                    />
                    <div className="card-content">
                      <h3 className="card-title">{insight.title}</h3>
                      <p>{insight.content}</p>
                    </div>
                  </div>
              ))}
            </div>

            {/* Chart Section */}
            <section className="chart-section">
              <h3>Hottest Times to Book vs. Most Available Times</h3>
              <div className="chart-container">
                <Bar data={chartData} options={chartOptions}/>
              </div>
            </section>

            {/* New Section: Book A Trip Now */}
            <section className="book-trip-section">
              <h2>Book A Trip Now!</h2>
              <div className="button-group">
                <a href="https://www.expedia.com" target="_blank" rel="noopener noreferrer">
                  <button className="book-button expedia-button">Expedia</button>
                </a>
                <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer">
                  <button className="book-button booking-button">Booking.com</button>
                </a>
                <a href="https://www.hotels.com" target="_blank" rel="noopener noreferrer">
                  <button className="book-button hotels-button">Hotels.com</button>
                </a>
              </div>
            </section>
          </main>
          <footer className="footer">
            <p>Temple University & Ajman University</p>
          </footer>
        </div>
        );
        };

        export default App;
