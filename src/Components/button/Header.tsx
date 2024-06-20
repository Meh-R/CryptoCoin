import React from "react";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-0">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#" className="flex items-center">
              <img
                src="https://www.svgrepo.com/show/484569/coin.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                CryptoCoin
              </span>
            </a>
            <div
              className=" justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col flex-wrap mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {children}
              </ul>
            </div>
            <div className="flex items-center lg:order-2">
              <button
                onClick={() => {
                  window.localStorage.removeItem("token");
                  window.localStorage.removeItem("role");
                  window.alert("Disconnected successfull");
                  window.location.href = "./";
                }}
                className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800"
              >
                Log out
              </button>
            </div>
          </div>
        </nav>
      </header>

      <script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script>
    </div>
  );
};

export default Header;
