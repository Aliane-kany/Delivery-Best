import React, { PureComponent } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Dashbordognav from "../component/Dashbordognav";

const data = [
  {
    name: "Post",
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: "Views",
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "Comment",
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
];

export default class CustomBarChart extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/composed-chart-of-same-data-i67zd";

  render() {
    return (
      <>
        <Dashbordognav />
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={100}
            height={200}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </>
    );
  }
}
