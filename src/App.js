import React from "react";
import { Bar } from "react-chartjs-2";
import './App.css';

const HotelInsights = () => {
  const insights = [
    {
      title: "Most Popular Hotel",
      content: "66.4% of guests prefer City Hotels over Resort Hotels.",
      image: "https://via.placeholder.com/300x200?text=City+Hotel",
    },
    {
      title: "Guest Preferences",
      content: "78.8% of guests opt for 'Bed and Breakfast' meal plans.",
      image: "https://via.placeholder.com/300x200?text=Breakfast",
    },
    {
      title: "Booking Trends",
      content:
        "August and July are the busiest months, while January sees the lowest bookings.",
      image: "https://via.placeholder.com/300x200?text=Booking+Trends",
    },
    {
      title: "Guest Origins",
      content: "Most guests come from Portugal, followed by the UK and France.",
      image: "https://via.placeholder.com/300x200?text=Portugal",
    },
    {
      title: "Cancellations",
      content:
        "37.04% of bookings are canceled. City Hotels face more cancellations (30%) than Resort Hotels (23%).",
      image: "https://via.placeholder.com/300x200?text=Cancellations",
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
            <Bar data={chartData} options={chartOptions} />
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>Temple University and Ajman University</p>
      </footer>
    </div>
  );
};

export default HotelInsights;
