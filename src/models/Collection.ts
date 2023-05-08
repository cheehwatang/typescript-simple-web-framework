import { User } from "./User";
import { Eventing } from "./Eventing";

class Collection {
  models: User[] = [];
  events: Eventing = new Eventing();
}

export { Collection };
