import { InstructionItem } from '../types/worksheet';

export const VIDEO_INSTRUCTION = {
  bulletText: '• Visionamento de um pequeno vídeo: https://www.youtube.com/watch?v=q47cnUlsOok&t=3s',
  youtubeId: 'q47cnUlsOok',
  url: 'https://www.youtube.com/watch?v=q47cnUlsOok&t=3s',
  title: 'Vídeo Educativo sobre Separação de Resíduos e Ecopontos',
  summary: 'O vídeo mostra para onde vai o lixo e como as crianças podem ajudar a salvar o planeta!',
  keyPoints: [
    {
      ecoponto: 'Papelão (Azul)',
      colorHex: '#1D4ED8',
      allowed: ['Jornais e revistas', 'Caixas de cartão espalmadas', 'Folhas de papel e cadernos', 'Sacos de papel'],
      forbidden: ['Guardanapos ou lenços sujos', 'Fraldas', 'Papel de alumínio', 'Embalagens com gordura']
    },
    {
      ecoponto: 'Plástico e Metal (Amarelo)',
      colorHex: '#CA8A04',
      allowed: ['Garrafas e garrafões de água / refrigerante', 'Pacotes de leite e sumo (Tetra Pak)', 'Latas de conserva e bebidas', 'Sacos de plástico limpos'],
      forbidden: ['Brinquedos de plástico estragados', 'Utensílios de cozinha de metal', 'Escovas de dentes', 'Pilhas e baterias']
    }
  ]
};

