const mongoose = require('mongoose');

require('dotenv').config({path:'variable.env'});

// conexao com bando de dados
mongoose.connect(process.env.DATABASE, { 
	useUnifiedTopology: true,
	useFindAndModify: false
});
mongoose.Promise = global.Promise;
mongoose.connection.on('Error: ', (error)=>{
	console.error("ERRO "+error.message)
});
 
// Carregando todos models
require('./models/Post');

const app = require('./app');

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), ()=>{
	console.log("Servidor rodando na porta: " + server.address().port);
});