import InfoCompanySpotlight from "../InfoCompanySpotLight";
import SpotlightBadge from "../SpotlightBadge";

const SpotLight = () => {
  return (
    <>
      <div
        className="d-flex position-relative"
        style={{ backgroundColor: "white", top: "-90px", borderRadius: "10px" }}
      >
        <div>
          <img
            src="/images/GrabBusiness.webp"
            alt=""
            width={400}
            height={250}
            style={{
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          />
          <SpotlightBadge
            text={"Company Spotlight"}
            borderParent={{
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
            }}
            color={"#f7941d"}
            positionParent={{ top: "5%" }}
            styleChild={{
              position: "absolute",
              bottom: "-5px",
              width: "40px",
              height: "0",
              borderRight: "40px solid transparent",
              borderTop: "22px solid #f7941d",
              zIndex: 0,
            }}
          />
          <InfoCompanySpotlight />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default SpotLight;
