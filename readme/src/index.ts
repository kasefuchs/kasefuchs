import "dotenv/config";

import shields from "../resources/json/shields.json";
import personal from "../resources/json/personal.json";
import skillIcons from "../resources/json/skill-icons.json";
import githubReadmeStats from "../resources/json/github-readme-stats.json";

import { Engine } from "./structures";
import { filters, Paths } from "./constants";
import { context, getOctokit } from "@actions/github";
import { join } from "path";
import { copySync } from "fs-extra";

const octokit = getOctokit(process.env.GITHUB_TOKEN!);
const repository = context.repo;
octokit.rest.users
  .getByUsername({ username: repository.owner })
  .then(({ data: user }) => {
    new Engine(Paths.Templates)
      .registerFilters(filters)
      .createRenderContext({
        shields,
        skillIcons,
        githubReadmeStats,
        personal,
        user,
      })
      .renderFile("root")
      .minify()
      .writeTo(Paths.GeneratedReadme);
    copySync(Paths.Images, Paths.GeneratedImages);
  });
