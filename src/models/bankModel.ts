import { Schema, model } from "mongoose";

interface IBank {
  id: string;
  name: string;
  contactInfo: string;
}

const bankSchema = new Schema<IBank>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  contactInfo: { type: String, required: true },
});

const Bank = model<IBank>("Bank", bankSchema);

export { Bank };
