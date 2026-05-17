import express from "express";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();
const port = process.env.PORT || 4000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.setHeader("Vary", "Origin");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, token, Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }
  next();
});

app.use(express.json());

app.use(async (req, res, next) => {
  if (req.path === "/" || req.path === "/health") return next();
  try {
    await connectDB();
    next();
  } catch (err) {
    res
      .status(500)
      .json({ success: false, error: "Database connection failed: " + err.message });
  }
});

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.get("/health", (req, res) => {
  res.json({
    ok: true,
    hasMongoUri: Boolean(process.env.MONGODB_URI),
    hasJwtSecret: Boolean(process.env.JWT_SECRET),
  });
});

if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log("Server Started on PORT : " + port);
  });
}

export default app;
