
import { Document, Schema, Model, model, SchemaDefinition } from "mongoose";
import { Customer } from "../_types/Customer.gen";

export const CustomerSchemaDefinition: SchemaDefinition = {
  email: { type: String, index: true, required: false },
  name: { type: String, index: false, required: true },
  phone: { type: String, index: false, required: false },
  active: { type: Boolean, index: false, required: true, default: true },
  locale: { type: String, index: false, required: false }
};

export interface CustomerDocument extends Omit<Customer, '_id'>, Document { _id: string; };
export const CustomerSchema: Schema<CustomerDocument> = new Schema(CustomerSchemaDefinition);
CustomerSchema.pre('save', function(next) {
    if (this.isNew) {
        
    } else {
        
    }
    next();
});

export const CustomerModel: Model<CustomerDocument> = model<CustomerDocument>("Customer", CustomerSchema);
