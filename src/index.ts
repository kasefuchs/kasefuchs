import { writeFileSync } from "fs";
import { format } from "prettier";
import { engine, paths } from "./constants";
import { getContext } from "./utilities";

!(async () => {
  const context = await getContext();
  const result = await engine.renderFile("root", context);
  const formatted = format(result, { parser: "html" })
  writeFileSync(paths.readme, formatted, "utf-8");
})();
