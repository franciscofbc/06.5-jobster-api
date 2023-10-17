require('dotenv').config();
const mockData = require('./MOCK_DATA.json');
const jobModel = require('./models/Job');
const connectDB = require('./db/connect');

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await jobModel.create(mockData);
    console.log('success');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
