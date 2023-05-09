import { View } from "./View";
import { User, UserProps } from "../models/User";
import { UserShow } from "./UserShow";
import { UserForm } from "./UserForm";

class UserEdit extends View<User, UserProps> {
  template = (): string => {
    return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div>
    `;
  };

  regionsMap = (): { [key: string]: string } => {
    return {
      userForm: ".user-form",
      userShow: ".user-show",
    };
  };

  onRender = (): void => {
    new UserShow(this.regions.userShow, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();
  };
}

export { UserEdit };
