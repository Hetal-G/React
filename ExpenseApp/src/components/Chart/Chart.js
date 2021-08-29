import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const datapointsValues = props.datapoints.map((datapoint) => datapoint.value);
  const maxDatapointValue = Math.max(...datapointsValues);

  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          label={datapoint.label}
          maxValue={maxDatapointValue}
        />
      ))}
    </div>
  );
};

export default Chart;
