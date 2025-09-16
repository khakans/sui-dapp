import { Link } from "react-router-dom";
import Dapp from "./Dapp";

function Header() {
  return (
    <nav className="py-4 flex justify-between items-center">
      <Link to="/">
        <p className="font-bold text-2xl">MY LOGO</p>
      </Link>
      <div className="flex gap-4">
        <Dapp />
      </div>
    </nav>
  );
}

export default Header;
