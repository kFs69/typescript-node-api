import { Schema, model, Document } from 'mongoose';

interface UserInterface extends Document {
  firstName?: string
  lastName?: string
  email?: string
}

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String
}, {
  timestamps: true 
});

export default model<UserInterface>('User', UserSchema);
