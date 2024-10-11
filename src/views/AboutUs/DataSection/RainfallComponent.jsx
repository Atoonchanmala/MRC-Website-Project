import { Paper, Typography } from "@mui/material";
import IconRainfall from "../../../assets/IconRain.png";
const RainfallComponent = () => {
  return (
    <div className="mt-10 mb-10 mx-8">
      <Paper
        elevation={3}
        sx={{
          background: "linear-gradient(to bottom, #97C1DF, #DBF1F9)",
          borderRadius: "15px",
        }}
        className="px-8 py-8 "
      >
        <Typography sx={{
             fontSize:"20px",
             fontWeight: "bold", 
             color:"#616161" }} 
             className="mt-2">
          Rainfall
        </Typography>
        <div className="flex space-x-4">
          <img src={IconRainfall} alt="IconRain" className="w-16 h-16 mt-5" />
          <Typography>48</Typography>
        </div>

        <Typography sx={{fontSize:"0.89rem", color:"#757575"}} className="pt-8">The dew point is 24* right now</Typography>
        
      </Paper>
    </div>
  );
};
export default RainfallComponent;


            // ຍັງມີການເຮັດເປີເຊັນໃນສະແດງຜົນສະຖິຕິ