import "dotenv/config";

import { Engine } from "./structures";
import { filters, Paths } from "./constants";
import { context, getOctokit } from "@actions/github";
import { copySync } from "fs-extra";
import { loadData } from "./utility";

function main() {
  getOctokit(process.env.GITHUB_TOKEN!).rest.users
    .getByUsername({username: context.repo.owner})
    .then(({data: user}) => {
      new Engine(Paths.Templates)
        .registerFilters(filters)
        .createRenderContext({
          shields: loadData("shields.json"),
          skillIcons: loadData("skill-icons.json"),
          githubReadmeStats: loadData("github-readme-stats.json"),
          personal: loadData("personal.json"),
          user,
        })
        .renderFile("root")
        .minify()
        .writeTo(Paths.GeneratedReadme);

      copySync(Paths.Images, Paths.GeneratedImages);
    });
}

main();