export const INSTRUCTIONS_DATA: InstructionItem[] = [
  {
    id: 1,
    stepNumber: 1,
    originalText: '1. Numa folha de word escrever a palavra “Papelão”, Ano e Turma;',
    phase: 'papelao',
    category: 'word-setup',
    tag: 'Papelão · Início',
    kidExplanation: 'Abre o Microsoft Word. No teclado, escreve a palavra PAPELÃO. Carrega na tecla Enter e escreve o teu Ano e Turma (por exemplo: 5.º B).',
    wordAction: {
      tabName: 'Base',
      groupName: 'Folha em Branco',
      iconType: 'text-type',
      highlightButtonName: 'Área da Folha em Branco',
      simpleKidHint: 'Clica na folha branca com o rato e escreve no teclado: PAPELÃO e na linha abaixo 5.º B.',
    },
    example: {
      title: 'Escrever no teclado',
      wordTab: 'Folha em branco do Word',
      shortcut: 'Carregar na tecla Enter para mudar de linha',
      explanation: 'Escreve a palavra em maiúsculas (PAPELÃO). Assim vai ocupar mais espaço na folha e fica mais fácil de ler.',
      recommendedValues: [
        'Linha 1: PAPELÃO',
        'Linha 2: 5.º Ano — Turma B (e o teu nome)'
      ],
      visualPreviewType: 'text',
      dosList: [
        'Usa a tecla Caps Lock para escrever tudo em letras GRANDES (PAPELÃO).',
        'Escreve o teu nome e turma logo no início para a professora saber de quem é o trabalho!'
      ],
      dontsList: [
        'Não te preocupes com as cores agora; primeiro escreve apenas as palavras.',
        'Não te esqueças de colocar o teu Ano e Turma.'
      ],
      sampleVisual: {
        label: 'Como fica no teu ecrã:',
        text: 'PAPELÃO\n5.º Ano — Turma B',
        textColor: '#0f172a',
        bgColor: '#ffffff',
        borderColor: '#cbd5e1',
        fontFamily: 'Arial',
        fontSize: '24px',
        isLandscape: false
      }
    }
  },
  {
    id: 2,
    stepNumber: 2,
    originalText: '2. Colocar a folha na horizontal;',
    phase: 'papelao',
    category: 'word-setup',
    tag: 'Papelão · Deitar a Folha',
    kidExplanation: 'A folha começa de pé. Uma placa tem de ser deitada! Clica no separador Esquema de Página > no botão Orientação > e escolhe Horizontal.',
    wordAction: {
      tabName: 'Esquema de Página',
      groupName: 'Configurar Página',
      iconType: 'orientation-landscape',
      highlightButtonName: 'Orientação > Horizontal',
      simpleKidHint: 'Clica no cabeçalho Esquema de Página, depois no botão Orientação e escolhe Horizontal (folha deitada)!',
    },
    example: {
      title: 'Deitar a folha na horizontal',
      wordTab: 'Separador Esquema de Página > Botão Orientação > Horizontal',
      shortcut: 'Procura o botão Orientação com a folha e a setinha',
      explanation: 'Ao deitar a folha na horizontal, fica bem larga para a palavra Papelão caber em tamanho gigante!',
      recommendedValues: [
        'Separador: Esquema de Página',
        'Botão: Orientação',
        'Opção: Horizontal'
      ],
      visualPreviewType: 'orientation',
      dosList: [
        'Vê se a folha no teu ecrã ficou deitada (mais larga do que alta).',
        'Se o Word disser "Paisagem", significa exatamente o mesmo que Horizontal!'
      ],
      dontsList: [
        'Não deixes a folha de pé (vertical); de pé não cabe uma placa larga!',
        'Não tentes rodar o texto manualmente; muda a orientação da folha.'
      ],
      sampleVisual: {
        label: 'A folha deitada na horizontal:',
        text: 'PAPELÃO',
        textColor: '#1e293b',
        bgColor: '#f8fafc',
        borderColor: '#94a3b8',
        fontFamily: 'Arial',
        fontSize: '32px',
        isLandscape: true
      }
    }
  },
  {
    id: 3,
    stepNumber: 3,
    originalText: '3. Escolher o tipo de letra;',
    phase: 'papelao',
    category: 'format-font',
    tag: 'Papelão · Letra Grossa',
    kidExplanation: 'Seleciona a palavra com o rato (passa por cima com o botão esquerdo). No separador Base, clica na caixinha onde diz Calibri e escolhe uma letra bem gorda: Arial Black!',
    wordAction: {
      tabName: 'Base',
      groupName: 'Tipo de Letra',
      iconType: 'font-dropdown',
      highlightButtonName: 'Caixa de Tipos de Letra (onde diz Calibri ou Arial)',
      simpleKidHint: 'No separador Base, clica na caixinha das letras e escolhe Arial Black (ou Impact)!',
    },
    example: {
      title: 'Mudar para uma letra bem grossa',
      wordTab: 'Separador Base > Grupo Tipo de Letra',
      shortcut: 'Botão [ N ] para ativar o Negrito e ficar ainda mais escura',
      explanation: 'Para se conseguir ler a placa da outra ponta da sala de aula, a letra tem de ser bem grossa e limpa!',
      recommendedValues: [
        'Arial Black — É a mais grossa e perfeita de todas!',
        'Impact — Letras altas e pretas',
        'Trebuchet MS ou Comic Sans — Letras alegres e fáceis de ler'
      ],
      visualPreviewType: 'font',
      dosList: [
        'Passa com o rato por cima da palavra para ela ficar pintada de azul antes de clicares no nome da letra.',
        'Ativa o botão [ N ] de Negrito.'
      ],
      dontsList: [
        'Não uses letras com rabiscos ou letras de mão fininhas; ninguém consegue ler à distância!',
        'Não te esqueças de selecionar o texto antes de mudar a letra.'
      ],
      sampleVisual: {
        label: 'Letra Arial Black com negrito:',
        text: 'PAPELÃO',
        textColor: '#0f172a',
        bgColor: '#ffffff',
        borderColor: '#cbd5e1',
        fontFamily: 'Arial Black, Impact, sans-serif',
        fontSize: '40px',
        isLandscape: true
      }
    }
  },
  {
    id: 4,
    stepNumber: 4,
    originalText: '4. Colorir;',
    phase: 'papelao',
    category: 'format-color',
    tag: 'Papelão · Cor Azul',
    kidExplanation: 'Seleciona a palavra. No separador Base, procura a letra A com uma barrinha de cor por baixo. Clica na setinha pequenina ao lado e escolhe o quadrado com a cor AZUL!',
    wordAction: {
      tabName: 'Base',
      groupName: 'Tipo de Letra',
      iconType: 'font-color',
      highlightButtonName: 'Botão da letra [ A ] com traço colorido em baixo',
      simpleKidHint: 'Clica na setinha ao lado da letra A e escolhe o quadrado com a cor Azul!',
    },
    example: {
      title: 'Pintar de Azul (a cor oficial do papelão)',
      wordTab: 'Separador Base > Botão Cor do Tipo de Letra (letra A)',
      shortcut: 'Clica na setinha ao lado da letra A para ver todas as cores',
      explanation: 'Em Portugal, o ecoponto de papel e papelão é sempre AZUL. Se pintares de amarelo ou verde, as pessoas vão baralhar-se na reciclagem!',
      recommendedValues: [
        'Azul Escuro ou Azul Real (alto contraste no papel branco)',
        'Também podes pintar o fundo de azul e as letras de branco!'
      ],
      visualPreviewType: 'color',
      dosList: [
        'Escolhe um azul forte e alegre.',
        'Vê se o texto continua bem fácil de ler contra o papel.'
      ],
      dontsList: [
        'Nunca uses verde ou amarelo nesta folha (o papelão é só azul!).',
        'Não uses azul clarinho, senão fica quase invisível no papel branco.'
      ],
      sampleVisual: {
        label: 'Palavra pintada de Azul Ecoponto:',
        text: 'PAPELÃO',
        textColor: '#1D4ED8',
        bgColor: '#EFF6FF',
        borderColor: '#3B82F6',
        fontFamily: 'Arial Black, sans-serif',
        fontSize: '44px',
        isLandscape: true
      }
    }
  },
  {
    id: 5,
    stepNumber: 5,
    originalText: '5. Aumentar o tamanho para ficar com a forma de placa de identificação;',
    phase: 'papelao',
    category: 'format-size',
    tag: 'Papelão · Letra Gigante',
    kidExplanation: 'Seleciona a palavra. No separador Base, ao lado do nome da letra está o número 11. Clica lá com o rato, apaga o 11, escreve o número 90 ou 100 com o teclado e carrega na tecla Enter!',
    wordAction: {
      tabName: 'Base',
      groupName: 'Tipo de Letra',
      iconType: 'font-size',
      highlightButtonName: 'Caixa do Número de Tamanho [ 11 ▾ ] ou botão [ A▲ ]',
      simpleKidHint: 'Clica onde diz 11, escreve 90 no teclado e carrega na tecla Enter!',
    },
    example: {
      title: 'Aumentar para tamanho 90 ou 100',
      wordTab: 'Separador Base > Caixa de Tamanho do Tipo de Letra',
      shortcut: 'Botão A grande com setinha para cima para crescer',
      explanation: 'Mesmo que a lista só mostre até ao número 72, podes escrever com o teclado o número 90 ou 100 para a palavra ocupar a folha toda!',
      recommendedValues: [
        'Tamanho 85 a 100 para a palavra PAPELÃO',
        'Tamanho 20 a 24 para o Ano e Turma'
      ],
      visualPreviewType: 'size',
      dosList: [
        'Carrega na tecla Enter logo a seguir a escreveres o número 90.',
        'Vê se a palavra cabe toda numa única linha sem passar para baixo.'
      ],
      dontsList: [
        'Não deixes o tamanho tão grande que corte letras fora da folha!',
        'Não deixes o tamanho pequeno (com tamanho 12 ou 14 parece uma carta e não uma placa de caixote).'
      ],
      sampleVisual: {
        label: 'Tamanho 90 a encher a folha deitada:',
        text: 'PAPELÃO',
        textColor: '#1D4ED8',
        bgColor: '#EFF6FF',
        borderColor: '#2563EB',
        fontFamily: 'Arial Black, sans-serif',
        fontSize: '56px',
        isLandscape: true
      }
    }
  },
  {
    id: 6,
    stepNumber: 6,
    originalText: '6. Centrar;',
    phase: 'papelao',
    category: 'format-align',
    tag: 'Papelão · Pôr no Meio',
    kidExplanation: 'A tua palavra está encostada à esquerda. No separador Base, procura o grupo Parágrafo. Clica no segundo botão (o que tem as risquinhas arrumadas ao meio) ou carrega em Ctrl + E!',
    wordAction: {
      tabName: 'Base',
      groupName: 'Parágrafo',
      iconType: 'align-center',
      highlightButtonName: 'Botão Centrar (segundo botão das risquinhas no grupo Parágrafo)',
      simpleKidHint: 'No separador Base, clica no botão com as 4 risquinhas no meio. A palavra vai logo para o centro!',
    },
    example: {
      title: 'Centrar o texto no meio da página',
      wordTab: 'Separador Base > Grupo Parágrafo > Botão Centrar',
      shortcut: 'Carregar na tecla Ctrl e na tecla E ao mesmo tempo',
      explanation: 'Centrar faz com que a placa fique equilibrada, com o mesmo espaço branco à esquerda e à direita!',
      recommendedValues: [
        'Botão Centrar no grupo Parágrafo',
        'Dar 1 ou 2 Enters antes da palavra para descer e ficar no meio também em altura'
      ],
      visualPreviewType: 'align',
      dosList: [
        'Centra tanto a palavra PAPELÃO como a linha do teu Ano e Turma.',
        'Dá um Enter antes da palavra para ela descer um bocadinho.'
      ],
      dontsList: [
        'Nunca uses a barra de espaços para empurrar o texto com a mão (fica torto!).',
        'Não deixes a placa encostada à esquerda.'
      ],
      sampleVisual: {
        label: 'Texto no meio da página:',
        text: 'PAPELÃO\n5.º Ano — Turma B',
        textColor: '#1D4ED8',
        bgColor: '#EFF6FF',
        borderColor: '#2563EB',
        fontFamily: 'Arial Black, sans-serif',
        fontSize: '54px',
        isLandscape: true
      }
    }
  },
  {
    id: 7,
    stepNumber: 7,
    originalText: '7. Decorar a restante folha se quiser;',
    phase: 'papelao',
    category: 'decor',
    tag: 'Papelão · Moldura e Desenhos',
    kidExplanation: 'Se quiseres, vai ao cabeçalho Esquema de Página > no grupo Fundo da Página > clica em Limites de Página para pôr uma moldura azul à volta da folha!',
    wordAction: {
      tabName: 'Esquema de Página',
      groupName: 'Fundo da Página',
      iconType: 'page-borders',
      highlightButtonName: 'Limites de Página (no separador Esquema de Página)',
      simpleKidHint: 'Clica em Esquema de Página > Limites de Página > escolhe uma linha azul e clica em OK!',
    },
    example: {
      title: 'Colocar uma moldura à volta da folha',
      wordTab: 'Separador Esquema de Página > Grupo Fundo da Página > Limites de Página',
      shortcut: 'Inserir > Formas para desenhar estrelas ou caixas',
      explanation: 'A palavra PAPELÃO deve continuar a ser a coisa mais visível da folha. A decoração serve apenas para embelezar!',
      recommendedValues: [
        'Moldura azul à volta da folha',
        'Símbolo da reciclagem (três setas ♻️)',
        'Desenho de caixas de cartão ou cadernos'
      ],
      visualPreviewType: 'decor',
      dosList: [
        'Usa desenhos simples de papel e cartão.',
        'Mantém a palavra PAPELÃO bem desimpedida.'
      ],
      dontsList: [
        'Não ponhas desenhos em cima das letras.',
        'Não desenhes garrafas de plástico nesta folha!'
      ],
      sampleVisual: {
        label: 'Placa final de Papelão decorada:',
        text: 'PAPELÃO\nAno: 5.º | Turma: B',
        textColor: '#1E40AF',
        bgColor: '#F0F7FF',
        borderColor: '#2563EB',
        fontFamily: 'Arial Black, sans-serif',
        fontSize: '52px',
        isLandscape: true,
        hasDecorations: true,
        decorItems: ['♻️ Reciclagem', '📦 Caixas Cartão', '📰 Jornais', '✏️ Moldura Azul']
      }
    }
  },
  {
    id: 8,
    stepNumber: 8,
    originalText: '8. Noutra folha de word escrever a palavra “Plástico”, Ano e Turma;',
    phase: 'plastico',
    category: 'word-setup',
    tag: 'Plástico · Nova Folha',
    kidExplanation: 'Agora vais fazer a segunda placa! Vai ao cabeçalho Inserir e clica no botão Quebra de Página (ou cria um ficheiro novo). Na folha nova, escreve PLÁSTICO e o teu Ano e Turma.',
    wordAction: {
      tabName: 'Inserir',
      groupName: 'Páginas',
      iconType: 'new-page',
      highlightButtonName: 'Quebra de Página (no separador Inserir à esquerda)',
      simpleKidHint: 'Clica em Inserir e depois em Quebra de Página para teres uma folha nova limpa!',
    },
    example: {
      title: 'Começar a placa do Plástico',
      wordTab: 'Separador Inserir > Grupo Páginas > Quebra de Página',
      shortcut: 'Carregar em Ctrl + Enter para criar página nova',
      explanation: 'Não apagues o Papelão! Precisas das duas placas para teres a nota máxima.',
      recommendedValues: [
        'Linha 1: PLÁSTICO',
        'Linha 2: 5.º Ano — Turma B'
      ],
      visualPreviewType: 'text',
      dosList: [
        'Lembra-te do acento agudo no Á: PLÁSTICO.',
        'Escreve novamente o teu Ano e Turma.'
      ],
      dontsList: [
        'Não apagues a folha do Papelão!',
        'Não te esqueças do teu nome.'
      ],
      sampleVisual: {
        label: 'Texto inicial na segunda folha:',
        text: 'PLÁSTICO\n5.º Ano — Turma B',
        textColor: '#0f172a',
        bgColor: '#ffffff',
        borderColor: '#cbd5e1',
        fontFamily: 'Arial',
        fontSize: '24px',
        isLandscape: false
      }
    }
  },
  {
    id: 9,
    stepNumber: 9,
    originalText: '9. Colocar a folha na horizontal;',
    phase: 'plastico',
    category: 'word-setup',
    tag: 'Plástico · Deitar a Folha',
    kidExplanation: 'Garante que a folha do plástico também fica deitada! Vai ao cabeçalho Esquema de Página > Orientação > Horizontal.',
    wordAction: {
      tabName: 'Esquema de Página',
      groupName: 'Configurar Página',
      iconType: 'orientation-landscape',
      highlightButtonName: 'Orientação > Horizontal',
      simpleKidHint: 'No separador Esquema de Página, clica em Orientação e escolhe Horizontal!',
    },
    example: {
      title: 'Deitar a folha na horizontal',
      wordTab: 'Separador Esquema de Página > Botão Orientação > Horizontal',
      shortcut: 'Orientação > Horizontal',
      explanation: 'As duas placas devem ser iguais no formato deitado para ficarem perfeitas nos caixotes da escola!',
      recommendedValues: [
        'Separador: Esquema de Página',
        'Orientação: Horizontal'
      ],
      visualPreviewType: 'orientation',
      dosList: [
        'Verifica se as duas folhas do trabalho estão ambas na horizontal.',
        'Pede ajuda à professora se tiveres dúvidas.'
      ],
      dontsList: [
        'Não deixes uma deitada e a outra de pé!'
      ],
      sampleVisual: {
        label: 'Segunda folha deitada:',
        text: 'PLÁSTICO',
        textColor: '#1e293b',
        bgColor: '#fefce8',
        borderColor: '#ca8a04',
        fontFamily: 'Arial',
        fontSize: '32px',
        isLandscape: true
      }
    }
  },
  {
    id: 10,
    stepNumber: 10,
    originalText: '10. Escolher o tipo de letra;',
    phase: 'plastico',
    category: 'format-font',
    tag: 'Plástico · Tipo de Letra',
    kidExplanation: 'Seleciona a palavra PLÁSTICO com o rato. Vai ao separador Base e escolhe o mesmo tipo de letra que usaste no Papelão (ex: Arial Black)!',
    wordAction: {
      tabName: 'Base',
      groupName: 'Tipo de Letra',
      iconType: 'font-dropdown',
      highlightButtonName: 'Caixa de Tipos de Letra (ex: Arial Black)',
      simpleKidHint: 'No separador Base, clica na caixinha das letras e escolhe a mesma letra da folha 1!',
    },
    example: {
      title: 'Escolher a mesma letra grossa',
      wordTab: 'Separador Base > Grupo Tipo de Letra',
      shortcut: 'Botão [ N ] de Negrito ativado',
      explanation: 'Usar a mesma letra nas duas placas faz com que pareça um conjunto oficial de ecopontos da escola!',
      recommendedValues: [
        'Arial Black (muito grossa e fácil de ler)',
        'Impact (alta e forte)',
        'Negrito ligado'
      ],
      visualPreviewType: 'font',
      dosList: [
        'Usa a mesma fonte da primeira placa.',
        'Seleciona a palavra com o rato antes de escolher.'
      ],
      dontsList: [
        'Não uses uma letra fina que não se consiga ler.'
      ],
      sampleVisual: {
        label: 'Letra Arial Black grossa:',
        text: 'PLÁSTICO',
        textColor: '#0f172a',
        bgColor: '#ffffff',
        borderColor: '#cbd5e1',
        fontFamily: 'Arial Black, Impact, sans-serif',
        fontSize: '42px',
        isLandscape: true
      }
    }
  },
  {
    id: 11,
    stepNumber: 11,
    originalText: '11. Colorir;',
    phase: 'plastico',
    category: 'format-color',
    tag: 'Plástico · Cor Amarela',
    kidExplanation: 'Atenção ao truque da cor amarela: Amarelo claro em papel branco quase não se lê! Truque do 5.º ano: No separador Base, escolhe a cor Amarelo Ouro Escuro na letra [ A ], ou vai a Esquema de Página > Cor da Página e pinta o fundo de amarelo!',
    wordAction: {
      tabName: 'Base',
      groupName: 'Tipo de Letra',
      iconType: 'font-color',
      highlightButtonName: 'Botão da Letra [ A ] com cor Amarela (ou Cor da Página)',
      simpleKidHint: 'Escolhe Amarelo Forte na setinha da letra A ou pinta o fundo da página de amarelo!',
    },
    example: {
      title: 'Colorir com Amarelo (a cor do plástico)',
      wordTab: 'Separador Base > Botão Cor do Tipo de Letra (letra A) ou Esquema de Página > Cor da Página',
      shortcut: 'Esquema de Página > Cor da Página > Escolher Amarelo',
      explanation: 'O amarelo é a cor oficial do ecoponto de embalagens e plástico. Garante que as letras se leem muito bem!',
      recommendedValues: [
        'Opção 1: Fundo amarelo com letras pretas ou castanhas (alto contraste!)',
        'Opção 2: Letras amarelo ouro escuro'
      ],
      visualPreviewType: 'color',
      dosList: [
        'Afasta-te da cadeira e vê se consegues ler facilmente a palavra.',
        'Usa amarelo forte.'
      ],
      dontsList: [
        'Cuidado: Não uses amarelo muito clarinho com fundo branco (fica invisível!).',
        'Não uses azul nesta folha (o azul era para o papelão!).'
      ],
      sampleVisual: {
        label: 'Fundo amarelo com letras escuras legíveis:',
        text: 'PLÁSTICO',
        textColor: '#713F12',
        bgColor: '#FEF08A',
        borderColor: '#EAB308',
        fontFamily: 'Arial Black, sans-serif',
        fontSize: '44px',
        isLandscape: true
      }
    }
  },
  {
    id: 12,
    stepNumber: 12,
    originalText: '12. Aumentar o tamanho para ficar com a forma de placa de identificação;',
    phase: 'plastico',
    category: 'format-size',
    tag: 'Plástico · Letra Gigante',
    kidExplanation: 'Seleciona a palavra PLÁSTICO. No separador Base, clica na caixinha do tamanho da letra, escreve 90 com o teclado e carrega na tecla Enter!',
    wordAction: {
      tabName: 'Base',
      groupName: 'Tipo de Letra',
      iconType: 'font-size',
      highlightButtonName: 'Caixa de Tamanho (escrever 90 e premir Enter)',
      simpleKidHint: 'Clica na caixinha onde está o número do tamanho, digita 90 e carrega em Enter!',
    },
    example: {
      title: 'Aumentar para tamanho 90 a 100',
      wordTab: 'Separador Base > Grupo Tipo de Letra > Caixa de Tamanho',
      shortcut: 'Escrever o número 90 diretamente e carregar em Enter',
      explanation: 'A palavra PLÁSTICO tem 8 letras. Com tamanho 90 vai encher a folha deitada de uma ponta à outra.',
      recommendedValues: [
        'Tamanho 85 a 95 para a palavra PLÁSTICO',
        'Tamanho 20 a 24 para o Ano e Turma'
      ],
      visualPreviewType: 'size',
      dosList: [
        'Confirma que a palavra não se parte em duas linhas.',
        'Se passar para a linha de baixo, reduz de 95 para 85.'
      ],
      dontsList: [
        'Não deixes as últimas letras cortadas fora da folha.'
      ],
      sampleVisual: {
        label: 'Tamanho 95 a encher a folha:',
        text: 'PLÁSTICO',
        textColor: '#713F12',
        bgColor: '#FEF9C3',
        borderColor: '#EAB308',
        fontFamily: 'Arial Black, sans-serif',
        fontSize: '56px',
        isLandscape: true
      }
    }
  },
  {
    id: 13,
    stepNumber: 13,
    originalText: '13. Centrar;',
    phase: 'plastico',
    category: 'format-align',
    tag: 'Plástico · Pôr no Meio',
    kidExplanation: 'No separador Base, procura o grupo Parágrafo e clica no botão com as risquinhas ao centro, ou carrega em Ctrl + E no teclado!',
    wordAction: {
      tabName: 'Base',
      groupName: 'Parágrafo',
      iconType: 'align-center',
      highlightButtonName: 'Botão Centrar (segundo botão das 4 barrinhas)',
      simpleKidHint: 'No separador Base, clica no botão das riscas ao centro. A palavra vai logo direta para o meio!',
    },
    example: {
      title: 'Colocar no centro da folha',
      wordTab: 'Separador Base > Grupo Parágrafo > Botão Centrar',
      shortcut: 'Ctrl + E',
      explanation: 'A palavra e a tua turma devem ficar no meio certinho da folha.',
      recommendedValues: [
        'Botão Centrar no grupo Parágrafo',
        'Dar 1 ou 2 Enters antes da palavra para descer'
      ],
      visualPreviewType: 'align',
      dosList: [
        'Centra tanto a palavra PLÁSTICO como o Ano e Turma.',
        'Carrega em Ctrl + E para ser super rápido!'
      ],
      dontsList: [
        'Não uses a barra de espaços para empurrar o texto.'
      ],
      sampleVisual: {
        label: 'Placa centrada no meio da folha:',
        text: 'PLÁSTICO\n5.º Ano — Turma B',
        textColor: '#713F12',
        bgColor: '#FEF9C3',
        borderColor: '#EAB308',
        fontFamily: 'Arial Black, sans-serif',
        fontSize: '52px',
        isLandscape: true
      }
    }
  },
  {
    id: 14,
    stepNumber: 14,
    originalText: '14. Decorar a restante folha se quiser;',
    phase: 'plastico',
    category: 'decor',
    tag: 'Plástico · Decorações',
    kidExplanation: 'Decora a folha se quiseres! Vai a Esquema de Página > Limites de Página para uma moldura amarela, ou a Inserir > Formas / Imagens para desenhar garrafas de plástico ou latas!',
    wordAction: {
      tabName: 'Esquema de Página',
      groupName: 'Fundo da Página',
      iconType: 'page-borders',
      highlightButtonName: 'Limites de Página (no separador Esquema de Página)',
      simpleKidHint: 'Clica em Esquema de Página > Limites de Página para uma moldura, ou Inserir > Imagens para garrafas!',
    },
    example: {
      title: 'Decorações para a placa de plástico',
      wordTab: 'Separador Esquema de Página > Limites de Página OU Inserir > Formas / Imagens',
      shortcut: 'Esquema de Página > Limites de Página',
      explanation: 'Desenha apenas resíduos aceites no ecoponto amarelo: garrafas de plástico, pacotes de leite e latas de bebida!',
      recommendedValues: [
        'Moldura amarela à volta da folha',
        'Desenho de garrafa de plástico ou pacote de sumo',
        'Frase: "Espalmar antes de depositar!"'
      ],
      visualPreviewType: 'decor',
      dosList: [
        'Mantém a palavra PLÁSTICO bem limpa e legível.',
        'Desenha apenas coisas que vão para o ecoponto amarelo.'
      ],
      dontsList: [
        'Não desenhes caixas de papelão nesta folha (essas pertencem ao papelão!).'
      ],
      sampleVisual: {
        label: 'Placa final de Plástico decorada:',
        text: 'PLÁSTICO\nAno: 5.º | Turma: B',
        textColor: '#713F12',
        bgColor: '#FEF08A',
        borderColor: '#EAB308',
        fontFamily: 'Arial Black, sans-serif',
        fontSize: '52px',
        isLandscape: true,
        hasDecorations: true,
        decorItems: ['♻️ Reciclagem', '🧴 Garrafas Plástico', '🧃 Pacote Leite', '🥫 Latas']
      }
    }
  },
  {
    id: 15,
    stepNumber: 15,
    originalText: '15. Colocar no Padlet da turma os trabalhos realizados.',
    phase: 'conclusao',
    category: 'share',
    tag: 'Partilha · Entregar no Padlet',
    kidExplanation: 'Trabalho pronto! Vai ao cabeçalho azul Ficheiro > Guardar Como (ou carrega no disquete 💾 no topo). Depois abre o link do Padlet da turma, clica no botão (+) cor-de-rosa e envia o teu ficheiro!',
    wordAction: {
      tabName: 'Ficheiro',
      groupName: 'Guardar e Enviar',
      iconType: 'save-padlet',
      highlightButtonName: 'Ficheiro > Guardar Como e depois botão (+) no Padlet',
      simpleKidHint: 'No Word clica em Ficheiro > Guardar. Depois abre o Padlet e clica no botão (+) para enviar!',
    },
    example: {
      title: 'Enviar o trabalho para o Padlet',
      wordTab: 'Separador Ficheiro > Guardar Como e depois navegador com o Padlet',
      shortcut: 'Atalho para guardar no Word: Ctrl + S',
      explanation: 'No Padlet, o teu trabalho vai ficar visível para toda a turma e a professora pode dar-te os parabéns!',
      recommendedValues: [
        'Nome do ficheiro: Ecopontos_TeuNome_5B.docx',
        'Título no Padlet: O teu Nome Completo e Número'
      ],
      visualPreviewType: 'padlet',
      dosList: [
        'Guarda sempre o ficheiro no computador antes de fechar o Word!',
        'Escreve o teu nome completo no título da publicação.'
      ],
      dontsList: [
        'Não feches o Word sem guardar o trabalho!',
        'Não te esqueças de carregar em Publicar no Padlet.'
      ],
      sampleVisual: {
        label: 'Publicação pronta no Padlet da turma:',
        text: 'Mural Padlet da Turma\nPublicado por: Maria Silva (5.º B)\nFicheiro: Placas_Ecoponto_Maria_5B.docx',
        textColor: '#0f172a',
        bgColor: '#ffffff',
        borderColor: '#10b981',
        fontFamily: 'Arial, sans-serif',
        fontSize: '18px',
        isLandscape: true
      }
    }
  }
];
