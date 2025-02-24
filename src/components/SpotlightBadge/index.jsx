import React from "react";

const SpotlightBadge = ({text,color,positionParent,borderParent,styleChild}) => {
  return (
   <div style={{position:"absolute",...positionParent}}>
     <div style={{ position: "relative", display: "inline-block" }}>
      <div
        style={{
          backgroundColor: color,
          color: "white",
          fontWeight: "bold",
          // borderRadius: "5px",
          padding: "6px 12px",
          position: "relative",
          zIndex: 1,
          fontSize:"14px",
          ...borderParent
        }}
      >
        {text}
      </div>
      {/* Mũi tên xuống */}
      <div
        style={{
          ...styleChild
        }}
      ></div>
    </div>
   </div>
  );
};

export default SpotlightBadge;
