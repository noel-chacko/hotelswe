import React from "react";
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

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const HotelInsights = () => {
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

  return (
    <div className="container">
      <header className="header">
        <h1 className="header-title">Hotel Booking Insights</h1>
      </header>
      <main className="main">
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
            <Bar key={Math.random()} data={chartData} options={chartOptions} />
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>© 2024 Hotel Insights. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HotelInsights;
