import { UserList } from "./views/UserList";
import { User } from "./models/User";

const user = User.build({ name: "Alice", age: 50 });

const root = document.getElementById("root");

if (root) {
  const collection = User.buildCollection();

  (async () => {
    await collection.fetch();
    new UserList(root, collection).render();
  })();
} else {
  throw new Error("Root element not found");
}
