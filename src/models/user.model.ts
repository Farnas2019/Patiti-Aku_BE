import mongoose, { Schema, Document } from "mongoose";



export interface UserDocument extends mongoose.Document {
  email: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<Boolean>;
}

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    concent: [{ type: Schema.Types.ObjectId, ref: "Concent" }],
    id:{
      type: String, required: true, unique: true
    }
},
  { 
    toJSON:{
    transform(doc,ret){
     
        delete ret.createdAt;
        delete ret.updatedAt;
        delete ret.__v;
        delete ret._id;
    }
},
    timestamps: true,
  }
);

const UserModel = mongoose.model<UserDocument>("User", userSchema);

export default UserModel;
