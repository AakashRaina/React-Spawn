import React, { Component } from "react";
import "css/App";
import react_svg from "assets/images/react.svg";
import { MdFavorite } from "react-icons/md";

class App extends Component {
  render() {
    return (
      <div class="grid grid-flow-row grid-rows-1 grid-cols-12 h-screen">
        <div class="invisible bg-yellow-400 sidebar space-y-6 lg:col-span-2 lg:visible">
          <img src={react_svg} class="rotate" />
          <h4 class="font-bold">React Spawn ♔</h4>
          <p class="font-bold text-gray-900">
            CLI tool to quickly spawn a minimalist template for SPA react web
            apps 🚀
          </p>
        </div>
        <div class="col-span-12 lg:col-span-10">
          <div class="grid grid-rows-6 h-screen">
            <div class="row-span-4 content-body">
              <ul class="list-disc pl-6">
                <li>
                  To get started, clone the repo & run{" "}
                  <p class="text-blue-700 font-bold">npm run dev:build</p> and
                  edit <p class="text-blue-700 font-bold">App.js</p>
                </li>
                <li>
                  Uses <p class="text-blue-700 font-bold">Webpack</p> as module
                  bundler, to update configs change{" "}
                  <p class="text-blue-700 font-bold">webpack.config.js</p>
                </li>
                <li>
                  Uses <p class="text-blue-700 font-bold">Tailwind</p> as CSS
                  framework, to update configs change{" "}
                  <p class="text-blue-700 font-bold">
                    tailwind.config.js/postcss.config.js
                  </p>
                </li>
                <li>
                  Icon set from{" "}
                  <p class="text-blue-700 font-bold">react-icons</p>
                </li>
                <li>
                  Preconfigured for{" "}
                  <p class="text-blue-700 font-bold">Stylus</p>
                </li>
                <li>
                  Supports <p class="text-blue-700 font-bold">png, svg, jpeg</p>
                </li>
                <li>
                  Integrated with{" "}
                  <p class="text-blue-700 font-bold">Storybook</p> for component
                  development
                </li>
              </ul>
            </div>
            <div class="row-span-2 content-footer">
              <span class="text-xs md:text-lg">
                Made with <MdFavorite color="red" class="mx-1" /> by
                <a
                  href="https://github.com/AakashRaina/"
                  ref="noreferrer"
                  target="_blank"
                  class="text-blue-700 px-1"
                >
                  Aakash Raina
                </a>
                . Contribute
                <a
                  href="https://github.com/AakashRaina/React-Spawn"
                  target="_blank"
                  ref="noreferrer"
                  class="text-blue-700 px-1"
                >
                  Github
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
