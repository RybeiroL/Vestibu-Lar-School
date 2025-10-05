
// data.ts

export interface ModuleContentItem {
  title: string;
  description?: string;
  content: string | string[] | { question: string; answer: string }[];
}

export type ModuleContent = ModuleContentItem[];

export interface SubjectContent {
  resumos: ModuleContent;
  questoes: ModuleContent;
  simulados: ModuleContent;
  curiosidades: ModuleContent;
}

export const CONTENT_DATA: Record<string, SubjectContent> = {
  portugues: {
    resumos: [
      {
        title: 'Figuras de Linguagem',
        content: 'São recursos expressivos que desviam da norma padrão da língua para dar mais ênfase, expressividade e originalidade à comunicação.\n\nExemplos comuns:\n- Metáfora: "A vida é uma nuvem que voa." (comparação implícita)\n- Comparação: "Seus olhos são como jabuticabas." (comparação explícita com conectivo)\n- Metonímia: "Li Machado de Assis." (o autor pela obra)\n- Personificação: "O vento beija meus cabelos."',
      },
      {
        title: 'Uso da Crase',
        content: 'A crase (`) indica a fusão da preposição "a" com o artigo definido "a" ou com pronomes demonstrativos iniciados por "a".\n\nQuando usar:\n- Antes de palavras femininas: "Vou à feira."\n- Ao indicar horas: "Chego às 19h."\n- Em locuções adverbiais femininas: "às vezes", "à noite".\n\nDica: Troque a palavra feminina por uma masculina. Se o "a" virar "ao", há crase. Ex: "Vou ao mercado." -> "Vou à feira."',
      },
    ],
    questoes: [
      {
        title: 'Identifique',
        content: [
          {
            question: "Qual a figura de linguagem em 'O bonde passa cheio de pernas' (Carlos Drummond de Andrade)?",
            answer: 'Metonímia (a parte pelo todo - as pernas pelas pessoas).',
          },
          {
            question: "A frase 'Fui a farmácia' está correta?",
            answer: 'Não. O correto é "Fui à farmácia", pois quem vai, vai "a" algum lugar, e farmácia é uma palavra feminina que admite artigo.',
          },
        ],
      },
    ],
    simulados: [
        {
            title: "Simulado Rápido: Português Básico",
            content: [
              {
                question: 'Qual a classificação do sujeito na oração "Choveu muito ontem"?',
                answer: 'Oração sem sujeito, pois "chover" é um verbo que indica fenômeno da natureza.',
              },
              {
                question: 'Em "Ele é um monstro nos estudos", qual figura de linguagem está presente?',
                answer: 'Metáfora.',
              },
            ],
        }
    ],
    curiosidades: [
      {
        title: 'A maior palavra',
        content: 'A maior palavra da língua portuguesa (sem considerar termos técnicos) é "pneumoultramicroscopicossilicovulcanoconiose", com 46 letras, que se refere a uma doença pulmonar.',
      },
    ],
  },
  matematica: {
    resumos: [
      {
        title: 'Teorema de Pitágoras',
        content: 'Em qualquer triângulo retângulo, a soma dos quadrados dos catetos é igual ao quadrado da hipotenusa.\n\nFórmula: a² = b² + c²\n- a: hipotenusa (o lado oposto ao ângulo reto)\n- b e c: catetos (os lados que formam o ângulo reto)',
      },
      {
        title: 'Fórmula de Bhaskara',
        content: 'É utilizada para encontrar as raízes de uma equação do segundo grau (ax² + bx + c = 0).\n\n1. Delta (Δ): Δ = b² - 4ac\n2. Bhaskara: x = (-b ± √Δ) / 2a\n\n- Se Δ > 0, existem duas raízes reais e distintas.\n- Se Δ = 0, existe uma raiz real.\n- Se Δ < 0, não existem raízes reais.',
      },
    ],
    questoes: [
      {
        title: 'Calcule',
        content: [
          {
            question: 'Um triângulo retângulo tem catetos medindo 3cm e 4cm. Qual o valor da hipotenusa?',
            answer: 'a² = 3² + 4²  => a² = 9 + 16 => a² = 25 => a = 5cm.',
          },
          {
            question: 'Quais são as raízes da equação x² - 5x + 6 = 0?',
            answer: 'Δ = (-5)² - 4*1*6 = 25 - 24 = 1. x = (5 ± √1) / 2. Raízes: x1 = 3 e x2 = 2.',
          },
        ],
      },
    ],
    simulados: [
        {
            title: "Simulado Rápido de Equações",
            content: [
              {
                question: 'Qual o valor de x na equação 2x + 10 = 20?',
                answer: '2x = 20 - 10 => 2x = 10 => x = 5.',
              },
              {
                question: 'Em uma P.A. de razão 2, cujo primeiro termo é 3, qual é o quinto termo?',
                answer: 'a5 = a1 + (n-1)*r => a5 = 3 + (5-1)*2 => a5 = 3 + 8 = 11.',
              },
            ],
        }
    ],
    curiosidades: [
      {
        title: 'O número Pi (π)',
        content: 'Pi é uma constante matemática que representa a razão entre a circunferência de um círculo e seu diâmetro. É um número irracional, o que significa que suas casas decimais são infinitas e não se repetem!',
      },
    ],
  },
  historia: {
    resumos: [
      {
        title: 'Proclamação da República (1889)',
        content: 'Foi um levante político-militar que instaurou a forma republicana federativa presidencialista no Brasil, derrubando a monarquia. Liderada pelo Marechal Deodoro da Fonseca, marcou o fim do Império e o exílio de D. Pedro II.',
      },
      {
        title: 'Era Vargas (1930-1945)',
        content: 'Período em que Getúlio Vargas governou o Brasil. Divide-se em:\n- Governo Provisório (1930-1934)\n- Governo Constitucional (1934-1937)\n- Estado Novo (1937-1945) - Ditadura\nMarcado pela centralização do poder, direitos trabalhistas (CLT) e industrialização.',
      },
    ],
    questoes: [
      {
        title: 'Responda',
        content: [
          {
            question: 'Quem proclamou a República no Brasil?',
            answer: 'O Marechal Deodoro da Fonseca.',
          },
          {
            question: 'O que foi o Estado Novo?',
            answer: 'Foi o período ditatorial da Era Vargas, de 1937 a 1945, caracterizado pela censura e repressão.',
          },
        ],
      },
    ],
    simulados: [
        {
            title: "Simulado Rápido de Brasil República",
            content: [
              {
                question: 'Qual evento deu início à República Velha?',
                answer: 'A Proclamação da República em 15 de novembro de 1889.',
              },
              {
                question: 'A CLT (Consolidação das Leis do Trabalho) foi criada em qual governo?',
                answer: 'No governo de Getúlio Vargas, durante a Era Vargas.',
              },
            ],
        }
    ],
    curiosidades: [
      {
        title: 'Origem do nome "Brasil"',
        content: 'O nome Brasil vem da árvore Pau-Brasil, que era abundante no litoral na época da chegada dos portugueses. Sua madeira avermelhada, cor de brasa, era muito valiosa na Europa para tingir tecidos.',
      },
    ],
  },
  geografia: {
    resumos: [
      {
        title: 'Biomas Brasileiros',
        content: 'O Brasil possui 6 biomas principais:\n- Amazônia: Maior floresta tropical do mundo.\n- Mata Atlântica: Floresta tropical litorânea, muito devastada.\n- Cerrado: Savana brasileira, no planalto central.\n- Caatinga: Bioma semiárido, exclusivo do Brasil.\n- Pampa: Campos sulinos.\n- Pantanal: Maior planície inundável do planeta.',
      },
      {
        title: 'Relevo Brasileiro',
        content: 'É caracterizado por baixas altitudes, pois é uma formação antiga e desgastada. Principais formas:\n- Planaltos: Superfícies elevadas e aplainadas.\n- Planícies: Áreas planas e de baixa altitude.\n- Depressões: Áreas rebaixadas em relação ao seu entorno.',
      },
    ],
    questoes: [
      {
        title: 'Responda',
        content: [
          {
            question: 'Qual o maior bioma do Brasil?',
            answer: 'Amazônia.',
          },
          {
            question: 'Qual o ponto mais alto do Brasil?',
            answer: 'O Pico da Neblina, com 2.995 metros de altitude.',
          },
        ],
      },
    ],
    simulados: [
        {
            title: "Simulado Rápido de Geografia do Brasil",
            content: [
              {
                question: 'A Caatinga é um bioma característico de qual região brasileira?',
                answer: 'Da Região Nordeste.',
              },
              {
                question: 'Que tipo de clima predomina na região Norte do Brasil?',
                answer: 'Clima Equatorial, caracterizado por altas temperaturas e elevada umidade.',
              },
            ],
        }
    ],
    curiosidades: [
      {
        title: 'Por que o Brasil não tem terremotos?',
        content: 'O Brasil está localizado no centro da Placa Tectônica Sul-Americana, longe das bordas, que é onde ocorrem os encontros e atritos entre placas que causam os grandes terremotos.',
      },
    ],
  },
  quimica: {
    resumos: [
      {
        title: 'Tabela Periódica',
        content: 'Organiza os elementos químicos em ordem crescente de número atômico.\n\n- Períodos (linhas horizontais): Indicam o número de camadas eletrônicas.\n- Grupos ou Famílias (colunas verticais): Elementos com propriedades químicas semelhantes.\n\nPrincipais famílias: Metais Alcalinos (1), Alcalinoterrosos (2), Halogênios (17), Gases Nobres (18).',
      },
      {
        title: 'Balanceamento de Equações',
        content: 'Consiste em igualar o número de átomos de cada elemento nos reagentes (antes da seta) e nos produtos (depois da seta), seguindo a Lei de Lavoisier.\n\nMétodo das tentativas:\n1. Escolha um elemento (geralmente o que aparece menos vezes).\n2. Coloque coeficientes estequiométricos para igualar a quantidade dele.\n3. Prossiga com os outros elementos.\nEx: 2 H₂ + 1 O₂ -> 2 H₂O',
      },
    ],
    questoes: [
      {
        title: 'Responda',
        content: [
          {
            question: 'O que é um gás nobre?',
            answer: 'É um elemento da família 18, caracterizado por sua baixa reatividade química devido a ter a camada de valência completa.',
          },
          {
            question: 'Qual o símbolo químico do ouro?',
            answer: 'Au (vem do latim "aurum").',
          },
        ],
      },
    ],
    simulados: [
        {
            title: "Simulado Rápido de Química Geral",
            content: [
              {
                question: 'Qual é o número atômico do Carbono?',
                answer: '6.',
              },
              {
                question: 'Uma ligação iônica ocorre entre quais tipos de elementos?',
                answer: 'Geralmente entre um metal (que doa elétrons) e um ametal (que recebe elétrons).',
              },
            ],
        }
    ],
    curiosidades: [
      {
        title: 'De onde vem o cheiro de chuva?',
        content: 'O cheiro de "terra molhada" é causado por uma substância chamada geosmina, produzida por bactérias do solo. Quando a chuva cai, as gotas espalham essa substância no ar.',
      },
    ],
  },
  fisica: {
    resumos: [
      {
        title: 'Leis de Newton',
        content: '1. Primeira Lei (Inércia): Um corpo tende a permanecer em seu estado de movimento (repouso ou MRU) a menos que uma força resultante atue sobre ele.\n2. Segunda Lei (Princípio Fundamental da Dinâmica): A força resultante sobre um corpo é igual ao produto de sua massa pela sua aceleração (F = m.a).\n3. Terceira Lei (Ação e Reação): Para toda ação, há uma reação de mesmo módulo, mesma direção e sentido oposto.',
      },
      {
        title: 'Movimento Uniforme (MU)',
        content: 'É o movimento em que a velocidade do corpo é constante e diferente de zero. A aceleração é nula.\n\nFórmula (função horária do espaço):\nS = S₀ + v.t\n- S: posição final\n- S₀: posição inicial\n- v: velocidade\n- t: tempo',
      },
    ],
    questoes: [
      {
        title: 'Responda',
        content: [
          {
            question: 'Por que usamos cinto de segurança? Qual lei da Física explica isso?',
            answer: 'Para nos proteger em caso de freada brusca ou colisão. A Primeira Lei de Newton (Inércia) explica, pois nosso corpo tende a continuar em movimento.',
          },
          {
            question: 'Um carro viaja a 80 km/h por 2 horas. Qual a distância percorrida?',
            answer: 'd = v * t => d = 80 * 2 = 160 km.',
          },
        ],
      },
    ],
    simulados: [
        {
            title: "Simulado Rápido de Cinemática",
            content: [
              {
                question: 'O que é aceleração?',
                answer: 'É a grandeza física que mede a variação da velocidade em um determinado intervalo de tempo.',
              },
              {
                question: 'Um objeto em queda livre (desprezando a resistência do ar) está em que tipo de movimento?',
                answer: 'Movimento Retilíneo Uniformemente Variado (MRUV), pois sua velocidade aumenta constantemente devido à aceleração da gravidade.',
              },
            ],
        }
    ],
    curiosidades: [
      {
        title: 'O paradoxo dos gêmeos',
        content: 'É um experimento mental da relatividade especial. Se um gêmeo viajar ao espaço a uma velocidade próxima à da luz e depois voltar, ele estará mais jovem que o irmão que ficou na Terra. Isso ocorre por causa da dilatação do tempo prevista por Einstein.',
      },
    ],
  },
  biologia: {
    resumos: [
      {
        title: 'Citologia: A Célula',
        content: 'A célula é a unidade básica da vida. Existem dois tipos principais:\n- Procariontes: Simples, sem núcleo definido (ex: bactérias).\n- Eucariontes: Complexas, com núcleo e organelas (ex: animais, plantas).\n\nOrganelas importantes (eucariontes):\n- Mitocôndria: Respiração celular (energia).\n- Ribossomos: Síntese de proteínas.\n- Complexo de Golgi: "Empacota" e "exporta" substâncias.',
      },
      {
        title: 'Genética Mendeliana',
        content: 'Estuda a transmissão de características hereditárias.\n- 1ª Lei de Mendel: Cada característica é determinada por um par de fatores (alelos) que se separam na formação dos gametas.\n- Dominância: Um alelo (dominante) pode mascarar o outro (recessivo).\n- Segregação: Os alelos se separam para que cada gameta contenha apenas um alelo de cada par.',
      },
    ],
    questoes: [
      {
        title: 'Identifique',
        content: [
          {
            question: "Qual organela é conhecida como a 'central de energia' da célula?",
            answer: 'A mitocôndria, pois realiza a respiração celular para produzir ATP.',
          },
          {
            question: 'Qual a principal diferença entre uma célula procariótica e uma eucariótica?',
            answer: 'A ausência de um núcleo celular definido e de organelas membranosas na célula procariótica.',
          },
        ],
      },
    ],
    simulados: [
      {
        title: "Simulado Rápido de Ecologia",
        content: [
          {
            question: 'O que é uma cadeia alimentar?',
            answer: 'É a sequência de organismos que servem de alimento uns para os outros, representando o fluxo de matéria e energia em um ecossistema.',
          },
          {
            question: 'Qual o papel dos decompositores em um ecossistema?',
            answer: 'Reciclar a matéria orgânica, devolvendo os nutrientes ao ambiente para serem reutilizados pelos produtores.',
          },
        ],
      },
    ],
    curiosidades: [
      {
        title: 'DNA Humano',
        content: 'Se você pudesse desenrolar e esticar todo o DNA de todas as células do seu corpo, a fita resultante iria da Terra até o Sol e de volta mais de 300 vezes!',
      },
    ],
  },
  filosofia: {
    resumos: [
      {
        title: 'Mito da Caverna (Platão)',
        content: 'Uma alegoria sobre a condição humana perante o conhecimento. Prisioneiros em uma caverna veem apenas sombras (mundo sensível) e as tomam como realidade. Aquele que se liberta e vê a luz do sol (mundo das ideias) conhece a verdade, mas tem dificuldade em convencer os outros.',
      },
      {
        title: 'Penso, logo existo (Descartes)',
        content: 'Frase que resume o pensamento de René Descartes. Ele buscou uma verdade inquestionável e concluiu que, mesmo que duvidasse de tudo, não poderia duvidar de sua própria existência enquanto ser pensante. É o fundamento do racionalismo moderno.',
      },
    ],
    questoes: [
      {
        title: 'Relacione',
        content: [
          {
            question: 'O que o "sol" representa na Alegoria da Caverna?',
            answer: 'Representa a ideia do Bem, a fonte da verdade e do conhecimento verdadeiro (episteme).',
          },
          {
            question: 'Qual o método utilizado por Sócrates para chegar ao conhecimento?',
            answer: 'A maiêutica, que consistia em fazer perguntas sucessivas para "dar à luz" às ideias que já estavam na mente da pessoa.',
          },
        ],
      },
    ],
    simulados: [
      {
        title: "Simulado Rápido: Filósofos",
        content: [
          {
            question: 'Quem é considerado o "pai da filosofia"?',
            answer: 'Tales de Mileto, um dos primeiros filósofos pré-socráticos.',
          },
          {
            question: 'A frase "O homem é o lobo do homem" é atribuída a qual filósofo contratualista?',
            answer: 'Thomas Hobbes.',
          },
        ],
      },
    ],
    curiosidades: [
      {
        title: 'O Filósofo Cínico',
        content: 'Diógenes, um dos mais famosos filósofos cínicos, vivia em um barril em Atenas. Certa vez, Alexandre, o Grande, foi visitá-lo e ofereceu-lhe o que quisesse. Diógenes respondeu: "Não me tires o que não me podes dar: saia da frente do meu sol."',
      },
    ],
  },
  sociologia: {
    resumos: [
      {
        title: 'Fato Social (Durkheim)',
        content: 'Para Émile Durkheim, os fatos sociais são "maneiras de agir, pensar e sentir" que são externas ao indivíduo e exercem um poder coercitivo sobre ele. São os objetos de estudo da Sociologia.\n\nCaracterísticas:\n- Coercitividade: Imposição sobre os indivíduos.\n- Exterioridade: Existem independentemente das vontades individuais.\n- Generalidade: São comuns à maioria dos membros da sociedade.',
      },
      {
        title: 'Ação Social (Weber)',
        content: 'Max Weber foca na ação dos indivíduos. Ação social é qualquer ação que possui um sentido e uma finalidade orientada pelas ações de outros. A Sociologia busca compreender o sentido que os atores dão às suas ações.',
      },
    ],
    questoes: [
      {
        title: 'Diferencie',
        content: [
          {
            question: 'A moda pode ser considerada um Fato Social? Por quê?',
            answer: 'Sim. É geral (atinge muitas pessoas), externa (não foi criada por um indivíduo isolado) e coercitiva (gera pressão para segui-la).',
          },
          {
            question: 'Qual a principal diferença entre o método de Durkheim e o de Weber?',
            answer: 'Durkheim adota uma abordagem positivista, vendo a sociedade como uma estrutura que se impõe ao indivíduo. Weber adota uma abordagem compreensiva, focando no sentido que os indivíduos dão às suas ações.',
          },
        ],
      },
    ],
    simulados: [
      {
        title: "Simulado Rápido: Conceitos",
        content: [
          {
            question: 'O conceito de "mais-valia" foi desenvolvido por qual pensador?',
            answer: 'Karl Marx.',
          },
          {
            question: 'O que é "Indústria Cultural" para a Escola de Frankfurt?',
            answer: 'É a produção de cultura em massa como mercadoria, visando o lucro e a padronização do pensamento.',
          },
        ],
      },
    ],
    curiosidades: [
      {
        title: 'A Origem do Nome',
        content: 'A palavra "Sociologia" foi criada por Auguste Comte em 1838. É um híbrido de "socius" (latim, que significa "social") e "logos" (grego, que significa "estudo" ou "ciência").',
      },
    ],
  },
  ingles: {
    resumos: [
      {
        title: 'Simple Present',
        content: 'Used for habits, routines, and general facts.\n\n- Affirmative: I/You/We/They work. He/She/It works.\n- Negative: I/You/We/They do not (don\'t) work. He/She/It does not (doesn\'t) work.\n- Interrogative: Do you work? Does he work?',
      },
      {
        title: 'Present Continuous',
        content: 'Used for actions happening at the moment of speaking or for temporary situations.\n\nStructure: Subject + verb "to be" (am/is/are) + main verb (-ing).\n- Example: "You are studying English now."\n- Example: "I am not sleeping, I am reading."',
      },
    ],
    questoes: [
      {
        title: 'Fill in the blanks',
        content: [
          {
            question: 'She ________ (to study) for her exam at the moment.',
            answer: 'is studying',
          },
          {
            question: 'They usually ________ (to play) soccer on weekends.',
            answer: 'play',
          },
        ],
      },
    ],
    simulados: [
      {
        title: "Quick Quiz: Verb Tenses",
        content: [
          {
            question: 'Choose the correct option: "I _____ to the cinema yesterday."',
            answer: 'went (Simple Past)',
          },
          {
            question: 'What is the past participle of the verb "to see"?',
            answer: 'seen',
          },
        ],
      },
    ],
    curiosidades: [
      {
        title: 'Ghost Words',
        content: 'A "ghost word" is a word that has appeared in a dictionary through a misreading or a typographical error, but that has never actually been used. An example is the word "dord," which appeared in a dictionary for years meaning "density."',
      },
    ],
  },
  espanhol: {
    resumos: [
      {
        title: 'Artículos Definidos e Indefinidos',
        content: 'Artículos definidos (o, a, os, as):\n- Masculino Singular: el (el coche)\n- Feminino Singular: la (la casa)\n- Masculino Plural: los (los coches)\n- Feminino Plural: las (las casas)\n\nArtículos indefinidos (um, uma, uns, umas):\n- Masculino Singular: un (un perro)\n- Feminino Singular: una (una mesa)\n- Masculino Plural: unos (unos perros)\n- Feminino Plural: unas (unas mesas)',
      },
      {
        title: 'Verbos Ser y Estar',
        content: 'Ser (essência, permanente):\n- Identidade: "Yo soy brasileño."\n- Profissão: "Ella es médica."\n- Características: "El coche es rojo."\n\nEstar (estado, temporário):\n- Localização: "Estoy en casa."\n- Estado de ânimo/saúde: "Él está enfermo."\n- Ações em andamento (gerúndio): "Estamos estudiando."',
      },
    ],
    questoes: [
      {
        title: 'Complete',
        content: [
          {
            question: 'Completa la frase: "_____ (o) perro de Juan es grande."',
            answer: 'El',
          },
          {
            question: 'Completa la frase: "Nosotros ________ (estamos) muy felices hoy."',
            answer: 'estamos',
          },
        ],
      },
    ],
    simulados: [
      {
        title: "Simulado Rápido: Español Básico",
        content: [
          {
            question: 'Como se diz "bom dia" em espanhol?',
            answer: 'Buenos días.',
          },
          {
            question: 'Qual o pronome pessoal para "eu" em espanhol?',
            answer: 'Yo.',
          },
        ],
      },
    ],
    curiosidades: [
      {
        title: 'Falsos Cognatos (Falsos Amigos)',
        content: 'Cuidado! Muitas palavras em espanhol parecem com o português, mas têm significados diferentes. Um exemplo famoso é "embarazada", que significa "grávida", e não "embaraçada". Outro é "exquisito", que significa "delicioso" ou "refinado", e não "esquisito".',
      },
    ],
  },
  artes: {
    resumos: [
      {
        title: 'Renascimento',
        description: 'Movimento cultural e artístico (séculos XIV-XVI) que valorizava o humanismo, o racionalismo e a inspiração na antiguidade clássica (Grécia e Roma). Artistas: Leonardo da Vinci, Michelangelo.',
        content: 'Características:\n- Uso da perspectiva e profundidade.\n- Realismo e idealização da figura humana.\n- Temas religiosos e mitológicos.',
      },
      {
        title: 'Impressionismo',
        description: 'Movimento do século XIX que buscava capturar a "impressão" do momento, focando na luz e na cor em vez de detalhes precisos. Artistas: Monet, Renoir, Degas.',
        content: 'Características:\n- Pinceladas soltas e visíveis.\n- Pintura ao ar livre para capturar a luz natural.\n- Ênfase nas cores e sombras.',
      },
    ],
    questoes: [
      {
        title: 'Identifique',
        content: [
          {
            question: 'Quem pintou a "Mona Lisa"?',
            answer: 'Leonardo da Vinci.',
          },
          {
            question: 'O "Abaporu", de Tarsila do Amaral, é um marco de qual movimento artístico brasileiro?',
            answer: 'Do Movimento Antropofágico, uma fase do Modernismo Brasileiro.',
          },
        ],
      },
    ],
    simulados: [
      {
        title: "Simulado Rápido: Movimentos",
        content: [
          {
            question: 'Figuras distorcidas e cores vibrantes para expressar emoções são características de qual vanguarda europeia?',
            answer: 'Expressionismo.',
          },
          {
            question: 'A obra "Guernica" de Picasso é um exemplo de qual movimento?',
            answer: 'Cubismo.',
          },
        ],
      },
    ],
    curiosidades: [
      {
        title: 'O Roubo da Mona Lisa',
        content: 'Em 1911, a Mona Lisa foi roubada do Museu do Louvre. O ladrão, um funcionário italiano, a escondeu em seu apartamento por dois anos, acreditando que a obra pertencia à Itália. O roubo, ironicamente, foi o que a tornou a pintura mais famosa do mundo.',
      },
    ],
  },
};
