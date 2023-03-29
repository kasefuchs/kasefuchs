import { FilterImplOptions } from "liquidjs";
import { round, set } from "lodash";
import moment_js from "moment";

const moment = moment_js();

export const filters: Record<string, FilterImplOptions> = {
  /* Lodash provided filters */
  set,
  round,
  /* Moment provided filters */
  moment_diff: moment.diff.bind(moment),
  /* Handwritten filters */
  encode_url_params: (params: any) => new URLSearchParams(params).toString(),
};
