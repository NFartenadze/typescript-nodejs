import { CreditCardModel } from "../models/creditCardModel";

export const getCreditCards = () => CreditCardModel.find();

export const getCreditCardByNumber = (number: string) =>
  CreditCardModel.findOne({ number });

export const getCreditCardByUserId = (userId: string) =>
  CreditCardModel.findOne({ userId });

export const createCreditCard = async (values: Record<string, any>) => {
  const creditCard = await CreditCardModel.create(values);
  return creditCard.toObject();
};

export const updateCreditCardByNumber = (
  cardNumber: string,
  values: Record<string, any>
) => {
  CreditCardModel.findOneAndUpdate({ cardNumber }, values);
};

export const deleteCreditCardByUserId = (cardNumber: string) =>
  CreditCardModel.findOneAndDelete({
    cardNumber,
  });
