import { View } from "../views/View";
import { User, UserProps } from "../models/User";

class UserForm extends View<User, UserProps> {
  template = (): string => {
    return `
    <div>
      <input id="name-input" placeholder="${this.model.get("name")}" />
      <button class="set-name">Set Name</button>
      <button class="set-age">Set Random Age</button>
      <button class="save-user">Save User</button>
    </div>
    `;
  };

  eventsMap = (): { [key: string]: () => void } => {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
      "click:.save-user": this.onSaveUserClick,
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

  onSaveUserClick = (): void => {
    this.model.save();
  };
}

export { UserForm };
