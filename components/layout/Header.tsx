import { faBell, faCircle } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { BiSolidUserCircle } from "react-icons/bi";
import { GoCircle } from "react-icons/go";

const Header: React.FC = () => {
    return (
        <div className="text-gray-300">
            <div className="flex justify-between items-center gap-6">
                <Link href="/">
                    <Image
                        src={"/assets/movies/logo.png"}
                        width={100}
                        height={100}
                        alt="Logo"
                    />
                </Link>
                <div className="hidden md:flex gap-6 px-3">
                    <Link href="#" className="nav-link">Match of The Day</Link>
                    <Link href="#" className="nav-link">Browse All</Link>
                    <Link href="#" className="nav-link">My Library</Link>
                </div>
                <form action="#" className="hidden md:flex rounded-sm border border-gray-900 text-gray-500 items-center px-3 py-1 flex-grow max-w-full">
                    <FontAwesomeIcon icon={faSearch} size="sm" />
                    <input type="search" placeholder="Search..." className="bg-transparent outline-none ml-1 w-full" />
                </form>
                <div className="flex gap-2">
                    <Link href="#">
                        <span className="relative inline">
                            <GoCircle size={28} className="text-white" />
                            <FontAwesomeIcon icon={faBell} size="xs" className="absolute bottom-[9px] left-[7px] text-white" />
                        </span>
                    </Link>
                    <Link href="#"><BiSolidUserCircle size={28} color="white" /></Link>
                </div>
            </div>
            <form action="#" className="md:hidden flex rounded-sm border border-gray-900 text-gray-500 items-center px-3 py-1 flex-grow max-w-full">
                <FontAwesomeIcon icon={faSearch} size="sm" />
                <input type="search" placeholder="Search..." className="bg-transparent outline-none ml-1 w-full" />
            </form>
        </div>
    )
}

export default Header;