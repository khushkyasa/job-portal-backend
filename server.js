import exp from "express";
import cookieParser from "cookie-parser";
import { connect } from "mongoose";
import { config } from "dotenv";
import { userRouter } from "./api/userAPI.js";
import { jobRouter } from "./api/jobAPI.js";
import { applicationRouter } from "./api/applicationAPI.js";
import { adminRouter } from "./api/adminAPI.js";
config();

const app = exp();

app.use(exp.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ success: true, message: "Job Portal API is running" });
});

app.use("/user-api", userRouter);
app.use("/job-api", jobRouter);
app.use("/application-api", applicationRouter);
app.use("/admin-api", adminRouter);

const port = process.env.PORT || 4000;

async function connectDB() {
  try {
    await connect(process.env.MONGO_URI);
    console.log("DB Connected");
    app.listen(port, () => console.log(`server listening on ${port}..`));
  } catch (err) {
    console.log("err in db connect :", err);
  }
}

connectDB();

app.use((err, req, res, next) => {
  console.log("err is", err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Something went wrong"
  });
});
