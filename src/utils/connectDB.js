const { connect } = require("mongoose");

const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("MongoDB connected ...");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;