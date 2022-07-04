import { join } from "path";
import { cwd } from "process";

export default {
  templatesRoot: join(cwd(), "assets", "templates"),
  readme: join(cwd(), "README.md"),
  data: join(cwd(), "assets", "data.yml"),
};
