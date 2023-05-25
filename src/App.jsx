// import dungeonimage from "image/dungeonimage";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full">
        {/* Nav Bar */}
        <div className="lg:sticky top-0 z-50 h-auto lg:h-screen bg-gradient-to-br from-slate-900 to-slate-800 w-full lg:w-1/4 ">
          <div className="flex flex-col items-center h-full lg:h-screen">
            <a
              href="#project"
              className="block  text-white text-3xl font-mono tracking-wide lg:mt-96"
            ></a>
            <a
              href="#projects"
              className="block text-white text-3xl font-mono tracking-wide m-4 uppercase"
            >
              Projects
            </a>
            {/* PROJECT AREA */}
            <a
              href="#warehouse"
              className="block text-xl font-mono tracking-wide mx-2 my-1 text-neutral-200"
            >
              Warehouse App
            </a>
            <a
              href="#dungeoncrawler"
              className="block text-xl font-mono tracking-wide mx-2 my-1 text-neutral-200"
            >
              Dungeon Crawler
            </a>
            <a
              href="#news"
              className="block text-xl font-mono tracking-wide mx-2 my-1 text-neutral-200"
            >
              News and Deals
            </a>
            {/* PROJECT AREA END */}
            <a
              href="#info"
              className="text-white text-3xl font-mono tracking-wide m-4 uppercase"
            >
              Info
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:w-3/4">
          <section
            id="top"
            className="w-full bg-gray-900 h-[50vh] flex flex-col items-center justify-center"
          >
            <h1 className="text-6xl font-sans font-extrabold text-white tracking-wider w-10/12 lg:w-full text-center opacity-90">
              Hi My Name Is
            </h1>
            <span className="text-6xl font-sans font-extrabold text-white tracking-widest w-10/12 lg:w-full text-center opacity-100">
              Anthony
            </span>
            <h2 className="text-3xl font-sans font-extrabold text-white tracking-wider opacity-80 my-3">
              Theres More Below
            </h2>
          </section>
          <div className="text-white text-center lg:text-right bg-transparent h-0 z-50 relative -top-8 opacity-20">
            Photo by{" "}
            <a href="https://unsplash.com/@floriankrumm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Florian Krumm
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/backgrounds/phone/keyboard?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </div>

          <section
            id="project"
            className="w-full bg-gray-900 h-[200vh]] flex flex-col items-center"
          >
            {/* Project Section */}
            <div
              id="warehouse"
              className="w-10/12 bg-neutral-100 m-8 flex flex-col lg:flex-row rounded-lg shadow-2xl border border-neutral-400  hover:bg-neutral-200 transition-color duration-300"
            >
              <img
                src="warehouse.png"
                className="w-full lg:w-72 p-4 lg:p-4 rounded-3xl"
              />
              <div className="w-full p-4 flex flex-col justify-between">
                <div>
                  <h1 className="text-xl font-bold text-gray-600 tracking-wider">
                    Warehouse Management Service
                  </h1>
                  <p className="p-1 text-gray-800 tracking-wide">
                    This is a resource management system allowing for Users and
                    Organizations to manage inventory. The app handles resource
                    access based on the User and their membership to a
                    organization and ownership of warehouses.
                  </p>
                </div>
                <div className="flex flex-row w-full flex-wrap">
                  <span className="bg-sky-500 rounded-3xl box-border h-5 px-3 tracking-widest font-bold text-xs font-sans text-white leading-5 m-1">
                    REACT
                  </span>
                  <span className="bg-sky-500 rounded-3xl box-border h-5 px-3 tracking-widest font-bold text-xs font-sans text-white leading-5 m-1">
                    TYPESCRIPT
                  </span>
                  <span className="bg-sky-500 rounded-3xl box-border h-5 px-3 tracking-widest font-bold text-xs font-sans text-white leading-5 m-1">
                    NODEJS
                  </span>
                  <span className="bg-sky-500 rounded-3xl box-border h-5 px-3 tracking-widest font-bold text-xs font-sans text-white leading-5 m-1">
                    EXPRESS
                  </span>
                  <span className="bg-sky-500 rounded-3xl box-border h-5 px-3 tracking-widest font-bold text-xs font-sans text-white leading-5 m-1">
                    MONGODB
                  </span>
                </div>
                <div className="flex flex-row">
                  <a
                    href="https://github.com/ranylm/MOD3-Project-Pending"
                    className="mx-2"
                  >
                    Github
                  </a>
                  <a
                    href="https://mod3-warehouses.onrender.com/"
                    className="mx-2"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
            {/* DUNGEON SECTION */}
            <div
              id="dungeoncrawler"
              className="w-10/12 bg-neutral-100 m-8 flex flex-col lg:flex-row rounded-lg shadow-2xl border border-neutral-400  hover:bg-neutral-200 transition-color duration-300"
            >
              <img
                src="dungeon.png"
                className="w-full lg:w-72 p-4 lg:p-4 rounded-3xl"
              />
              <div className="w-full p-4 flex flex-col justify-between">
                <div>
                  <h1 className="text-xl font-bold text-gray-600 tracking-wider">
                    Dungeon Crawler
                  </h1>
                  <p className="p-1 text-gray-800 tracking-wide">
                    This project implements a dungeon crawler with randomized
                    level generation with combat mechanics and item based
                    progression. Your goal is to eliminate all enemies on the
                    floor to score points.
                  </p>
                </div>
                <div className="flex flex-row">
                  <span className="bg-sky-500 rounded-3xl box-border h-5 px-3 tracking-widest font-bold text-xs font-sans text-white leading-5 m-1">
                    CANVAS
                  </span>
                  <span className="bg-sky-500 rounded-3xl box-border h-5 px-3 tracking-widest font-bold text-xs font-sans text-white leading-5 m-1">
                    HTML/CSS/JS
                  </span>
                </div>
                <div className="flex flex-row">
                  <a
                    href="https://github.com/ranylm/MOD1-Dungeon-Crawler"
                    className="mx-2"
                  >
                    Github
                  </a>
                  <a
                    href="https://ranylm.github.io/MOD1-Dungeon-Crawler/"
                    className="mx-2"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
            {/* NEWS AGGREGATOR */}
            <div
              id="news"
              className="w-10/12 bg-neutral-100 m-8 flex flex-col lg:flex-row rounded-lg shadow-2xl border border-neutral-400 hover:bg-neutral-200 transition-color duration-300"
            >
              <img
                src="news.png"
                className="w-full lg:w-72 p-4 lg:p-4 rounded-3xl"
              />
              <div className="w-full p-4 flex flex-col justify-between">
                <div>
                  <h1 className="text-xl font-bold text-gray-600 tracking-wider">
                    News Site
                  </h1>
                  <p className="p-1 text-gray-800 tracking-wide">
                    This project agregates news articals from several external
                    Apis about game news and displays it. Has search
                    functionality for game discounts and saving games into a
                    list utilizing redux.
                  </p>
                </div>
                <div className="flex flex-row">
                  <span className="bg-sky-500 rounded-3xl box-border h-5 px-3 tracking-widest font-bold text-xs font-sans text-white leading-5 m-1">
                    REACT
                  </span>
                  <span className="bg-sky-500 rounded-3xl box-border h-5 px-3 tracking-widest font-bold text-xs font-sans text-white leading-5 m-1">
                    TYPESCRIPT
                  </span>
                  <span className="bg-sky-500 rounded-3xl box-border h-5 px-3 tracking-widest font-bold text-xs font-sans text-white leading-5 m-1">
                    REDUX
                  </span>
                </div>
                <div className="flex flex-row">
                  <a
                    href="https://github.com/ranylm/Video-Game-Data-Dashboard"
                    className="mx-2"
                  >
                    Github
                  </a>
                  <a
                    href="https://admirable-arithmetic-47f34c.netlify.app/"
                    className="mx-2"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
            {/* TEST DATA */}

            {/* Info Section */}
          </section>
          <section
            id="info"
            className="w-full bg-gradient-to-br from-slate-900 to-slate-800 h-28 flex flex-row items-center justify-evenly text-white"
          >
            <a href="https://github.com/ranylm/" className="mx-2">
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/anthony-cheung-289300269/"
              className="mx-2"
            >
              LinkedIn
            </a>
            <a
              href="https://docs.google.com/document/d/10WdBJRpr_zqgSNThxhpBVOT9_MHx70tPTRxLMchMuq8/preview"
              className="mx-2"
            >
              Resume
            </a>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
