class User {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public phoneNumber: string,
    public address: string,
    public dateOfBirth: Date,
    public accountNumber: string
  ) {}
  getUserDetails(): string {
    return `
      Name: ${this.firstName} ${this.lastName}
      Email: ${this.email}
      Phone Number: ${this.phoneNumber}
      Address: ${this.address}
      Date of Birth: ${this.dateOfBirth.toISOString().split("T")[0]}
      Account Number: ${this.accountNumber}
    `;
  }

  getPropertyValue(propertyName: keyof User) {
    if (this.hasOwnProperty(propertyName)) {
      return this[propertyName];
    }
    console.log(`Couldn't find property ${propertyName}`);
    return;
  }
}

export { User };
