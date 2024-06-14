import express from 'express';
import cors from 'cors';
import passport from 'passport';
import { User } from '../models/users.js'; // Ensure correct path
import { Strategy as LocalStrategy } from 'passport-local';

const router = express.Router();

// Passport configuration
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Middleware
router.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Routes
router.get('/', (req, res) => {
    res.send('Hello, World!');
});

router.get('/home', isLoggedIn, (req, res) => {
    res.send('home');
});
router.post('/addteacher', async (req, res, next) => {
    try {
        const { name, email, password, subjects } = req.body;

        if (!name || !email || !password || !subjects) {
            return res.status(400).json({ error: 'Name, email, password, and subjects are required' });
        }

        if (password.length < 6) {
            return res.status(400).json({ error: 'Password should be at least 6 characters long' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email is already taken' });
        }

        const teacher = new User({
            name,
            email,
            password,
            subject: subjects
        });

        await User.register(teacher, password); // Use passport-local-mongoose's register method

        req.logIn(teacher, (err) => {
            if (err) {
                return next(err);
            }
            return res.status(201).json({ message: 'Teacher created and logged in successfully' });
        });

    } catch (error) {
        console.error('Error creating teacher:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});


// Modify the route to fetch data only for the logged-in user
router.get('/addteacher/teachers', isLoggedIn, async (req, res) => {
    try {
        const currentUser = req.user; // Assuming the user object is stored in the request object after authentication
        const teachers = await User.find({ _id: currentUser._id });
        res.status(200).json({ success: true, teachers });
    } catch (error) {
        console.error('Error fetching teachers:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
});



router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Internal server error' });
        }
        if (!user) {
            return res.status(400).json({ success: false, message: 'Invalid email or password' });
        }
        req.logIn(user, (err) => {
            if (err) {
                return res.status(500).json({ success: false, message: 'Internal server error' });
            }
            return res.status(200).json({ success: true, message: 'Login Successful' });
        });
    })(req, res, next);
});



router.get('/check-auth', (req, res) => {
    if (req.isAuthenticated()) {
        return res.json({ isAuthenticated: true });
    } else {
        return res.json({ isAuthenticated: false });
    }
});

router.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/home');
    });
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).json({ success: false, message: 'Unauthorized' });
}

export default router;
