import { Paper, Typography } from "@mui/material";
import IconWater from "../../../assets/IconLevel.png";
const WaterLevelComponent = () => {
  return (
    <div className="mt-10 mb-10 mx-8">
      <Paper
        elevation={3}
        className="px-8 py-4"
        sx={{
          background: "linear-gradient(to bottom, #97C1DF, #DBF1F9)",
          borderRadius: "15px",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#616161",
          }}
          className="pt-2"
        >
          Water Level
        </Typography>

        <div className="flex space-x-4">
          <img src={IconWater} alt="IconWater" className="w-16 h-16 mt-5" />
          <Typography>42</Typography>
        </div>

        <Typography
          sx={{
            fontSize: "0.89rem",
            color: "#757575",
          }}
          className="pt-8"
        >
          The dew point is 24* right now warning high pressure water
        </Typography>
      </Paper>
    </div>
  );
};
export default WaterLevelComponent;
