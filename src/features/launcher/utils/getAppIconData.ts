import * as child_process from "child_process";
import * as fs from "fs";
import * as path from "path";
import * as uuidv1 from "uuid/v1";
import { promisify } from "util";

const exec = promisify(child_process.exec);
const readDir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

export const getAppIconData = async (appPath: string): Promise<string> => {
  let base64EncodedPngData: string;

  try {
    const tmpId = uuidv1();
    // TODO: アイコンの名前が一律じゃなかったのでここも検索するかDropイベントから取得する
    const iconPath = `${appPath}/Contents/Resources/AppIcon.icns`;
    const outputPath = path.join(__dirname, "tmp", tmpId + "iconset");

    await exec(
      `iconutil --convert iconset "${iconPath}" --output ${outputPath}`
    );

    const files = await readDir(outputPath);

    base64EncodedPngData = await readFile(
      outputPath + "/" + files.find(item => item === "icon_128x128.png"),
      "base64"
    );
  } catch (e) {
    console.log(e);
  }

  return base64EncodedPngData;
}
