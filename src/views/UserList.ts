import { CollectionView } from "./CollectionView";
import { User, UserProps } from "../models/User";

class UserList extends CollectionView<User, UserProps> {
  renderItem = (model: User, itemParent: Element): void => {
    const template = `
      <div>
        <h1>User ${model.get("id")}</h1>
        <p>name: ${model.get("name")}</p>
        <p>age: ${model.get("age")}</p>
      </div>
    `;

    itemParent.innerHTML = template;
  };
}

export { UserList };
