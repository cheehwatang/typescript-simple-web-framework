interface UserProps {
  name?: string;
  age?: number;
}

class User {
  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(newProp: UserProps): void {
    Object.assign(this.data, newProp);
  }
}

export { User };
