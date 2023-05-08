import axios, { AxiosResponse } from "axios";
import { User, UserProps } from "./User";
import { Eventing } from "./Eventing";

class Collection {
  models: User[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string = "http://localhost:3000/users") {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch = (): void => {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((value: UserProps) => {
        this.models.push(User.build(value));
      });
    });

    this.trigger("change");
  };
}

export { Collection };
