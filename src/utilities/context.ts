import { context, getOctokit } from "@actions/github";
import "dotenv/config";
import { paths } from "../constants";
import { Context, Data, Octokit } from "../types";
import { load } from "./yaml";

export const getContext = async (): Promise<Context> => {
  const octokit: Octokit = getOctokit(process.env.GITHUB_TOKEN!);
  const repository = context.repo;
  const { data: user } = await octokit.rest.users.getByUsername({ username: repository.owner });
  const { data: events } = await octokit.rest.activity.listPublicEventsForUser({ username: repository.owner, per_page: 100 });
  const data = load<Data>(paths.data);
  return { octokit, repository, user, data, events };
};
