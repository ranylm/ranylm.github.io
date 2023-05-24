// import dungeonimage from "image/dungeonimage";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-row bg-red-700 w-full">
        <div className="sticky top-0 z-50 h-screen bg-gradient-to-r from-violet-900 to-violet-700 w-1/4 ">
          <div className="flex flex-col items-center h-screen">
            <a
              href="#project"
              className="block  text-white text-3xl font-mono tracking-wide mt-96 
            "
            ></a>
            <a
              href="#project"
              className="block text-white text-3xl font-mono tracking-wide m-4 
            "
            >
              Project
            </a>
            <a
              href="#info"
              className="text-white text-3xl font-mono tracking-wide m-4
            "
            >
              Info
            </a>
          </div>
        </div>
        <div className="flex flex-col bg-blue-400 w-3/4">
          <section
            id="top"
            className="w-full bg-green-400 h-[50vh] flex flex-col items-center justify-center"
          >
            <h1 className="text-6xl font-sans font-extrabold text-white tracking-wider">
              Hi My Name Is Anthony!
            </h1>
            <h2 className="text-4xl font-sans font-extrabold text-white tracking-wider">
              Theres More Below
            </h2>
          </section>

          <section
            id="project"
            className="w-full bg-green-500 h-screen flex flex-col items-center"
          >
            {/* Project Section */}
            <div className="w-10/12 bg-neutral-100 m-8 flex flex-row rounded-lg shadow-2xl">
              <img src="dungeon.png" className="w-72 m-4" />
              <div className="w-full p-4 flex flex-col justify-between">
                <div>
                  <h1>Dungeon Crawler</h1>
                  <p>
                    This project implements a dungeon crawler with randomized
                    level generation with combat mechanics and item based
                    progression. Your goal is to eliminate all enemies on the
                    floor to score points.
                  </p>
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
            <div className="w-10/12 bg-neutral-100 m-8 flex flex-row rounded-lg shadow-2xl">
              <img src="news.png" className="w-72 m-4" />
              <div className="w-full p-4"></div>
            </div>
            <div className="w-10/12 bg-neutral-100 m-8 flex flex-row rounded-lg shadow-2xl">
              <img src="space.png" className="w-72 m-4" />
              <div className="w-full p-4"></div>
            </div>
            {/* Info Section */}
          </section>
          <section
            id="info"
            className="w-full bg-green-600 h-28 flex flex-row items-center justify-evenly"
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
