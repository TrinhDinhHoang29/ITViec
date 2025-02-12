import { Range } from "react-range";

const RangeFilter = ({ values, handleSetValues }) => {
  const MIN = 500;
  const MAX = 10000;
  const STEP = 500;
  return (
    <>
      {/* Range Slider 2 chiều */}
      <div
        style={{ position: "relative", height: "30px" ,width:"100%"}}
      >
        <Range
          step={STEP}
          min={MIN}
          max={MAX}
          values={values}
          onChange={(newValues) =>
            newValues[1]!==newValues[0]?
            handleSetValues(newValues):false}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                height: "6px",
                width: "100%",
                borderRadius: "5px",
                background: "lightgray",
                position: "relative",
                marginTop: "15px",
              }}
            >
              {/* Phần màu xanh chỉ nằm trong phạm vi */}
              <div
                style={{
                  position: "absolute",
                  height: "6px",
                  background: "green",
                  left: `${((values[0] - MIN) / (MAX - MIN)) * 100}%`,
                  width: `${((values[1] - values[0]) / (MAX - MIN)) * 100}%`,
                }}
              />
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                height: "20px",
                width: "20px",
                backgroundColor: "#fff",
                border: "2px solid gray",
                borderRadius: "50%",
                cursor: "pointer",
                zIndex: 2, // Đảm bảo nằm trên track
                position: "relative",
                marginTop: "-20px", // Đẩy thumb lên trên track
              }}
            />
          )}
        />
      </div>
    </>
  );
};
export default RangeFilter;
