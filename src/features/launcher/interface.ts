import { createActions } from "typeless";

//
// @ Module
//
export const MODULE = "launcher";

//
// @ Action
//
export const LauncherActions = createActions(MODULE, {
  addItem: (name: string, path: string, icon: string) => ({
    payload: { name, path, icon }
  })
});

//
// @ State
//
export type LauncherState = {
  appList: {
    id: string;
    path: string;
    shortcut: string;
    name: string;
    icon: string;
  }[];
};
