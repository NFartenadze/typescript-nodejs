import { CreditCardModel } from "../models/creditCardModel";

export const getCreditCards = () => CreditCardModel.find();
export const getCreditCardByNumber = (number: string) =>
  CreditCardModel.findOne({ number });
export const getCreditCardByUserId = (userId: string) =>
  CreditCardModel.findOne({ userId });

export const deleteCreditCardByUserId = (cardNumber: string) =>
  CreditCardModel.findOneAndDelete({
    cardNumber,
  });

export const updateCreditCardByNumber = (
  cardNumber: string,
  values: Record<string, any>
) => {
  CreditCardModel.findOneAndUpdate({ cardNumber }, values);
};
