import { minify, Options as MinifyOptions } from "html-minifier";
import { WriteFileOptions, writeFileSync } from "fs";
import { ensureDirSync } from "fs-extra";
import { dirname } from "path";

export class Template {
  constructor(protected readonly value: string) {}

  public minify(
    options: MinifyOptions = {
      collapseWhitespace: true,
      removeAttributeQuotes: true,
    }
  ): Template {
    const minified = minify(this.value, options);
    return new Template(minified);
  }

  public valueOf(): string {
    return this.value;
  }

  public writeTo(path: string, options?: WriteFileOptions) {
    ensureDirSync(dirname(path));
    writeFileSync(path, this.value, options);
  }
}
