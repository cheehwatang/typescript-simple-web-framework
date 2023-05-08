import { UserForm } from "./views/UserForm";
import { User } from "./models/User";

const user = User.build({ name: "Alice", age: 50 });

const userForm = new UserForm(document.getElementById("root")!, user);

userForm.render();
