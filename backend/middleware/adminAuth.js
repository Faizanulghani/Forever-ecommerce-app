import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res
        .status(400)
        .json({ success: false, error: "Not Authorized Login Again" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res
        .status(400)
        .json({ success: false, error: "Not Authorized Login Again" });
    }
    next();
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export default adminAuth;
