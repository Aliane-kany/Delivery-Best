import React from "react";
import Dashbordognav from "../component/Dashbordognav";
import BarChart1 from "../pages/barchart";
import AreaChart1 from "../pages/Areachart";
import Spiechart1 from "../pages/Piechart";

function Allcharts() {
  return (
    <>
      <div>
        <Dashbordognav />
        <div className="allcharts">
          <div style={{ width: "100%", height: "400px", marginTop: "2rem" }}>
            <BarChart1 />
          </div>
          <div>
            <AreaChart1 />
          </div>
          <div className="pie-chart">
            <div style={{ width: "100%", height: "400px", marginTop: "2rem" }}>
              <Spiechart1 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Allcharts;
