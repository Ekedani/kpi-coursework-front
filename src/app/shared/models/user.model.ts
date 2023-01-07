export class User {
  id?: string;
  apiKey?: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  email?: string;

  constructor(options: {
    id?: string,
    apiKey?: string,
    firstName?: string,
    lastName?: string,
    role?: string,
    email?: string
  }) {
    this.id = options.id;
    this.apiKey = options.apiKey;
    this.firstName = options.firstName;
    this.lastName = options.lastName;
    this.role = options.role;
    this.email = options.email;
  }
}
