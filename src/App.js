import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slider from "./components/Slider.jsx";
import data from "./data/data.json";
import Offers from "./components/Offers.jsx";
import Heading from "./components/Heading.jsx";
import StarProduct from "./components/StarProduct.jsx";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.jsx";
import HotAccessories from "./components/HotAccessories.jsx";
import ProductReviews from "./components/ProductReviews.jsx";
import Videos from "./components/Videos.jsx";
import Banner from "./components/Banner.jsx";
import Footer from "./components/Footer.jsx";
import NavOptions from "./components/NavOptions.jsx";
function App() {
  return (
    <BrowserRouter>
      <PreNavbar />
      <Navbar />
      <Routes>
        <Route
          path="/miPhones"
          element={<NavOptions mainData={data.miPhones} />}
        />
        <Route
          path="/redmiphones"
          element={<NavOptions mainData={data.redmiPhones} />}
        />
        <Route path="/tv" element={<NavOptions mainData={data.tv} />} />
        <Route
          path="/laptops"
          element={<NavOptions mainData={data.laptop} />}
        />
        <Route
          path="/lifestyle"
          element={<NavOptions mainData={data.fitnessAndLifeStyle} />}
        />
        <Route path="/home" element={<NavOptions mainData={data.home} />} />
        <Route path="/audio" element={<NavOptions mainData={data.audio} />} />
        <Route
          path="/accessories"
          element={<NavOptions mainData={data.accessories} />}
        />
      </Routes>
      {/* <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv = {data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories}/> */}
      <Slider start={data.banner.start} />
      <Offers offers={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        <Route
          exact
          path="/music"
          element={
            <HotAccessories
              main={data.hotAccessories.music}
              cover={data.hotAccessoriesCover.music}
            />
          }
        ></Route>
        <Route
          exact
          path="/smartDevices"
          element={
            <HotAccessories
              main={data.hotAccessories.smartDevice}
              cover={data.hotAccessoriesCover.smartDevice}
            />
          }
        ></Route>
        <Route
          exact
          path="/home"
          element={
            <HotAccessories
              main={data.hotAccessories.home}
              cover={data.hotAccessoriesCover.home}
            />
          }
        ></Route>
        <Route
          exact
          path="/lifestyle"
          element={
            <HotAccessories
              main={data.hotAccessories.lifeStyle}
              cover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        ></Route>
        <Route
          exact
          path="/mobileAccessories"
          element={
            <HotAccessories
              main={data.hotAccessories.mobileAccessories}
              cover={data.hotAccessoriesCover.mobileAccessories}
            />
          }
        ></Route>
      </Routes>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews} />
      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />
      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner} />
      <Footer footer={data.footer} />
    </BrowserRouter>
  );
}

export default App;
