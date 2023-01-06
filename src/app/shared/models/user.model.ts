export class User {
  id: string;
  apiKey: string;
  firstName: string;
  lastName: string;
  role: string;
  email: string;

  constructor(id: string, apiKey: string, firstName: string, lastName: string, role: string, email: string) {
    this.id = id;
    this.apiKey = apiKey;
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.email = email;
  }
}
