import { View } from "../views/View";
import { User, UserProps } from "../models/User";

class UserForm extends View<User, UserProps> {
  template = (): string => {
    return `
    <div>
      <h1>User Form</h1>
      <div>User name: ${this.model.get("name")}</div>
      <div>User age: ${this.model.get("age")}</div>
      <input id="name-input" placeholder="Enter new name..." />
      <button class="set-name">Set Name</button>
      <button class="set-age">Set Random Age</button>
    </div>
    `;
  };

  eventsMap = (): { [key: string]: () => void } => {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
    };
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector("#name-input") as HTMLInputElement;
    const name = input.value;

    this.model.set({ name });
  };
}

export { UserForm };
