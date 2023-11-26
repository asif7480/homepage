// import Link
import { Link } from "react-router-dom";
// import logo
// import Logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link to="/">          
          <div className="text-2xl"><span className="text-violet-700 font-bold text-4xl">B</span>lockchain <span className="text-violet-700 font-bold text-4xl">L</span>and <span className="text-violet-700 font-bold text-4xl">.</span></div>
        </Link>

        {/* buttons */}
        <div className="flex items-center gap-6">
          {/* <Link className="hover:text-violet-900 transition" to="">
            Log in
          </Link> */}
          <Link
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
            to=""
          >
            Connect Wallet
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;