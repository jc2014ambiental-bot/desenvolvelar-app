export interface Feedback {
  level: number;
  label: string;
  explanation: string;
  guidance: string;
}

export interface Question {
  id: number;
  context: string;
  text: string;
  feedbacks: Feedback[];
}

export const questions: Question[] = [
  {
    id: 1,
    context: "A agressividade pode ser uma forma de a criança expressar frustração, medo ou falta de habilidades para lidar com conflitos. Observar a frequência e o impacto ajuda a entender se é uma fase do desenvolvimento ou algo que precisa de intervenção.",
    text: "Com que frequência seu filho apresenta comportamentos agressivos (como bater, empurrar, gritar ou ameaçar), e qual o impacto disso na convivência familiar e social?",
    feedbacks: [
      {
        level: 1,
        label: "Não é um problema",
        explanation: "Seu filho demonstra um bom controle emocional.",
        guidance: "Continue incentivando o diálogo e ensinando sobre respeito e empatia. Manter uma rotina estável e reforçar comportamentos positivos ajuda a manter esse equilíbrio."
      },
      {
        level: 2,
        label: "Problema menor",
        explanation: "Ocasionalmente, podem surgir episódios de agressividade.",
        guidance: "Converse com seu filho sobre suas emoções e ajude-o a nomear o que sente. Ensine alternativas saudáveis para expressar frustrações, como respirar fundo ou buscar ajuda de um adulto."
      },
      {
        level: 3,
        label: "Problema moderado",
        explanation: "Se a agressividade ocorre com mais frequência e começa a impactar interações, é importante observar os gatilhos.",
        guidance: "Estabeleça regras claras sobre respeito e limites, pratique a escuta ativa e incentive brincadeiras e atividades que ajudem no autocontrole. Se necessário, procure apoio de um professor ou orientador escolar."
      },
      {
        level: 4,
        label: "Problema grave",
        explanation: "A agressividade intensa e frequente exige mais atenção.",
        guidance: "Mantenha um ambiente seguro e previsível, evite punições severas e busque reforçar comportamentos positivos. Pode ser útil procurar um psicólogo infantil para estratégias mais direcionadas."
      },
      {
        level: 5,
        label: "Problema sério",
        explanation: "Quando o comportamento compromete gravemente a rotina e as relações da criança, é essencial buscar ajuda profissional.",
        guidance: "Enquanto isso, ofereça um ambiente de apoio, ajude a criança a expressar sentimentos por meio do diálogo ou atividades criativas (como desenhos) e mantenha contato com a escola para um acompanhamento conjunto."
      }
    ]
  },
  {
    id: 2,
    context: "Explosões emocionais intensas podem indicar dificuldades na regulação das emoções ou sobrecarga sensorial. Entender a intensidade dessas crises é fundamental para oferecer o suporte adequado.",
    text: "Com que frequência seu filho tem explosões emocionais (crises de choro, gritos ou dificuldade para se acalmar)?",
    feedbacks: [
      {
        level: 1,
        label: "Não é um problema",
        explanation: "Seu filho demonstra um bom controle emocional.",
        guidance: "Continue incentivando a expressão dos sentimentos de forma saudável, ensinando sobre emoções e oferecendo um ambiente seguro e previsível."
      },
      {
        level: 2,
        label: "Problema menor",
        explanation: "Se as explosões acontecem ocasionalmente, ajude seu filho a reconhecer suas emoções.",
        guidance: "Encontre maneiras de se acalmar, como respirar fundo ou usar um objeto de conforto. Mantenha uma rotina estável para evitar frustrações desnecessárias."
      },
      {
        level: 3,
        label: "Problema moderado",
        explanation: "Quando as explosões são frequentes e começam a afetar a rotina, é importante identificar gatilhos.",
        guidance: "Valide os sentimentos da criança, ensine técnicas de regulação emocional e ofereça escolhas para que ela se sinta mais no controle."
      },
      {
        level: 4,
        label: "Problema grave",
        explanation: "Se as explosões são intensas e frequentes, impactando a convivência e a socialização, tente criar um espaço seguro para a criança se acalmar.",
        guidance: "Evite reagir com punições severas. Buscar orientação profissional pode ajudar a desenvolver estratégias mais eficazes."
      },
      {
        level: 5,
        label: "Problema sério",
        explanation: "Quando as explosões são constantes e severas, comprometendo o dia a dia, o suporte profissional é essencial.",
        guidance: "Em casa, mantenha a paciência, evite reforçar o comportamento explosivo e crie um ambiente acolhedor para que ela se sinta segura e compreendida."
      }
    ]
  },
  {
    id: 3,
    context: "A previsibilidade traz segurança para a criança. Dificuldades extremas em lidar com mudanças podem sinalizar uma necessidade maior de rotina rígida ou desafios na flexibilidade cognitiva.",
    text: "Como seu filho reage a mudanças na rotina?",
    feedbacks: [
      {
        level: 1,
        label: "Não é um problema",
        explanation: "Seu filho lida bem com mudanças.",
        guidance: "Continue incentivando sua flexibilidade, explicando antecipadamente pequenas alterações e reforçando o lado positivo das novidades na rotina."
      },
      {
        level: 2,
        label: "Problema menor",
        explanation: "Se houver alguma resistência ocasional, mantenha um ambiente previsível.",
        guidance: "Explique as mudanças com antecedência. Use reforços positivos para encorajar a adaptação e ofereça opções para que a criança sinta algum controle sobre a situação."
      },
      {
        level: 3,
        label: "Problema moderado",
        explanation: "Quando a resistência é frequente, tente criar rotinas visuais e usar avisos antes das transições.",
        guidance: "Técnicas como contagens regressivas e envolvimento da criança no planejamento das mudanças podem facilitar a adaptação."
      },
      {
        level: 4,
        label: "Problema grave",
        explanation: "Se as mudanças causam estresse significativo, busque tornar as transições mais suaves.",
        guidance: "Ofereça tempo extra para adaptação e estratégias como objetos de conforto ou atividades relaxantes antes e depois das mudanças. Conversar com a escola pode ajudar."
      },
      {
        level: 5,
        label: "Problema sério",
        explanation: "Quando qualquer mudança gera sofrimento intenso, é essencial buscar suporte profissional.",
        guidance: "Psicólogos ou terapeutas podem auxiliar na identificação das causas da dificuldade. Em casa, mantenha uma rotina estável, avise sobre mudanças com antecedência e valide os sentimentos da criança."
      }
    ]
  },
  {
    id: 4,
    context: "O sono é vital para o processamento cerebral e regulação emocional. Alterações frequentes no sono podem impactar diretamente o comportamento e o aprendizado durante o dia.",
    text: "Como está o sono do seu filho?",
    feedbacks: [
      {
        level: 1,
        label: "Não é um problema",
        explanation: "Seu filho tem um padrão de sono saudável.",
        guidance: "Continue mantendo uma rotina estável, com horários regulares para dormir e acordar, e um ambiente tranquilo para o descanso."
      },
      {
        level: 2,
        label: "Problema menor",
        explanation: "Se houver dificuldades ocasional, tente evitar telas antes de dormir.",
        guidance: "Crie um ritual relaxante (como leitura ou música suave) e garanta que o ambiente esteja confortável para o sono."
      },
      {
        level: 3,
        label: "Problema moderado",
        explanation: "Quando os problemas de sono são frequentes e afetam o comportamento diário, é importante reforçar uma rotina consistente.",
        guidance: "Evite atividades estimulantes antes de dormir, estabeleça horários fixos e observe possíveis causas, como ansiedade ou alimentação inadequada à noite."
      },
      {
        level: 4,
        label: "Problema grave",
        explanation: "Se o sono irregular impacta fortemente o bem-estar da criança, experimente técnicas como luzes mais baixas no período noturno.",
        guidance: "Banhos mornos antes de dormir e o uso de histórias ou músicas relaxantes podem ajudar. Caso o problema persista, converse com um pediatra."
      },
      {
        level: 5,
        label: "Problema sério",
        explanation: "Quando as dificuldades para dormir são severas e comprometem a saúde, o acompanhamento profissional é essencial.",
        guidance: "Distúrbios do sono podem estar ligados a fatores emocionais ou fisiológicos. Enquanto isso, ofereça suporte emocional, um ambiente acolhedor e evite estímulos excessivos antes da hora de dormir."
      }
    ]
  },
  {
    id: 5,
    context: "A alimentação envolve processamento sensorial (textura, cheiro, cor). A seletividade extrema pode indicar sensibilidade sensorial ou dificuldades motoras orais.",
    text: "Como é a alimentação do seu filho?",
    feedbacks: [
      {
        level: 1,
        label: "Não é um problema",
        explanation: "Seu filho tem uma alimentação variada e equilibrada.",
        guidance: "Continue oferecendo refeições coloridas, incentivando o consumo de alimentos naturais e mantendo uma relação saudável com a comida, sem pressões."
      },
      {
        level: 2,
        label: "Problema menor",
        explanation: "Se houver resistência ocasional, tente tornar as refeições mais atrativas.",
        guidance: "Permita que a criança explore os alimentos com autonomia. Envolver a criança no preparo das refeições pode aumentar o interesse por novos sabores."
      },
      {
        level: 3,
        label: "Problema moderado",
        explanation: "Quando há seletividade frequente, introduza novos alimentos de forma gradual e sem forçar.",
        guidance: "Estimule a experimentação com pequenas porções e texturas diferentes, associando a comida a momentos positivos."
      },
      {
        level: 4,
        label: "Problema grave",
        explanation: "Se a aversão a certos alimentos é intensa e impacta a nutrição, tente variar as preparações.",
        guidance: "Ofereça alternativas nutricionalmente semelhantes. O suporte de um nutricionista ou pediatra pode ser útil para identificar deficiências."
      },
      {
        level: 5,
        label: "Problema sério",
        explanation: "Quando a alimentação é extremamente restrita e afeta a saúde da criança, o acompanhamento profissional é essencial.",
        guidance: "Distúrbios alimentares podem estar relacionados a fatores sensoriais ou emocionais. Em casa, evite pressões e torne as refeições um momento leve e positivo."
      }
    ]
  },
  {
    id: 6,
    context: "O controle dos esfíncteres é um marco do desenvolvimento motor e neurológico. Dificuldades persistentes podem estar ligadas a questões sensoriais, emocionais ou fisiológicas.",
    text: "Como está o uso do banheiro pelo seu filho?",
    feedbacks: [
      {
        level: 1,
        label: "Não é um problema",
        explanation: "Seu filho já usa o banheiro sem dificuldades.",
        guidance: "Mantenha o incentivo à independência e reforce hábitos saudáveis de higiene, como lavar as mãos após o uso."
      },
      {
        level: 2,
        label: "Problema menor",
        explanation: "Se houver pequenos desafios, como acidentes esporádicos ou resistência leve, evite punições.",
        guidance: "Reforce o incentivo positivo. Criar uma rotina consistente para idas ao banheiro pode ajudar."
      },
      {
        level: 3,
        label: "Problema moderado",
        explanation: "Se a criança apresenta dificuldades frequentes, como resistência ou acidentes regulares, ofereça apoio e paciência.",
        guidance: "Estratégias como histórias, músicas ou recompensas simbólicas podem tornar o processo mais confortável."
      },
      {
        level: 4,
        label: "Problema grave",
        explanation: "Quando há resistência intensa, medo ou impactos emocionais, tente identificar possíveis causas.",
        guidance: "Considere ansiedade ou desconforto físico. Evite pressões e busque orientação profissional, se necessário."
      },
      {
        level: 5,
        label: "Problema sério",
        explanation: "Se a criança enfrenta dificuldades severas, com sofrimento emocional ou dependência total, o acompanhamento especializado é essencial.",
        guidance: "Um pediatra ou terapeuta pode ajudar a entender e tratar o problema de forma adequada. Enquanto isso, mantenha um ambiente seguro e acolhedor."
      }
    ]
  },
  {
    id: 7,
    context: "Vestir-se sozinho exige coordenação motora fina e planejamento motor. A recusa pode estar ligada a dificuldades motoras ou sensibilidade a texturas e etiquetas.",
    text: "Seu filho consegue se vestir sozinho?",
    feedbacks: [
      {
        level: 1,
        label: "Não é um problema",
        explanation: "Seu filho já se veste sozinho ou aceita ajuda sem dificuldades.",
        guidance: "Continue incentivando a autonomia e reforçando a importância da escolha das roupas adequadas para cada ocasião."
      },
      {
        level: 2,
        label: "Problema menor",
        explanation: "Se houver pequenas dificuldades, como prender botões ou zíperes, ofereça paciência e prática.",
        guidance: "Brincadeiras com encaixes e jogos de motricidade fina podem ajudar a desenvolver essa habilidade."
      },
      {
        level: 3,
        label: "Problema moderado",
        explanation: "Se a criança evita certos tecidos ou precisa de ajuda frequente, tente oferecer roupas confortáveis e fáceis de vestir.",
        guidance: "Permitir que ela escolha suas próprias roupas pode aumentar o conforto e a aceitação."
      },
      {
        level: 4,
        label: "Problema grave",
        explanation: "Quando há forte resistência ou dependência significativa para se vestir, observe se há questões sensoriais envolvidas.",
        guidance: "Ajustar o tipo de tecido, eliminar etiquetas e tornar o processo mais previsível pode ajudar. Buscar orientação de um terapeuta ocupacional pode ser útil."
      },
      {
        level: 5,
        label: "Problema sério",
        explanation: "Se a criança enfrenta dificuldades severas, como extrema sensibilidade sensorial ou recusa total, isso pode estar relacionado a questões emocionais ou neurossensoriais.",
        guidance: "O acompanhamento profissional pode ser essencial para criar estratégias eficazes e tornar a experiência mais confortável."
      }
    ]
  },
  {
    id: 8,
    context: "Comportamentos de se machucar podem ser tentativas de aliviar uma dor emocional ou buscar estímulo sensorial. É um sinal de alerta que requer observação cuidadosa e acolhimento.",
    text: "Você já observou seu filho se machucando intencionalmente?",
    feedbacks: [
      {
        level: 1,
        label: "Não é um problema",
        explanation: "Seu filho não apresenta comportamentos de se machucar intencionalmente.",
        guidance: "Continue incentivando o diálogo aberto sobre emoções e sentimentos, ajudando-o a expressar frustrações de maneira saudável."
      },
      {
        level: 2,
        label: "Problema menor",
        explanation: "Se ocorrer raramente e de forma leve, observe os momentos em que isso acontece.",
        guidance: "Ensine formas alternativas de lidar com emoções, como respiração profunda, desenhos ou atividades relaxantes."
      },
      {
        level: 3,
        label: "Problema moderado",
        explanation: "Se os episódios forem mais frequentes, tente identificar gatilhos emocionais.",
        guidance: "Ofereça apoio, demonstre compreensão e incentive a busca de ajuda profissional, se necessário."
      },
      {
        level: 4,
        label: "Problema grave",
        explanation: "Se o comportamento de se machucar for intenso ou frequente, converse com a criança sobre o que ela sente.",
        guidance: "Reforce que há outras formas de aliviar a dor emocional. É essencial buscar apoio psicológico para intervir de maneira adequada."
      },
      {
        level: 5,
        label: "Problema sério",
        explanation: "Se os comportamentos forem constantes e severos, procure ajuda profissional imediatamente.",
        guidance: "Psicólogos ou psiquiatras podem auxiliar na identificação das causas e no desenvolvimento de estratégias seguras. Mantenha um ambiente acolhedor e seguro."
      }
    ]
  },
  {
    id: 9,
    context: "A ingestão de itens não alimentares (pica) pode estar ligada a deficiências nutricionais ou busca por estímulo sensorial oral intenso.",
    text: "Seu filho tenta ingerir objetos não alimentares?",
    feedbacks: [
      {
        level: 1,
        label: "Não é um problema",
        explanation: "Seu filho não tenta comer itens não alimentares.",
        guidance: "Continue estimulando uma alimentação saudável e garantindo um ambiente seguro para exploração."
      },
      {
        level: 2,
        label: "Problema menor",
        explanation: "Se isso ocorreu raramente, observe se foi apenas curiosidade.",
        guidance: "Ensine sobre o que pode ou não ser ingerido e ofereça brinquedos apropriados para exploração oral."
      },
      {
        level: 3,
        label: "Problema moderado",
        explanation: "Se a criança tenta ingerir itens não alimentares ocasionalmente, supervisione de perto.",
        guidance: "Redirecione a atenção para alimentos seguros. Também é importante investigar se há alguma necessidade sensorial ou nutricional envolvida."
      },
      {
        level: 4,
        label: "Problema grave",
        explanation: "Se esse comportamento for frequente e envolver itens potencialmente perigosos, consulte um profissional de saúde.",
        guidance: "Algumas deficiências nutricionais ou transtornos do desenvolvimento podem estar relacionados a esse hábito."
      },
      {
        level: 5,
        label: "Problema sério",
        explanation: "Se a ingestão de itens não alimentares for constante e colocar a saúde da criança em risco, busque acompanhamento médico e psicológico imediato.",
        guidance: "Esse comportamento pode estar relacionado ao transtorno de pica, que exige avaliação e intervenção especializada."
      }
    ]
  },
  {
    id: 10,
    context: "Interesses intensos e repetitivos são comuns no desenvolvimento, mas quando impedem a exploração de novas atividades ou a socialização, podem indicar rigidez cognitiva.",
    text: "Seu filho tem interesses muito restritos ou repetitivos?",
    feedbacks: [
      {
        level: 1,
        label: "Não é um problema",
        explanation: "Se seu filho tem interesses favoritos, mas alterna entre diferentes atividades sem dificuldades.",
        guidance: "Continue incentivando essa diversidade de experiências e o equilíbrio na rotina."
      },
      {
        level: 2,
        label: "Problema menor",
        explanation: "Se ele passa bastante tempo em um único interesse, mas isso não interfere na socialização ou rotina.",
        guidance: "Apenas monitore e incentive outras atividades para garantir um desenvolvimento equilibrado."
      },
      {
        level: 3,
        label: "Problema moderado",
        explanation: "Se o foco excessivo começa a dificultar a participação em outras atividades.",
        guidance: "Tente estabelecer uma rotina variada, propondo desafios e explorando novas experiências de forma gradual."
      },
      {
        level: 4,
        label: "Problema grave",
        explanation: "Se a fixação está prejudicando interações sociais e compromissos importantes.",
        guidance: "É necessário criar limites saudáveis e oferecer alternativas que despertem o interesse da criança. O apoio de um especialista pode ser útil."
      },
      {
        level: 5,
        label: "Problema sério",
        explanation: "Se o interesse específico domina completamente a rotina da criança, impedindo a socialização e adaptação.",
        guidance: "É fundamental buscar acompanhamento profissional para entender melhor a causa e encontrar formas de ampliar a flexibilidade da criança."
      }
    ]
  }
];
