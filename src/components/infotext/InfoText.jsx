import React from "react";

const InfoText = ({ title, info }) => {
    return (
        <div className="flex gap-1 items-start text-lg">
            <p className="min-w-max"> {title} : </p>
            <div className=" font-semibold "> {info ? info : "Unknown"} </div>
        </div>
    );
};

export default InfoText;
