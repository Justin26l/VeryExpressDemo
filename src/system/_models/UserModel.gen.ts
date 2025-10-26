
import { Document, Schema, Model, model, SchemaDefinition } from "mongoose";
import { User } from "../_types/User.gen";

export const UserSchemaDefinition: SchemaDefinition = {
  authProfiles: {
    type: [
      {
        provider: { type: String, index: true, required: false },
        authId: { type: String, index: true, required: false },
        username: { type: String, index: false, required: false }
      }
    ],
    index: false,
    required: false
  },
  email: { type: String, index: true, required: false },
  name: { type: String, index: false, required: true },
  active: { type: Boolean, index: false, required: true, default: true },
  locale: { type: String, index: false, required: false },
  roles: {
    type: [ String ],
    index: false,
    required: false,
    default: [ 'user' ]
  },
  profileErrors: { type: [ String ], index: false, required: false }
};

export interface UserDocument extends Omit<User, '_id'>, Document { _id: string; };
export const UserSchema: Schema<UserDocument> = new Schema(UserSchemaDefinition);
UserSchema.pre('save', function(next) {
    if (this.isNew) {
        
    } else {
        
    }
    next();
});

export const UserModel: Model<UserDocument> = model<UserDocument>("User", UserSchema);
