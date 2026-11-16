
import express from "express"
const app = express();
const port = 3000;

//Middleware 
app.use(express.json());

app.get('/' ,(req, res) => {
    res.send('Bem Vindo!');

})

app.post('/login', (req, res) => {
    console.log(req.body)
    res.send('OK!')

})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);

})
