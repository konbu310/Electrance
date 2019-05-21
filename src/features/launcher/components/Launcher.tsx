import * as React from "react";
import { useActions, useMappedState } from "typeless";
import { LauncherActions } from "../interface";
import { Card, List, Image, Button } from "semantic-ui-react";
import { shell } from "electron";

//
// @ View
//
export const Launcher = () => {
  const { addItem } = useActions(LauncherActions);
  const { appList } = useMappedState(state => state.launcher);

  const openItem = (path: string) => {
    shell.openItem(path);
  };

  return (
    <div>
      {appList.map(item => (
        <Card key={item.id}>
          <List>
            <Image src={item.icon} size="medium" circular />
            <List.Item>
              <Button onClick={() => openItem(item.path)}>{item.name}</Button>
            </List.Item>
          </List>
        </Card>
      ))}
    </div>
  );
};
