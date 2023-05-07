class Attributes<T extends Object> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set = (newProp: T): void => {
    Object.assign(this.data, newProp);
  };

  getAll = (): T => {
    return this.data;
  };
}

export { Attributes };
