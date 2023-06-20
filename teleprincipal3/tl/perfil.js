var linkProjetos = [ 
	{
		linkProjeto: "https://codepen.io/denersonpinas/full/abwEpge",
		linkImg:
			"https://help.nflxext.com/43e0db2f-fea0-4308-bfb9-09f2a88f6ee4_what_is_netflix_1_en.png",
		span: "2021 - Atual",
		title: "Projeto AluraFlix",
		subTitle: "Front-end",
		resumo:
			"Projeto produziodo para conclusão de desafio proposto pelo grupo alura, em seu evento #imersaodev, o projeto tinha foco em inicialização de dev no mercado de programação e as linguagens propostas era HTML, CSS e JS com foco em JavaScrip. Este desafio tinha como objetivo mostrar a utilização de arrays e laço de repetiçao com JS.",
		like: 0
	},
	{
		linkProjeto: "https://codepen.io/denersonpinas/full/gORKpMW",
		linkImg:
			"https://s2.glbimg.com/aYfQZ5UwrzQixqtfFbJbqsh2nz8=/0x0:695x521/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/Q/6/0IplR1QqO896iHN7QggA/2014-03-20-yu-gi-oh-01.jpg",
		span: "2021 - Atual",
		title: "Projeto Super Trunfo - YuGiDEV",
		subTitle: "Front-end",
		resumo:
			"Projeto produziodo para conclusão de desafio proposto pelo grupo alura, em seu evento #imersaodev, o projeto tinha foco em inicialização de dev no mercado de programação e as linguagens propostas era HTML, CSS e JS com foco em JavaScrip. Este desafio tinha como objetivo mostrar a utilização de arrays e laço de repetiçao com JS.",
		like: 0
	},
	{
		linkProjeto: "https://codepen.io/denersonpinas/full/MWoEpGy",
		linkImg:
			"https://img.freepik.com/vetores-premium/projeto-da-ferramenta-calculadora_24908-75349.jpg?w=740",
		span: "2021 - Atual",
		title: "Projeto Calculadora",
		subTitle: "Front-end",
		resumo:
			"Projeto produziodo para conclusão de desafio proposto pelo grupo alura, em seu evento #imersaodev, o projeto tinha foco em inicialização de dev no mercado de programação e as linguagens propostas era HTML, CSS e JS com foco em JavaScrip. Este desafio tinha como objetivo mostrar a utilização de arrays e laço de repetiçao com JS.",
		like: 0
	},
	{
		linkProjeto: "https://codepen.io/denersonpinas/full/BaZxKMG",
		linkImg:
			"https://img.freepik.com/vetores-premium/torneio-de-suporte-de-futebol-16-modelos-de-chave-de-torneio-de-equipe-tabela-de-classificacao-em-branco-tabela-de-playoffs_680692-8.jpg?w=740",
		span: "2021 - Atual",
		title: "Projeto Tabela de Classificação",
		subTitle: "Front-end",
		resumo:
			"Projeto produziodo para conclusão de desafio proposto pelo grupo alura, em seu evento #imersaodev, o projeto tinha foco em inicialização de dev no mercado de programação e as linguagens propostas era HTML, CSS e JS com foco em JavaScrip. Este desafio tinha como objetivo mostrar a utilização de arrays e laço de repetiçao com JS.",
		like: 0
	}
];

function Projetos() {
	var elementProjetos = document.getElementById("projetos");
	var elemento = "";
	console.log(linkProjetos.length);

	for (let i = 0; i < linkProjetos.length; i++) {
		const projeto = linkProjetos[i];

		elemento += '<div class="container-projeto">';
		elemento += '<a href="' + projeto.linkProjeto + '" target="_blanck">';
		elemento += '<img src="' + projeto.linkImg + '" alt="' + projeto.title + '">';
		elemento += "<div>";
		elemento += "<span>" + projeto.span + "</span>";
		elemento += "<h1>" + projeto.title + "</h1>";
		elemento += "<h2>" + projeto.subTitle + "</h2>";
		elemento += "<p>" + projeto.resumo + "</p>";
		elemento += "</div>";
		elemento += "</a>";
		elemento += '<div class="like" onclick="like(' + i + ')">';
		elemento += '<i class="far fa-heart"></i>';
		elemento += '<p id="like' + i + '">' + projeto.like + "</p>";
		elemento += "</div>";
		elemento += "</div>";
	}

	elementProjetos.innerHTML = elemento;
}

function like(i) {
	document.getElementById("like" + i).innerHTML = linkProjetos[i].like += 1;
}

function mudaTema() {
	var elementButton = document.getElementById("clear");
	document.body.classList.toggle("clear");

	if (document.body.classList == "clear") {
		elementButton.innerHTML = "DARK MODE";
	} else {
		elementButton.innerHTML = "CLEAR MODE";
	}
}

// Abrir/fechar o menu responsivo
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('.nav-list').classList.toggle('active');
  });
  

  