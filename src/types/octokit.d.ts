import { getOctokit } from "@actions/github";

/*
GitHub is a piece of shit and does not
provide normal type declarations.
So...
*/

type ReturnData<T> = Awaited<ReturnType<T>>["data"];

export type Octokit = ReturnType<typeof getOctokit>;

export type User = ReturnData<Octokit["rest"]["users"]["getByUsername"]>;
export type Event = ReturnData<Octokit["rest"]["activity"]["listEventsForAuthenticatedUser"]>[number];
