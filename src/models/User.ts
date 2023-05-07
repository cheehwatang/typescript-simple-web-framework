import { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { Attributes } from "./Attributes";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

class User {
  private events: Eventing = new Eventing();
  private sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  private attributes: Attributes<UserProps>;

  constructor(private data: UserProps) {
    this.attributes = new Attributes<UserProps>(data);
  }

  get get() {
    return this.attributes.get;
  }

  set = (newProp: UserProps): void => {
    this.attributes.set(newProp);
    this.events.trigger("change");
  };

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

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

export { User };
