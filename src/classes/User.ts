import { CreditCard } from "./CreditCard";
import { CreditScore } from "./CreditScore";

class User {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public phoneNumber: string,
    public address: string,
    public dateOfBirth: Date,
    public creditCard?: CreditCard,
    public creditScore?: CreditScore
  ) {}
  getUserDetails(): string {
    return `
      Name: ${this.firstName} ${this.lastName}
      Email: ${this.email}
      Phone Number: ${this.phoneNumber}
      Address: ${this.address}
      Date of Birth: ${this.dateOfBirth.toISOString().split("T")[0]}
    `;
  }

  getPropertyValue(propertyName: keyof User) {
    if (this.hasOwnProperty(propertyName)) {
      return this[propertyName];
    }
    console.log(`Couldn't find property ${propertyName}`);
    return;
  }

  assignCreditCard(creditCard: CreditCard): void {
    this.creditCard = creditCard;
  }

  assignCreditScore(creditScore: CreditScore): void {
    this.creditScore = creditScore;
  }
}

export { User };
