import { join } from "path";

export abstract class Paths {
  protected static get isWebpack(): boolean {
    return !require.main?.children?.length;
  }

  /* Application root */
  public static get ApplicationRoot(): string {
    return this.isWebpack ? __dirname : join(__dirname, "..", "..");
  }

  /* Application Roots */
  public static get ResourcesRoot(): string {
    return join(this.ApplicationRoot, "resources");
  }

  public static get GeneratedRoot(): string {
    return join(this.ApplicationRoot, "generated");
  }

  public static get GeneratedResourcesRoot(): string {
    return join(this.GeneratedRoot, "resources");
  }

  /* Non-writable */
  public static get Templates(): string {
    return join(this.ResourcesRoot, "templates");
  }

  public static get Images(): string {
    return join(this.ResourcesRoot, "images");
  }

  /* Writable */

  public static get GeneratedReadme(): string {
    return join(this.GeneratedRoot, "README.md");
  }

  public static get GeneratedImages(): string {
    return join(this.GeneratedResourcesRoot, "images");
  }
}
