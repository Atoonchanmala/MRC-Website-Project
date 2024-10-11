import Logo from "../assets/waterIcon.png";
import BackgroundImage from "../assets/mainImge.png";
import { Typography, CircularProgress } from "@mui/material";

const LoadingScreen = () => {
  return (
    <div
      className="mx-auto h-screen bg-cover"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="absolute inset-0 bg-customBlue opacity-65" />

      <div className="relative z-10">
        <div className="px-16 pt-8 flex justify-between">
          <div className="flex space-x-2">
            <img src={Logo} alt="Icon" className="w-8 h-8" />
            <Typography
              variant="body1"
              color="primary"
              className="pt-1"
              sx={{ color: "#fff", fontSize: "1.08rem", fontWeight: "bold" }}
            >
              WaterLV
            </Typography>
          </div>
        </div>

        <div className="pt-40 flex justify-center">
          <img src={Logo} alt="Icon" width="5%" height="5%" />
        </div>

        <div className="pt-64 flex flex-col items-center justify-center">
          <CircularProgress
            size={30}
            thickness={5}
            style={{ color: "#ffff" }}
          />

          <Typography variant="h6" className="text-white mt-2">
            Loading...
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default LoadingScreen;



          // ມາເຮັດຕໍ່ໃຫມ່