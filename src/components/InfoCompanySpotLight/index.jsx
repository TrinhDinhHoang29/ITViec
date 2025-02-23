

const InfoCompanySpotlight = () => {
  return (
    <>
      <div
        className="d-flex  gap-4 position-absolute InfoCompany-sm"
        style={{ top: "50%", transform: "translate(50%,-50%)",right:"0"}}
      >
        <div
          style={{ width: "150px", height: "150px", borderRadius: "5px" }}
          className="d-flex align-items-center bg-white border"
        >
          <img src="/images/GrabLogo.webp" alt="" width={"100%"} />
        </div>
      </div>
    </>
  );
};

export default InfoCompanySpotlight;