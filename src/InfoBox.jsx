import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
export default function InfoBox({ info }) {
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <p>Temperature = {info.temperature} °C</p>
              <p>Minimum Temp = {info.tempMin} °C</p>
              <p>Maximum Temp = {info.tempMax} °C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Feels Like = {info.feelsLike} °C</p>
              <p>Weather = {info.weather}</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
      ;
    </div>
  );
}
