import express from 'express';
import cors from 'cors'; // prevent CORS errors
import connectDB from './database/db.js'; // connect to database
const port = 444;
const app = express();
app.use(cors());
app.use(express.json()); // parse JSON bodies
connectDB(); // connect to database
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
