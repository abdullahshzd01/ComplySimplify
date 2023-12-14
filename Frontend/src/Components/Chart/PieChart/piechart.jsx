import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import weeklyData from "../Data.json";
import "./pieStyle.css";

const ChartComponent = ({ data }) => {
    const chartRef = useRef(null);
    const originalSizesRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext("2d");
        const chart = new Chart(ctx, {
            type: "pie",
            data: {
                labels: data.map((item) => item.day),
                datasets: [
                    {
                        label: "Weekly Data",
                        data: data.map((item) => item.value),
                        backgroundColor: [
                            "#13678A",
                            "#322955",
                            "#012030",
                            "#45C4B0",
                            "#314955",
                            "#E95F8B",
                            "#6C95A0",
                        ],
                        borderWidth: 2,
                    },
                ],
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: "Activity",
                        color: "Black",
                        font: {
                            size: 20,
                            weight: "bold",
                        },
                    },
                    tooltip: {
                        backgroundColor: "rgba(16, 119, 163, 0.8)",
                        titleColor: "white",
                        bodyColor: "white",
                    },
                    legend: {
                        display: true,
                        position: "bottom",
                    },
                    backgroundColor: "rgba(250, 250, 250)",
                },
                onHover: (event, elements) => {
                    if (elements && elements.length) {
                        const segment = elements[0];
                        if (!originalSizesRef.current) {
                            originalSizesRef.current =
                                chart.data.datasets[0].data.slice();
                        }
                        const newData = originalSizesRef.current.map(
                            (size, index) => {
                                return index === segment.index
                                    ? size * 1.2
                                    : size * 0.8;
                            }
                        );
                        chart.data.datasets[0].data = newData;
                        chart.update();
                    }
                },
                onLeave: () => {
                    if (originalSizesRef.current) {
                        chart.data.datasets[0].data = originalSizesRef.current;
                        chart.update();
                        originalSizesRef.current = null;
                    }
                },
            },
        });

        return () => {
            chart.destroy();
        };
    }, [data]);

    return (
        <div className="PieChart">
            <canvas ref={chartRef} width="300" height="150"></canvas>
        </div>
    );
};

export default function PieChart() {
    return (
        <div>
            <ChartComponent data={weeklyData} />
        </div>
    );
}
