import {express} from 'express';
import {bodyParser} from 'body-parser';

const login = require('./controllers/userControllers');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/login', async(req, res)=>{
    try {
      await login(req, res);
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      res.status(500).json({ message: "Erreur lors de la connexion" });
    }
})