import { Outlet } from 'react-router-dom';
import HeaderComponent from '../views/AboutUs/HeaderComponent';
const WaterAppLayout = () => {
  return (
    <div className="mx-auto w-full h-full bg-white">
      
          {/* header */}
      <div>
        <HeaderComponent/>
      </div>
      
          <Outlet/>

    </div>
  );
};
export default WaterAppLayout;
