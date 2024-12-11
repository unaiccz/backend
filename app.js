import express from 'express';
import cors from 'cors'; // prevent CORS errors
const port = 444;
const app = express();
app.use(cors());
app.use(express.json()); // parse JSON bodies
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
