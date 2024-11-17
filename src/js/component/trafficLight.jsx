import React, {useState} from "react";

const TrafficLight = () => {

    const [lightOn, setLightOn] = useState("red");
    const changeColor = (color) => {
        setLightOn(color);
    }

    return (
        <main>
            <div className="box-light">
                <div className={`red ${lightOn === "red" ? "light-on" : ""}`} onClick={() => changeColor("red")}></div>
                <div className={`yellow ${lightOn === "yellow" ? "light-on" : ""}`} onClick={() => changeColor("yellow")}></div>
                <div className={`green ${lightOn === "green" ? "light-on" : ""}`} onClick={() => changeColor("green")}></div>
            </div>
        </main>
    );
}

export default TrafficLight;