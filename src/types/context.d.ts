import { Me, Skills, Statistics } from "./data";
import { Event, Octokit, User } from "./octokit";

export type Context = {
  octokit: Octokit;
  repository: {
    owner: string;
    repo: string;
  };
  user: User;
  events: Event[];
  data: {
    skills: Skills;
    statistics: Statistics;
    me: Me;
  };
};
