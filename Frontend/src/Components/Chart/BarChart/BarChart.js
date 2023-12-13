import React, { useState, useEffect, useCallback } from "react";
import { Column } from "@ant-design/plots";

const BarChart = () => {
    const [data, setData] = useState([]);

    const asyncFetch = useCallback(() => {
        let data1 = require("../Data.json");
        if (data1 === null) {
            data1 = [{ type: "none", value: 0 }];
            setData(data1);
        }
        setData(data1);
    }, []);

    useEffect(() => {
        asyncFetch();
    }, [asyncFetch]);

    const config = {
        data,
        xField: "type",
        yField: "value",
        xAxis: {
            label: {
                autoRotate: false,
                style: {
                    fill: "black",
                    fontSize: 18,
                },
            },
        },
        scrollbar: {
            type: "horizontal",
        },
        width: 800, // Specify the desired width here
    };
    return <Column {...config} />;
};

export default BarChart;
