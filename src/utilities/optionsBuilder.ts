import { Children, IOptions } from "../types/interface";

export default class Options {
  private options = {} as IOptions;

  public classNames(classes: string[]) {
    this.options.classNames = classes;
    return this;
  }

  public attributes(attributes: any) {
    this.options.attributes = attributes;
    return this;
  }

  public type(type: string) {
    this.options.type = type;
    return this;
  }

  public children(children: Children) {
    this.options.children = children;
    return this;
  }

  public createOptions() {
    return Object.freeze(this.options);
  }
}
