class User {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  dateOfBirth: Date;
  accountNumber: string;
  accountBalance: number;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    address: string,
    dateOfBirth: Date,
    accountNumber: string,
    accountBalance: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.dateOfBirth = dateOfBirth;
    this.accountNumber = accountNumber;
    this.accountBalance = accountBalance;
  }
  getUserDetails(): string {
    return `
      Name: ${this.firstName} ${this.lastName}
      Email: ${this.email}
      Phone Number: ${this.phoneNumber}
      Address: ${this.address}
      Date of Birth: ${this.dateOfBirth.toISOString().split("T")[0]}
      Account Number: ${this.accountNumber}
      Account Balance: ${this.accountBalance}
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
