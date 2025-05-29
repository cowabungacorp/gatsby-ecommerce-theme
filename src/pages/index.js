<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pulsar Azul - Em Breve!</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Define a fonte Inter para todo o corpo */
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f0f8ff; /* Um azul muito claro para o fundo */
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            padding: 20px; /* Adiciona um pouco de padding para telas menores */
            box-sizing: border-box;
        }
        /* Estilo para o contêiner principal */
        .container {
            background-color: #ffffff; /* Fundo branco para o conteúdo */
            border-radius: 1.5rem; /* Cantos mais arredondados */
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); /* Sombra suave */
            padding: 2.5rem; /* Padding interno */
            text-align: center;
            max-width: 600px; /* Largura máxima para o conteúdo */
            width: 100%; /* Garante que ocupe a largura total disponível */
        }
        /* Estilos para o título */
        h1 {
            color: #2c5282; /* Um azul mais escuro para o título */
            font-size: 2.5rem; /* Tamanho da fonte grande */
            font-weight: bold;
            margin-bottom: 1rem;
        }
        /* Estilos para o subtítulo/mensagem */
        p {
            color: #4a5568; /* Cor de texto padrão */
            font-size: 1.125rem; /* Tamanho da fonte para o parágrafo */
            line-height: 1.75;
            margin-bottom: 1.5rem;
        }
        /* Estilo para o nome da loja */
        .store-name {
            color: #3182ce; /* Um azul vibrante para o nome da loja */
            font-weight: bold;
            font-size: 1.25rem;
        }
        /* Estilo para o produto/nicho */
        .product-niche {
            color: #63b3ed; /* Um azul mais claro para o nicho */
            font-style: italic;
        }
        /* Estilo para o ícone de estrela */
        .star-icon {
            color: #f6ad55; /* Cor de estrela amarela/laranja */
            font-size: 2rem;
            margin-bottom: 1rem;
        }

        /* Responsividade para telas menores */
        @media (max-width: 640px) {
            h1 {
                font-size: 2rem; /* Reduz o tamanho do título em telas pequenas */
            }
            p {
                font-size: 1rem; /* Reduz o tamanho do parágrafo em telas pequenas */
            }
            .container {
                padding: 1.5rem; /* Reduz o padding em telas pequenas */
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="star-icon">★</div>
        <h1>Estamos Quase Lá!</h1>
        <p>
            Prepare-se para uma experiência incrível! A <span class="store-name">Pulsar Azul</span>
            está chegando com uma seleção especial de <span class="product-niche">produtos</span>
            cuidadosamente pensados para trazer conforto, desenvolvimento e alegria.
        </p>
        <p>
            Estamos trabalhando duro para que tudo esteja perfeito. Em breve, você terá acesso a um universo de
            possibilidades. Fique de olho!
        </p>
        <p class="text-sm text-gray-500 mt-4">
            Agradecemos a sua paciência e entusiasmo!
        </p>
    </div>
</body>
</html>
