import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16px" })); // any size we need
app.use(
  express.urlencoded({
    extended: true, // object inside object (nested object) we can grab, most of the case we do not take nested object
    limit: "16px",
  })
); // read url params or text
app.use(express.static("public")); // access public assets
app.use(cookieParser()); // set and read cookies


export { app };
// export default app

// TODO: explore cors
