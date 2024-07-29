import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/users/Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-500 bg-yellow-400 px-4 py-2 uppercase sm:px-6 font-pizza">
      <Link to="/" className="tracking-widest">
        Pizza Hub
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
