import { AxiosPromise, AxiosResponse } from "axios";

interface ModelAttributes<T> {
  set(value: T): void;
  get<K extends keyof T>(key: K): T[K];
  getAll(): T;
}

interface Sync<T> {
  fetch(id: number): AxiosPromise<T>;
  save(data: T): AxiosPromise<T>;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface HasId {
  id?: number;
}

class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private sync: Sync<T>,
    private events: Events
  ) {}

  get = this.attributes.get;
  on = this.events.on;
  trigger = this.events.trigger;

  set = (update: T): void => {
    this.attributes.set(update);
    this.events.trigger("change");
  };

  fetch = (): void => {
    const id = this.get("id");

    if (typeof id !== "number") {
      throw new Error("Cannot fetch user without an id");
    }

    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  };

  save = (): void => {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger("save");
      })
      .catch((): void => {
        this.trigger("error");
      });
  };
}

export { Model, ModelAttributes, Sync, Events };
