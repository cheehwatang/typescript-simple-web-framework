interface UserProps {
  name: string;
  age: number;
}

class User {
  constructor(private data: UserProps) {}
}

export { User };
