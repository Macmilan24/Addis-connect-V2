import Pothole from "../components/pothole/Pothole";
import Sidebar from "../components/Sidebar/sidebar";

const PotholePage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Pothole />
    </div>
  );
};

export default PotholePage;
