import { Routes, Route } from "react-router-dom";
import History from "./history";
import Mission from "./mission";
import Leadership from "./leadership";

const About = () => {
  return (
    <Routes>
      <Route path="history" element={<History />} />
      <Route path="mission" element={<Mission />} />
      <Route path="leadership" element={<Leadership />} />
    </Routes>
  );
};

export default About;
