import React from "react";

const SpotlightBadge = () => {
  return (
   <div style={{position:"absolute",top:"5%"}}>
     <div style={{ position: "relative", display: "inline-block" }}>
      <div
        style={{
          backgroundColor: "#f7941d ",
          color: "white",
          fontWeight: "bold",
          // borderRadius: "5px",
          padding: "6px 12px",
          position: "relative",
          zIndex: 1,
          fontSize:"18px",
          borderTopRightRadius:"5px",
          borderBottomRightRadius:"5px"
        }}
      >
        Company Spotlight
      </div>
      {/* Mũi tên xuống */}
      <div
        style={{
          position: "absolute",
          bottom: "-5px",
          width: "40px",
          height: "0",
          borderRight: "40px solid transparent",
          borderTop: "22px solid #f7941d",
          zIndex: 0
        }}
      ></div>
    </div>
   </div>
  );
};

export default SpotlightBadge;
