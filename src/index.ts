import { UserEdit } from "./views/UserEdit";
import { User } from "./models/User";

const user = User.build({ name: "Alice", age: 50 });

const root = document.getElementById("root");

if (root) {
  new UserEdit(root, user).render();
} else {
  throw new Error("Root element not found");
}
