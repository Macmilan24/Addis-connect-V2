import Card from "../../landing_components/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const platInfo = [
  {
    title: "Citizen Engagement",
    des: "Empowerinig community voices for impactful local changes through increased particpation",
    icon: <FontAwesomeIcon icon="users" />,
  },
  {
    title: "European Projects",
    des: "Creating a vibrant and innovative work Culture by fostering collaborating among employees",
    icon: <FontAwesomeIcon icon="euro-sign" />,
  },
  {
    title: "Social housing",
    des: "Empowerinig community voices for impactful local changes through increased particpation",
    icon: <FontAwesomeIcon icon="home" />,
  },
];
const toolInfo = [
  {
    title: "Citizen Engagement",
    des: "Empowerinig community voices for impactful local changes through increased particpation",
    icon: <FontAwesomeIcon icon="users" />,
  },
  {
    title: "European Projects",
    des: "Creating a vibrant and innovative work Culture by fostering collaborating among employees",
    icon: <FontAwesomeIcon icon="euro-sign" />,
  },
  {
    title: "Social housing",
    des: "Empowerinig community voices for impactful local changes through increased particpation",
    icon: <FontAwesomeIcon icon="home" />,
  },
  {
    title: "Employee Engagement",
    des: "Creating a vibrant and innovative work Culture by fostering collaborating among employees",
    icon: <FontAwesomeIcon icon="briefcase" />,
  },
  {
    title: "Public transportation",
    des: "Empowerinig community voices for impactful local changes through increased particpation",
    icon: <FontAwesomeIcon icon="train" />,
  },
  {
    title: "Open innovation",
    des: "Empowerinig community voices for impactful local changes through increased particpation",
    icon: <FontAwesomeIcon icon="lightbulb" />,
  },
];
const featureInfo = [
  {
    title: "Citizen Engagement",
    des: "Empowerinig community voices for impactful local changes through increased particpation",
    icon: <FontAwesomeIcon icon="users" />,
  },
  {
    title: "European Projects",
    des: "Creating a vibrant and innovative work Culture by fostering collaborating among employees",
    icon: <FontAwesomeIcon icon="euro-sign" />,
  },
  {
    title: "Social housing",
    des: "Empowerinig community voices for impactful local changes through increased particpation",
    icon: <FontAwesomeIcon icon="home" />,
  },
  {
    title: "Employee Engagement",
    des: "Creating a vibrant and innovative work Culture by fostering collaborating among employees",
    icon: <FontAwesomeIcon icon="briefcase" />,
  },
  {
    title: "Public transportation",
    des: "Empowerinig community voices for impactful local changes through increased particpation",
    icon: <FontAwesomeIcon icon="train" />,
  },
  {
    title: "Open innovation",
    des: "Empowerinig community voices for impactful local changes through increased particpation",
    icon: <FontAwesomeIcon icon="lightbulb" />,
  },
];

export default function Product({ onHover, onLeave }) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="w-full px-28 py-2 flex absolute z-10 bg-white"
    >
      <div className=" basis-1/4 h-30 flex flex-col items-start pr-8">
        <div className=" flex flex-col w-full">
          <h3 className=" uppercase ml-2 text-base font-medium leading-3 mb-9">
            Platforms
          </h3>
          <hr className=" mb-9 border-y-yellow-400 pr-4" />
        </div>
        {platInfo.map((card) => (
          <Card cardInfo={card} className="mb-11" />
        ))}
      </div>

      <div className=" h-50 w-px bg-yellow-200  mr-8"></div>

      <div className=" basis-3/4 flex flex-col">
        <div className=" h-30 flex flex-col items-start pr-8">
          <div className=" flex flex-col w-full">
            <h3 className=" uppercase ml-2 text-base font-medium leading-3 mb-9">
              Engagement Tools
            </h3>
            <hr className=" mb-9 border-y-yellow-400 pr-4" />
          </div>
          <div className="flex flex-wrap">
            {toolInfo.map((card) => (
              <Card cardInfo={card} />
            ))}
          </div>
        </div>
        <div className=" h-30 flex flex-col items-start pr-8">
          <div className=" flex flex-col w-full">
            <h3 className=" uppercase ml-2 text-base font-medium leading-3 mb-9">
              Engagement Features
            </h3>
            <hr className=" mb-9 border-y-yellow-400 pr-4" />
          </div>
          <div className="flex flex-wrap">
            {featureInfo.map((card) => (
              <Card cardInfo={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
