import { Link } from "react-router-dom";
export default function Button({ children }) {
  return (
    <Link to="/register">
      <button className=" bg-orange-400 text-white font-medium px-6 py-2 rounded-sm">
        {children}
      </button>
    </Link>
  );
}
