import React from "react";
import Dashbordognav from "../component/Dashbordognav";
import CustomBarChart from "../pages/barchart";
import StudentAreaChart from "../pages/Areachart";
import Studentpiechart from "../pages/Piechart";

function Allcharts() {
  return (
    <>
      <div>
        <Dashbordognav />
        <div className="allcharts">
          <div style={{ width: "100%", height: "400px", marginTop: "2rem" }}>
            <CustomBarChart />
          </div>
          <div>
            <StudentAreaChart />
          </div>
          <div className="pie-chart">
            <div style={{ width: "100%", height: "400px", marginTop: "2rem" }}>
              <Studentpiechart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Allcharts;
