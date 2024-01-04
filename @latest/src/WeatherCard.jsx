/* eslint-disable react/prop-types */
const WeatherCard = ({ factor, value }) => {
    return (
      <div
        className="weather-card"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "green",
          height: "10rem",
          width: "16rem",
        }}
      >
        <h2>{factor}</h2>
        <p>{value}</p>
      </div>
    );
  };
  
  export default WeatherCard;