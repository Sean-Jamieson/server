import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import itemRoutes from './routes/items.js';

const app = express();


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/items', itemRoutes);

app.get('/', (req, res) => {
    res.send('Hello to shopify API');
});

const CONNECTION_URL = 'mongodb+srv://seanjamieson:jamieson105@cluster0.dtawl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () =>console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(error.message));
