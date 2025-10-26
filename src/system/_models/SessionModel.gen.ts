
import { Document, Schema, Model, model, SchemaDefinition } from "mongoose";
import { Session } from "../_types/Session.gen";

export const SessionSchemaDefinition: SchemaDefinition = {
  sessionCode: { type: String, index: true, required: false },
  provider: { type: String, index: false, required: true },
  userId: { type: String, index: false, required: true },
  expired: { type: Number, index: false, required: true }
};

export interface SessionDocument extends Omit<Session, '_id'>, Document { _id: string; };
export const SessionSchema: Schema<SessionDocument> = new Schema(SessionSchemaDefinition);
SessionSchema.pre('save', function(next) {
    if (this.isNew) {
        
    } else {
        
    }
    next();
});

export const SessionModel: Model<SessionDocument> = model<SessionDocument>("Session", SessionSchema);
