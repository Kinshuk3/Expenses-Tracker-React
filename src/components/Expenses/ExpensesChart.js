import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 }
  ];

  for(let expense of props.expenses){
    let expensesMonth = expense.date.getMonth() // so jan is 0 as it starts at 0
    chartDataPoints[expensesMonth].value += expense.amount // add the value of the particular month so whatever month has expense gets reflected
  }
  return <Chart dataPoints={chartDataPoints}/>;
};

export default ExpensesChart;
