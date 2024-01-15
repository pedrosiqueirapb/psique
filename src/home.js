$(document).ready(()=>{
    $('body').css('background-color', '#f3f2f2')

    
})

function exibeInfosPsicologo(nomePsicologo, nomeExibicao, caminhoImagem){
    
    // Objeto com as informações correspondentes a cada psicólogo(a)
    const infosPsicologo = {
        "pedro-martins": "Pedro Martins é um psicólogo com doutorado em Psicologia Clínica pela Universidade Federal de São Paulo (UNIFESP). Sua formação de graduação foi na Universidade Estadual de Campinas (UNICAMP). Ele é especializado em Psicoterapia Cognitivo-Comportamental, com ênfase no tratamento de ansiedade e transtornos do humor. Pedro possui vasta experiência no atendimento a adultos e adolescentes.",
        "rafael-oliveira": "Rafael Oliveira é mestre em Psicologia Social pela Universidade de Brasília (UnB) e graduado em Psicologia pela Universidade Federal de Minas Gerais (UFMG). Sua especialidade está na Psicologia Organizacional e do Trabalho, com foco em coaching, desenvolvimento de liderança e gestão de estresse no ambiente de trabalho.",
        "lucas-almeida": "Lucas Almeida é graduado em Psicologia pela Universidade Federal do Rio de Janeiro (UFRJ) e possui especialização em Neuropsicologia pela Pontifícia Universidade Católica (PUC-RJ). Sua especialidade é a Neuropsicologia Clínica, e ele trabalha com avaliação neuropsicológica em crianças e adultos, auxiliando no diagnóstico e reabilitação de distúrbios neuropsicológicos.",
        "andre-costa": "André Costa possui doutorado em Psicologia Experimental pela Universidade de São Paulo (USP) e graduou-se em Psicologia na Universidade Estadual Paulista (UNESP). Sua especialidade é a Psicologia Experimental e Pesquisa, com foco na investigação de processos cognitivos, especialmente memória e aprendizagem.",
        "tiago-santos": "Tiago Santos é graduado em Psicologia pela Universidade Federal de Pernambuco (UFPE) e possui mestrado em Psicologia Clínica pela Universidade Federal da Bahia (UFBA). Sua especialidade é a Psicologia Infantil e Adolescente, e ele realiza intervenções psicoterapêuticas voltadas para o desenvolvimento emocional e comportamental de crianças e adolescentes.",
        "camila-silva": "Camila Silva é uma psicóloga com doutorado em Psicologia da Saúde pela Universidade de São Paulo (USP) e graduação em Psicologia pela Universidade Estadual de Londrina (UEL). Sua especialidade é a Psicologia da Saúde, e ela atua no suporte psicológico a pacientes com doenças crônicas, desenvolvendo estratégias para melhorar a qualidade de vida.",
        "mariana-souza": "Mariana Souza possui mestrado em Psicologia Clínica pela Pontifícia Universidade Católica de Minas Gerais (PUC-MG) e graduou-se em Psicologia pela Universidade Federal de Uberlândia (UFU). Sua especialidade é a Psicologia Existencial-Humanista, trabalhando com questões relacionadas à busca de sentido na vida, autoconhecimento e desenvolvimento pessoal.",
        "lais-pereira": "Laís Pereira é graduada em Psicologia pela Universidade Federal do Ceará (UFC) e possui especialização em Psicologia Organizacional. Sua expertise está na Psicologia Organizacional e do Trabalho, contribuindo para o desenvolvimento de ambientes profissionais saudáveis e produtivos.",
        "beatriz-rocha": "Beatriz Rocha é doutora em Psicologia Educacional pela Universidade Estadual de Campinas (UNICAMP) e graduada em Psicologia pela Universidade Federal de Goiás (UFG). Sua especialidade é a Psicologia do Desenvolvimento, focando em questões relacionadas ao crescimento e evolução psicológica ao longo da vida.",
        "fernanda-lima": "Fernanda Lima é graduada em Psicologia pela Universidade Federal do Rio Grande do Sul (UFRGS) e possui mestrado em Psicologia Clínica pela Universidade de São Paulo (USP). Sua especialidade é a Psicologia Familiar e de Casal, oferecendo suporte psicológico para casais e famílias, auxiliando na resolução de conflitos e fortalecimento dos relacionamentos."
    };

    // Obtendo a descrição do psicólogo(a)
    const descPsicologo = infosPsicologo[nomePsicologo];

    // Nova aba com as informações
    const novaAba = window.open('', '_blank');

    novaAba.document.write(`
        <html>
        <head>
            <title>${nomeExibicao}</title>
            <link rel="stylesheet" href="home.css">
            <!-- Bootstrap -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
            <!-- Google Fonts -->
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap" rel="stylesheet">
        </head>
        <body>
            <!-- Cabeçalho -->
            <header>
                <div class="container">
                    <div class="row" style="align-items: center;">
                        <div class="col-3">
                            <img src="imgs/tipografia.png" alt="" id="tipografia">
                        </div>
                    </div>
                </div>
            </header>

            <!-- Corpo -->
            <main>
                <h1>${nomeExibicao}</h1>
                <img src="${caminhoImagem}" alt="${nomeExibicao}">
                <p>${descPsicologo}</p>
            </main>

            <!-- Rodapé -->
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-3">
                            <img src="imgs/tipografia.png" alt="" id="tipografia">
                        </div>
                        <div class="col-9">
                            <p>© 2024 Psiquê. Todos os direitos reservados.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </body>
        </html>
    `);

    novaAba.document.close();
}

const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container-slider .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;

        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Imagens dos slides de acordo com os cliques do botão
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    }

    // Atualiza a posição da barra de rolagem com base na rolagem da imagem
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
        updateScrollThumbPosition();
    });
}

window.addEventListener("load", initSlider);