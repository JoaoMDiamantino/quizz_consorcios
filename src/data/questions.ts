import type { Question } from '../types'

export const questions: Question[] = [
  // ── BLOCO 1: INICIANTE (Q1–Q7) ───────────────────────────────────────────

  {
    id: 1,
    nivel: 'iniciante',
    afirmacao: 'No consórcio imobiliário, o participante paga juros mensais sobre o valor do bem.',
    resposta: false,
    explicacao:
      'Falso. O consórcio não cobra juros. O participante paga apenas a taxa de administração e, eventualmente, o fundo de reserva. Essa ausência de juros é a principal vantagem do consórcio em relação ao financiamento bancário.',
  },
  {
    id: 2,
    nivel: 'iniciante',
    afirmacao:
      'O consórcio imobiliário é regulamentado e fiscalizado pelo Banco Central do Brasil.',
    resposta: true,
    explicacao:
      'Verdadeiro. O Banco Central do Brasil (Bacen) é o órgão responsável por regular, autorizar e fiscalizar todas as administradoras de consórcio no país, garantindo a segurança dos participantes.',
  },
  {
    id: 3,
    nivel: 'iniciante',
    afirmacao:
      'Num grupo de consórcio, todos os participantes contribuem mensalmente para um fundo comum que financia as contemplações.',
    resposta: true,
    explicacao:
      'Verdadeiro. O consórcio funciona como uma poupança coletiva: todos os cotistas pagam parcelas mensais que formam um fundo comum. Esse fundo é usado para contemplar um ou mais participantes a cada mês, por sorteio ou lance.',
  },
  {
    id: 4,
    nivel: 'iniciante',
    afirmacao: 'A carta de crédito do consórcio imobiliário só pode ser usada para comprar imóveis novos.',
    resposta: false,
    explicacao:
      'Falso. A carta de crédito pode ser utilizada para adquirir imóveis novos, usados, terrenos, ou até para construir e reformar, dependendo do regulamento do grupo. Essa flexibilidade é uma vantagem importante.',
  },
  {
    id: 5,
    nivel: 'iniciante',
    afirmacao: 'O prazo de um consórcio imobiliário pode chegar a 240 meses (20 anos).',
    resposta: true,
    explicacao:
      'Verdadeiro. Consórcios imobiliários costumam ter prazos longos, podendo chegar a 240 meses (20 anos), o que permite parcelas menores e acesso a créditos de alto valor, como imóveis residenciais.',
  },
  {
    id: 6,
    nivel: 'iniciante',
    afirmacao:
      'No consórcio, o participante recebe o bem no momento em que realiza o primeiro pagamento.',
    resposta: false,
    explicacao:
      'Falso. No consórcio, o participante só recebe o bem (por meio da carta de crédito) quando for contemplado — seja por sorteio mensal ou por lance vencedor. O recebimento imediato é característica do financiamento, não do consórcio.',
  },
  {
    id: 7,
    nivel: 'iniciante',
    afirmacao:
      'Uma cota de consórcio representa a participação de um indivíduo dentro de um grupo, com direito a concorrer à carta de crédito.',
    resposta: true,
    explicacao:
      'Verdadeiro. A cota é o título de participação do consorciado dentro do grupo. Ela garante ao titular o direito de concorrer mensalmente à contemplação por sorteio ou oferecer lances para antecipar o recebimento da carta de crédito.',
  },

  // ── BLOCO 2: INTERMEDIÁRIO (Q8–Q14) ──────────────────────────────────────

  {
    id: 8,
    nivel: 'intermediario',
    afirmacao:
      'A taxa de administração do consórcio é cobrada sobre o valor total da carta de crédito e está embutida nas parcelas mensais.',
    resposta: true,
    explicacao:
      'Verdadeiro. A taxa de administração remunera a administradora pelos serviços prestados. Ela é calculada sobre o valor total da carta de crédito e diluída nas parcelas ao longo do plano. É o principal custo do consórcio.',
  },
  {
    id: 9,
    nivel: 'intermediario',
    afirmacao:
      'O fundo de reserva criado no consórcio é perdido pelo participante em caso de não contemplação ao final do prazo.',
    resposta: false,
    explicacao:
      'Falso. O fundo de reserva é criado para cobrir eventuais inadimplências do grupo. Ao encerramento do grupo, o saldo remanescente do fundo de reserva é devolvido proporcionalmente aos participantes adimplentes.',
  },
  {
    id: 10,
    nivel: 'intermediario',
    afirmacao: 'O saldo do FGTS pode ser utilizado para ofertar lance em um consórcio imobiliário.',
    resposta: true,
    explicacao:
      'Verdadeiro. O FGTS pode ser usado tanto para oferecer um lance (antecipando a contemplação) quanto para complementar o valor da carta de crédito na compra do imóvel, desde que o participante atenda às regras da CEF (Caixa Econômica Federal).',
  },
  {
    id: 11,
    nivel: 'intermediario',
    afirmacao:
      'Ao cancelar a cota de um consórcio, o participante recebe imediatamente a devolução de todos os valores pagos.',
    resposta: false,
    explicacao:
      'Falso. Em caso de cancelamento, o participante ex-consorciado não recebe os valores imediatamente. Ele passa a concorrer, por sorteio, à devolução dos valores pagos (descontadas as taxas) nas assembleias mensais, somente após o encerramento do grupo ou conforme regulamento.',
  },
  {
    id: 12,
    nivel: 'intermediario',
    afirmacao:
      'O valor da carta de crédito de um consórcio imobiliário é reajustado periodicamente conforme índice previsto no contrato.',
    resposta: true,
    explicacao:
      'Verdadeiro. A carta de crédito é reajustada pelo índice contratual (normalmente INCC para imóveis em construção ou IPCA/IGP-M para imóveis prontos). Isso protege o poder de compra do consorciado ao longo do prazo.',
  },
  {
    id: 13,
    nivel: 'intermediario',
    afirmacao:
      'Um participante inadimplente por mais de 3 parcelas consecutivas pode ser excluído do grupo de consórcio.',
    resposta: true,
    explicacao:
      'Verdadeiro. A inadimplência persistente pode levar à exclusão do grupo. O participante excluído perde o direito à contemplação, mas pode recuperar os valores pagos via sorteio, conforme regras do grupo.',
  },
  {
    id: 14,
    nivel: 'intermediario',
    afirmacao:
      'O seguro de vida e o seguro do bem são custos opcionais em todos os grupos de consórcio imobiliário.',
    resposta: false,
    explicacao:
      'Falso. Em muitos grupos, o seguro de vida (para quitação em caso de morte ou invalidez do titular) e o seguro do bem são cobranças obrigatórias, exigidas pela administradora para proteger o grupo contra inadimplência por sinistros.',
  },

  // ── BLOCO 3: AVANÇADO (Q15–Q20) ──────────────────────────────────────────

  {
    id: 15,
    nivel: 'avancado',
    afirmacao:
      'No lance embutido, o valor do lance é descontado da própria carta de crédito contemplada, sem necessidade de desembolso adicional.',
    resposta: true,
    explicacao:
      'Verdadeiro. No lance embutido, parte do valor da carta de crédito é utilizada como lance. Por exemplo: numa carta de R$ 500.000, o participante oferece R$ 100.000 de lance embutido e recebe R$ 400.000 para o imóvel. Não há desembolso de dinheiro próprio para o lance.',
  },
  {
    id: 16,
    nivel: 'avancado',
    afirmacao:
      'O lance livre permite ao participante oferecer qualquer percentual do valor da carta de crédito, e o maior lance vence.',
    resposta: true,
    explicacao:
      'Verdadeiro. No lance livre, cada participante define livremente o percentual que deseja ofertar. O maior percentual vence. Em caso de empate, as regras variam por administradora (sorteio entre empatados, por exemplo).',
  },
  {
    id: 17,
    nivel: 'avancado',
    afirmacao:
      'O lance fixo é determinado pela administradora e representa um percentual igual para todos os participantes que desejam tentar a contemplação.',
    resposta: true,
    explicacao:
      'Verdadeiro. No lance fixo, a administradora pré-define um percentual (ex: 30% da carta) que todos devem oferecer. Como o valor é igual, o desempate entre os ofertantes é feito por sorteio.',
  },
  {
    id: 18,
    nivel: 'avancado',
    afirmacao:
      'A estratégia de adquirir múltiplas cotas de consórcio é ilegal e pode resultar em cancelamento compulsório dos contratos.',
    resposta: false,
    explicacao:
      'Falso. Adquirir múltiplas cotas é uma estratégia completamente legal e usada por investidores para aumentar as chances de contemplação ou para acumular crédito imobiliário. Não há limitação legal quanto ao número de cotas por CPF.',
  },
  {
    id: 19,
    nivel: 'avancado',
    afirmacao:
      'Após ser contemplado, o participante pode usar a carta de crédito para quitar um imóvel já financiado em seu nome.',
    resposta: true,
    explicacao:
      'Verdadeiro. A carta de crédito contemplada pode ser utilizada para quitar ou amortizar dívida de financiamento imobiliário já existente, desde que o bem esteja no nome do titular da cota e a administradora permita essa modalidade de uso.',
  },
  {
    id: 20,
    nivel: 'avancado',
    afirmacao:
      'A carta de crédito de consórcio imobiliário tem liquidez imediata, podendo ser resgatada em dinheiro pelo participante a qualquer momento após a contemplação.',
    resposta: false,
    explicacao:
      'Falso. A carta de crédito não é resgatável em dinheiro. Após a contemplação, o valor deve ser obrigatoriamente direcionado à aquisição de um bem imóvel (ou uso autorizado pelo regulamento). A administradora paga diretamente ao vendedor, não ao consorciado.',
  },
]
