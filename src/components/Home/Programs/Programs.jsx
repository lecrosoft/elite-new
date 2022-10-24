import React from "react";
import "./Programs.css";
import ProgramsCat from "./Programs_categories";
import programsData from "../../../data/programsData";

const programCategory = programsData.map((program) => {
  return <ProgramsCat item={program} />;
});
const Programs = () => {
  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">Explore Our</span>
        <span>Programs</span>
        <span className="stroke-text">To Shape You</span>
      </div>
      {/* card */}
      <div className="programs-categories">{programCategory}</div>
    </div>
  );
};

export default Programs;
