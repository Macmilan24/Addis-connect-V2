import Card from "../../landing_components/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cardInfo = [
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
  {
    title: "Emergency management",
    des: "Empowerinig community voices for impactful local changes through increased particpation",
    icon: <FontAwesomeIcon icon="exclamation-triangle" />,
  },
];

export default function UseCase({ onHover, onLeave }) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="w-full px-28 py-8 flex flex-wrap absolute z-10 bg-white"
    >
      {cardInfo.map((card) => (
        <Card cardInfo={card} />
      ))}
    </div>
  );
}
