import React from "react";
import VacationSpotsCard from "./components/VacationSpotsCard";
import VacationSpotsData from "./components/VacationSpotsData";

export default function App() {
  const vacationSpotsElements = VacationSpotsData.map(vsdata => {
    return (
      <VacationSpotsCard 
      key = {vsdata.id}
      {...vsdata}
      />
    )
  })
  return (
    <div className="vs-container">
      {vacationSpotsElements}
    </div>
  )
}