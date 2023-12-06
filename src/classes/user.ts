class User {
  name: string;
  contactInfo: string;

  constructor(name: string, contactInfo: string) {
    this.name = name;
    this.contactInfo = contactInfo;
  }

  getUserDetails(): string {
    return `User Name: ${this.name},\n Contact: ${this.contactInfo}`;
  }

  getName() {
    return this.name;
  }
}

export { User };
