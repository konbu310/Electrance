import * as React from "react";
import * as ReactDOM from "react-dom";
import { shell } from "electron";
import { RootEpic, RootReducer, TypelessProvider } from "typeless";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { LauncherModule } from "./features/launcher/module";

//
// @ Store
//
const rootEpic = new RootEpic();
const rootReducer = new RootReducer();

const store =
  process.env.NODE_ENV === "production"
    ? createStore(rootReducer.getReducer())
    : createStore(rootReducer.getReducer(), composeWithDevTools());

//
// @ Render
//
ReactDOM.render(
  <TypelessProvider store={store} rootEpic={rootEpic} rootReducer={rootReducer}>
    <LauncherModule />
  </TypelessProvider>,
  document.getElementById("root")
);
