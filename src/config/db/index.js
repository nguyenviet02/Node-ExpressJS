import mongoose from 'mongoose';
const connect = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://nguyenviet02dev:nguyenviet2002@cluster0.st5riyq.mongodb.net/education_dev',
    );
    console.log('Connected to database');
  } catch (err) {
    console.error('Error connecting to database', err);
  }
};

export default { connect };
