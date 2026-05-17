import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({
        success: false,
        error: "Not Authorized Login Again",
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (
      decoded.role !== "admin" ||
      decoded.email !== process.env.ADMIN_EMAIL
    ) {
      return res.json({
        success: false,
        error: "Not Authorized Login Again",
      });
    }
    next();
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
};

export default adminAuth;
