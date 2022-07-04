export type Data = {
  skills: {
    icons: Array<string>;
    perline: number;
  };
  me: {
    bithday: number;
  };
  statistics: Record<string, Record<string, string | boolean | number>>;
};
