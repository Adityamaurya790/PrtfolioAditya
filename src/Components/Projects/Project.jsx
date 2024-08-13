import React from "react";
import bookStore from "../Assets/bookstore.png";
import shoes from "../Assets/shoes.png";
import Weather from "../Assets/weather.png";

const Project = () => {
  const tagClasses =
    "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 border border-purple-500 ";
  const cardClass =
    "max-w-xs rounded-xl overflow-hidden shadow-lg border m-4 border-purple-500 md:max-w-50 md:p-1 sm:max-w-xs sm:p-2 hover:-translate-y-1 transition-all duration-300 ease-in-out hover:shadow-xl";

  return (
    <>
      <div className="bg-gray-900 text-center text-white ">
        <h1 className="text-4xl font-semibold p-7 md:text-3xl ">Project</h1>
        <p className="text-lg max-w-3xl mx-auto text-secondary md:text-base">
          My work experience as a software engineer and working on different
          companies and projects.
        </p>
      </div>

      <div className="flex flex-wrap justify-center bg-gray-900 ">
        <div className={cardClass}>
          <img className="w-full p-2" src={bookStore} alt="Book Store" />
          <div className="px-4 py-2">
            <div className="font-bold text-xl text-white mb-2">Book Store</div>
            <p className="text-white text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-4 pt-2 pb-2">
            <span className={tagClasses}>React Js</span>
            <span className={tagClasses}>Mongo DB</span>
            <span className={tagClasses}>Node JS</span>
            <span className={tagClasses}>Express</span>
          </div>

          <div className="px-4 pt-2 pb-2">
            <a
              href="https://github.com/Adityamaurya790/weatherApp"
              className={tagClasses}
            >
              Souce Code
            </a>
            <a
              href="https://weather-app-nu-sage-84.vercel.app/"
              className={tagClasses}
            >
              View
            </a>
          </div>
        </div>

        <div className={cardClass}>
          <img className="w-full p-2" src={shoes} alt="Shoe Commerce" />
          <div className="px-4 py-2">
            <div className="font-bold text-xl text-white mb-2">
              Shoe Commerce
            </div>
            <p className="text-white text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-4 pt-2 pb-2">
            <span className={tagClasses}>React Js</span>
            <span className={tagClasses}>Node JS</span>
            <span className={tagClasses}>Express</span>
          </div>
          <div className="px-4 pt-2 pb-2">
            <a
              href="https://github.com/Adityamaurya790/weatherApp"
              className={tagClasses}
            >
              Souce Code
            </a>
            <a
              href="https://weather-app-nu-sage-84.vercel.app/"
              className={tagClasses}
            >
              View
            </a>
          </div>
        </div>

        <div className={cardClass}>
          <img className="w-full p-2" src={Weather} alt="Weather App" />
          <div className="px-4 py-2">
            <div className="font-bold text-xl text-white mb-2">Weather</div>
            <p className="text-white text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-4 pt-2 pb-2">
            <span className={tagClasses}>React Js</span>
            <span className={tagClasses}>Node JS</span>
          </div>
          <div className="px-4 pt-2 pb-2">
            <a
              href="https://github.com/Adityamaurya790/weatherApp"
              className={tagClasses}
            >
              Souce Code
            </a>
            <a
              href="https://weather-app-nu-sage-84.vercel.app/"
              className={tagClasses}
            >
              View
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
