import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import ScrollTransitionTop from "./component/scrolltransition";
import { I18nextProvider } from "react-i18next";
import i18n from "./languages/i18next";
import WaterRoutes from "./routes/water.route";
// import LoadingScreen from "./component/LoadingScreen";
const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <ScrollTransitionTop>
          <Suspense
            fallback={<h1>Loading..</h1>}
          >
            <WaterRoutes/>

          </Suspense>
        </ScrollTransitionTop>
      </BrowserRouter>
    </I18nextProvider>
  );
};
export default App;


        // ເຮົາບໍ່ຈຳເປັນຕ້ອງເຮັດຫນ້າ loading
