import { Paper, Typography } from "@mui/material";
import IconHumidity from "../../../assets/IconWater.png";
const HumidityComponent = () => {
  return (
    <div className="mt-10 mb-10 mx-8">
      <Paper
        elevation={3}
        sx={{
          background: "linear-gradient(to bottom, #97C1DF, #DBF1F9)",
          borderRadius: "15px",
        }}
        className="px-8 py-5"
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#626262",
          }}
        >
          Humidity
        </Typography>

        <div className="flex space-x-4">
          <img
            src={IconHumidity}
            alt="IconHumidity"
            className="w-16 h-16 mt-5"
          />
          <Typography>38</Typography>
        </div>

        <Typography
          sx={{
            fontSize: "0.89rem",
            color: "#757575",
          }}
          className="pt-8"
        >
          The dew point is 24* right now The Humidity hot like yesterday
        </Typography>
      </Paper>
    </div>
  );
};
export default HumidityComponent;
