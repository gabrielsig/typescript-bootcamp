import {User, UserProps} from '../models/User';
import {View} from './View';

export class UserForm extends View<User, UserProps> {

  screenEventsMap(): {[key: string]: () => void} {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveClick,

    };
  }

  template(): string {
    return `
      <div>
        <div>
          <input placeholder="${this.model.get('name')}">
          <button class="set-name">Set Name</button>
          <button class="set-age">Set Random Age</button>
        </div>

        <button class="save-model">Save usere</button>
      </div>
    `;
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');

    if (input) {
      const name = input.value;
      this.model.set({name});
    }
  }

  onSaveClick = (): void => {
    this.model.save();
  }
}