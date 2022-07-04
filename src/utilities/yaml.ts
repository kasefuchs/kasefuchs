import { readFileSync } from "fs";
import yaml from "js-yaml";

export const load = <T>(path: string): T => {
  const content = readFileSync(path, "utf-8").toString();
  return <T>yaml.load(content);
};
