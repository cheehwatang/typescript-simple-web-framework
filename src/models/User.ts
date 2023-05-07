import { Model } from "./Model";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { Attributes } from "./Attributes";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

class User extends Model<UserProps> {
  constructor(private data: UserProps) {
    super(
      new Attributes<UserProps>(data),
      new Sync<UserProps>(rootUrl),
      new Eventing()
    );
  }
}

export { User };
