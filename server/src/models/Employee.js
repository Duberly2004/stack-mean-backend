import { Schema,model } from 'mongoose';

const employeeSchema = new Schema(
    {
      name: { type: String, required: true },
      lastname: { type: String, required: true},
      age: { type: Number, required: true},
      position: { type: String, required: true },
      office: { type: String, required: true },
      salary: { type: Number, required: true }

    },
    {
      versionKey: false,
      timestamps: true,
    }
  );

export default model('Employee', employeeSchema)