const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        <p>{`${label}`}</p>
        {payload.map((entry, index) => (
          <p key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${
              entry.payload[entry.name]
            } (${entry.value.toFixed(2)}%)`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
