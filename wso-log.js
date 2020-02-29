// log wilton de comtandos

const express = require('express');

// rotas
const router = express.Router();
router.get('/', (req, res)=>{
	let nome = req.query.nome;
	let idade = req.query.idade;

		res.send('Ola, '+nome+', voce tem '+idade+' anos');
});

// rota do post
router.get('/posts/:id', (req, res)=>{
	let id = req.params.id;

	res.send('Id do post: '+id);
});

router.get('/sobre', (req, res)=>{
		res.send('Pagina Sobre');
});

module.exports = router;