import React from "react";

export default function VacationSpotsCard(props) {
    let timeToGoBG;
    let backgroundColor;

    if (props.timeToGo === "Spring") {
        timeToGoBG = "spring-Style";
        backgroundColor = "lightgreen";
    } else if (props.timeToGo === "Summer") {
        timeToGoBG = "summer-Style";
        backgroundColor = "lightskyblue";
    } else if (props.timeToGo === "Fall") {
        timeToGoBG = "fall-Style";
        backgroundColor = "orange";
    } else if (props.timeToGo === "Winter") {
        timeToGoBG = "winter-Style";
        backgroundColor = "lightslategray";
    }
    
    let dollarSign 

    if (props.price < 500) {
        dollarSign = " $ "
    } else if (props.price > 1000) {
        dollarSign = " $$$ "
    } else {
        dollarSign = " $$ "
    }

    return (
        <div className="vs-bg-card">
            <div className="vacation-info">
                <div className="vacation-photo">
                    <img src={props.vsimg} className="vsimg"/>
                </div>
                <div className="vs-info">
                    <div className="vsplace">{props.place}</div>
                    <div className="vsprice">
                        {dollarSign}
                        {props.price}
                    </div>
                    {timeToGoBG && (
                        <div className={timeToGoBG}>
                            <div className="vstime">
                                {props.timeToGo}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
 }
