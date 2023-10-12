import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';

const BarChart = () => {
  let data1 = require("./Data.json");
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    if (data1===null){
      data1=[{"type":"none","value":0}]
      setData(data1)
    }
    setData(data1)
  };

    const config = {
      data,
      xField: 'type',
      yField: 'value',
      xAxis: {
        label: {
          autoRotate: false,
          style: {
            fill:'black',
            fontSize:18,
          },
        },
      },
      scrollbar: {
        type: 'horizontal',
      },
      width: 800, // Specify the desired width here
    };
    return <Column {...config} />;
};

export default BarChart;