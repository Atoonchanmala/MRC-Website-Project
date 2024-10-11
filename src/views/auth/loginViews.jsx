import { Typography, Checkbox, FormControlLabel, Button } from "@mui/material";
import mainImage from "../../assets/mainImge.png";
import Logo from "../../assets/waterIcon.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Snackbar, Alert} from '@mui/material';

const LoginViews = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe ,setRememberMe] = useState(false);

  const navigate = useNavigate();

                // function handle login
  const handleLogin = async() =>{
    const loginData = {
      email: email,
      password: password
    }
    try{
      const response = await fetch(`API Login`,{
        method:"POST",
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(loginData)
      });
      if(response.ok){
        const result = await response.json();

        const {token} = result;
        localStorage.setItem('authToken', token);

              // save email name
        localStorage.setItem('Email', email);

        if(rememberMe){
          localStorage.setItem("Remember Me", JSON.stringify(result));
        }
        navigate("/mekongriver//aboutUs")
      }
      else{
        console.error("Not filed login error");
        
      }
      setEmail("");
      setPassword("");
    }
    catch(error){
      console.error("Message error: ", error);
    }
  } 

  return (
    <div
      className="mx-auto h-screen bg-cover"
      style={{ backgroundImage: `url(${mainImage})` }}
    >
      <div className="absolute inset-0 bg-customBlue opacity-65"></div>

      <div className="relative z-10">
        {/* Header Menu bar */}
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

          <div>
            <Typography
              variant="body1"
              sx={{ color: "#fff", fontSize: "1.08rem", fontWeight: "bold" }}
            >
              Sign Up
            </Typography>
          </div>
        </div>

        {/* Container component */}
        <div className="mt-16 flex justify-center">
          <div className="flex flex-col items-center">
            {" "}
            {/* Center items horizontally */}
            <img src={Logo} alt="LogoWater" width="60px" className="mb-6" />
            <Typography variant="h4" sx={{ color: "#fff", fontWeight: "bold" }}>
              Sign in
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#DAD7D7", fontSize: "1.03rem" }}
              className="pt-3"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
            {/* Login form */}
            <form className="space-y-4">
              <div className="flex flex-col">
                <input value={email} onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Email"
                  className="mt-8 px-3 py-2 w-72 rounded-lg focus:outline-none focus:ring-2 focus:ring-LightCyan"
                />

                <input  value={password} onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  className="mt-5 px-3 py-2 w-72 rounded-lg focus:outline-none focus:ring-2 focus:ring-LightCyan"
                />

                <FormControlLabel
                  control={<Checkbox style={{ color: "#e0e0e0" }}  onChange={(e) => setRememberMe(e.target.checked)}/>}
                  label="Remember me"
                  style={{ color: "#e0e0e0" }}
                  className="mt-5"
                />

                <Button  onClick={handleLogin}
                  variant="contained"
                  sx={{
                    color: "#fff",
                    backgroundColor: "#5AC8D1",
                    fontWeight: "bold",
                    marginTop: "15px",
                    borderRadius: "8px",
                    textTransform: "none",
                    fontSize: "1.2rem",
                  }}
                >
                  Log in
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginViews;

      // ເຮັດຕໍ່ການປັບຂະໜາດຕົວໜັງສືໃນ placeSolder ໃນ input ໃຫ້ມີຂະໜາດນ້ອຍລົງ

