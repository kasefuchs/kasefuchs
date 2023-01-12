import hash from "object-hash";
import { Engine } from "./engine";
import { Template } from "./template";

export class Context {
  // noinspection JSUnusedLocalSymbols
  private readonly createdAt: Date = new Date();

  constructor(
    /* prettier-ignore */
    protected readonly engine: Engine,
    public readonly environment: object = {}
  ) {}

  public renderFile(path: string): Template {
    const value = this.engine.liquid.renderFileSync(path, this.environment, {
      globals: {
        contextHash: this.hashString,
      },
    });
    return new Template(value);
  }

  protected get hashString(): string {
    return hash(this, {
      algorithm: "md5",
      encoding: "hex",
      ignoreUnknown: true,
    });
  }
}
