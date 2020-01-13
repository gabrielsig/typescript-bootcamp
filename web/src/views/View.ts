import {Model} from '../models/Model'

export abstract class View<T extends Model<K>, K> {
  parent: Element;
  model: T;
  regions: {[key: string]: Element} = {};

  constructor(parent: Element, model: T) {
    this.parent = parent;
    this.model = model;

    this.bindModelEvents()
  }

  abstract template(): string;

  bindModelEvents(): void {
    this.model.on('change', () => {
      this.render()
    });
  }

  screenEventsMap(): {[key: string]: () => void} {
    return {};
  }

  bindScreenEvents(fragment: DocumentFragment): void {
    const eventsMap = this.screenEventsMap();

    for (let eventKey in eventsMap){
      const [eventName, selector] =  eventKey.split(':');

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      })
    }
  }

  regionsMap(): {[key: string]: string} {
    return {};
  } 

  bindRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap){
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);
      if (element) {
        this.regions[key] = element;
      }
    }
  }

  onRender(): void {}

  render(): void {
    // remove old html
    this.parent.innerHTML = '';

    // add new html
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindScreenEvents(templateElement.content)
    this.bindRegions(templateElement.content);

    // nest views
    this.onRender();

    this.parent.append(templateElement.content);
  }
}