const Header = ({ onTabChange }) => {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="../../public/link.png" className="h-8" alt="Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">devlinks</span>
                </a>
                <div className="border-b border-gray-200 dark:border-gray-700">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                        <li className="me-2">
                            <button
                                onClick={() => onTabChange("links")}
                                className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                            >
                                <i className="fa-solid fa-link mr-2"></i>Links
                            </button>
                        </li>
                        <li className="me-2">
                            <button
                                onClick={() => onTabChange("details")}
                                className="inline-flex items-center justify-center p-4  group"
                            >
                                <i className="fa-regular fa-address-card mr-2"></i>Detail profile
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button
                        type="button"
                        onClick={() => onTabChange("preview")}
                        className="text-purple-500 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Preview
                    </button>

                </div>
            </div>
        </nav>
    );
};

export default Header;
