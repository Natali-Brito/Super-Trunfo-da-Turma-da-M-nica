var imagem= new Image();

/*-----------------------SUPER TRUNFO------------------------------*/

var carta0={
	Indice:"SUPER TRUNFO",
	Nome: "TURMA DA MONICA",
	Personagem:"",
	Atributos:{
		humor:16,
		esperteza:80,
		ano:1960,
		hall:9,
		idade:7
	}
};

/*----------------------------A-----------------------------------*/
var carta1={
	Indice:"1A",
	Nome: "Cebolinha",
	Personagem:"images/Cebolinha.png",
	Atributos:{
		humor:16,
		esperteza:80,
		ano:1960,
		hall:9,
		idade:7
	}
};

var carta2={
	Indice:"2A",
	Nome: "Franjinha",
	Personagem:"images/Franjinha.png",
	Atributos:{
		humor:18,
		esperteza:100,
		ano:1959,
		hall:8,
		idade:10
	}
};

var carta3={
	Indice:"3A",
	Nome: "Zé da Roça",
	Personagem:"images/Zedaroca.png",
	Atributos:{
		humor:17,
		esperteza:80,
		ano:1960,
		hall:6,
		idade:8
	}
};

var carta4={
	Indice:"4A",
	Nome: "Astronauta",
	Personagem:"images/Astronauta.png",
	Atributos:{
		humor:15,
		esperteza:100,
		ano:1963,
		hall:7,
		idade:21
	}
};

/*----------------------------B-----------------------------------*/

var carta5={
	Indice:"1B",
	Nome: "Mônica",
	Personagem:"images/Monica.png",
	Atributos:{
		humor:15,
		esperteza:70,
		ano:1963,
		hall:10,
		idade:7
	}
};

var carta6={
	Indice:"2B",
	Nome: "Anjinho",
	Personagem:"images/Anjinho.png",
	Atributos:{
		humor:15,
		esperteza:70,
		ano:63,
		hall:10,
		idade:7
	}
};

var carta7={
	Indice:"3B",
	Nome: "Bidu",
	Personagem:"images/Bidu.png",
	Atributos:{
		humor:12,
		esperteza:40,
		ano:1959,
		hall:8,
		idade:5
	}
};

var carta8={
	Indice:"4B",
	Nome: "Louco",
	Personagem:"images/Louco.png",
	Atributos:{
		humor:20,
		esperteza:100,
		ano:1973,
		hall:6,
		idade:25
	}
};

/*----------------------------C-----------------------------------*/
var carta9={
	Indice:"1C",
	Nome: "Cascão",
	Personagem:"images/Cascao.png",
	Atributos:{
		humor:18,
		esperteza:90,
		ano:1961,
		hall:8,
		idade:7
	}
};

var carta10={
	Indice:"2C",
	Nome: "Marina",
	Personagem:"images/Marina.png",
	Atributos:{
		humor:20,
		esperteza:90,
		ano:1994,
		hall:7,
		idade:8
	}
};

var carta11={
	Indice:"3C",
	Nome: "Sansão",
	Personagem:"images/Sansao.png",
	Atributos:{
		humor:12,
		esperteza:30,
		ano:1963,
		hall:8,
		idade:6
	}
};

var carta12={
	Indice:"4C",
	Nome: "Jeremias",
	Personagem:"images/Jeremias.png",
	Atributos:{
		humor:18,
		esperteza:80,
		ano:1960,
		hall:5,
		idade:10
	}
};

/*----------------------------D-----------------------------------*/

var carta13={
	Indice:"1D",
	Nome: "Papa Capim",
	Personagem:"images/Papacapim.png",
	Atributos:{
		humor:18,
		esperteza:70,
		ano:1964,
		hall:5,
		idade:7
	}
};

var carta14={
	Indice:"2D",
	Nome: "Magali",
	Personagem:"images/Magali.png",
	Atributos:{
		humor:20,
		esperteza:80,
		ano:1963,
		hall:8,
		idade:7
	}
};

var carta15={
	Indice:"3D",
	Nome: "Chico Bento",
	Personagem:"images/Chicobento.png",
	Atributos:{
		humor:18,
		esperteza:70,
		ano:1961,
		hall:9,
		idade:7
	}
};

var carta16={
	Indice:"4D",
	Nome: "Mingau",
	Personagem:"images/Mingau.png",
	Atributos:{
		humor:12,
		esperteza:70,
		ano:1999,
		hall:6,
		idade:2
	}
};

/* -----------------------------------------FUNCTIONS----------------------------------------------- */

let baralhoJogador = []	
let baralhoMaquina = []	
let monte=[];

var cartaJogador, cartaMaquina, sorteiojogador, sorteiomaquina;
var select = document.getElementById("select");
document.getElementById("btn-jogar").disabled = true;

