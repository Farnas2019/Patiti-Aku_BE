import mongoose from "mongoose";

// This is a Concent interface that extends Mongoose Document, this is part of inheritance in object oriented programming
export interface ConcentDocument extends mongoose.Document {
  concents: string;
  user: string;
  Id: string;
  enabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}


const concentSchema = new mongoose.Schema(
  {
      Id:{
        enum:["email_notifications", "sms_notifications",],
        type: String,
        required: true,
      },
      enabled:{
        type: Boolean, default: false
      }
  },
  { toJSON:{
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

const ConcentModel = mongoose.model<ConcentDocument>(
  "Concent",
  concentSchema
);

export default ConcentModel;
