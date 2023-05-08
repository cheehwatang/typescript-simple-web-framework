import { Model } from "./Model";
import { Collection } from "./Collection";
import { Eventing } from "./Eventing";
import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

class User extends Model<UserProps> {
  static build(data: UserProps): User {
    return new User(
      new Attributes<UserProps>(data),
      new ApiSync<UserProps>(rootUrl),
      new Eventing()
    );
  }

  static buildCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(rootUrl, (json: UserProps) =>
      User.build(json)
    );
  }
}

export { User, UserProps };
