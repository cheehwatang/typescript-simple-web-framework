interface UserProps {
  name?: string;
  age?: number;
}

type Callback = () => void;

class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(newProp: UserProps): void {
    Object.assign(this.data, newProp);
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);

    this.events[eventName] = handlers;
  }
}

export { User };
