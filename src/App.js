import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Portofolios from "./pages/Portofolios";
import FrameComponent from "./pages/FrameComponent";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Sevices from "./pages/Sevices";
import OurTeams from "./pages/OurTeams";
import ContactUs from "./pages/ContactUs";
import PortofoliosDetails from "./pages/PortofoliosDetails";
import MaskGroup from "./pages/MaskGroup";
import MaskGroup1 from "./pages/MaskGroup1";
import Label from "./pages/Label";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame-1":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/sevices":
        title = "";
        metaDescription = "";
        break;
      case "/our-teams":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/portofolios-details":
        title = "";
        metaDescription = "";
        break;
      case "/mask-group":
        title = "";
        metaDescription = "";
        break;
      case "/mask-group1":
        title = "";
        metaDescription = "";
        break;
      case "/label":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Portofolios />} />

      <Route path="/frame-1" element={<FrameComponent />} />

      <Route path="/home" element={<Home />} />

      <Route path="/about-us" element={<AboutUs />} />

      <Route path="/sevices" element={<Sevices />} />

      <Route path="/our-teams" element={<OurTeams />} />

      <Route path="/contact-us" element={<ContactUs />} />

      <Route path="/portofolios-details" element={<PortofoliosDetails />} />

      <Route path="/mask-group" element={<MaskGroup />} />

      <Route path="/mask-group1" element={<MaskGroup1 />} />

      <Route path="/label" element={<Label />} />
    </Routes>
  );
}
export default App;
