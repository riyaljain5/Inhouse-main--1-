
import React, { useState, useEffect } from "react";
import axios from "axios";
import PercentageRow from "../../Components/PercentageRow";

const PercentageTableNew = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/calculatePercentage");
      setData(response.data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container-fluid vh-100 vw-100 custom-table overflow-auto py-5" style={{margin:"0px", padding:"0px"}}>
      <div className="container-fluid h-80 vw-100  custom-table overflow-auto">
        <div className="container-fluid bg-light text-dark px-3 cusTable p-2 border border-3 border-danger mb-5" >
          <div className="row bg-light text-dark no-wrap fs-4 d-flex justify-content-center font-weight-bold">
            <div className="col-1 fs-4 fw-bold border border-2 px-2 py-2" style={{paddingRight:"30px"}}>Course Outcome</div>
            <div className="col-9 border  border-2 ">
              <div className="row program-outcomes d-flex justify-content-center fs-4 fw-bold Program-Outcome py-2">
                Program Outcomes (PO)
              </div>
              <div className="row px-2">
                {[...Array(12).keys()].map((index) => (
                  <div className="col px-1 fs-5 py-1" style={{ margin: "0px" }} key={index}>
                    PO{index + 1}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-2 border  border-2 py-2">
              <div className="row program-specific-outcome  d-flex justify-content-center fs-5 fw-bold">
                Program Specific Outcomes
              </div>
              <div className="row">
                {[...Array(3).keys()].map((index) => (
                  <div className="col fs-5 py-3 " key={index}>
                    PSO{index + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Entries */}
          {Array.isArray(data) &&
            data.map((item, index) => (
              <PercentageRow
                key={index}
                co={item.co}
                po={item.poPercentage}
                pso={item.psoPercentage}
              />
            ))}
        </div>
      </div>

    </div>
  );
};

export default PercentageTableNew;