
class CreditScore {
  constructor(public score: number = 0) {}

  updateCreditScore(): void {
    this.score += 10;
    console.log(
      // `Credit score updated for ${this.user.firstName} ${this.user.lastName}. New score: ${this.score}`
    );
  }

  getCreditScore(): number {
    return this.score;
  }
}

export { CreditScore };