//Mostra alert ao carregar a pagina
window.onload = function() {
	Swal.fire({
		title: 'Super Trunfo da Turma da Mônica',
		text: 'Para começar a jogar clique no botão.',
		imageUrl: 'images/tm1.png',
  		showDenyButton: true,
		denyButtonText: 'Sair',
		confirmButtonText: 'Iniciar Jogo',
		//Style
		imageWidth: 150,
  		imageHeight: 154,
  		imageAlt: 'Custom image',
		confirmButtonColor: '#009900',
		denyButtonColor: '#ff6600',
  		
  	}).then((result) => {
	  
	  if (result.isConfirmed) {
	    embaralhar()
	  } 
	  else if (result.isDenied){
	    window.location.href = "index.html";
	  }
	})
}

function embaralhar(){
	// Array com todas as cartas criadas que simula o baralho completo
	var cartas = [carta1,carta2,carta3,carta4,carta5,carta6,carta7,carta8,
	carta9,carta10,carta11,carta12,carta13,carta14,carta15,carta16]
 
	//Montar baralho do jogador
	for(var i = 0; i < 8; i++){
		//Sortear um numero aleatorio para escolher uma carta do baralho
		let num = parseInt(Math.random()* cartas.length);
		//A carta sorteada sera adicionada ao baralho do Jogador
		baralhoJogador.push(cartas[num])
		//A carta escolhida sera removida do baralho para não haver carta repetidas
		cartas.splice(num,1);
	}
	
	//Montar baralho da máquina
	for( var x in cartas){
		// As cartas restantes serão incluidas no baralho da Maquina
		baralhoMaquina.push(cartas[x])
	}	
	placar();
}

function sortearCarta(){
	hideCartaM()
	// Sortear uma carta aleatoria do baralho do jogador e da maquina
	sorteiojogador = parseInt(Math.random()*8);
	sorteiomaquina = parseInt(Math.random()*8);
	cartaJogador = baralhoJogador[sorteiojogador];
	cartaMaquina = baralhoMaquina[sorteiomaquina];
	cartaJ();
	document.getElementById("btn-sortear").disabled = true;
	escolherAtributo();
	
	$("#select").prop('disabled',false);
}

function escolherAtributo(){
	//Pega o select criado no HTML e adiciona os options com os atributos das cartas para o jogador escolher
	for( x in cartaJogador.Atributos){
		if(select.options.length < 6){
			select.options[select.options.length] = new Option(x, x);
		}
	}
	document.getElementById("btn-jogar").disabled = false;
}

function sorteioAtributoMaquina(){
	//Quando a maquina vencer, sortear um atributo para ser disputado na proxima jogada
	let atrib = ["humor","esperteza","ano","hall","idade"];
	let sorteio = parseInt(Math.random()*5);
	let x = atrib[sorteio];
	return cartaMaquina.Atributos[x];
}

function jogar(){
	showCartaM();
	//Pega o atributo que o jogador escolheu para disputar das cartas sorteadas de ambos os baralhos  
 	let atributo = select.options[select.selectedIndex].value;
	let resultadoJogador = cartaJogador.Atributos[atributo]; 
	let resultadoMaquina = cartaMaquina.Atributos[atributo]; 

	//Verifica se o atributo foi selecionado
	if (atributo == "") {
		Swal.fire({
			title: 'Campo Atributo vazio',
			text: 'Por favor escolha um atributo',
			confirmButtonText: 'Ok',
			icon: 'error',
			//Style
			confirmButtonColor: '#009900',
		})
		document.getElementById("btn-jogar").disabled = true;
	}

	else{

		//Compara os valores dos atributos e informa quem ganhou
		if( resultadoJogador > resultadoMaquina){
			document.getElementById("resultado").innerHTML = "Você venceu"; 
			//Caso tenha havido empate antes da jogada, verifica se no monte tem cartas e se tiver inclui no baralho do jogador
			if(monte.length > 0){
				for (x in monte){
					baralhoJogador.push(monte[x])
				}
			}
			//Pega a carta do baralho da maquina que foi sorteada e adiciona no baralho do jogador
			baralhoJogador.push(cartaMaquina)
			//Exclui a carta do baralho da maquina
			baralhoMaquina.splice(sorteiojogador,1)
		}

		else if( resultadoMaquina > resultadoJogador ){
			document.getElementById("resultado").innerHTML = "Você perdeu"; 
			//Caso tenha havido empate antes da jogada, verifica se no monte tem cartas e se tiver inclui no baralho da maquina
			if(monte.length > 0){
				for (x in monte){
					baralhoMaquina.push(monte[x])
				}
			}
			//Pega a carta do baralho do jogador que foi sorteada e adiciona no baralho da maquina
			baralhoMaquina.push(cartaJogador)
			//Exclui a carta do baralho do jogador
			baralhoJogador.splice(sorteiomaquina,1)
		}

		else{
			//Caso empate, as cartas sorteadas serão adicionadas ao monte e excluidas dos baralhos
			monte.push(baralhoJogador[sorteiojogador])
			baralhoJogador.splice(sorteiojogador,1)
			monte.push(baralhoMaquina[sorteiomaquina])
			baralhoMaquina.splice(sorteiomaquina,1)
			Swal.fire({
				title: 'Empatou. Jogue novamente',
				confirmButtonText: 'Jogar',
				confirmButtonColor: '#009900',
			}).then((result) => {
				
				if (result.isConfirmed) {
					sortearCarta();
				} 
			}) 
		}
	}

	//Desabilitar select 
	$("#select").prop('disabled',true);
	//Resetar valor do select
	$("#select").val("");
	//Desabilitar botão Jogar
	document.getElementById("btn-jogar").disabled = true;
	//Habilitar botão sortear
	document.getElementById("btn-sortear").disabled = false;

	placar();
} 

