import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import weeklyData from "../Data.json"; // Importing the JSON file
import "./lineStyle.css";

const ChartComponent = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.map((item) => item.type),
        // labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
          {
            label: "Weekly Data",
            data: data.map((item) => item.value),
            // data: [10, 60, 50, 80, 40, 30, 77],
            borderColor: "#E95F8B",
            backgroundColor: "#E95F8B", // Adjust the opacity as needed
            borderWidth: 5,
            tension: 0.5,
          },
        ],
      },
      options: {
        scales: {
          y: {
            grid: {
              display: false, // Hide grid lines for x-axis
            },
            beginAtZero: true,
            ticks: {
              display: false,
            },
          },
          x: {
            grid: {
              display: true, // Hide grid lines for x-axis
              color: "white",
            },
            ticks: {
              color: "white", // Change the color of the x-axis labels
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: "Weekly Activity",
            color: "white",
            font: {
              size: 20,
              weight: "500",
            },
          },
          tooltip: {
            backgroundColor: "rgba(16, 119, 163, 0.8)",
            titleColor: "white",
            bodyColor: "white",
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  return (
    <div className="chart-container">
      <canvas ref={chartRef} width="300" height="150"></canvas>
    </div>
  );
};

export default function LineChart() {
  return (
    <div>
      <ChartComponent data={weeklyData} />
    </div>
  );
}
