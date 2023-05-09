import { View } from "./View";
import { User, UserProps } from "../models/User";

class UserShow extends View<User, UserProps> {
  template = (): string => {
    return `
      <div>
        <h1>User Detail</h1>
        <p>name: ${this.model.get("name")}</p>
        <p>age: ${this.model.get("age")}</p>
      </div>
    `;
  };
}

export { UserShow };
