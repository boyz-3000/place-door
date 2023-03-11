import React from "react";
import Card from "../../components/card/Card";
import "./Jobs.css";
import CardData from "./CardData";
import TopBar from "../../components/top-bar/TopBar";

function Jobs() {
  return (
    <>
    <TopBar/>
    <div className="container text-center dashboard">
      <div className="row">
        {CardData.map((x) => (
          <div className="col-lg-4 col-md-6 col-sm-12 card-item">
            <Card
              name={x.name}
              email={x.email}
              posting={x.posting}
              lastDate={x.lastDate}
              mode={x.mode}
              location={x.location}
            />
          </div>
        ))}
      </div>
    </div>
    </>

  );
}

export default Jobs;
