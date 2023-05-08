import { UserForm } from "./views/UserForm";
import { User } from "./models/User";

const user = User.build({ name: "Alice", age: 50 });

const root = document.getElementById("root");

if (root) {
  const userForm = new UserForm(root, user);
  userForm.render();
} else {
  throw new Error("Root element not found");
}
