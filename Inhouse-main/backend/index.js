// app.js
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";
import expressSession from "express-session";
import router from './routes/router.js';
import passport from "passport"
// import authRoutes from './routes/authRoutes.js';
const app = express();
const PORT = process.env.PORT || 8000;


// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from this origin
  credentials: true // Allow sending cookies
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(new URL('public', import.meta.url).pathname));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(expressSession({
  resave:false,
  saveUninitialized: false,
  secret:"hey hey hey"
}))


app.use(passport.initialize());
app.use(passport.session());


app.use('/', router); 
// app.use("/course-outcomes", course_outcome);
// app.use('/', authRoutes);
// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/beta')
  .then(() => {
    console.log('Connected to the database');
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((err) => console.error('Error connecting to the database:', err));

export default app;
