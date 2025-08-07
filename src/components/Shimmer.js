import "../../style.css";

const ShimmerCard = () => (
  <div
    style={{
      width: "250px",
      borderRadius: "16px",
      padding: "16px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      background: "#fff",
      margin: "16px",
      position: "relative",
    }}
  >
    <div
      className="shimmer-wrapper"
      style={{ height: "130px", borderRadius: "12px", marginBottom: "16px" }}
    >
      <div className="shimmer" />
    </div>
    <div
      className="shimmer-wrapper"
      style={{
        height: "22px",
        width: "60%",
        marginBottom: "10px",
        borderRadius: "6px",
      }}
    >
      <div className="shimmer" />
    </div>
    <div
      className="shimmer-wrapper"
      style={{
        height: "16px",
        width: "40%",
        marginBottom: "8px",
        borderRadius: "6px",
      }}
    >
      <div className="shimmer" />
    </div>
    <div
      className="shimmer-wrapper"
      style={{
        height: "14px",
        width: "80%",
        marginBottom: "4px",
        borderRadius: "6px",
      }}
    >
      <div className="shimmer" />
    </div>
    <div
      className="shimmer-wrapper"
      style={{ height: "14px", width: "60%", borderRadius: "6px" }}
    >
      <div className="shimmer" />
    </div>
  </div>
);

export default ShimmerCard;
