import { FilterImplOptions, Liquid } from "liquidjs";
import { Context } from "./context";

export class Engine {
  public readonly liquid: Liquid;

  constructor(root: string, extname: string = ".liquid") {
    this.liquid = new Liquid({
      root,
      extname,
    });
  }

  public registerFilters(filters: Record<string, FilterImplOptions>): Engine {
    for (const name in filters) {
      const filter = filters[name];
      this.liquid.registerFilter(name, filter);
    }
    return this;
  }

  public createRenderContext(environment?: object): Context {
    return new Context(this, environment);
  }
}
