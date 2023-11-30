class User {
  id: string;
  name: string;
  contactInfo: string;

  constructor(id: string, name: string, contactInfo: string) {
    this.id = id;
    this.name = name;
    this.contactInfo = contactInfo;
  }

  getUserDetails(): string {
    return `Customer ID: ${this.id},\nName: ${this.name},\nContact: ${this.contactInfo}`;
  }

  userId() {
    return this.id;
  }
}

export { User };
