import InfoCompanySpotlight from "../InfoCompanySpotLight";
import SpotlightBadge from "../SpotlightBadge";


const SpotLight = () => {
  return (
    <>
      <div
        className="d-flex position-relative"
        style={{ backgroundColor: "white", top:"-90px", borderRadius: "10px" }}
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
        <SpotlightBadge />
        <InfoCompanySpotlight />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default SpotLight;
