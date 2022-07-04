import { Liquid } from "liquidjs";
import { round } from "../utilities";
import paths from "./paths";
import time from "./time";

export const engine = new Liquid({
  root: paths.templatesRoot,
  extname: ".md",
});

engine.registerFilter("encode_url_params", obj => new URLSearchParams(obj).toString());
engine.registerFilter("assign_property", (target, name, value) => {
  target[name] = value;
  return target;
});
engine.registerFilter("time_between_timestamp", (timestamp, unit: keyof typeof time, digits = 3) =>
  round((Date.now() - timestamp) / time[unit], digits)
);