function placar(){
	// Mostra quantas cartas tem em cada baralho
	placarJogador = document.getElementById("placarjogador");
	placarJogador.innerHTML = baralhoJogador.length;
	placarMaquina = document.getElementById("placarmaquina");
	placarMaquina.innerHTML = baralhoMaquina.length;
	placarMonte = document.getElementById("placarmonte");
	placarMonte.innerHTML = monte.length;
}

function vencedorPartida(){
	//Verifica se a maquina zerou o baralho
	if(baralhoMaquina.length == 0){
		alert("Você venceu a partida")
	}
	//Verifica se o jogador zerou o baralho
	else if(baralhoJogador.length == 0){
		alert("Você foi derrotado pela maquina")
	}
}

function cartaJ(){
   document.getElementById('personagemJ').style.backgroundImage='url('+cartaJogador.Personagem+')';
	document.getElementById("nomeJ").innerHTML=cartaJogador.Nome;
	document.getElementById("indiceJ").innerHTML=cartaJogador.Indice;
	document.getElementById("humorJ").innerHTML="<span> Humor: </span> "+ cartaJogador.Atributos.humor;
	document.getElementById("espertezaJ").innerHTML="<span> Esperteza: </span> "+cartaJogador.Atributos.esperteza;
	document.getElementById("anoJ").innerHTML="<span> Ano de criação: </span> "+ cartaJogador.Atributos.ano;
	document.getElementById("hallJ").innerHTML="<span> Hall da fama: </span> "+ cartaJogador.Atributos.hall;
	document.getElementById("idadeJ").innerHTML="<span> Idade: </span> "+ cartaJogador.Atributos.idade;
}

function showCartaM(){
   document.getElementById('personagemM').style.backgroundImage='url('+cartaMaquina.Personagem+')';
	document.getElementById("nomeM").innerHTML=cartaMaquina.Nome;
	document.getElementById("indiceM").innerHTML=cartaMaquina.Indice;
	document.getElementById("humorM").innerHTML="<span> Humor: </span> "+ cartaMaquina.Atributos.humor;
	document.getElementById("espertezaM").innerHTML="<span> Esperteza: </span> "+cartaMaquina.Atributos.esperteza;
	document.getElementById("anoM").innerHTML="<span> Ano de criação: </span> "+ cartaMaquina.Atributos.ano;
	document.getElementById("hallM").innerHTML="<span> Hall da fama: </span> "+ cartaMaquina.Atributos.hall;
	document.getElementById("idadeM").innerHTML="<span> Idade: </span> "+ cartaMaquina.Atributos.idade;
}

function hideCartaM(){
   document.getElementById('personagemM').style.backgroundImage="";
	document.getElementById("nomeM").innerHTML="";
	document.getElementById("indiceM").innerHTML="";
	document.getElementById("humorM").innerHTML="...";
	document.getElementById("espertezaM").innerHTML="...";
	document.getElementById("anoM").innerHTML="...";
	document.getElementById("hallM").innerHTML="...";
	document.getElementById("idadeM").innerHTML="...";
}


if(cartaJogador.Indice == "SuperTrunfo"){
	if((cartaMaquina.Indice == "1A") || (cartaMaquina.Indice == "2A")|| (cartaMaquina.Indice == "3A")|| (cartaMaquina.Indice == "4A")){
		document.getElementById("resultado").innerHTML = "Você perdeu"; 
	}else{
		document.getElementById("resultado").innerHTML = "Você ganhou"; 
	}
}
else if(cartaMaquina.Indice == "SuperTrunfo"){
	if((cartaJogador.Indice == "1A") || (cartaJogador.Indice == "2A")|| (cartaJogador.Indice == "3A")|| (cartaJogador.Indice == "4A")){
		document.getElementById("resultado").innerHTML = "Você ganhou"; 
	}else{
		document.getElementById("resultado").innerHTML = "Você perdeu"; 
	}
}


