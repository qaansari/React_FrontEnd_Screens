import React, { Component } from "react";
import CanvasJSReact from "../CanvasJs/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class TimeSeriesChart extends Component {
  constructor() {
    super();
    this.generateDataPoints = this.generateDataPoints.bind(this);
  }

  generateDataPoints(noOfDps) {
    var xVal = 1,
      yVal = 100;
    var dps = [];
    for (var i = 0; i < noOfDps; i++) {
      yVal = yVal + Math.round(5 + Math.random() * (-5 - 5));
      dps.push({ x: xVal, y: yVal });
      xVal++;
    }
    return dps;
  }

  render() {
    const options = {
      theme: "dark1", // "light1", "dark1", "dark2"
      animationEnabled: true,
      zoomEnabled: true,
      title: {
        text: "",
      },
      data: [
        {
          type: "area",
          dataPoints: this.generateDataPoints(500),
        },
      ],
    };

    return (
      <div>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}
export default TimeSeriesChart;
