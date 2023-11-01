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
    number: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: "Views",
    number: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "Comment",
    number: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "Users",
    number: 139,
    pv: 198,
    amt: 589,
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
            <Bar dataKey="number" barSize={20} fill="crimson" />
            <Line type="monotone" dataKey="number" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </>
    );
  }
}
