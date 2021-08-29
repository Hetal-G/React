import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  const datapoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "July", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (var i = 0; i < props.items.length; i++) {
    const month = props.items[i].date.getMonth();
    datapoints[month].value += props.items[i].amount;
  }
  return (
    <div>
      <Chart datapoints={datapoints} />
    </div>
  );
};

export default ExpenseChart;
