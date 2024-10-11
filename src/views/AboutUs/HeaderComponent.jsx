import { Typography, Box } from "@mui/material";
import { IconButton } from "@mui/material";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import BackgroundImage from "../../assets/mainImge.png";
import WaterIcon from "../../assets/waterIcon.png";
import RainfallComponent from "./DataSection/RainfallComponent";
import WaterLevelComponent from "./DataSection/WaterLevelComponent";
import HumidityComponent from "./DataSection/HumidityComponent";

const HeaderComponent = () => {
  return (
    <div className="mx-auto">
      <div className="relative w-full h-[810px]">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
          <div className="absolute inset-0 bg-customBlue opacity-65"></div>

          <div className="relative z-10">
            <div className=" pt-10 px-40 flex justify-between space-x-2">
              <div className="flex space-x-2">
                <img src={WaterIcon} alt="IconWater" className="w-9 h-9" />
                <Typography
                  variant="body1"
                  sx={{ color: "#fff", fontSize: "1.5rem", fontWeight: "bold" }}
                  className="pt-1"
                >
                  WaterLV
                </Typography>
              </div>

              <div className="pt-3 flex space-x-16">
                <Typography
                  sx={{
                    color: "#fff",
                    cursor: "pointer",
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                  }}
                  className="hover:text-LightCyan"
                >
                  About Us
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
                    cursor: "pointer",
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                  }}
                  className="hover:text-LightCyan"
                >
                  Contact Us
                </Typography>

                <IconButton>
                  <TipsAndUpdatesIcon
                    sx={{ color: "#2962ff", fontSize: 40, marginTop: "-16px" }}
                    className="-mr-5"
                  />
                </IconButton>
                {/* ປຸ່ມປ່ຽນພາສາ */}
              </div>
            </div>

            {/* text message center */}
            <div className="mt-52 flex flex-col justify-center items-center">
              <Typography
                sx={{ color: "#fff", fontWeight: "bold", fontSize: "44px" }}
              >
                Welcome to WaterLV
              </Typography>

              <Typography
                sx={{
                  color: "#D1D1D1",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: "35%",
                }}
                className=" text-center"
              >
                We provide you with information about the amount of water and
                warnings
              </Typography>
            </div>

            {/* Data section */}
            <Box
              className="absolute left-1/2 transform -translate-x-1/2 mt-48 flex justify-center -space-x-7 "
              sx={{
                width: "80%",
                padding: "1.5rem",
                backgroundColor: "#fff",
                borderRadius: "15px",
                boxShadow: "0 0px 30px rgba(0,0,0,0.3)",
              }}
            >
              <Box sx={{ flex: " 1 1 30%", padding: "0.5rem" }}>
                <RainfallComponent />
              </Box>

              <Box sx={{ flex: "1 1 30%", padding: "0.5rem" }}>
                <WaterLevelComponent />
              </Box>

              <Box sx={{ flex: "1 1 30%", padding: "0.5rem" }}>
                <HumidityComponent />
              </Box>
            </Box>
          </div>
        </div>
      </div>

      {/* Alert warning of danger */}
      <div className="mt-56">
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};
export default HeaderComponent;

// ມາເຮັດຕໍ່
// ໃນສ່ວນຂອງ box ຍັງບໍ່ທັນລອຍຂື້ນ

// ເອົາ paper ມາແທນ Box ລອງເບິ່ງ



      // ມາເຮັດຕໍ່ໃຫມ່