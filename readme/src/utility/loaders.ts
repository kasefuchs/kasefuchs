import { join } from "path";
import { Paths } from "../constants";
import { readFileSync } from "fs";

export function loadData(fileName: string): object {
  const filePath: string = join(Paths.Data, fileName);
  const fileContent = readFileSync(filePath, { encoding: "utf-8" });
  return JSON.parse(fileContent);
}
