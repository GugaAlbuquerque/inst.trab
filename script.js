const data = {
    "Setor de Segurança": {
        "Gestor de SSO": {
            "Preenchimento de EPI e Aplicação dos Programas de SST": [
                "Periodicamente/Condicional: Anualmente ou quando há demanda",
                "A02: Receber programas (PGR)",
                "A03: Receber ficha de EPI dos funcionários antecipadamente, via E-mail ou documento físico",
                "A04: Fazer análise de riscos da operação, a partir do documento anteriormente recebido",
                "A05: Auxiliar compra e receber programas de SST, podendo ser de contratos externos ou da própria empresa, dependendo dos riscos",
                "A06: Entender necessidades de enxoval para a equipe",
                "A07: Fazer entrega do enxoval (conjunto dos EPIs para o colaborador) no primeiro dia de trabalho",
                "A08: Preencher dados da ficha de EPI através da planilha do Excel",
                "A09: Enviar ficha de EPI's para gestor e funcionários via Teams ou E-Mail",
                "A10: Receber devolutiva da ficha de EPI assinada pelo colaborador via E-Mail ou Teams",
                "A11: Baixar ficha de EPIs já preenchida",
                "A12: Anexar ficha de EPIs juntamente com o CA na pasta no sistema",
                "A13: Conclusão do Preenchimento de EPI e Aplicação dos Programas de SST",
            ],
            "Atendimento aos Requisitos Legais SSO": [
                "Periodicamente: Mensalmente",
                "A02: Verificar requisitos legais",
                "A03: Atualizar planilha ou receber planilha atualizada",
                "A04: Verificar atendimento das leis",
                "A05: Está tudo atendendo às leis?",
                "Caso SIM: Ir para A06 e seguir leitura",
                "Caso NÃO: Voltar para A02 e seguir leitura",
                "A06: Monitorar atendimento das leis",
                "A07: Tudo certo no monitoramento?",
                "Caso SIM: Ir para A08 e finalizar processo",
                "Caso NÃO: Voltar para A04 e seguir leitura",
                "A08: Processo de Atendimento aos Requisitos Legais de SSO encerrado"
            ],
            "Fiscalizações de SST": [
                "Periodicamente: Diariamente",
                "A02: Fazer vistoria das instalações ou obras para verificar se as normas estão sendo seguidas, presencialmente",
                "A03: Tudo está dentro dos conformes?",
                "Caso SIM: Ir para A06 e finalizar processo",
                "Caso NÃO: Ir para A04 e seguir leitura",
                "A04: Gerar relatório para cada inconformidade detectada",
                "A05: Enviar relatório ao gestor do contrato/departamento, via Teams ou e-mail",
                "A06: Fiscalização finalizada"
            ],
            "Levantamento e Avaliação de Perigos e Riscos": [
                "Periodicamente/Condicional: Anualmente ou quando necessário",
                "A02: Levantar e analisar os perigos e riscos do local de trabalho",
                "A03: Levantamento e avaliação de perigos e riscos encerrada" 
            ],
            "Manutenção do Escritório da Empresa": [
                "Periodicamente/Condicional: Anualmente ou quando há necessidade",
                "A02: Realizar cronograma do ano",
                "A03: Realizar manutenção dos extintores de incêndio",
                "A04: Realizar análise da água",
                "A05: Realizar análise da qualidade do ar",
                "A06: Realizar manutenção e limpeza dos ar-condicionados",
                "A08: Trocar purificador de água",
                "A09: Realizar dedetização",
                "A10: Verificar laudo ergonômico dos escritórios",
                "A11: Realizar brigada",
                "A12: Levantar FDS",
                "A13: Manutenção do Escritório Encerrado"
            ],
            "Regularização da Brigada de Incêndios e Simulados": [
                "Periodicamente: Anualmente",
                "A02: Analisar documentação do abcb da rota de fuga e evacuação",
                "A03: Providenciar formação de brigada da empresa",
                "A04: Realizar treinos e simulados dentro da empresa",
                "A05: Processo de regularização da brigada de incêndios e simulados encerrado",
            ],
            "Treinamentos de Integração de Segurança": [
                "Condicional: Quando houver demanda ou quando houverem treinamentos previstos nos programas",
                "A02: Fornecer informações sobre dia e horário do treinamento para os colaboradores",
                "A03: Fornecer treinamento aos novos funcionários, de acordo com a necessidade, presencialmente ou via Teams",
                "A04: Recolher lista de presença",
                "A05: Emitir certificado de participação via formulário no PowerPoint",
                "A06: Enviar documento solicitando a assinatura do certificado para o gestor e setor de qualidade via E-Mail ou Teams",
                "A07: Aguardar assinatura do certificado",
                "A08: Entregar certificado ao colaborador que participou do treinamento presencialmente, caso solicitado",
                "A09: Arquivar certificado no sistema",
                "A10: Treinamentos de Segurança Encerrados"
            ]
        }
    },


    "Setor Comercial": {
        "Apoio Comercial": {
            "Acompanhamento de Oportunidade": [
                "Condicional: Após entrega da proposta",
                "A02: A oportunidade é de iniciativa privada ou pública?",
                "Caso PRIVADA: Ir para A03 e pular para A12",
                "Caso PÚBLICA: Ir para A04 e seguir leitura",
                "A03: Iniciar negociação, podendo tratar de assuntos como redução de escopo, redução de valor e eliminação de risco",
                "A04: O processo é eletrônico?",
                "Caso SIM: Ir para A05 e seguir leitura",
                "Caso NÃO: Ir para A06 e seguir leitura",
                "A05: Acompanhar oportunidade através do portal ou plataforma",
                "A06: Acompanhar oportunidade via diário oficial e monitoramento junto à comissão de licitação por meio de ligações e e-mail",
                "A07: Verificar resultado da proposta",
                "A08: Verificar viabilidade de interpor algum recurso ou contrarrazão com jurídico, comercial, diretor da UN e CEO, conforme necessidade (té o quarto lugar teria o recurso)",
                "A09: Acompanhar decisão do recurso, se necessáriom em caso de interposição de recurso via plataforma necessária",
                "A10: Acompanhar resultado de homologação e adjudicação, caso não haja interposição de recurso",
                "A11: Verificar resultado final via plataforma, se necessário",
                "A12: A oportunidade foi ganha?",
                "Caso SIM: Ir para A15 e finalizar processo",
                "Caso NÃO: Ir para A13 e seguir leitura",
                "A13: Arquivar oportunidade no Pipeline e justificar",
                "A14: Continuar monitoramento do projeto para uma futura oportunidade de negócios",
                "A15: Acompanhamento finalizado"
            ],
            "Análise de Editais": [
                "Condicional: Após haver demonstração de interesse no edital",
                "A02: Criar uma pasta com histórico do projeto, na pasta dentro da rede com o edital, documentos, certidões e o que for relacionado ao edital",
                "A03: Inserir oportunidade no Pipeline",
                "A04: Aguardar análise crítica",
                "A05: Aguardar retorno de aprovação do Diretor Regional (tempo médio: 3 dias)",
                "A06: O edital foi aprovado?",
                "Caso SIM: Ir para A07 e pular pra A09",
                "Caso NÃO: Ir para A08",
                "A07: Realizar checklist antes da elaboração da proposta, usando formulário padrão conforme edital e Checklist (arquivo excel FO.CO.002_00 - Checklist documentos licitação)",
                "A08: Justificar 'No Go' no pipeline e arquivar",
                "A09: Análise de edital finalizada"
            ],
            "Atualização de Documentação": [
                "Periodicamente: Mensalmente",
                "A02: Abrir planilha 'Controle de documentação legal' de documentos legais via Excel dentro da rede de documentos da empresa",
                "A03: Realizar análise de documentação legal",
                "A04: Atualizar informações relacionadas à documentação",
                "A05: Atualização encerrada"
            ],
            "Captação de Oportunidade de Licitação": [
                "Periodicamente: Diariamente",
                "A02: Buscar licitações e editais (conforme a atividade da empresa, modalidades, região de atuação, valores acima de R$ 1 milhão)",
                "A03: Escolher editais",
                "A04: Baixar editais na pasta compartilhada - pelo SharePoint, sincronizado pelo OneDrive, com todos os documentos e informações disponibilizadas",
                "A05: Resumir oportunidade (modalidade, órgão, prazos de execução, participação de consórcio, datação orçamentária, recursos necessários, etc.)",
                "A06: Enviar documento para os coordenadores das unidades de negócio e para o setor comercial, junto com os arquivos do edital (projetos, supervisão de obras) por e-mail",
                "A07: Aguardar retorno de demonstração de interesse (tempo médio: 3 dias)",
                "A08: Receber retorno por e-mail",
                "A09: Houve manifestação de interesse da oportunidade?",
                "Caso SIM: Ir para A11 e finalizar processo",
                "Caso NÃO: Ir para A10 e seguir leitura",
                "A10: Acessar Pipeline para justificar NO GO e arquivar oportunidade",
                "A11: Captação finalizada"
            ],
            "Elaboração da Proposta": [
                "Condicional: Após 'GO' da análise do edital",
                "A02: Definir responsabilidades e prazos responsáveis pela proposta e setor comercial",
                "A03: Coordenar a elaboração da proposta técnica junto à Diretoria Regional",
                "A04: Elaborar e verificar habilitação e proposta comercial",
                "A05: Enviar mensagem solicitando documentação necessária para composição da proposta via Teams ou e-mail",
                "A06: Realizar reunião com a Diretoria Regional para dividir proposta comercial, levantando previsibilidade de fluxo de caixa dos primeiros 3 meses da proposta",
                "A07: Apresentar proposta para obter aprovação do CEO caso valor seja acima de R$ 2 milhões",
                "A08: Obteve-se autorização para o envio da proposta?",
                "Caso SIM: Ir para A10 e seguir leitura",
                "Caso NÃO: Ir para A09 ir finalizar processo na A14",
                "A09: Arquivar no pipeline",
                "A10: Entregar proposta digitalmente ou fisicamente",
                "A11: Acompanhar oportunidade",
                "A12: Vencemos?",
                "Caso SIM: Ir para A15 e seguir leitura",
                "Caso NÃO: Ir para A13 finalizar processo na A14",
                "A13: Arquivar no pipeline",
                "A14: Processo cancelado",
                "A15: Realizar adjudicação",
                "A16: Assinar contrato",
                "A17: Contratar seguro caso necessário",
                "A18: Abrir centro de custo",
                "A19: Informar ao diretor regional e setor de qualidade que o centro de custo foi aberto, via Teams ou e-mail",
                "A20: Aguardar setor de qualidade enviar pasta de centro de custo",
                "A21: Aguardar setor de qualidade incluir todo histórico comercial na pasta",
                "A22: Participar da reunião de handover",
                "A23: Processo de elaboração da proposta finalizado"
            ],
            "Substituição de Profissionais de Contrato Vigente": [
                "Condicional: Quando há necessidade",
                "A02: Receber solicitação do setor de gestão de contratos por e-mail, com exigência de uma mudança de acervo técnico do projeto",
                "A03: Analisar exigência do edital (pasta 'proposta de licitação que participaram') sincronizada pelo OneDrive no computador",
                "A04: Buscar profissional no quadro técnico atual pelo SharePoint, sincronizado pelo OneDrive",
                "A05: Existe profissional na equipe atual da empresa?",
                "Caso SIM: Ir para A06 e finalizar processo no A08",
                "Caso NÃO: Ir para A07 e finalizar processo no A08",
                "A06: Enviar documento para o demandante com o novo acervo técnico, por e-mail",
                "A07: Repassar informação para o setor de Recursos Humanos para recrutamento e seleção do novo profissional, por e-mail",
                "A08: Substituição de profissional finalizada"
            ]
        }
    },


    "Setor de Planejamento": {
        "Setor de Planejamento": {
            "Assessoria nos Planejamentos dos Contratos": [
                "Condicional: Quando há necessidade",
                "A02: Alinhar com os gestores de contrato para verificar se há alguma necessidade, por reunião, e-mail ou pessoalmente",
                "A03: O gestor possui alguma necessidade?",
                "Caso SIM: Ir para A05 e seguir leitura",
                "Caso NÃO: Ir para A04 e finalizar processo",
                "A04: Assessoria cancelada",
                "A05: Entender a necessidade",
                "A06: Entrar em contato com o setor necessário explicando a situação, pelo Teams ou e-mail",
                "A07: Monitorar situação, entrando em contato com o setor ou gestor, por Teams ou e-mail",
                "A08: Abordar situação na reunião de Project Review",
                "A09: Assessoria finalizada"
            ],
            "Atualização de Status dos Contratos": [
                "Periodicamente: Mensalmente",
                "A02: Solicitar atualização TAP com informações dos contratos para os gestores",
                "A03: Receber atualização TAP com informações dos contratos dos gestores",
                "A04: Atualizar arquivos 'Contratos Estratégica' e 'Controle Administrativo'",
                "A05: Salvar nova planilha na pasta 'Planejamento' no Teams",
                "A06: Comunicar à controladoria, pelo Teams, que a planilha atualizada está na pasta",
                "A07: Processo de atualização de status dos contratos encerrado"
            ],
            "Coleta de Dados Profissionais e Despesas": [
                "Periodicamente: No quinto dia útil do mês",
                "A02: Solicitar ao coordenador de TI o relatório do sistema referente ao mês anterior, via Teams",
                "A03: Receber informações do sistema",
                "A04: Atualizar todos os planejamento dos contratos com informações recebidas",
                "A05: Fazer análise entre informações previstas nos planejamentos e informações realizados",
                "A06: Abrir pasta de gestão de contratos",
                "A07: Descrever análise no planejamento",
                "A08: Comunicar aos gestores que as informações estão atualizadas via e-mail",
                "A09: Realizar reunião de alinhamento dos devios das informações",
                "A10: Há informações alocadas de forma correta?",
                "Caso SIM: Ir para A11 e seguir leitura",
                "Caso NÃO: Ir para A14 e seguir leitura",
                "A11: Ajustar as informações na planilha de planejamento",
                "A12: Informar aos setores envolvidos que as informações foram ajustadas",
                "A13: Enviar para as diretorias com cópia para o gestor, via e-mail",
                "A14: Salvar planilha quando estiver organizada, na pasta 'APRORA' no Teams",
                "A15: Há necessidade de replanejar o contrato nos meses seguintes?",
                "Caso SIM: Ir para A16 e finalizar processo em A17",
                "Caso NÃO: Ir para A17 e finalizar processo",
                "A16: Replanejar na planilha de planejamento",
                "A17: Coleta de dados encerrada"
            ],
            "Encerramento dos Contratos": [
                "Condicional: Quando as atividades técnicas são encerradas",
                "A02: Prestar suporte ao encerramento contábil do contrato aos gestores, com checklist, via e-mail",
                "A03: Monitorar e controlar se o encerramento dos contratos foi comunicado aos setores financeiro, RH, operacional, qualidade, jurídico e administrativo, via e-mail",
                "A04: Enviar para gestor os contratos",
                "A05: Solicitar encerramento do centro de custos na contabilidade, via e-mail",
                "A06: Enviar para planejamento",
                "A07: Receber do gestor",
                "A08: Comunicar ao gestor por e-mail sobre o encerramento do contrato",
                "A09: Revisar e adicionar na pasta de contratos encerrados",
                "A10: Solicitar backup ao TI",
                "A11: Encerramento dos contratos finalizado"
            ],
            "Previsão de Despesas e Receitas dos Contratos Ativos": [
                "Periodicamente: Mensalmente",
                "A02: Abrir pasta com todos os contratos ativos",
                "A03: Atualizar a planilha de planejamento financeiro da receita e despesa",
                "A04: Salvar a planilha na pasta de planejamento",
                "A05: Enviar a planilha para os diretores, por e-mail",
                "A06: O diretor tem alguma dúvida?",
                "Caso SIM: Ir para A07",
                "Caso NÃO: Ir para A08 e finalizar processo",
                "A07: Marcar reunião para tirar as dúvidas",
                "A08: Previsão Encerrada"
            ]
        }
    },


    "Setor Administrativo e Financeiro": {
        "Analista Administrativo e Financeiro Pleno": {
            "Atendimento de Demanda de Informações Financeiras": [
                "Condicional: Quando há demanda",
                "A02: Receber solicitação em reunião, por e-mail ou pelo chat do Teams",
                "A03: Precisa formalizar a solicitação?",
                "Caso SIM: Ir para A05 e seguir leitura",
                "Caso NÃO: Ir para A04 e finalizar processo em A09",
                "A04: Responder solicitação por onde a recebeu",
                "A05: Pedir ao solicitante que formalize a demanda por e-mail",
                "A06: Analisar a ordem de prioridade",
                "A07: Atender com a ferramenta que julga mais efetiva para solicitação",
                "A08: Responder ao solicitante informando que a demanda foi atendida",
                "A09: Atendimento finalizado"
            ],
            "Processamento de Pagamento de Demandas Específicas": [
                "Condicional: Quando há necessidade",
                "A02: Analisar se a equipe consegue fazer a inclusão de todos os pagamentos",
                "A03: A equipe financeiro consegue fazer todos os pagamentos sozinha?",
                "Caso SIM: Ir para A04 e finalizar processo",
                "Caso NÃO: Ir para A05 e seguir leitrura",
                "A04: Processamento cancelado",
                "A05: Identificar o pagamento e o seu tipo via TOTVS",
                "A06: Acessar banco via internet",
                "A07: Realizar pagamento",
                "A08: Fazer baixa de pagamento no TOTVS",
                "A09: Baixar comprovante de pagamento",
                "A10: Colocar comprovante no TOTVS",
                "A11: Processamento finalizado"
            ],
            "Proposição de Pagamentos": [
                "Periodicamente: Segunda, quarta e sexta",
                "A02: Atualizar relatórios via TOTVS, com participação do Setor Comercial",
                "A03: Classificar despesas na planilha, juntamente com o Setor Comercial",
                "A04: Entender o que o Operacional tem como prioridade de pagamento durante reunião entre a Equipe Financeira",
                "A05: Participar da reunião com a Diretoria",
                "A06: Elaborar proposição de pagamento",
                "A07: Apresentar proposição na reunião semanal",
                "A08: Receber devolutiva do que vai ser pago ou não",
                "A09: Proposição de pagamento encerrada"
            ],
            "Realizar Análise de Conciliação": [
                "Condicional: Após baixa no sistema",
                "A02: Acessar TOTVS",
                "A03: Gerar e acompanhar extrato no TOTVS",
                "A04: Acessar contas bancárias",
                "A05: Acessar extrato dos bancos",
                "A06: Contatar Analista Financeiro para marcar conciliação",
                "A07: Realizar conciliação do TOTVS com saldos bancários com o Analista Financeiro via Teams",
                "A08: Tudo certo na conciliação?",
                "Caso SIM: Ir para A10 e finalizar processo",
                "Caso NÃO: Ir para A09 e finalizar processo em A10",
                "A09: Resolver assunto internamente",
                "A10: Conciliação encerrada"
            ],
            "Reunião com Equipe Financeira (Diretoria e Operacional)": [
                "Periodicamente: Diariamente",
                "A02: Participar da reunião levando algumas pautas a serem discutidas, via Teams",
                "A03: Discutir pautas em reunião",
                "A04: Reunião finalizada"
            ],
            "Reunião com Equipe Financeira (Lideranças)": [
                "Periodicamente: Diariamente",
                "A02: Participar da reunião levando algumas pautas a serem discutidas, via Teams",
                "A03: Discutir pautas na reunião",
                "A04: Reunião finalizada"
            ],
            "Reunir Comprovantes de Pagamentos da Semana": [
                "Periodicamente: Uma vez por semana",
                "A02: Acessar bancos para coletar comprovantes por dia",
                "A03: Salvar comprovantes",
                "A04: Colocar comprovantes de pagamento na pasta do financeiro 'Comprovante de Pagamento', no Teams",
                "A05: Reunião de comprovantes finalizada"
            ],
            "Verificação de Pagamentos a Receber pelas Contas Bancárias": [
                "Periodicamente: Diariamente",
                "A02: Verificar as contas bancárias",
                "A03: Identificar pagamentos do dia anterior",
                "A04: Informar pagamentos recebidos no dia atual para líder do financeiro, no chat da reunião da diretoria financeira",
                "A05: Atualizar planilha de fluxo que está na pasta do financeiro, no Teams",
                "A06: Realizar baixa no TOTVS, identificando quitação da respectiva nota",
                "A07: Verificação encerrada"
            ]
        },
        "Auditor Interno": {
            "Auditoria Anual": [
                "Periodicamente: Anualmente",
                "A02: Analisar demonstrações contábeis (Bal, DRE, Fluxo de caixa e Mutações de Patrimônio Líquido) ",
                "A03: Contratar auditoria externa para Plano de trabalho; Discussão das informações apuradas; Gestão dos ajustes para atendimento às normas de conformidade; Prestação de esclarecimentos e gestão de possibilidades e ressalvas",
                "A04: Analisar lançamentos e registros contábeis: Apuração de resultado; Instrumentos financeiros (Consórcios); Caixa e equivalentes de caixa; Investimentos nas sucursais (Angola, CL, Bolívia, Mind); Imobilizados e intangíveis; Demais ativos circulantes e não circulantes; Obrigações com fornecedores, sociais e tributárias, e as demais obrigações; Contribuição social e imposto de renda; Provisões (legais e contingências); Ajuste a valor presente nos ativos e passivos; Novas normas e interpretações vigentes e não vigentes.",
                "A05: Levantar ativos contratuais: Backlog; Mediações a faturar; Contas a receber (Interface com os Gestores)",
                "A06: Realizar provisões para perdas esperadas de créditos de liquidação duvidosa",
                "A07: Realizar mensuração e reconhecimento de ativos e passivos de contratos a executar; Retirada de ativos e passivos finalizados em definitivo.",
                "A08: Revisar adiantamentos: Retenções contratuais; Resolução para efetivação das baixas parciais, ativo e passivo",
                "A09: Analisar tributos a compensar: Base faturamento / retenção nacional e exportação",
                "A10: Analisar ativo circulante: Adiantamentos para execução de obras e projetos em consórcio; Efeito reversão do investimento em despesas e resultados operacionais",
                "A11: Analisar empréstimo de mútuo: Análise dos instrumentos; Análise das regras e recolhimento dos tributos envolvidos",
                "A12: Calcular receita operacional liquida",
                "A13: Levantar custos dos serviços e despesas administrativas",
                "A14: Analisar receitas e despesas financeiras",
                "A15: Executar gestão de riscos financeiros",
                "A16: Analisar simulação de resultados e efeitos nos indices de performance; Análise de alternativas de otimização; Apresentação para admnistrador da empresa; Aprovação para fechamento pelo administrador; Relação dos pontos críticos verificados",
                "A17: Encerrar auditoria externa: Apresentação do relatório; Discussão e análise das ressalvas apontadas; Análise das recomendações; Entrega do relatório final",
                "A18: Auditoria Anual Finalizada"
            ],
            "Auditoria Mensal": [
                "Periodicamente: Mensalmente - Acompanhamento da movimentação financeira",
                "A02: Contribuir no ajuste da base estimada",
                "A03: Sugerir ajustes na programação",
                "A04: Equalizar saldos entre as contas bancárias",
                "A05: Validar lançamentos a pagar nos bancos",
                "A06: Autorizar e liberar pagamentos nos bancos",
                "A07: Processo Finalizado",
                "Periodicamente: Mensalmente - Acompanhamento da operação",
                "A09: Incluir ou excluir",
                "A10: Ajustar base de despesas e receitas",
                "A11: Processar fechamento mensal final financeiro",
                "A12: Atualizar relatórios mensais",
                "A13: Atualizar base de acompanhamentos dos resultados",
                "A14: Processo Finalizado",
                "Periodicamente: Mensalmente - Acompanhar contratos dos fornecedores",
                "A16: Acompanhar contratos",
                "A17: Processo Finalizado",
                "Periodicamente: Mensalmente - Acompanhamentos dos Recursos Humanos",
                "A19: Avaliar integração com a contabilidade",
                "A20: Analisar a utilização de créditos e retenção do INSS",
                "A21: Processo Finalizado",
                "Periodicamente: Mensalmente - Análise e acompanhamento da contabilidade",
                "A23: Atualizar base",
                "A24: Analisar custos",
                "A25: Analisar regras",
                "A26: Analisar faturamento",
                "A27: Analisar reversão",
                "A28: Analisar evolução",
                "A29: Avaliar índices",
                "A30: Processo Finalizado",
            ]
        },
        "Auxiliar Administrativo": {
            "Envio de Comprovantes de Pagamentos": [
                "Condicional: Quando há necessidade",
                "A02: Receber solicitação dos comprovantes via E-mail ou Teams",
                "A03: Verificar se tem acesso aos comprovantes",
                "Se SIM: Prosseguir para A04 e pular para A07",
                "Se NÃO: Prosseguir para A05 e seguir leitura",
                "A04: Buscar comprovantes na pasta de comprovantes do Teams ou no Itaú na parte de comprovantes",
                "A05: Comunicar ao Analista Administrativo ou à equipe para solicitar os comprovantes via E-mail ou Teams",
                "A06: Receber comprovantes pelo E-mail ou Teams",
                "A07: Baixar comprovantes",
                "A08: Enviar comprovantes para o solicitante via E-mail ou Teams",
                "A09: Envio de comprovantes finalizado"
            ],
            "Lançamento de Aportes para Pagamento": [
                "Periodicamente: Mensalmente",
                "A02: Receber aportes e documentação contábil via HelpDesk",
                "A03: Baixar documentações",
                "A04: Conferir aportes e verificar se está tudo de acordo com a documentação de apoio (balanço e documentações necessárias)",
                "A05: Tem alguma inconformidade com os aportes?",
                "Se SIM: Prosseguir para A06 e seguir leitura",
                "Se NÃO: Prosseguir para A08 e seguir leitura",
                "A06: Devolver aporte para o solicitante via HelpDesk",
                "A07: Receber aporte ajustado via HelpDesk",
                "A08: Lançar aportes no TOTVS em faturas",
                "A09: É um novo aporte?",
                "Se SIM: Prosseguir para A10 e seguir leitura",
                "Se NÃO: Prosseguir para A11 e seguir leitura",
                "A10: Realizar cadastro no TOTVS",
                "A11: Arquivar aporte na pasta 'lançados' no Teams",
                "A12: Lançamento de aportes finalizado"
            ],
            "Lançamento de RPA": [
                "Condicional: Quando há necessidade",
                "A02: Receber RPA via HelpDesk",
                "A03: Baixar RPA acusando recebimento",
                "A04: Conferir RPA",
                "A05: Há alguma inconformidade com o RPA?",
                "Se SIM: Prosseguir para A06 e seguir leitura",
                "Se NÃO: Prosseguir para A08 e seguir leitura",
                "A06: Devolver RPA para o solicitante realizar as correções via HelpDesk",
                "A07: Receber RPA corrigido pelo HelpDesk",
                "A08: Abrir TOTVS",
                "A09: Lançar RPA no TOTVS, em 'Pessoa Física'",
                "A10: É uma nova PF?",
                "Se SIM: Prosseguir para A11 e seguir leitura",
                "Se NÃO: Prosseguir para A12 e seguir leitura",
                "A11: Realizar cadastro no TOTVS",
                "A12: Arquivar RPAs na pasta 'lançados' no Teams, respeitando as devidas datas do financeiro",
                "A13: Lançamento de RPA finalizado"
            ],
            "Lançamento dos CREA's e ART's": [
                "Periodicamente: Às segundas-feiras",
                "A02: Receber documentações pelo HelpDesk",
                "A03: Baixar documentações acusando recebimento",
                "A04: Conferir documentações e verificar se o engenheiro é elegível para que se possa efetuar o pagamento",
                "A05: Abrir TOTVS",
                "A06: Fazer lançamento para próxima data de pagamento",
                "A07: Arquivar documentações na pasta 'lançados' no Teams",
                "A08: Lançamento finalizado"
            ],
            "Prestação de Contas de Viagens": [
                "Condicional: Após colaborador voltar da viagem",
                "A02: Receber formulário de solicitação de viagem preenchido, assinado pelo gestor e superior imediato via sistema (em até 15 dias)",
                "A03: Analisar documentos recebidos",
                "A04: Há alguma inconformidade com os documentos",
                "Caso SIM: Ir para A05 e seguir leitura",
                "Caso NÃO: Ir para A07 e seguir leitura",
                "A05: Cobrar correção da informidade para o colaborador, via sistema",
                "A06: Houve alguma rejeição?",
                "Caso SIM: Retornar para A02 e seguir leitura",
                "Caso NÃO: Ir para A07 e seguir leitura",
                "A07: Realizar prestação de conta para fechar solicitação",
                "A08: Lançar prestação de contas no sistema",
                "A09: Arquivar prestação de contas na pasta de 'Lançados' no sistema",
                "A10: Processo finalizado"
            ],
            "Prestação de Conta Referente ao Adiantamento de Fundo Fixo": [
                "Periodicamente: Mensalmente",
                "A02: Receber prestação de contas via sistema, assinada pelo gestor e superior imediato",
                "A03: Acusar recebimento no sistema",
                "A04: Baixar prestação de contas",
                "A05: Conferir prestação de contas",
                "A06: Houve alguma dúvida ou divergência?",
                "Caso SIM: Ir para A07 e seguir leitura",
                "Caso NÃO: Ir para A09 e seguir leitura",
                "A07: Sanar dúvidas e divergências com o solicitante via sistema",
                "A08: Houve alguma rejeição?",
                "Caso SIM: Voltar para A02 e seguir leitura",
                "Caso NÃO: Ir para A09 e seguir leitura",
                "A09: Lançar no sistema como prestação de contas",
                "A10: O colaborador gastou além do fundo fixo?",
                "Caso SIM: Ir para A11 e seguir leitura",
                "Caso NÃO: Ir para A12 e seguir leitura",
                "A11: Solicitação de reembolso",
                "A12: Repor fundo fixo pelo sistema",
                "A13: Prestação de conta finalizada"
            ],
            "Solicitação de Reembolsos": [
                "Condicional: Quando algum colaborador preencher formulário de reembolso",
                "A02: Receber formulário de reembolso via Helpdesk junto com os comprovantes e assinado pelo gestor do contrato",
                "A03: Conferir solicitação",
                "A04: Há alguma inconformidade com a solicitação?",
                "Caso SIM: Ir para A05 e seguir leitura",
                "Caso NÃO: Ir para A06 e seguir leitura",
                "A05: Sanar dúvidas da inconformidade da solicitação com o colaborador",
                "A06: Lançar como pagamento para o respectivo colaborador no TOTVS, preenchendo todas as informações necessárias",
                "A07: Arquivar na pasta de 'lançados' no Teams",
                "A08: Solicitação finalizada"
            ]
        },
        "Consultor Financeiro": {
            "Acompanhamento de Relatórios Contábeis, Financeiros, de Performance e Controladoria": [
                "Periodicamente: Mensalmente",
                "A02: Analisar a situação financeira",
                "A03: Discutir situação com o setor comercial, pelo Teams",
                "A04: Realizar reunião com CEO, diretoria regional e time financeiro para analisar se indicadores e metas estão sendo atingidos, pelo Teams ou pessoalmente",
                "A05: Informar a situação financeira da empresa para o CEO, pelo Teams",
                "A06: Acompanhamento finalizado"
            ],
            "Reunião de Planejamento de Fluxo de Caixa (Geral e Diretoria)": [
                "Periodicamente: Segundas, quartas e sextas-feiras",
                "A02: Verificar lançamentos de tudo relacionado a pagamentos nos sistemas TOTVS e HD",
                "A03: Entender prioridades de pagamento dos diretores, a fim de agilizar os pagamentos mais urgentes via Teams ou pessoalmente",
                "A04: Receber lista de prioridades de pagamento, enviada pela diretoria via Teams ou e-mail",
                "A05: Abrir lista no Excel",
                "A06: Enviar cobrança sobre atualização do recebimento e resolução de faturamento da semana via e-mail",
                "A07: Realizar proposta de pagamento, listando os valores",
                "A08: Preencher planilha com os pagamentos a serem efetuados no Excel",
                "A09: Enviar ao CEO via Teams",
                "A10: Há alguma coisa para corrigir na proposta?",
                "Caso SIM: Ir para A12 e seguir leitura",
                "Caso NÃO: Ir para A11 e finalizar processo em A15",
                "A11: Efetuar pagamentos após aprovação do CEO",
                "A12: Discutir qual será o encaminhamento para resolver o problema",
                "A13: Reenviar para o CEO via Teams",
                "A14: Efetuar pagamentos após aprovação do CEO",
                "A15: Planejamento finalizado"
            ],
            "Reunião do Financeiro com Operacional em Situações de Crise de Liquidez": [
                "Periodicamente: Diariamente",
                "A02: Abrir reunião pelo Teams às 9 horas da manhã",
                "A03: Apresentar e discutir a situação financeira atual da empresa",
                "A04: Receber lista de prioridades de pagamento pelo Teams ou e-mail",
                "A05: Cobrar atualização de recebimentos e previsão de faturamento da semana",
                "A06: Entender riscos da operação a partir da visão do operacional",
                "A07: Discutir assuntos gerais acerca do financeiro e operacional",
                "A08: Reunião finalizada"
            ]
        }
    },


    "Setor de Administrativo e Compras": {
        "Analista Administrativo Júnior": {
            "Inclusão de Contrato no Sistema": [
                "Condicional: Quando recebe a nota pelo HelpDesk ou quando o contrato é finalizado no GED",
                "A02: Abrir sistema",
                "A03: Baixar nota correspondente ao contrato que foi finalizado",
                "A04: Realizar baixa no GED, se necessário",
                "A05: Abrir TOTVS",
                "A06: Inserir contrato no sistema com todas as informações necessárias",
                "A07: Realizar faturamento das medições",
                "A08: Processo de inclusão de contratos finalizado"
            ],
            "Lançamento de Notas e Faturas dos Fornecedores": [
                "Periodicamente: Diariamente",
                "A02: Acessar helpdesk",
                "A03: Receber notas e faturas através do helpdesk",
                "A04: Baixar notas e faturas em PDF",
                "A05: Abrir Teams",
                "A06: Inserir notas e faturas na pasta de lançamentos pendentes do financeiro (pasta do Teams)",
                "A07: Abrir TOTVS",
                "A08: Inserir informações das notas e faturas no sistema",
                "A09: Consultar CNPJ na nota fiscal",
                "A10: Abrir sites da fazenda e site do CEPON",
                "A11: Fazer consulta do CNPJ em ambos os sites",
                "A12: Verificar se vai haver retenção ou não nos impostos",
                "A13: Vai haver retenção?",
                "Caso SIM: Ir para A14 e seguir leitura",
                "Caso NÃO: Ir para A19 e seguir leitura",
                "A14: Realizar ajustes necessários no TOTVS",
                "A15: Surgiu alguma dúvida com relação a retenção ou notas e faturas?",
                "Caso SIM: Ir para A16 e seguir leitura",
                "Caso NÃO: Ir para A19 e seguir leitura",
                "A16: Receber dúvida sobre a retença2o ou notas e faturas, por E-mail ou teams",
                "A17: Analisar dúvida",
                "A18: Enviar devolutiva pelo E-mail ou teams, respondendo a dúvida",
                "A19: Mover notas e faturas para pasta 'Lançados' no teams",
                "A20: Lançamento finalizado",
            ],
            "Realizar Faturamento das Medições": [
                "Condicional: Ao incluir um contrato no TOTVS",
                "A02: Acessar TOTVS",
                "A03: Realizar faturamento das medições pelo TOTVS",
                "A04: Faturamento finalizado"
            ],
            "Revisão das Notas de Fornecedores": [
                "Periodicamente: No início do mês",
                "A02: Receber solicitação ou dúvida do setor contábil, via e-mail",
                "A03: Solicitar formalização, se necessário, por e-mail",
                "A04: Analisar solicitação ou dúvida",
                "A05: Consultar Setor Financeiro pelo Teams",
                "A06: Qual tipo de problema?",
                "Caso NOTA LANÇADA: Ir para A07, seguir para A08 e depois pular para A16",
                "Caso NOTA QUE NÃO FOI LANÇADA: Ir para A09 e seguir leitura",
                "A07: Abrir TOTVS",
                "A08: Fazer ajuste no TOTVS",
                "A09: Entrar em contato com o gestor para saber se é para cancelar ou lançar, via Teams ou E-mail",
                "A10: O que é para fazer com a nota?",
                "Caso CANCELAR: Ir para A13 e seguir leitura",
                "Caso LANÇAR: Ir para A11, seguir para A12 e pular para A16",
                "A11: Lançar notas e faturas dos fornecedores",
                "A12: Avisar setor contábil que a nota foi lançada por email ou WhatsApp",
                "A13: Entrar em contato com o gestor para que ele solicite cancelamento pelo Teams ou E-mail",
                "A14: Fazer consulta no site da prefeitura com data e verificar se a nota foi cancelada",
                "A15: Avisar setor contábil que a nota foi cancelada, por e-mail",
                "A16: Processo de cancelamento de nota finalizado"
            ]
        },
        "Auxiliar Administrativo": {
            "Análise de Contrato de Aluguel": [
                "Condicional: Quando há um novo contrato de aluguel",
                "A02: Acessar HelpDesk",
                "A03: Receber recibo de aluguel, juntamente com o contrato, pelo HelpDesk",
                "A04: Acessar GED",
                "A05: Pesquisar CPF/CNPJ do fornecedor",
                "A06: Verificar se o contrato de aluguel está vigente",
                "A07: Teve algum erro?",
                "Caso SIM: Ir de A08 até A10 e retornar para A06",
                "Caso NÃO: Ir para A11 e seguir leitura",
                "A08: Enviar e-mail para quem chamou, apontando o erro",
                "A09: Aguardar retorno",
                "A10: Receber contrato revisado, por e-mail",
                "A11: Acessar TOTVS",
                "A12: Clicar no campo de contratos",
                "A13: Fazer cadastro no TOTVS do novo contrato de aluguel",
                "A14: Fazer previsões no TOTVS",
                "A15: Fazer lançamento no TOTVS desse contrato de aluguel",
                "A16: Baixar contrato de aluguel no GED em PDF",
                "A17: Inserir contrato de aluguel na pasta 'Controle de Aluguel de Imóveis' no OneDrive",
                "A18: Análise de Contrato finalizada"
            ],
            "Lançamento de Notas e Faturas de Imóveis e Outros": [
                "Periodicamente: Diariamente",
                "A02: Acessar HelpDesk",
                "A03: Receber notas e faturas através do HelpDesk",
                "A04: Baixar notas e faturas em PDF",
                "A05: Inserir notas e faturas na pasta lançamentos pendentes do financeiro,em pasta no Teams",
                "A06: Abrir sistema TOTVS",
                "A07: Inserir informações das notas e faturas no TOTVS",
                "A08: Mover notas e faturas para pasta lançados na pasta 'Arquivos Lançados' no Teams",
                "A09: Surgiu alguma dúvida com relação às notas e faturas?",
                "Caso SIM: Ir para A10 e seguir leitura",
                "Caso NÃO: Ir para A20 e finalizar processo",
                "A10: Receber mensagem do setor financeiro com dados do fornecedor, pelo Teams",
                "A11: Enviar mensagem com a pessoa que abriu o chamado pelo Teams para esclarecer dúvida",
                "A12: Qual tipo de problema?",
                "Caso BOLETO: Ir para A16 e seguir leitura",
                "Caso NOTA: Ir de A13  até A15 e pular para A19",
                "A13: Aguardar solicitante entrar em contato com fornecedor",
                "A14: Receber nota de correção pelo Teams",
                "A15: Enviar para o setor financeiro nota corrigida pelo Teams",
                "A16: Aguardar solicitante pedir novo boleto",
                "A17: Receber o novo boleto pelo Teams",
                "A18: Enviar pro setor financeiro, pelo Teams o novo boleto",
                "A19: Inserir arquivo na pasta 'Arquivos Lançados' no Teams",
                "A20: Processo finalizado"
            ],
            "Lançamento de Despesas de Imóveis": [
                "Condicional: Após o recebimento das despesas do imóvel",
                "A02: Receber fatura referente a algum contrato de aluguel de imóvel pelo HelpDesk",
                "A03: Colocar fatura na pasta de lançamentos pendentes do financeiro em pasta no Teams",
                "A04: Abrir sistema TOTVS",
                "A05: Identificar contrato ao qual a fatura pertence",
                "A06: Identificar despesas da fatura no sistema TOTVS, selecionando o item no respectivo contrato",
                "A07: Fazer lançamento da fatura, baixando a previsão da respectiva despesa no TOTVS",
                "A08: Mover lançamentos para a pasta 'Arquivos lançados' no Teams",
                "A09: Itens adicionados dentro do contrato"
            ],
            "Realização de Cadastro de Cliente e Fornecedor": [
                "Condicional: Quando há necessidade",
                "A02: Receber do financeiro o cartão CNPJ, via Teams",
                "A03: Acessar TOTVS",
                "A04: O cliente ou fornecedor está no TOTVS?",
                "Caso SIM: Ir para A05 e pular para A11",
                "Caso NÃO: Ir para A06 e seguir leitura",
                "A05: Atualizar informações do cliente ou fornecedor, se necessário",
                "A06: Verificar se o fornecedor ou cliente está ativo pelo cartão CNPJ",
                "A07: Clicar em novo cadastro",
                "A08: Clicar em cliente/fornecedor",
                "A09: Realizar cadastro no TOTVS",
                "A10: Informar ao solicitante que o fornecedor/cliente já está cadastrado no TOTVS, por mensagem no Teams",
                "A11: Realização de Cadastro de Cliente e Fornecedor Finalizado"
            ],
            "Recebimento de Demonstrativo de Pagamento dos Correios": [
                "Periodicamente: No final do mês",
                "A02: Receber demonstrativo de pagamento dos correios por E-mail",
                "A03: Realizar comparação do demonstrativo com a planilha de controle de materiais enviados pelos correios",
                "A04: Realizar rateio por centro de custos, junto da nota, por planilha no Excel",
                "A05: Inserir planilha do rateio no Drive",
                "A06: Realizar lançamento de fatura no TOTVS",
                "A07: Recebimento de Demonstração de Pagamento nos Correios Encerrada"
            ],
            "Solicitação de Envio de Material pelo Correios": [
                "Condicional: Quando há demanda",
                "A02: Receber solicitação de coleta de material, pessoalmente ou pelo Teams",
                "A03: Pode ser enviado pelos correios?",
                "Caso SIM: Ir para A07 e seguir leitura",
                "Caso NÃO: Ir para A04 e seguir leitura",
                "A04: Informar que os correios não se responsabilizam por danos ou perda caso o material seja frágil, pessoalmente ou pelo Teams",
                "A05: Vai ser enviado pelos correios mesmo assim?",
                "Caso SIM: Ir para A07 e seguir leitura",
                "Caso NÃO: Ir para A06 e finalizar processo",
                "A06: Solicitação cancelada",
                "A07: Embalar material",
                "A08: Receber centro de custos do solicitante, pessoalmente ou pelo Teams",
                "A09: Receber endereço de destino do solicitante, pessoalmente ou pelo Teams",
                "A10: Informar aos correios que o material já está embalado, por ligação ou por mensagem no WhatsApp dos Correios",
                "A11: Aguardar chegar alguém dos correios para buscar o material",
                "A12: Entregar material para funcionários dos Correios",
                "A13: Preencher planilha de controle de materiais enviados pelos Correios, com código de rastreio, valor da entrega e data de coleta do material",
                "A14: Solicitação finalizada"
            ]
        },
        "Setor Administrativo": {
            "Ajustes de Quilometragem": [
                "Condicional: Quando há necessidade",
                "A02: Receber solicitação do condutor ou administrativo pelo HelpDesk",
                "A03: Receber informações do veículo (Placa, Quilometragem errada e Quilometragem a ser ajustada), pelo HelpDesk",
                "A04: Realizar ajuste no site Ticket Log",
                "A05: Finalizar chamado no HelpDesk",
                "A06: Ajuste de Quilometragem Encerrada"
            ],
            "Alteração do Condutor Principal de Veículos Locados": [
                "Condicional: Quando houver necessidade",
                "A02: Receber solicitação de alteração, do setor Administrativo, no HelpDesk",
                "A03: Elaborar carta",
                "A04: Enviar carta de solicitação para o fornecedor, via e-mail",
                "A05: Receber contrato do condutor, já assinado por ele",
                "A06: Liberar acesso do cartão e do cadastro para abastecimento de combustível, no site Ticket Log",
                "A07: O condutor já tem cadastro?",
                "Caso SIM: Ir para A08 e pular para A11",
                "Caso NÃO: Ir para A09 e seguir leitura",
                "A08: Ativar cartão de combustível",
                "A09: Fazer cadastro",
                "A10: Ativar cartão de combustível",
                "A11: Encerrar chamado no HelpDesk",
                "A12: Alteração de Condutor Principal Encerrada"
            ],
            "Desbloqueio de Cartão de Combustível": [
                "Condicional: Quando há necessidade",
                "A02: Receber chamado no HelpDesk do administrativo",
                "A03: Entrar no cartão",
                "A04: Verificar bloqueio",
                "A05: Entrar em contato com o administrativo para tratar sobre o bloqueio",
                "A06: Desbloquear cartão",
                "A07: Desbloqueio de Cartão de Combustível Encerrado"
        ],
            "Elaboração de Relatório do Combustível": [
                "Condicional: Quando solicitado",
                "A02: Receber chamado no HelpDesk",
                "A03: Elaborar relatório conforme o período solicitado no Ticket Log",
                "A04: Enviar relatório para o solicitante, via HelpDesk",
                "A05: Encerrar chamado no HelpDesk",
                "A06: Elaboração do Relatório de Combustível Encerrada"
            ],
                "Inserção de Crédito de Combustível Extra": [
                "Periodicamente: Semanalmente",
                "A02: Receber chamado do administrativo ou do condutor, no HelpDesk",
                "A03: Inserir crédito extra para o período solicitado, no cartão do condutor",
                "A04: Responder chamado com informações do período solicitado pelo condutor e com as informações do saldo atual",
                "A05: Encerrar chamado no HelpDesk",
                "A06: Inserção de Crédito de Combustível Extra Encerrado"
            ],
            "Realização de Compras": [
                "Condicional: Quando há demanda",
                "A02: Receber solicitação de compra já preenchida e assinada pelo gestor, via HelpDesk",
                "A03: É algo crítico?",
                "Caso SIM: Ir de A04 até A06 e pular para A09",
                "Caso NÃO: Ir para A07",
                "A04: Contactar Valéria para maior repasse das informações da compra, por e-mail, WhatsApp ou Teams",
                "A05: Qualificar no mínimo 3 fornecedores",
                "A06: Cotar valores",
                "A07: As compras são realizadas de maneira recorrente?",
                "Caso SIM: Ir para A09 e seguir leitura",
                "Caso NÃO: Ir para A08 e seguir leitura",
                "A08: Contactar o adm para repasse da especificidade da compra, por e-mail ou Teams",
                "A09: A compra é feita com algum fornecedor novo?",
                "Caso SIM: Ir para A10 e pular para A12",
                "Caso NÃO: Ir para A11 e seguir leitura",
                "A10: Enviar e-mail para cadastro da empresa",
                "A11: Contactar fornecedores via e-mail",
                "A12: Realizar cotação por e-mail",
                "A13: Aguardar retorno",
                "A14: Receber e-mail com cotação",
                "A15: Efetuar compra enviando e-mail para fornecedor",
                "A16: Enviar nota fiscal para o setor financeiro, via Teams",
                "A17: Realização de Compra Encerrada"
            ],
            "Recebimento de Solicitação para Manutenção ou Calibração de Equipamentos": [
                "Condicional: Quando há demanda",
                "A02: Receber solicitação de manutenção via E-mail ou HelpDesk",
                "A03: Receber equipamento com antecedência",
                "A04: Localizar fornecedor que realize o serviço em condições mais favoráveis no histórico no Drive de Compras e Serviços",
                "A05: Contactar o fornecedor específico para realizar a manutenção, por e-mail ou ligação",
                "A06: Entrar em contato com transportadoras para iniciar o procedimento de envio do equipamento",
                "A07: Enviar equipamento para a manutenção",
                "A08: Aguardar retorno do equipamento",
                "A09: Receber equipamento de volta",
                "A10: Enviar equipamento para o solicitante da manutenção",
                "A11: Recebimento de Solicitação para Manutenção de Equipamentos Encerrada"
            ],
            "Solicitação de Aplicativo de Mobilidade": [
                "Condicional: Quando houver necessidade",
                "A02: Receber solicitação do administrativo pelo HelpDesk",
                "A03: Fazer cadastro com as informações recebidas no portal da mobilidade (Uber ou 99)",
                "A04: Finalizar chamado de solicitação no HelpDesk",
                "A05: Aguardar chegada de e-mail para o colaborador",
                "A06: Receber e-mail",
                "A07: Solicitação de Aplicativos de Mobilidade Encerrada"
            ],
            "Solicitação de Autorização para Desconto de Multa": [
                "Periodicamente: Semanalmente",
                "A02: Receber e-mail da locadora com as multas",
                "A03: Repassar multas para o gestor do contrato e condutor por e-mail",
                "A04: Verificar a locadora",
                "A05: Qual é a locadora?",
                "Caso Unidas: Ir para A06 e pular para A09",
                "Caso Localiza: Ir para A07",
                "A06: Indicar via portal",
                "A07: O infrator é responsável pelo carro?",
                "Caso SIM: Ir para A09 e seguir leirura",
                "Caso NÃO: Ir para A08 e seguir leitura",
                "A08: Realizar indicação via portal",
                "A09: Anexar CNH e notificação",
                "A10: Receber documento com termo de responsabilidade do infrator",
                "A11: Enviar termo para infrator",
                "A12: Aguardar termo assinado",
                "A13: Anexar termo assinado",
                "A14: Receber autorização de desconto de multa para o departamento de Pessoas, por e-mail",
                "A15: Enviar autorização de desconto de multa para o condutor, por e-mail",
                "A16: O condutor é responsável pela multa?",
                "Caso SIM: Ir para A17 e finalizar processo em A22",
                "Caso NÃO: Ir para A18 e seguir leitura",
                "A17: Aguardar trâmite da locadora com o condutor responsável",
                "A18: Enviar formulário para condutor responsável assinar, indicando que ele foi infrator, pelo Teams",
                "A19: Aguardar preenchimento",
                "A20: Receber formulário autorizando o desconto da multa, já assinado pelo infrator, via e-mail",
                "A21: Encaminhar formulário para o RH e para o DP, pelo Teams",
                "A22: Solicitação de autorização de multa encerrada",
            ],
            "Solicitação de Manutenção de Rastreamento de Telemetria": [
                "Condicional: Quando há necessidade",
                "A02: Fornecer acesso dos carros ao gestor do contrato no site 'Mobyi'",
                "A03: Coletar informações relevantes (como histórico de multas) no portal",
                "A04: Repassar informações para o Gestor do Contrato, via e-mail",
                "A05: O gestor retornou o contato?",
                "Caso SIM: Ir para A06 e pular para A08",
                "Caso NÃO: Ir para A07 e seguir leitura",
                "A06: Solicitar advertência para o RH, por e-mail",
                "A07: Enviar e-mail para o gestor, para lembrá-lo",
                "A08: Guardar documentos em pasta no Drive",
                "A09: Solicitação Encerrada"
            ],
            "Solicitação de Manutenção de Veículos": [
                "Condicional: Quando há necessidade",
                "A02: O carro está em Recife?",
                "Caso SIM: Ir para A03 e pular para A05",
                "Caso NÃO: Ir para A04 e seguir leitura",
                "A03: Aguardar contato do motorista por WhatsApp",
                "A04: Receber solicitação via HelpDesk",
                "A05: Pesquisar fornecedores dependendo da localização que o carro está",
                "A06: Entrar em contato com oficinas mecânicas, por ligação, e-mail ou WhatsApp",
                "A07: Agendar manutenção",
                "A08: Realizar manutenção",
                "A09: Receber Nota Fiscal dos fornecedores, por e-mail",
                "A10: Colocar as notas fiscais no Drive",
                "A11: Colocar notas fiscais não lançadas no Teams",
                "A12: Solicitação de Manutenção de Veículos Encerrada"
            ],

            "Solicitação de Veículos": [
                "Periodicamente: Diariamente",
                "A02: Receber solicitação assinada pelo administrativo e do gestor do contrato pelo HelpDesk",
                "A03: Analisar qual a locadora é mais viável, no site 'Portal Corporativo'",
                "A04: Fazer reserva no site 'Portal Corporativo'",
                "A05: Enviar voucher, pelo HelpDesk",
                "A06: Encerrar chamado pelo HelpDesk",
                "A07: Processo Finalizado",
            ],

            "Tombamento de Patrimônio": [
                "Condicional: Quando há demanda",
                "A02: Receber equipamentos, que necessitam ser tombados, pessoalmente",
                "A03: Colar placa de tombamento",
                "A04: Registrar informações do equipamento e o número de tombamento em planilha Excel, no Drive, na pasta 'Compras Imobilizadas'",
                "A05: Enviar planilha para a contabilidade por e-mail",
                "A06: Processo Finalizado",
            ],
        },

        "Representante da Direção": {
            "Assinatura de Documentos": [
                "Periodicamente: Diariamente",
                "A02: Checar demandas recebidas.",
                "A03: Qual é o tipo da demanda?",
                "Caso 'DOCUMENTOS EM GERAL': Ir para A04 e pular para A07.",
                "Caso 'CONTRATO OU DISTRATO DE PJ E TERCEIROS': Ir para A05 e pular para A07.",
                "Caso 'CONTRATOS COM ORGÃOS PÚBLICOS OU CLIENTES PRIVADOS': Ir para A06 e seguir leitura.",
                "A04: Receber os documentos por e-mail.",
                "A05: Abrir GED.",
                "A06: Abrir SEI, DocSign ou links externos.",
                "A07: Analisar o documento realizando triagem (valores, data de pagamento, escopo, etc.).",
                "A08: Há algum problema no documento?",
                "Caso SIM: Ir para A09 e seguir leitura.",
                "Caso NÃO: Ir para A12 e segui leitura.",
                "A09: Solicitar a justificação do problema, e o envio do documento corrigido por WhatsApp, Teams ou E-mail.",
                "A10: Aguardar resposta do demandante.",
                "A11: Receber resposta com documento corrigido ou justificativa.",
                "A12: Enviar mensagem ao CEO informando que o documento será assinado, incluindo um resumo da triagem e justificativa para assinatura por WhatsApp.",
                "A13: Assinar o documento no E-mail, GED ou SEI.",
                "A14: Enviar o documento para o demandante.",
                "A15: Documento assinado."
            ],
            "Autorização de Pagamentos e Transferências": [
                "Periodicamente/Condicional: Quando há demanda (segundas, quartas e sextas).",
                "A02: Checar demandas recebidas do analista financeiro via Teams.",
                "A03: Abrir plataforma do banco informado na demanda.",
                "A04: Acessar aba de notificações.",
                "A05: Acessar aba de pagamentos e transferências.",
                "A06: Aguardar autorização do CEO.",
                "A07: Autorizar pagamento ou transferência.",
                "A08: Enviar confirmação de autorização para o analista financeiro via Teams.",
                "A09: Processo finalizado."
            ],
            "Rateio de Passagens e Hospedagens": [
                "Periodicamente: Mensalmente.",
                "A02: Acessar Pontestur.",
                "A03: Acessar aba de consulta.",
                "A04: Acessar solicitação necessária, inserida pelo operacional administrativo.",
                "A05: Checar solicitação.",
                "A06: Anotar na planilha Rateio Pontestur compartilhada pelo OneDrive: informações do viajante, data de solicitação, valores, motivo da viagem, etc.).",
                "A07: Há alguma dúvida sobre a solicitação?",
                "Caso SIM: Ir para A15 e seguir leitura.",
                "Caso NÃO: Ir de A08 até A14 e finzalizar processo em A24.",
                "A08: Acessar aba consulta na Pontestur.",
                "A09: Acessar aba solicitação, autorizando a cotação.",
                "A10: Aprovar solicitação do adminstrativo.",
                "A11: Receber cotação da Pontestur.",
                "A12: Aprovar cotação da Pontestur.",
                "A13: Anotar na planilha o rateio Pontestur compartilhada pelo OneDrive, informações finais da solicitação.",
                "A14: Receber passagem emitida pela Pontestur.",
                "A15: Acessar aba Calendário na Pontestur.",
                "A16: Acessar solicitação necessária, com informações sobre o viajante.",
                "A17: Enviar mensagme pelo Teams ou WhatsApp, para o administrativo e viajante, tirando dúvida necessária.",
                "A18: Ajustar a planilha.",
                "A19: Entrar em contato com a Pontestur, via Plantão no WhatsApp.",
                "A20: Solicitar alteração necessária ou cancelamento, caso necessário.",
                "A21: Enviar mensagem para o administrativo ou viajante, para resolver problemas relacionados à solicitação via e-mail ou WhatsApp.",
                "A22: Aguardar a resolução do problema.",
                "A23: Receber nova passagem com as alterações solicitadas.",
                "A24: Rateio de passagens e hospedagens finalizado",
            ]
        }
    },
    "Setor de TI": {
        "Gestor de TI": {
            "Bloqueio ou Redirecionamento de Conta": [
                "Condicional: Quando alguém é desligado ou há necessidade de repasse de conta.",
                "A02: Receber relatório do DP ou gestor com informações sobre o bloqueio.",
                "A03: Realizar bloqueio de conta de e-mail pelo painel de administração do Microsoft Office e outras plataformas necessárias.",
                "A04: É necessário redirecionar a conta?",
                "Caso SIM: Ir para A05 e seguir leitura.",
                "Caso NÃO: Ir para A07 e seguir leitura.",
                "A05: Receber comunicado para direcionar a conta por outra pessoa.",
                "A06: Cadastrar novo destinatário.",
                "A07: Manter backup da conta.",
                "A08: Finalizar o processo de bloqueio ou redirecionamento."
            ],
            "Configuração de Equipamento": [
                "Condicional: Quando receber chamado no sistema.",
                "A02: Receber demanda para configurar novo equipamento.",
                "A03: Verificar se há necessidade de comprar equipamento ou se há algum disponível.",
                "A04: Há necessidade de compra?",
                "Caso SIM: Ir para A06 e seguir leitura.",
                "Caso NÃO: Ir para A05 e pular para A08.",
                "A05: Pegar equipamento.",
                "A06: Informar para o solicitante e solicitar equipamento ao setor de compras.",
                "A07: Receber equipamento.",
                "A08: Aguardar momento da configuração.",
                "A09: Realizar configuração.",
                "A10: Realizar treinamentos ao solicitante.",
                "A11: Configuração finalizada."
            ],
            "Encerramento de Contrato": [
                "Condicional: Quando o TI for acionado no encerramento de contrato pelo gestor.",
                "A02: Localizar o contrato que deve ser encerrado.",
                "A03: Migrar contrato para a pasta de contratos encerrados.",
                "A04: Reorganizar os acessos conforme necessário.",
                "A05: Encerramento de contrato concluído."
            ],
            "Início de Contrato": [
                "Condicional: Quando houver um novo contrato.",
                "A02: Receber solicitação do gestor para abertura da pasta do novo contrato, pelo e-mail.",
                "A03: Criar pasta do contrato com a nomenclatura padrão, concedendo acesso ao gestor.",
                "A04: Processo de Início de Contrato encerrado."
            ],
            "Lançamento de Nota Fiscal e Fatura de Software e Telefonia": [
                "Periodicamente: Mensalmente.",
                "A02: Verificar se é software/serviço ou telecom.",
                "A03: Identificar o tipo de serviço.",
                "Caso SOFTWARE/SERVIÇO: Ir para A04 e pular para A07.",
                "Caso TELECOM: Ir para A05 e seguir leitura.",
                "A04: Baixar nota fiscal.",
                "A05: Acessar sites das operadoras.",
                "A06: Baixar faturas necessárias para pagamento.",
                "A07: Renomear arquivos de acordo com o padrão de nomenclatura.",
                "A08: Acessar sistema.",
                "A09: Lançar notas e faturas no sistema para financeiro.",
                "A10: Aguardar chamado ser encerrado por alguém do financeiro.",
                "A11: Receber e-mail informando que o chamado foi encerrado.",
                "A12: Lançamento de nota fiscal e fatura encerrado."
            ],
            "Manutenção dos Equipamentos de TI": [
                "Condicional: Quando há necessidade.",
                "A02: Receber solicitação pelo sistema.",
                "A03: Analisar demanda.",
                "A04: A demanda pode ser resolvida remotamente?",
                "Caso SIM: Ir para A05 e finalizar processo em A06.",
                "Caso NÃO: Ir para A07 e seguir leitura.",
                "A05: Resolver demanda remotamente.",
                "A06: Manutenção finalizada.",
                "A07: Agendar dia e horário com a pessoa.",
                "A08: Aguardar momento marcado.",
                "A09: Analisar problema.",
                "A10: Qual o tipo de problema?",
                "Caso FÍSICO: Ir para A11 e pular para A13.",
                "Caso SOFTWARE: Ir para A12 e seguir leitura.",
                "A11: Trocar equipamento.",
                "A12: Reinstalar software ou mudar configuração na máquina que deu o problema.",
                "A13: Solicitar que o usuário teste o software e observe o uso.",
                "A14: Está tudo certo?",
                "Caso SIM: Ir para A16 e finalizar processo em A17.",
                "Caso NÃO: Ir para A15 e retornar para A09.",
                "A15: Verificar novamente o problema.",
                "A16: Encerrar chamado no sistema.",
                "A17: Manutenção encerrada."
            ],
            "Monitoramento de Contrato": [
                "Periodicamente: Mensalmente.",
                "A02: Receber planilha da relação de contratos em andamento, do setor de qualidade.",
                "A03: Verificar se os backups estão sendo realizados na nuvem.",
                "A04: Estão sendo realizados os backups?",
                "Caso SIM: Ir para A06 e finalizar processo.",
                "Caso NÃO: Ir para A05.",
                "A05: Acionar gestor pelo Teams para resolver o problema e migrar a pasta para a área de backup.",
                "A06: Processo de monitoramento do contrato encerrado."
            ],
            "Renovação de Licenças Atuais": [
                "Condicional: Quando há necessidade.",
                "A02: Realizar levantamento de quem está usando o software pelo painel de controle do software e verificar vencimento das notas, por e-mail ou Teams.",
                "A03: Realizar cotação.",
                "A04: Repassar informações para a Diretoria com todos os detalhes da licença por e-mail.",
                "A05: Receber retorno da Diretoria por e-mail.",
                "A06: A licença será renovada?",
                "Caso SIM: Ir para A08 e seguir leitura.",
                "Caso NÃO: Ir para A07 e finalizar processo.",
                "A07: Renovação cancelada.",
                "A08: Entrar em contato com o fornecedor por e-mail.",
                "A09: Realizar renovação.",
                "A10: Renovação finalizada."
            ],
            "Suporte Técnico aos Colaboradores": [
                "Condicional: Quando há necessidade.",
                "A02: Receber demanda pelo Teams.",
                "A03: Solicitar que o colaborador registre a demanda no HelpDesk pelo Teams.",
                "A04: Receber chamado no HelpDesk.",
                "A05: Entrar em contato com quem solicitou o chamado via Teams para entender a dificuldade.",
                "A06: Entender o tipo de problema.",
                "A07: Resolver problema via painel de controle ou atendimento presencial, conforme necessário.",
                "A08: Encerrar chamado no HelpDesk.",
                "A09: Suporte técnico encerrado."
            ]
        }
    },
    "Setor de Comunicação e Marketing": {
        "Setor de Comunicação e Marketing": {
            "Criação de Material": [
                "Condicional: Quando o planejamento for aprovado.",
                "A02: Abrir Trello.",
                "A03: Abrir cartão do conteúdo.",
                "A04: Montar o briefing.",
                "A05: Criar material no Trello.",
                "A06: Enviar para o designer.",
                "A07: Receber retorno do designer.",
                "A08: Verificar de há erros.",
                "A09: Há erros?",
                "CASO SIM: Ir para A10 e retornar para A07",
                "CASO NÃO: Ir para A11 seguir leitura",
                "A10: Solicitar ajuste para o designer.",
                "A11: Realizar aprovação.",
                "A12: Foi aprovada?",
                "CASO SIM: Ir para A14 e seguir leitura",
                "CASO NÃO: Ir para A13 e retornar para A07",
                "A13: Solicitar ajuste ao designer",
                "A14: O conteúdo será gráfico ou digital?",
                "CASO GRÁFICO: Ir para A15 e pular para A17",
                "CASO DIGITAL: Ir para A16 e seguir leitura",
                "A15: Enivar solicitação para setor de compras",
                "A16: Salvar arquivo na pasta dele",
                "A17: Programar publicação ou lançamento",
                "A18: Conteúdo criado e publicado",
            ],

            "Criação de Newsletter": [
                "Periodicamente: Na última sexta-feira do mês",
                "A02: Abrir o E-mail.",
                "A03: Enviar a solicitação",
                "A04: Esperar a solicitação ser preenchida",
                "A05: Receber a solicitação",
                "A06: Abrir o Trello",
                "A07: Colocar o briefing",
                "A08: Tem Anexo?",
                "CASO SIM: Ir para A09 e seguir leitura",
                "CASO NÃO: Ir para A10 e seguir leitura",
                "A09: Adicionar anexo",
                "A10: Subprocesso de criação de conteúdo",
                "A11: Criação de Newsletter encerrada",
            ],

            "Desenvolvimento de identidade visual": [
                "Condicional: Quando há necessidade",
                "A02: A identidade visual será para campanha interna da marca?",
                "CAMPANHAS INTERNAS: Seguir para A03 e continuar leitura até A09 ",
                "MARCA: Seguir para A10 e continuar leitura até A22",
                "A03: Enviar briefing",
                "A04: Aguardar designer criar uma marca com fontes, aplicações e cores",
                "A05: Receber entrega",
                "A06: A entrega foi aprovada?",
                "CASO SIM: Seguir leitura para A07",
                "CASO NÃO: Ir para A08",
                "A07: Disponibilizar conforme foi solicitado",
                "A08: Ajustar e reenviar - Voltar leitura para A06",
                "A09: Processo Encerrado", 
                "A10: Realizar reunião",
                "A11: Criar um briefing",
                "A12: Entregar estudo da marca",
                "A13: Realizar reunião de validação",
                "A14: Esperar design criar a marca e um brading book da marca",
                "A15: Realizar reunião de aprovação",
                "A16: Foi aprovado?",
                "CASO SIM: Seguir leitura para A19",
                "CASO NÃO: Seguir leitura para A17",
                "A17: Realizar ajustes necessários",
                "A18: Voltar para reunião de aprovação",
                "A19: Aguardar o design criar tudo que envolve a marca",
                "A20: Realizar reunião com diretoria",
                "A21: A diretoria aprovou?",
                "CASO SIM: Ir para A22",
                "CASO NÃO: Ir para A14",
                "A22: Processo Finalizado",
            ],

            "Divulgação de Campanhas e Palestras": [
                "Periodicamente: Mensalmente",
                "A02: Realizar reunião",
                "A03: Definir ações",
                "A04: Registrar pautas",
                "A05: Estruturar campanha ou ação/palestra pelo Trello",
                "A06: A divulgação é sobre uma campanha ou palestra/ação?",
                "CASO SIM: Ir para A07 e seguir com a leitura",
                "CASO NÃO: Ir para A08 e seguir com a leitura",
                "A07: Realizar o processo de criação de conteúdo",
                "A08: Mapear processos",
                "A09: Validar constantemente os processos",
                "A10: Processo de divulgação de campnhas e palestras encerrado",
            ],

            "Gestão de e-mails de Comunicação Interna": [
                "Condicional: Quando receber um e-mail do setor solicitando a comunicação",
                "A02: Entender a solicitação",
                "A03: Abrir o Trello",
                "A04: Colocar o briefing",
                "A05: Tem Anexo?",
                "CASO SIM: Ir para A06 e seguir com a leitura",
                "CASO NÃO: Ir para a A07 e seguir com a leitura",
                "A06: Inserir anexo no Trello",
                "A07: Montar briefing",
                "A08: Enviar briefing para o designer",
                "A09: Aguardar retorno do designer",
                "A10: Receber design",
                "A11: Verificar se há erros",
                "A12: Há erros?",
                "CASO SIM: Ir para A13",
                "CASO NÃO: Ir para A14 e seguir leitura",
                "A13: Solicitar revisão - Voltar leitura para A08",
                "A14: Aprovar e-mail com técnico responsável",
                "A15: Foi aprovado?",
                "CASO SIM: Seguir leitura para A16",
                "CASO NÃO: Voltar leitura para A07",
                "A16: Programar envio",
                "A17: Enviar e-mail",
                "A18: Processo Finalizado",
            ],

            "Gestão do Site": [
                "Periodicamente: Toda terceira quinta-feira do mês",
                "A02: Verificar funcionamento do site",
                "A03: Verificar textos, dados e site",
                "A04: Enviar e-mail para validação",
                "A05: Receber retorno",
                "A06: Tem algo a ser acrescentado?",
                "CASO SIM: Ir para A07 e seguir leitura",
                "CASO NÃO: Ir para A09",
                "A07: Entender o que deve ser acrescentado",
                "A08: Realizar alterações",
                "A09: Processo Finalizado",
            ],

            "Planejamento de Ações Anuais": [
                "Periodicamente: Todo novembro",
                "A02: Realizar reunião de setor de comunicação e marketing",
                "A03: Montar calendário anual",
                "A04: Enviar e-mail para a diretoria e administradores de cada área",
                "A05: Marcar reunião para realizar o planejamento",
                "A06: Apresentar e validar o calendário",
                "A07: O calendário foi aprovado?",
                "CASO SIM: Seguir para A10 e continuar a leitura",
                "CASO NÃO: Seguir para A08 e continuar a leitura",
                "A08: Realizar ajustes necessários",
                "A09: Validar por e-mail - Voltar leitura para A06",
                "A10: Estruturar dentro do Trello",
                "A11: Processo Finalizado",
            ],

            "Produção de Evento Externo": [
                "Condicional: Quando a solicitação de evento chegar ao e-mail do setor solicitando a comunicação",
                "A02: Realizar reunião",
                "A03: Alinhar as expectativas de maneira contratual",
                "A04: Realizar levantamento dos materiais necessários",
                "A05: Realizar escopo do evento",
                "A06: Realizar levantamento de custos do evento",
                "A07: Construir cronogramas",
                "A08: Criar lista no Trello",
                "A09: Listar as entregas",
                "A10: Criar cartão para cada uma das entregas combinadas na reunião de alinhamento",
                "A11: Estruturar entregas",
                "A12: Desenvolver entregas",
                "A13: Enviar e-mail para o setor de compras solicitando orçamentos",
                "A14: Criar materiais",
                "A15: O material tem informação técnica ou institucional?",
                "CASO INSTITUCIONAL: Seguir leitura para A16",
                "CASO TÉCNICA: Seguir leitura para A19",
                "A16: Estruturar briefing",
                "A17: Enviar briefing",
                "A18: Aprovar design",
                "A19: Solicitar informações por e-mail para Rafael e João Paulo",
                "A20: Receber informações",
                "A21: Criar briefing",
                "A22: Enviar briefing",
                "A23: Receber material do designer, filmermaker ou motion designer",
                "A24: Enviar para Rafael e João Paulo para aprovação, no e-mail",
                "A25: É um material gráfico ou digital?",
                "CASO DIGITAL: Ir para A26 e seguir leitura",
                "CASO GRÁFICO: Ir para A27 e seguir leitura",
                "A26: Salvar material na pasta do drive do evento",
                "A27: Enviar para setor de compras",
                "A28: Aguardar 1 semana ou 15 dias após a finalização do evento",
                "A29: Realizar feedbacks",
                "A30: Processo Finalizado",
            ],

            "Produção de Evento Interno": [
                "Condicional: Quando a solicitação do evento chega ao setor de marketing",
                "A02: Realizar reunião de alinhamento",
                "A03: Realizar levantamento",
                "A04: Realizar reunião de validação para aprovação dos custos",
                "A05: Levantar materiais",
                "A06: Realizar levantamento dos materiais necessários e realizar escopo do evento",
                "A07: Realizar cronograma do evento",
                "A08: Criar lista",
                "A09: Analisar lista ",
                "A10: A campanha será interna?",
                "CASO SIM: Ir para A11 e seguir leitura",
                "CASO NÃO: Ir para A17 e seguir leitura",
                "A11: Enviar briefing",
                "A12: Aguardar designer criar uma marca com fontes, aplicações e cores",
                "A13: Receber entrega",
                "A14: A entrega foi aprovada?",
                "CASO SIM: Ir para A15 e seguir leitura",
                "CASO NÃO: Ir para A16 e seguir leitura",
                "A15: Disponibilizar conforme foi solicitado - Seguir leitura para A18",
                "A16: Ajustar e reenviar - Voltar leitura para A14",
                "A17: Criar cartão",
                "A18: Desenvolver entregas",
                "A19: Enviar e-mail para setor de compras solitando orçamentos",
                "A20: O material tem informação técnica ou institucional?",
                "CASO INSTITUCIONAL: Seguir leitura para A21",
                "CASO TÉCNICA: Seguir leitura para A24",
                "A21: Estruturar briefing",
                "A22: Enviar briefing para designer, filmaker ou motiondesigner",
                "A23: Aprovar design",
                "A24: Solicitar informações por e-mail para pessoa técnica",
                "A25: Receber informações técnicas",
                "A26: Criar briefing",
                "A27: Enviar briefing para designer, filmaker ou motiondesigner",
                "A28: Receber material",
                "A29: Enviar para Rafael e João Paulo para aprovação",
                "A30: É um material gráfico ou digital?",
                "CASO DIGITAL: Ir para A31 e seguir leitura",
                "CASO GRÁFICO: Ir para A32 e seguir leitura",
                "A31: Salvar material na pasta do drive do evento",
                "A32: Enviar para setor de compras",
                "A33: Processo Finalizado",
            ],

            "Produção de relatório mensal": [
                "Periodicamente: No 1º dia útil do mês",
                "A02: Selecionar os melhores indicadores de marketing no Canva",
                "A03: Comparar resultados dos indicadores com o do mês anterior",
                "A04: Apresentar relatório na reunião semanal de operações",
                "A05: Processo Finalizado",
            ],

            "Solicitação de compras de comunicação": [
                "Condicional: Quando há demanda",
                "A02: Enviar solicitação de compra para o setor de administrativo e compras",
                "A03: Aguardar resposta do setor administrativo e compras",
                "A04: Receber opções dos fornecedores",
                "A05: Validar fornecedor com o administrativo e compras",
                "A06: Aguardar setor administrativo e compras realizar tramitê",
                "A07: Receber produto teste para aprová-lo",
                "A08: O material foi aprovado?",
                "CASO SIM: Ir para A10 e seguir leitura",
                "CASO NÃO: Ir para A09 e seguir leitura",
                "A09: Procurar outro fornecedor junto com o setor administrativo e compras - Voltar leitura para A07",
                "A10: Enviar ordem de serviço",
                "A11: Solicitar mais produtos",
                "A12: Receber produtos",
                "A13: Processo finalizado",
            ],

            "Solicitação Urgente de Produção de Conteúdo": [
                "Condicional: Quando for solicitado pelo setor comercial",
                "A02: Realizar estudo de mercado",
                "A03: Abrir Trello",
                "A04: Abrir pauta de conteúdo",
                "A05: Escolher o mês",
                "A06: Criar cartão de conteúdo",
                "A07: Criar design do cartão de conteúdo",
                "A08: Preencher legendas e informações com formato da arte",
                "A09: Enviar revisão e aprovar",
                "A10: Foi aprovado?",
                "CASO SIM: Seguir para A12",
                "CASO NÃO: Ir para A11 e seguir leitura",
                "A11: Refazer seguindo a correção - Seguir leitura para A09",
                "A12: Processo Finalizado",
            ],
        }
    },
    "Setor de Contratos": {
        "Equipe de Planejamento": {
            "Reunião de Project Review": [
                "Condicional: Periodicidade ser definida na ata de reunião interna",
                "A02: Fazer convocação",
                "A03: Participar das reuniões",
                "A04: Finalizar a reunião",
                "A05: Elaborar ata da reunião",
                "A06: Enviar ata",
                "A07: O gestor devolveu a ata revisada no prazo?",
                "Caso SIM: Ir para A09 e seguir a leitura",
                "Caso NÃO: Ir para A08 e seguir a leitura",
                "A08: Enviar e-mail para o gestor com o alerta de devolutiva da ata, estipulando novo prazo de devolução",
                "A09: Revisar ata",
                "A10: Salvar documentos",
                "A11: Processo de reunião finalizado"
            ],    
        },
        "Gestor de Contratos": {
            "Acompanhamento do Fluxo de Caixa": [
                "Periodicamente: Mensalmente",
                "A02: Participar da reunião, com PMO e Diretoria Regional, pessoalmente ou online pelo Teams",
                "A03: Analisar a emissão, a nota fiscal e previsão de pagamento dos fornecedores",
                "A04: Aguardar fim da reunião",
                "A05: Repassar informações para o setor financeiro, por e-mail ou reunião",
                "A06: A empresa possui dinheiro em caixa?",
                "CASO SIM: Ir para A08 e seguir leitura",
                "CASO NÃO: Ir para A07 e seguir leitura",
                "A07: Solicitar postergação da emissão da nota fiscal, para os fornecedores, via e-mail",
                "A08: Liberar emissão",
                "A09: Aguardar recebimento da nota fiscal emitida pelo fornecedor",
                "A10: Receber nota fiscal",
                "A11: Anexar nota fiscal no HelpDesk, para pagamento por parte do setor financeiro",
                "A12: Aguardar pagamento",
                "A13: Receber informação de pagamento pelo e-mail",
                "A14: Enviar mensagem para o fornecedor, avisando sobre a realização do pagamento, via e-mail ou WhatsApp",
                "A15: Processo Finalizado",
            ],

            "Contabilização de Disciplina": [
                "Condicional: Quando houver necessidade",
                "A02: Participar da reunião de contabilização",
                "A03: Surgiu alguma dúvida que possa ser esclarecida na reunião?",
                "CASO SIM: Ir para A04 e seguir leitura",
                "CASO NÃO: Ir para A06 e seguir leitura",
                "A04: Esclarecer dúvida na reunião",
                "A05: Marcar momento para apresentar o esclarecimento",
                "A06: Processo Finalizado",
            ],

            "Contratação e negociação com Fornecedor": [
                "Condicional: Quando montar o planejamento",
                "A02: Definir escopo do contrato",
                "A03: Analisar quais serão os fornecedores necessários para executar o projeto, a partir do escopo do projeto",
                "A04: Prospectar pelo menos 3 fornecedores",
                "A05: Enviar carta de convite ao fornecedor com prazo para devolução",
                "A06: Realizar a qualificação do fornecedor a partir de formulário",
                "A07: Escolher fornecedor - de acordo com o setor de qualidade",
                "A08: Participar da reunião com fornecedores",
                "A09: Detalhar e planejar serviço ou compra com fornecedores",
                "A10: Analisar se há necessidade de renegociação, a respeito de escopo, prazos e preço do projeto",
                "A11: Enviar devolutiva para o fornecedor, com a aceitação da proposta, por e-mail, telefone ou WhatsApp",
                "A12: Solicitar documentos necessários, por e-mail",
                "A13: Enviar para o setor administrativo a proposta e os documentos, via e-mail",
                "A14: É serviço?",
                "CASO SIM: Ir para A15 e seguir leitura",
                "CASO NÃO: Ir para A16 e seguir leitura",
                "A15: Preencher formulário - FO.SG 003 De Requisição de Contrato do fornecedor",
                "A16: Abrir chamado, no sistema",
                "A17: Processo Finalizado",
            ],

            "Entrega de Medição e Faturamento": [
                "Condicional: Conforme definido",
                "A02: Enviar produto ao cliente",
                "A03: Receber retorno",
                "A04: O produto foi aprovado pelo cliente?",
                "CASO SIM: Ir para A07 e seguir leitura",
                "CASO NÃO: Ir para A05 e seguir leitura",
                "A05: Realizar alterações",
                "A06: Receber retorno",
                "A07: Emitir medição",
                "A08: Solicitar nota fiscal",
                "A09: Receber nota fiscal",
                "A10: Enviar nota fiscal ao cliente",
                "A11: Monitorar e rastrear o recebimento da fatura",
                "A12: O recebimento total foi finalizado?",
                "CASO SIM: Ir para A13 e finalizar leitura",
                "CASO NÃO: Ir para A11 e seguir leitura",
                "A13: Processo Finalizado",
            ],

            "Entrega do Projeto": [
                "Condicional: Quando há uma data de entrega específica",
                "A02: Receber projeto, dos projetistas",
                "A03: O conteúdo do projeto atende à norma e ao escopo?",
                "CASO SIM: Ir para A05 e seguir leitura",
                "CASO NÃO: Ir para A04 e seguir leitura",
                "A04: Solicitar alteração - Voltar leitura para A02",
                "A05: Enviar projeto para cliente",
                "A06: Informar ao cliente, que o projeto foi enviado na plataforma",
                "A07: Aguardar análise do projeto",
                "A08: Receber análise do projeto",
                "A09: A análise foi realizada?",
                "CASO SIM: Ir para A13 e finalizar leitura",
                "CASO NÃO: Ir para A10 e seguir leitura",
                "A10: Ir para reunião, com o analista técnico",
                "A11: Entender dúvida do cliente",
                "A12: Realizar revisão do projeto - Voltar leitura para A04",
                "A13: Processo Finalizado",
            ],

            "Envio de Contrato para assinatura do CEO de Gestor": [
                "Condicional: Quando é necessário enviar contrato para CEO",
                "A02: Encaminhar contrato ao setor jurídico por e-mail",
                "A03: Receber contrato do gestor",
                "A04: Realizar aprovação",
                "A05: Encaminhar contrato para assinatura do CEO, com cópia para o setor de qualidade, controladoria e diretoria regional",
                "A06: Receber contrato",
                "A07: Assinar contrato",
                "A08: Enviar contrato ao setor jurídico",
                "A09: Receber contrato",
                "A10: Enviar contrato ao gestor",
                "A11: Receber contrato",
                "A12: Processo Finalizado",
            ],

            "Fluxo de Gestão de Projeto Adaptativo": [
                "Condicional: Quando uma atividade vai se iniciar",
                "A02: Identificar atividade",
                "A03: Qual a vertente?",
                "CASO CERTIFICAÇÃO: Ir para A04 e seguir leitura",
                "CASO AUDITORIA: Ir para A07 e seguir leitura",
                "A04: Identificar documentação necessária",
                "A05: Analisar documentação",
                "A06: Gerar relatório - Seguir leitura para A20",
                "A07: Analisar disponibilidade da equipe",
                "A08: A equipe está disponível?",
                "CASO SIM: Ir para A10 e seguir leitura",
                "CASO NÃO: Ir para A09 e seguir leitura",
                "A09: Refazer planejamento e rever disponibilidade da equipe, em planilha no Excel",
                "A10: Alocar equipe",
                "A11: Entrar em contato com equipe alocada, através das reuniões diárias, e-mail ou Teams",
                "A12: Verificar se a equipe possui todas as EPIs (equipamentos) em dia e documentações e qualificações necessárias",
                "A13: Comunicar ao cliente",
                "A14: Aguardar resposta do cliente",
                "A15: Receber resposta do cliente",
                "A16: O cliente tem disponibilidade na data definida para vistoria?",
                "CASO SIM: Ir para A18 e seguir leitura",
                "CASO NÃO: Ir para A17 e seguir leitura",
                "A17: Reprogramar data, da vistoria de campo - Voltar leitura para A13",
                "A18: Aguardar início da vistoria",
                "A19: Acompanhar e oferecer suporte a vistoria de campo, caso necessário",
                "A20: Realizar adequação do relatório conforme necessidade do cliente",
                "A21: Entrega do relatório",
                "A22: Receber feedback, do cliente, via e-mail",
                "A23: Processo Finalizado",
            ],

            "Gestão de Consórcios": [
                "Condicional: A depender das especificações do contrato (mínimo mensalmente)",
                "A02: Realizar estudo",
                "A03: No termo existe contabilidade do consórcio?",
                "CASO SIM: Ir para A05 e seguir leitura",
                "CASO NÃO: Ir para A04 e seguir leitura",
                "A04: Acompanhar as documentações técnicas - Seguir leitura para A07",
                "A05: Realizar reuniões períodicas para o acompanhamento das atividades, documentações técnicas e acerto de contas",
                "A06: Realizar acerto de contas mensal",
                "A07: Salvar documentações na rede da Estratégica (pasta privada com respectivas permissões necessárias",
                "A08: Há necessidade de aporte?",
                "CASO SIM: Ir para A10 e seguir leitura",
                "CASO NÃO: Ir para A09 e seguir leitura",
                "A09: Elaborar relatório gerencial do projeto - Seguir leitura para A13",
                "A10: Elaborar relatório gerencial do projeto",
                "A11: Elaborar formulário de solicitação de aporte",
                "A12: Enviar formulário e documentação contábil para aporte e relatório gerencial",
                "A13: Enviar documentação",
                "A14: Arquivar documentos na rede da Estratégica",
                "A15: Processo Finalizado", 
            ],

            "Início de Contratos": [
                "Condicional: Quando um contrato é ganho",
                "A02: Participar da reunião de Handover com demais setores inclusos no contrato, separando as partes interessadas",
                "A03: Discutir riscos e métricas",
                "A04: Receber a TAC e todos os documentos da fase de proposta",
                "A05: Definir gestor do contrato",
                "A06: Receber todos os documentos da Diretoria",
                "A07: Participar da reunião com planejamento, presencialmente ou online",
                "A08: Realizar planejamento do projeto",
                "A09: Preparar material da reunião de partida",
                "A10: Participar da reunião de partida interna com as áreas de foco da empresa",
                "A11: É necessário repasse?",
                "CASO SIM: Ir para A12 e seguir leitura",
                "CASO NÃO: Ir para A13 e seguir leitura",
                "A12: Realizar repasse",
                "A13: Receber ordem de serviço com o cliente",
                "A14: Preparar reunião de partida com o cliente",
                "A15: Participar da reunião de partida com o cliente",
                "A16: Discutir sobre o escopo do projeto e divisão de tarefas, repassando o planejamento estratégico com objetivo e metas",
                "A17: Aplicar ata de reunião",
                "A18: Ata é física ou digital",
                "CASO FÍSICA: Ir para A20 e seguir leitura",
                "CASO DIGITAL: Ir para A19 e seguir leitura",
                "A19: Acessar relatório do Teams - Seguir leitura para A23",
                "A20: Imprimir Ata",
                "A21: Requerer assinatura de todos",
                "A22: Digitalizar em PDF",
                "A23: Colocar ata assinada na pasta do contrato no Teams",
                "A24: É necessário alterar o planejamento?",
                "CASO SIM: Ir para A25 e seguir leitura",
                "CASO NÃO: Ir para A26 e finalizar leitura",
                "A25: Alterar planejamento juntamente com os sócios",
                "A26: Processo Finalizado",
            ],

            "Preenchimento de requisição de pessoal": [
                "Condicional: Quando há necessidade",
                "A02: Preencher FO.PE.004 - Requisição Pessoal",
                "A03: Inserir no sistema a requisição",
                "A04: Processo Finalizado",
            ],

            "Previsão de aporte mensal": [
                "Periodicamente: Mensalmente",
                "A02: Receber documento solicitando aporte, enviado pelo consórcio",
                "A03: Participar de reunião para solicitação do aporte de aprovação das despesas com sócios",
                "A04: Acessar HelpDesk para registrar aporte e verificar documentos",
                "A05: Está tudo de acordo com o Aporte?",
                "CASO SIM: Ir para A08 e seguir leitura",
                "CASO NÃO: Ir para A06 e seguir leitura",
                "A06: Verificar erro",
                "A07: Mandar para correção",
                "A08: Repassar para o setor financeiro a realização do aporte",
                "A09: Verificar no TOTVS o status do pagamento",
                "A10: Processo Finalizado",
            ],

            "Processo de encerramento do contrato": [
                "Condicional: Quando o produto é finalizado e aprovado",
                "A02: Solicitar ao cliente, o termo de encerramento do contrato e atestado de capacidade técnica, por e-mail",
                "A03: Aguardar recebimento",
                "A04: Receber documentos solicitados, via e-mail",
                "A05: Realizar ações que constam no checklist de encerramento de contrato",
                "A06: Todas as ações foram realizadas?",
                "CASO SIM: Ir para A07 e seguir leitura",
                "CASO NÃO: Retornar para A05 e seguir leitura",
                "A07: Enviar o termo de encerramento, checklist e atestado de capacidade técnica do contrato para análise e arquivamento, para o setor de qualidade, via e-mail",
                "A08: Processo Finalizado",
            ],

            "Realização interface com os consórcios": [
                "Condicional: Quando há necessidade",
                "A02: Analisar complexidade da necessidade apresentada",
                "A03: É uma necessidade complexa?",
                "CASO SIM: Ir para A07 e seguir leitura",
                "CASO NÃO: Ir para A04 e seguir leitura",
                "A04: Enviar informações necessárias para o sócio, por e-mail",
                "A05: Aguardar resposta do consórcio",
                "A06: Receber resposta, via e-mail",
                "A07: Marcar reunião, com consórcio, pelo Teams",
                "A08: Participar da reunião",
                "A09: Apresentar evolução do contrato e as próximas ações necessárias",
                "A10: É necessário alterar o planejamento?",
                "CASO SIM: Ir para A11 e seguir leitura",
                "CASO NÃO: Ir para A13 e seguir leitura",
                "A11: Analisar necessidade de alteração, avaliando recursos necessários",
                "A12: É viável alterar?",
                "CASO SIM: Ir para A14 e seguir leitura",
                "CASO NÃO: Ir para A13 e seguir leitura",
                "A13: Informar aos consórcios que não é possível alterar o que foi solicitado - Seguir leitura para A15",
                "A14: Alterar planejamento",
                "A15: Processo Finalizado",
            ],

            "Reunião de Partida com Cliente": [
                "Condicional: Quando um projeto se inicia",
                "A02: Realizar contato com clientes",
                "A03: Realizar o planejamento do contrato",
                "A04: Marcar reunião com o cliente",
                "A05: Apresentar o planejamento",
                "A06: Tirar dúvidas do cliente",
                "A07: Alinhar expectativas",
                "A08: Definir estratégias para alcance de prazos",
                "A09: Processo Finalizado",
            ],

            "Solicitação de Documentos para realização de Medição": [
                "Periodicamente: Mensalmente",
                "A02: Acessar o Teams",
                "A03: Acessar a aba 'Equipes'",
                "A04: Acessar a Sub-Aba 'Medições'",
                "A05: Acessar arquivos",
                "A06: Processo Finalizado",
            ],
        },
    },
    
    "Setor Jurídico": { 
        "Setor Jurídico": {
            "Análise da elaboração do contrato": [
                "Condicional: Quando um contrato é elaborado",
                "A02: Acessar OneDrive",
                "A03: Assinar contrato, via GreenDocs",
                "A04: Processo Finalizado",
            ],

            "Análise Jurídica do edital": [
                "Condicional: Quando há necessidade",
                "A02: Receber informações e documentos do edital dos Diretores Regionais, por e-mail/ou receber informações do edital do setor comercial",
                "A03: Baixar documentação do processo licitatório no computador, via E-mail",
                "A04: Analisar edital",
                "A05: Tem algum problema?",
                "CASO SIM: Ir para A06 e seguir leitura",
                "CASO NÃO: Ir para A07 e seguir leitura",
                "A06: Pedir esclarecimento para o orgão que enviou o edital - Retornar leitura para A02",
                "A07: Enviar devolutiva confirmando a análise (por e-mail ou ligação)",
                "A08: Processo Finalizado"
            ],

            "Consultoria Jurídica": [
                "Condicional: Quando há uma solicitação",
                "A02: Receber a solicitação, do demandante, via e-mail",
                "A03: Analisar solicitação",
                "A04: A solicitação compete ao jurídico?",
                "CASO SIM: Ir para A07 e seguir leitura",
                "CASO NÃO: Ir para A05 e seguir leitura",
                "A05: Informar ao demandante que a solicitação não compete ao jurídico, por e-mail",
                "A06: Processo Cancelado",
                "A07: Analisar demanda para classificar em qual tipo ela se encaixa (Dúvidas, Solicitação de documentos ou Caso específico)",
                "A08: Qual o tipo da demanda?",
                "CASO SEJA 'SOLICITAÇÃO DE DOCUMENTOS': Ir para A09 e seguir leitura",
                "CASO SEJA 'DÚVIDAS': Ir para A10 e seguir leitura",
                "CASO SEJA 'CASOS ESPECÍFICOS': Ir para A11 e seguir leitura",
                "A09: Enviar documentação necessária para a execução da demanda - Seguir leitura para A12",
                "A10: Enviar informações necessárias - Seguir leitura para A12",
                "A11: Realizar pesquisa para realizar um parecer",
                "A12: Processo Finalizado",
            ],

            "Contratação de Terceiros": [
                "Condicional: Quando um contrato é fechado com o cliente",
                "A02: Analisar documentação que vai ser coletada no sistema",
                "A03: Acessar solicitação via GreenDocs",
                "A04: Checar as solicitações de contratação pendente",
                "A05: Analisar a solicitação, checando se o prazo, objeto de acordo com o CNAE e comparar os dados da empresa",
                "A06: Solicitar assinatura do CEO",
                "A07: Aguardar retorno da solicitação com a assinatura ou documentos necessários",
                "A08: Receber solicitação, com a assinatura ou novos documentos, via GreenDocs",
                "A09: Acessar modelo padrão, de contrato, nos documentos do computador",
                "A10: O contrato será elaborado pelo estagiário?",
                "CASO SIM: Ir para A11 e seguir leitura",
                "CASO NÃO: Ir para A13 e seguir leitura",
                "A11: Receber contratos, via OneDrive",
                "A12: Analisar contrato",
                "A13: Há algum erro no contrato?",
                "CASO SIM: Ir para A14 e seguir leitura",
                "CASO NÃO: Ir para A15 e seguir leitura",
                "A14: Enviar contrato, para o estagiário retificar o erro - Voltar leitura para A11",
                "A15: Anexar contrato ao GED para assinatura",
                "A16: Processo Finalizado",
            ],

            "Intermedição com os escritórios de advocacia": [
                "Condicional: Quando a empresa recebe algum documento",
                "A02: Receber notificação e documentos do setor administrativo, informando a respeito do processo, por e-mail",
                "A03: Analisar processo",
                "A04: Enviar processo, para o escritório de advocacia, informando data de recebimento, por e-mail e agendar audiência",
                "A05: Aguardar resposta do escritório",
                "A06: Receber resposta",
                "A07: Solicitar informações e documentos necessários ao setor relacionado com o processo",
                "A08: Aguardar recebimento",
                "A09: Receber informações e documentos",
                "A10: Validar informações e documentos",
                "A11: É necessário validar alguma peça processual?",
                "CASO SIM: Ir para A13 e continuar leitura",
                "CASO NÃO: Ir para A12 e continuar leitura",
                "A12: Acompanhar processo - Seguir leitura para A15",
                "A13: Receber peça do escritório, por e-mail",
                "A14: Analisar peça",
                "A15: A peça precisa de alguma retificação?",
                "CASO SIM: Ir para A16 e seguir leitura",
                "CASO NÃO: Ir para A19 e seguir leitura",
                "A16: Solicitar retificação, para o escritório",
                "A17: Aguardar alteração",
                "A18: Receber peça retificada",
                "A19: Acompanhar movimentação, recebendo devolutivas do escritório sobre o tramitê do processo",
                "A20: Há necessidade de algum gasto monetário?",
                "CASO SIM: Ir para A21 e seguir leitura",
                "CASO NÃO: Ir para A25 e seguir leitura",
                "A21: Entrar em contato com o setor financeiro, encaminhando o boleto, pelo sistema",
                "A22: Aguardar pagamento",
                "A23: Receber comprovante de pagamento",
                "A24: Informar ao escritório, a respeito do pagamento, enviando o comprovante, por e-mail",
                "A25: Acompanhar processo",
                "A26: Há necessidade de uma representação em audiência?",
                "CASO SIM: Ir para A27 e seguir leitura",
                "CASO NÃO: Ir para A29 e seguir leitura",
                "A27: Receber solicitação do escritório",
                "A28: Verificar disponibilidade de representante ou testemunha da empresa para audiência",
                "A29: Acompanhar processo",
                "A30: Tem alguma informação faltando?",
                "CASO SIM: Ir para A31 e seguir leitura",
                "CASO NÃO: Ir para A34 e seguir leitura",
                "A31: Solicitar envio das informações ou documentos restantes para o setor, por e-mail",
                "A32: Aguardar retorno",
                "A33: Receber retorno, por e-mail",
                "A34: Enviar informações e documentos ao escritório de advocacia, por e-mail",
                "A35: Acompanhar o processo",
                "A36: Há necessidade de suporte?",
                "CASO SIM: Ir para A37 e seguir leitura",
                "CASO NÃO: Ir para A38 e seguir leitura",
                "A37: Oferecer suporte - Retornar leitura para A35",
                "A38: O contrato foi encerrado?",
                "CASO SIM: Ir para A39 e finalizar leitura",
                "CASO NÃO: Retornar leitura para A35",
                "A39: Processo Finalizado",
            ],

            "Monitoramento dos processos judiciais": [
                "Periodicamente: Diariamente",
                "A02: Receber reporte, via e-mail",
                "A03: Analisar os processos, entendendo a origem e natureza do processo, partes enviadas e valores",
                "A04: É necessário suprir alguma demanda do processo?",
                "CASO SIM: Ir para A09 e seguir leitura",
                "CASO NÃO: Ir para A05 e seguir leitura",
                "A05: Informar, que não seja realizado uma proposta de acordo",
                "A06: Realizar direcionamento, para o SFCS",
                "A07: Realizar acompanhamento durante o trâmite do processo",
                "A08: Processo Finalizado",
                "A09: Encaminhar para Diretoria Regional, para realizar o encaminhamento do processo, por e-mail",
                "A10: Aguardar resposta da Diretoria",
                "A11: Receber resposta, via E-mail",
                "A12: A demanda requerida foi suprida?",
                "CASO SIM: Ir para A14 e seguir leitura",
                "CASO NÃO: Ir para A13 e seguir leitura",
                "A13: Enviar para Diretoria novamente - Seguir leitura para A16",
                "A14: Encaminhar para o SFCS",
                "A15: Continuar monitoramento da tramitação do processo",
                "A16: Subsídios enviados",
            ],

            "Solicitação de seguro e garantia contratual": [
                "Condicional: No momento em que foi acordado",
                "A02: Receber solicitação, via HelpDesk ou gestor do contrato",
                "A03: Analisar solicitação",
                "A04: Encaminhar para corretora, via sistema ou WhatsApp",
                "A05: Aguardar retorno da corretora",
                "A06: Receber retorno",
                "A07: Encaminhar boleto para pagamento para o setor financeiro",
                "A08: Enviar apólice para quem realizou solicitação, pelo HelpDesk",
                "A09: Processo Finalizado",
            ],

            "Solicitação de seguro e garantia judicial": [
                "Condicional: No momento em que foi acordado",
                "A02: Receber solicitação, via formulário",
                "A03: Analisar solicitação",
                "A04: Encaminhar para corretora, via sistema ou WhatsApp",
                "A05: Aguardar retorno da corretora",
                "A06: Receber retorno",
                "A07: Encaminhar boleto para pagamento para o setor financeiro",
                "A08: Enviar apólice para quem realizou solicitação, pelo HelpDesk",
                "A09: Processo Finalizado",
            ],

        },
    },

    "Setor de GeoTecnia": { 
        "Setor de GeoTecnia": {
            "Análise do escopo": [
                "Condicional: Quando há demanda",
                "A02: Analisar escopo do cliente ou do comercial, via e-mail",
                "A03: Realizar proposta, via e-mail",
                "A04: Enviar proposta, para comercial",
                "A05: Receber proposta",
                "A06: Validar proposta",
                "A07: A proposta é simples?",
                "CASO SIM: Ir para A10 e seguir leitura",
                "CASO NÃO: Ir para A08 e seguir leitura",
                "A08: Enviar para o CEO",
                "A09: Processo Finalizado",
                "A10: Enviar de volta",
                "A11: Receber proposta validada",
                "A12: Monitorar situação com cliente, via e-mail ou telefone",
                "A13: Aprovou a proposta?",
                "CASO SIM: Ir para A14 e seguir leitura",
                "CASO NÃO: Ir para A17 e seguir leitura",
                "A14: Montar planilha do planejamento do projeto", 
                "A15: Fazer solicitações, necessárias ao financeiro para deslocamento da equipe, via HelpDesk",
                "A16: Processo Finalizado",
                "A17: Negociar com o cliente",
                "A18: O cliente aprovou após nova proposta?",
                "CASO SIM: Retornar leitura para A14",
                "CASO NÃO: Retornar leitura para A17",
                "CASO NÃO CHEGUE A UM ACORDO: Ir para A19 e finalizar leitura",
                "A19: Processo Finalizado",
            ],

            "Análise de produção de etapa de escritório": [
                "Periodicamente: Diariamente",
                "A02: Receber dado de campo ou escritório pela pasta do Teams, WhatsApp ou E-mail",
                "A03: Verificar inconsistências",
                "A04: Houve alguma inconsistência?",
                "CASO SIM: Ir para A07 e seguir leitura",
                "CASO NÃO: Ir para A05 e seguir leitura",
                "A05: Entregar levantamento ao cliente, via e-mail",
                "A06: Processo Finalizado",
                "A07: Ligar para equipe de campo para reajuste do levantamento",
                "A08: Receber levantamento após correção",
                "A09: Validar levantamento, quando estiver correto",
                "A10: Entregar levantamento ao cliente, via e-mail",
                "A11: Processo Finalizado",
            ],

            "Empréstimo de equipamentos": [
                "Condicional: Quando há demanda de algum setor da empresa",
                "A02: Receber consulta, de disponibilidade de equipamento, via e-mail ou telefone",
                "A03: Responder e-mail",
                "A04: É possível emprestar o equipamento",
                "CASO SIM: Ir para A07 e seguir leitura",
                "CASO NÃO: Ir para A05 e seguir leitura",
                "A05: Enviar resposta, justificando o porquê de não ser possível emprestar, via e-mail",
                "A06: Processo Cancelado",
                "A07: O equipamento está com manutenção em dia?",
                "CASO SIM: Ir para A10 e seguir leitura",
                "CASO NÃO: Ir para A08 e seguir leitura",
                "A08: Enviar solicitação",
                "A09: Aguardar resposta do setor de compras",
                "A10: Receber formulário",
                "A11: Assinar formulário",
                "A12: Enviar formulário, para quem solicitou o equipamento, via e-mail",
                "A13: Aguardar retirada do equipamento pelo solicitante",
                "A14: Ordenar testagem do equipamento e assinatura do funcionamento dele",
                "A15: Processo Finalizado",
            ],

            "Ensaios de laboratório em campo": [
                "Condicional: Quando houver alguma solicitação do cliente",
                "A02: Realizar proposta e enviar ao cliente",
                "A03: Aguardar resposta do cliente",
                "A04: O cliente quer realizar o contrato?",
                "CASO SIM: Ir para A05 e seguir leitura",
                "CASO NÃO: Ir para A06 e seguir leitura",
                "A05: Aguardar envio do contrato para assinatura - Seguir leitura para A09",
                "A06: Preencher requisição",
                "A07: Salvar no sistema",
                "A08: Realizar contrato",
                "A09: Organizar equipe, equipamento e veículos",
                "A10: Aguardar assinatura das partes",
                "A11: Abrir centro de custos",
                "A12: Convocar equipe e conferir equipamentos e veículos",
                "A13: Realizar serviço conforme a norma",
                "A14: Processo Finalizado",
            ],

            "Ensaios de laboratório interno": [
                "Condicional: Quando houver alguma solicitação do cliente",
                "A02: Realizar proposta e enviar ao cliente",
                "A03: Aguardar resposta do cliente",
                "A04: O cliente quer realizar o contrato?",
                "CASO SIM: Ir para A05 e seguir leitura",
                "CASO NÃO: Ir para A06 e seguir leitura",
                "A05: Aguardar envio do contrato para assinatura - Seguir leitura para A09",
                "A06: Preencher requisição",
                "A07: Salvar no sistema",
                "A08: Realizar contrato",
                "A09: Organizar equipe e equipamentos",
                "A10: Aguardar assinatura das partes",
                "A11: Abrir centro de custos",
                "A12: Convocar equipe e conferir os equipamentos",
                "A13: Vai precisar de veículo?",
                "CASO SIM: Ir para A14 e seguir leitura",
                "CASO NÃO: Ir para A15 e seguir leitura",
                "A14: Locação de veículos",
                "A15: Realizar serviço conforme a norma",
                "A16: Processo Finalizado",
            ],

            "Levantamento aerofotogramético": [
                "Condicional: Quando houver necessidade",
                "A02: Receber solicitação do gestor, por e-mail",
                "A03: Realizar planejamento do levantamento aerofotogramético",
                "A04: Enviar solicitação de autorização de voo",
                "A05: Aguardar autorização",
                "A06: Fazer mobilização de custos para a operação pelo excel",
                "A07: Realizar o levantamento aerofotogramético com uso de drone",
                "A08: Conseguiu realizar o voo?",
                "CASO SIM: Ir para A09 e seguir leitura",
                "CASO NÃO: Retornar leitura par A07",
                "A09: Enviar para equipe de escritório pelo Teams ou HD",
                "A10: Processo Finalizado",
            ],

            "Levantamento de topografia em drone": [
                "Condicional: Quando há demanda interna ou externa",
                "A02: Receber informações do comercial ou do gestor do contrato via e-mail ou Teams",
                "A03: Realizar planejamento e solicitação de voo e de custos com o gestor do contrato, via formulário no Excel",
                "A04: Implementar macros e pontos de controle por GNSS",
                "A05: Realizar levantamento da área de estudo com o uso do drone",
                "A06: Processar dados GNSS",
                "A07: Processar imagens obtidas pelo drone",
                "A08: Gerar MDT",
                "A09: Consolidar dados em ambiente CAD",
                "A10: Realizar validação",
                "A11: Foi aprovado?",
                "CASO SIM: Ir para A13 e seguir leitura",
                "CASO NÃO: Ir para A12 e seguir leitura",
                "A12: Revisar e ajustar CAD - Retornar leitura para A11",
                "A13: Enviar relatório técnico ao cliente, via Teams ou E-mail",
                "A14: Processo Finalizado",
            ],

            "Levantamento de topografia com Estação Total/Nível": [
                "Condicional: Quando há demanda interna ou externa",
                "A02: Receber informações do comercial ou do gestor do contrato via e-mail ou Teams",
                "A03: Realizar planejamento analisando o TR, por planilha de Excel e QGIS",
                "A04: Fazer solicitação de custos com o gestor do contrato, via formulário no Excel",
                "A05: Implementar macros e pontos de transporte de coordenadas via Estação Total/Transporte de conta",
                "A06: Exportar dados para excel",
                "A07: Validar no excel",
                "A08: Consolidar em ambiente no CAD",
                "A09: Enviar para validação do cliente",
                "A10: Foi validado?",
                "CASO SIM: Ir para A12 e seguir leitura",
                "CASO NÃO: Ir para A11 e seguir leitura",
                "A11: Revisar e ajustar CAD - Retornar leitura para A09",
                "A12: Enviar relatório técnico para cliente",
                "A13: Processo Finalizado",
            ],

            "Levantamento de topografia pelo GNSS": [
                "Condicional: Quando há demanda interna ou externa",
                "A02: Receber informações do comercial ou do gestor do contrato via e-mail ou Teams",
                "A03: Realizar planejamento analisando o TR, por planilha de Excel e QGIS",
                "A04: Solicitar custos com gestor do contrato, via formulário no Excel",
                "A05: Implementar macros GNSS",
                "A06: Realizar levantamento cadastral GNSS",
                "A07: Enviar dados para validação para equipe de escritório, via servidor, Teams ou HD",
                "A08: Processar dados GNSS, via CHC e IBGE",
                "A09: Foi validado?",
                "CASO SIM: Ir para A11 e seguir leitura",
                "CASO NÃO: Ir para A10 e seguir leitura",
                "A10: Revisar e ajustar CAD - Retornar leitura para A09",
                "A11: Passar para arquivo CAD",
                "A12: Enviar relatório técnico para cliente",
                "A13: Processo Finalizado",
            ],

            "Levantamento de topografia pelo GNSS + Pegasus": [
                "Condicional: Quando há demanda interna ou externa",
                "A02: Receber informações do comercial ou do gestor do contrato via e-mail ou Teams",
                "A03: Realizar planejamento analisando o TR, por planilha de Excel e QGIS",
                "A04: Solicitar custos com gestor do contrato, via formulário no Excel",
                "A05: Implementar macros e ponto de controle pelo GNSS",
                "A06: Levantar topografia, com Pegasus",
                "A07: Enviar dados para validação para equipe de escritório, via servidor, Teams ou HD",
                "A08: Processar dados GNSS e Pegasus",
                "A09: Foi validado?",
                "CASO SIM: Ir para A11 e seguir leitura",
                "CASO NÃO: Ir para A10 e seguir leitura",
                "A10: Revisar e ajustar CAD - Retornar leitura para A09",
                "A11: Passar para arquivo CAD",
                "A12: Enviar relatório técnico para cliente",
                "A13: Processo Finalizado",
            ],

            "Manutenção de equipamentos": [
                "Periodicamente: A cada 3 meses",
                "A02: Levantar necessidade de equipamento junto com o operador",
                "A03: Fechar plano, com empresa de manutenção para assistencia, via e-mail ou telefone",
                "A04: Receber orçamento da manutenção enviado pela empresa, via e-mail",
                "A05: Analisar orçamento com o operador, se necessário",
                "A06: Enviar orçamento para gestão, para que seja aprovado, via e-mail",
                "A07: O orçamento foi aprovado?",
                "CASO SIM: Ir para A09 e seguir leitura",
                "CASO NÃO: Ir para A08 e seguir leitura",
                "A08: Buscar novo orçamento e fornecedor, via e-mail ou telefone - retornar leitura para A04",
                "A09: Solicitar abertura de contrato de prestação de serviço para o setor de compras, via sistema",
                "A10: Aguardar abertura de chamado",
                "A11: Receber e-mail",
                "A12: Solicitar nota fiscal",
                "A13: Receber nota fiscal",
                "A14: Baixar nota fiscal",
                "A15: Inserir nota fiscal na aba de 'Inserir Arquivos', no sistema",
                "A16: Designar o técnico responsável para acompanhar ou levar o equipamento para manutenção, via Teams, E-mail ou Telefone",
                "A17: Processo Finalizado",
            ],

            "Misturas e dosagens": [
                "Condicional: Quando houver alguma solicitação do cliente",
                "A02: Realizar proposta e enviar ao cliente",
                "A03: Aguardar resposta do cliente",
                "A04: O cliente quer realizar o contrato?",
                "CASO SIM: Ir para A05 e seguir leitura",
                "CASO NÃO: Ir para A06 e seguir leitura",
                "A05: Aguardar envio do contrato para assinatura - Seguir leitura para A09",
                "A06: Preencher requisição",
                "A07: Salvar no sistema",
                "A08: Realizar contrato",
                "A09: Organizar equipe e equipamentos",
                "A10: Aguardar assinatura das partes",
                "A11: Abrir centro de custos",
                "A12: Convocar equipe e conferir os equipamentos",
                "A13: Vai precisar de veículo?",
                "CASO SIM: Ir para A14 e seguir leitura",
                "CASO NÃO: Ir para A15 e seguir leitura",
                "A14: Locação de veículos",
                "A15: Realizar serviço conforme a norma",
                "A16: Processo Finalizado",
            ],

            "Monitoramento de equipes de campo": [
                "A01: Aguardar Ajuste ",

            ],

            "Pavimentação com Pegasus": [
                "Condicional: Quando há demanda",
                "A02: Realizar planejamento",
                "A03: Realizar levantamento, de custos no Excel",
                "A04: Implantar marcos pelo GNSS",
                "A05: Realizar levantamento, de pavimento com pegasus",
                "A06: Realizar validação da pavimentação",
                "A07: Enviar dados para equipe do escritório",
                "A08: Realizar processamento dos dados para planilha no Excel",
                "A09: Executar relatório técnico da pavimentação",
                "A10: Enviar relatório para solicitante via e-mail ou Teams",
                "A11: Foi validado?",
                "CASO SIM: Ir para A13 e finalizar leitura",
                "CASO NÃO: Ir para A12 e seguir leitura",
                "A12: Entender ajustes necessários - Retornar leitura para A09",
                "A13: Processo Finalizado",
            ],

            "Processamento aerofotogramético + GNSS": [
                "Condicional: Quando receber os dados de campo",
                "A02: Realizar processamento GNSS, dentro do software CHC e site oficial do IBGE    ",
                "A03: Gerar relatório e analisar os dados",
                "A04: Realizar processamento das imagens no software e metashape",
                "A05: Gerar relatório de ajuste no metashape",
                "A06: Analisar relatório e validar",
                "A07: Os dados foram validados?",
                "CASO SIM: Ir para A09 e seguir leitura",
                "CASO NÃO: Ir para A08 e seguir leitura",
                "A08: Corrigir dados - Seguir leitura para A12",
                "A09: Gerar MDT em ambiente SIG no software Global Mapper",
                "A10: Sinalizar para incluírem no ambiente CAD",
                "A11: Realizar relatório",
                "A12: Enviar para cliente via Teams ou e-mail",
                "A13: Foi validado pelo cliente?",
                "CASO SIM: Ir para A14 e seguir leitura",
                "CASO NÃO: Retornar leitura para A08",
                "A14: Enviar no formato solicitado pelo cliente",
                "A15: Executar relatório técnico",
                "A16: Processo Finalizado",
            ],

            "Processamento do GNSS": [
                "Condicional: Quando receber os dados de campo",
                "A02: Realizar planejamento, analisando o TR, por planilha de Excel e QGIS",
                "A03: Solicitar custos com gestor do contrato, via formulário no Excel",
                "A04: Implementação de Macros GNSS",
                "A05: Realizar levantamento cadastral GNSS",
                "A06: Enviar dados para validação para equipe de escritório, via servidor, Teams ou HD",
                "A07: Realizar processamento, Software inertial e Pegasus Manager",
                "A08: Ajustar os dados",
                "A09: Exportar produtos, nuvem de pontos: ortofotos: IRI",
                "A10: Levantamento de topografia ou de pavimento?",
                "CASO TOPOGRAFICO: Ir para A11 e seguir leitura",
                "CASO DE PAVIMENTO: Ir para A13 e seguir leitura",
                "A11: Emitir cadastro MDT",
                "A12: Inserir dados de topografia no ambiente CAD",
                "A13: Estruturar planilha do IRI",
                "A14: Estruturar planilh do ATR",
                "A15: Os dados foram validados?",
                "CASO SIM: Ir para A17 e seguir leitura",
                "CASO NÃO: Ir para A16 e seguir leitura",
                "A16: Corrigir dados",
                "A17: Sinalizar para incluirem no ambiente CAD",
                "A18: Enviar para cliente via Teams ou E-mail",
                "A19: Aguardar validação do cliente",
                "A20: Foi validado pelo cliente?",
                "CASO SIM: Ir para A21 e seguir leitura",
                "CASO NÃO: Retornar leitura para A16",
                "A21: Enviar no formato solicitado pelo cliente",
                "A22: Executar relatório técnico",
                "A23: Processo Finalizado",
            ],

            "Processamento do Pegasus + GNSS": [
                "Condicional: Quando receber os dados de campo",
                "A02: Realizar planejamento, analisando o TR, por planilha de Excel e QGIS",
                "A03: Solicitar custos com gestor do contrato, via formulário no Excel",
                "A04: Implementação de Macros GNSS",
                "A05: Realizar levantamento cadastral GNSS",
                "A06: Enviar dados para validação para equipe de escritório, via servidor, Teams ou HD",
                "A07: Realizar processamento, Software inertial e Pegasus Manager",
                "A08: Ajustar os dados",
                "A09: Exportar produtos, nuvem de pontos: ortofotos: IRI",
                "A10: Levantamento de topografia ou de pavimento?",
                "CASO TOPOGRAFICO: Ir para A11 e seguir leitura",
                "CASO DE PAVIMENTO: Ir para A13 e seguir leitura",
                "A11: Emitir cadastro MDT",
                "A12: Inserir dados de topografia no ambiente CAD",
                "A13: Estruturar planilha do IRI",
                "A14: Estruturar planilh do ATR",
                "A15: Os dados foram validados?",
                "CASO SIM: Ir para A17 e seguir leitura",
                "CASO NÃO: Ir para A16 e seguir leitura",
                "A16: Corrigir dados",
                "A17: Sinalizar para incluirem no ambiente CAD",
                "A18: Enviar para cliente via Teams ou E-mail",
                "A19: Aguardar validação do cliente",
                "A20: Foi validado pelo cliente?",
                "CASO SIM: Ir para A21 e seguir leitura",
                "CASO NÃO: Retornar leitura para A16",
                "A21: Enviar no formato solicitado pelo cliente",
                "A22: Executar relatório técnico",
                "A23: Processo Finalizado",
            ],

            "Receber demandas e operações de campo": [
                "Periodicamente: Diariamente",
                "A02: Se reunir com a equipe para entender o escopo do projeto, via Teams",
                "A03: Montar planilha de planejamento do projeto com informações necessárias no Excel",
                "A04: Enviar planilha para gestora do contrato, via e-mail",
                "A05: Está tudo de acordo com o planejamento?",
                "CASO SIM: Ir para A08 e seguir leitura",
                "CASO NÃO: Ir pra A06 e seguir leitura",
                "A06: Fazer ajustes",
                "A07: Reenviar planejamento para gestora, via e-mail",
                "A08: Fazer solicitações necessárias ao financeiro para deslocamentos da equipe, via sistema",
                "A09: Explicar parte técnica a ser seguida pela equipe em campo",
                "A10: Processo Finalizado",

            ],

            "Reunião com cliente - Com necessidade de ata": [
                "Condicional: Quando há demanda",
                "A02: Abrir reunião, pessoalmente ou online",
                "A03: Preencher formulário de ata de reunião, durante o momento, juntamente com o cliente",
                "A04: Coletar assinatura, por e-mail ou pessoalmente",
                "A05: Aguardar validação e assinatura do cliente",
                "A06: Receber ata assinada pelo cliente, via e-mail",
                "A07: Processo Finalizado",
            ],

            "Trabalho de campo com equipamentos avançados": [
                "A01: Aguardar ajuste ",

            ],
       },
    },

    "Setor de Recursos Humanos": {
        "Setor de Recursos Humanos": {
            "Acompanhamento da desmobilização": [
                "Condicional: Quando há demanda",
                "A02: Receber e-mail, da rescisão de contrato e confirmaçõ do jurídico de fez acordo",
                "A03: Buscar as documentações necessárias, na pasta do colaborador no Drive",
                "A04: Criar pasta 'Kit Desmobilização'",
                "A05: Anexar documentos na pasta",
                "A06: Enviar documentos para Gestor ou colaborador, por e-mail",
                "A07: Aguardar assinatura do colaborador por 48h",
                "A08: O prazo foi cumprido?",
                "CASO SIM: Ir para A13 e seguir leitura",
                "CASO NÃO: Ir para A09 e seguir leitura",
                "A09: Entrar em contato com o colaborador ou gestor, via e-mail ou telefone",
                "A10: Cobrar assinatura do colaborador, por e-mail",
                "A11: O documento foi assinado?",
                "CASO SIM: Ir para A13 e seguir leitura",
                "CASO NÃO: Ir para A12 e seguir leitura",
                "A12: Acionar o jurídico, para as próximas providências",
                "A13: Receber documentação, já assinada, por e-mail",
                "A14: Anexar na pasta desmobilização no Drive",
                "A15: Atualizar controle",
                "A16: Processo Finalizado",
            ],

            "Alteração de função e salário": [
                "Condicional: Receber formulário de movimentação pessoal assinado pelo diretor e pelo colaborador",
                "A02: Receber formulário, assinado por e-mail até o Dia 20",
                "A03: Analisar se o formulário está assinado",
                "A04: Acusar recebimento",
                "A05: Ajustar informações no TOTVS",
                "A06: Enviar folha, de pagamento ao ADM do contrato, por e-mail",
                "A07: Processo Finalizado",
            ],

            "Aniversariante do mês": [
                "Periodicamente: Todo dia 25",
                "A02: Buscar aniversariantes do mês, no sistema",
                "A03: Solicitar fotos dos aniversariantes",
                "A04: Criar cards, de aniverário no Canva",
                "A05: Fazer cartaz, para colocar no quadro de avisos",
                "A06: Enviar card individual, para os gestores dos colaboradores",
                "A07: Colocar cartaz, no quadro de avisos",
                "A08: Enviar card individual, para os aniveráriantes de outros estados, via E-mail ou Teams",
                "A09: Publicar card, no grupo de avisos na data de aniversário do colaborador",
                "A10: Processo Finalizado",
            ],

            "Aplicação de pesquisa de clima": [
                "Condicional: Quando for de acordo com o cronograma montado no inicio do ano",
                "A02: Disparar e-mails aos gestores informando a data de aplicação da pesquisa de clima",
                "A03: Aguardar o dia de aplicação da pesquisa",
                "A04: Realizar coleta de respostas através de formulário, enviado a todos da empresa via e-mail",
                "A05: Aguardar todos responderem as perguntas",
                "A06: Analisar as respostas recebidas",
                "A07: Realizar relatório em documento Word com as respostas compiladas",
                "A08: Enviar relatório à diretoria por e-mail para tomada de providências",
                "A09: Processo de aplicação de pesquisa de clima encerrado",
            ],

            "Atualização de PJ": [
                "Periodicamente: Mensalmente",
                "A02: Solicitar planilha de PJ atualizada, ao setor jurídico, até o dia 20, por e-mail",
                "A03: Receber planilha",
                "A04: Analisar planilha",
                "A05: Enviar planilha para o setor de qualidade, até o dia 25, por e-mail",
                "A06: Processo Finalizado",
            ],

            "Cadastro de Admissões de colaboradores no sistema": [
                "Condicional: Quando receber informação do RH",
                "A02: Receber notificação",
                "A03: Acessar sistema",
                "A04: Analisar solicitação",
                "A05: Está tudo de acordo com a solicitação?",
                "CASO SIM: Ir para A08 e seguir leitura",
                "CASO NÃO: Ir para A06 e seguir leitura",
                "A06: Solicitar alteração",
                "A07: Receber alteração",
                "A08: Baixar arquivos",
                "A09: Abrir sistema",
                "A10: Preencher cadastro",
                "A11: Checar informações",
                "A12: Salvar informações",
                "A13: Acessar E-social",
                "A14: Inserir matricula",
                "A15: Gerar informações",
                "A16: Enviar informações",
                "A17: Aceitar no RET",
                "A18: Gerar Kit Admissional com a ficha de registro e contrato de trabalho do colaborador no TOTVS",
                "A19: Acessar pasta",
                "A20: Criar pasta 'Kit Admissional do Colaborador",
                "A21: Inserir o Kit Admissional",
                "A22: Inserir o manual do colaborador, código de conduta e formulários admissionais",
                "A23: Anexar arquivos no sistema",
                "A24: Solicitar assinatura",
                "A25: Aguardar assinatura",
                "A26: Receber arquivo do colaborador por e-mail",
                "A27: Baixar arquivo já assinado",
                "A28: Acessar pasta de admissão do colaborador",
                "A29: Criar pasta 'Kit Add Ass' no Drive",
                "A30: Anexar arquivo",
                "A31: Processo Finalizado",
            ],

            "Cadastro de novo funcionário para batida de ponto": [
                "Condicional: Quando houver nova contratação",
                "A02: Solicitar cadastro de novo colaborador ao TI",
                "A03: Receber login e senha do colaborador",
                "A04: Repassar login e senha para o colaborador",
                "A05: Aguardar colaborador realizar login",
                "A06: Ensinar colaborador em como bater ponto, de chegada, almoço e saída",
                "A07: Processo Finalizado",
            ],


            "Controle de compra de vale transporte": [
                "Periodicamente: Quinzenalmente",
                "A02: Receber controle",
                "A03: Analisar pedidos",
                "A04: Lançamento no sistema de VT",
                "A05: Finalizar compra no site de sistema de VT",
                "A06: Gerar boleto de pagamento",
                "A07: Enviar boleto para o financeiro, pelo HelpDesk ou e-mail",
                "A08: Lançar nota fiscal no sistema",
                "A09: Processo Finalizado",
            ],

            "Controle e Frequência de Ponto do Portal": [
                "Periodicamente: Mensalmente",
                "A02: Acessar sistema",
                "A03: Recalcular ponto de colaboradores no sistema",
                "A04: Enviar para gestores por e-mail ou sistema para aprovação de ponto",
                "A05: Extrair ponto, pelo sistema",
                "A06: Passar registro para OneDrive na pasta de controle de ponto",
                "A07: Processo Finalizado",
            ],

            "Controle e Frequência de Ponto Manual": [
                "Periodicamente/Condicional: Quando fechar o período de 21 do mês atual até o dia 20 do mês seguinte",
                "A02: Enviar e-mail solicitando para enviarem o ponto manual para aprovação",
                "A03: Receber devolutiva",
                "A04: Analisar e aprovar ponto através do Excel ou PDF",
                "A05: Possui hora extras?",
                "CASO SIM: Ir para A06 e seguir leitura",
                "CASO NÃO: Ir para A07 e finalizar leitura",
                "A06: Comunicar ao VP a quantidade de horas extras que possui, por e-mail",
                "A07: Processo Finalizado",
            ],

            "Descrição de cargos": [
                "Condicional: Quando há atualização",
                "A02: Receber solicitação da área, por e-mail",
                "A03: Abrir matriz de cargos e competências para fazer alterações",
                "A04: Conferir se matriz está correspondente, juntamente com o DP",
                "A05: Atualizar a matriz de cargos e competências, caso necessário",
                "A06: Enviar para qualidade, para arquivo e divulgação, por e-mail",
                "A07: Processo Finalizado",
            ],

            "Desmobilização dos estagiários": [
                "Condicional: Quando estiver próximo da finalização do contrato dos estagiários ou quando ele é desligado",
                "A02: Analisar situação",
                "A03: Foi pedido de desligamento?",
                "CASO SIM: Ir para A04 e seguir leitura",
                "CASO NÃO: Ir para A07 e seguir leitura",
                "A04: Solicitar carta ao estagiário via e-mail",
                "A05: Aguardar recebimento de carta",
                "A06: Receber carta - Ir para A09 e seguir leitura",
                "A07: É finalização de contrato?",
                "CASO SIM: Ir para A08 e seguir leitura",
                "CASO NÃO: Ir para A09 e seguir leitura",
                "A08: Notificar gestor",
                "A09: Receber formulário",
                "A10: Enviar e-mail",
                "A11: Abrir sistema",
                "A12: Calcular rescisão no sistema",
                "A13: Processo Finalizado",
            ],

            "Divulgação de campanhas": [
                "Condicional: Quando for dia de campanha",
                "A02: Checar calendário",
                "A03: Receber solicitação de elaboração de arte para divulgação",
                "A04: A demanda é complexa?",
                "CASO SIM: Ir para A06 e seguir leitura",
                "CASO NÃO: Ir para A05 e seguir leitura",
                "A05: Realizar arte - Ir para A10 e seguir leitura",
                "A06: Repassar demanda para designer",
                "A07: Aguardar execução da demanda",
                "A08: Receber arte",
                "A09: Validar arte",
                "A10: Enviar arte para os gestores por e-mail e Teams",
                "A11: Aguardar gestores validarem",
                "A12: Receber feedbacks pelo e-mail ou Teams",
                "A13: Realizar alterações na arte, caso necessário",
                "A14: Enviar mensagem com alterações realizadas por e-mail ou Teams",
                "A15: Aguardar dia do lançamento",
                "A16: Enviar a todos os e-mails dos colaboradores das campanhas",
                "A17: Processo Finalizado",
            ],

            "Emissão de contrato de entrada de estagiários": [
                "Condicional: Quando o gestor aprova contratação",
                "A02: Enviar e-mail para o candidato informando que ele está aprovado e pedir documentos",
                "A03: Receber documentos",
                "A04: Enviar e-mail para instituição IEL ou CIEE para pedir confecção de contrato",
                "A05: Receber contrato",
                "A06: Assinar contrato",
                "A07: Aguardar assinatura das partes da estratégica (RH, Gestor e CEO), estagiário ou instituição de ensino",
                "A08: Processo Finalizado",
            ],

            "Emissão e conferência de Encargos": [
                "Condicional: Inicio de todo mês",
                "A02: Gerar lote de conferência dos encargos, no sistema",
                "A03: Receber emissão da guia do INSS pelo contador, por e-mail",
                "A04: Enviar emissão para o setor financeiro, via e-mail",
                "A05: Processo Finalizado",
            ],

            "Entrevista de desmobilização": [
                "Condicional: Quando um colaborador é desligado",
                "A02: Entrar em contato com o colaborador para marcar entrevista, via e-mail",
                "A03: Realizar entrevista online",
                "A04: Processo Finalizado",

            ],

            "Fechamento Mensal de benefícios": [
                "Condicional: Quando receber o e-mail da seguradora, com ativos, nota fiscal e boletos",
                "A02: Conferir arquivos",
                "A03: Salvar arquivos na pasta do OneDrive de benefícios",
                "A04: Realizar rateio",
                "A05: Lançar pagamento no sistema",
                "A06: Acessar Teams",
                "A07: Incluir notas, rateio e boleto",
                "A08: Processo Finalizado",
            ],

            "Formulário de avaliação de desempenho": [
                "Periodicamente/Condicional: No 45º e 90º dia do colaborador na empresa",
                "A02: Enviar formulário e aviso para gestor que o colaborador vai fazer 45 ou 90 dias de empresa",
                "A03: Aguardar gestor preencher e analisar formulário",
                "A04: Receber analise e resposta do gestor",
                "A05: O colaborador vai ser desligado?",
                "CASO SIM: Ir para A06 e seguir leitura",
                "CASO NÃO: Ir para A07 e seguir leitura",
                "A06: Enviar formulário de desmobilização para RH",
                "A07: Salvar formulário na pasta",
                "A08: Processo Finalizado",
            ],

            "Formulário de desempenho anual": [
                "Periodicamente: Todo inicio de ano",
                "A02: Enviar relatório com nomes que precisam passar pela avaliação",
                "A03: Aguardar gestores preencherem formulário e passarem feedbacks",
                "A04: Receber respostas e os feedbacks feitos pelo gestor",
                "A05: Salvar na pasta",
                "A06: Informar qualidade por e-mail",
                "A07: Processo Finalizado",
            ],

            "Gestão de férias": [
                "Periodicamente: No inicio do ano",
                "A02: Enviar listagem dos colaboradores para os gestores, via e-mail",
                "A03: Aguardar retorno",
                "A04: Receber programação de férias aprovadas pelo gestor",
                "A05: Analisar solicitação de férias, recebidas até o dia 15",
                "A06: Lançar solicitação no sistema",
                "A07: Emitir recibo",
                "A08: Enviar férias para setor financeiro pelo sistema",
                "A09: Criar arquivo financeiro e salvar em pasta o Teams 'Lançados nos TOTVS",
                "A10: Enviar para o DP e ADM do contrato assinarem solicitação de férias",
                "A11: Receber solicitação de férias",
                "A12: Inserir documentação na pasta férias no OneDrive",
                "A13: Processo Finalizado",
            ],

            "Lançamento de atestado médico": [
                "Condicional: Quando houver emissão de atestado médico",
                "A02: Receber atestado, por e-mail",
                "A03: Lançar atestado do colaborador no sistema",
                "A04: Processo Finalizado",
            ],

            "Lançamentos de multas de carro CLT": [
                "Periodicamente: Mensalmente",
                "A02: Checar lançamento",
                "A03: É CLT?",
                "CASO SIM: Ir para A06 e seguir leitura",
                "CASO NÃO: Ir para A04 e seguir leitura",
                "A04: Informar ao jurídico por e-mail",
                "A05: Processo Cancelado",
                "A06: Analisar documento enviado pelo financeiro, por e-mail",
                "A07: Lançar documento no TOTVS",
                "A08: Processo Finalizado",
            ],

            "Lançamento de Notas Fiscais": [
                "Condicional: Quando receber nota no HelpDesk",
                "A02: Receber a nota do ADM de contrato, por e-mail",
                "A03: Lançar nota no sistema",
                "A04: Lançar nota no Drive",
                "A05: Enviar E-mail ao financeiro comunicando o envio",
                "A06: Processo Finalizado",
            ],

            "Lançamento de Notas Fiscais de estagiários": [
                "Condicional: Quando receber boleto da instituição de ensino",
                "A02: Realizar lançamento no sistema",
                "A03: Salvar na pasta do financeiro",
                "A04: Processo Finalizado",
            ],

            "Lançamento de reembolso de exames ocupacionais CLT": [
                "Condicional: Quando houver aprovação do gestor",
                "A02: Receber e-mail",
                "A03: Enviar ao gestor",
                "A04: Aguardar aprovação do gestor",
                "A05: Fazer lançamento",
                "A06: Lançar na folha",
                "A07: Processo Finalizado",
            ],

            "Levantamento de necessidades de treinamento": [
                "Condicional: Quando houver necessidade",
                "A02: Elaborar formulários",
                "A03: Enviar formulários para gestor realizar a competência profissional da sua equipe",
                "A04: Receber respostas",
                "A05: Analisar respostas",
                "A06: Realizar reunião com gestores",
                "A07: Verificar levantamento de necessidades de treinamento",
                "A08: Elaborar calendário anual de treinamentos da empresa ou atualizá-lo",
                "A09: Levantar previsão de custos",
                "A10: Enviar para CEO",
                "A11: Receber proposta",
                "A12: Executar alterações demandadas pelo CEO, caso necessário",
                "A13: Aguardar dia de treinamento",
                "A14: Executar treinamentos",
                "A15: Avaliar desempenho",
                "A16: Enviar para o setor de qualidade",
                "A17: Processo Finalizado",
            ],

            "Medição": [
                "Periodicamente: Mensalmente",
                "A02: Receber e-mail de valéria, solicitando as documentações",
                "A03: Criar pasta com centro de custos dos pedidos",
                "A04: Anexar todos os documentos dentro da pasta na Rede da empresa",
                "A05: Enviar e-mail para financeiro com a pasta dos documentos anexados, caso falte algum comprovante, explicar o motivo no e-mail",
                "A06: Processo Finalizado",
            ],

            "Movimentação de benefícios": [
                "A01: --",

            ],

            "Movimentação de pessoal": [
                "Condicional: Quando há alguma mudança de cargo",
                "A02: Receber formulário de movimentação do pessoal",
                "A03: Passou do prazo do dia 20?",
                "CASO SIM: Ir para A04 e seguir leitura",
                "CASO NÃO: Ir para A06 e seguir leitura",
                "A04: Comunicar ao gestor que a alteração somente poderá acontecer no mês seguinte",
                "A05: Aguardar mês seguinte",
                "A06: Realizar alteração do cargo do funcionário no sistema",
                "A07: Processo Finalizado",
            ],

            "Onboard de integração de novo colaborador": [
                "Condicional: Quando houver um colaborador novo",
                "A02: Preparar local de trabalho com equipamentos e kit de boas-vindas",
                "A03: Apresentar colaborador a mesa",
                "A04: Realizar tour pela empresa",
                "A05: Apresentar a sua equipe",
                "A06: Fazer integração e apresentar os manuais e vídeos das áreas do colaborador",
                "A07: Processo Finalizado",
            ],

            "Onboard de reintregração": [
                "Periodicamente: Todo inicio do ano (Janeiro a março)",
                "A02: Definir cronograma",
                "A03: Realizar integração",
                "A04: Enviar ata para colaborador",
                "A05: Processo Finalizado",
            ],

            "Postagem de divulgação de vagas": [
                "Condicional: Quando há necessidade",
                "A02: Receber demanda",
                "A03: A demanda é complexa?",
                "CASO SIM: Ir para A04 e seguir leitura",
                "CASO NÃO: Ir para A05 e seguir leitura",
                "A05: Realizar arte - Ir para A10 e seguir leitura",
                "A06: Repassar demanda para designer",
                "A07: Aguardar execução da demanda",
                "A08: Receber arte",
                "A09: Validar arte",
                "A10: Enviar arte para o solicitante",
                "A11: Aguardar validação do solicitante",
                "A12: Receber feedbacks pelo e-mail ou Teams",
                "A13: Realizar alterações, caso necessário",
                "A14: Enviar mensagem com as alterações realizadas por e-mail para o solicitante",
                "A15: Postar arte",
                "A16: Processo Finalizado",
            ],

            "Processo de advertência e suspensões": [
                "Condicional: Quando há necessidade",
                "A02: Solicitar orientações",
                "A03: Aplicar advertência verbal",
                "A04: Arquivar ocorrido",
                "A05: Colaborador continua com mau comportamento?",
                "CASO SIM: Ir para A07 e seguir leitura",
                "CASO NÃO: Ir para A06 e finalizar leitura",
                "A06: Processo Finalizado",
                "A07: Solicitar orientações",
                "A08: Aplicar advertência escrita",
                "A09: Arquivar ocorrido",
                "A10: Colaborador continua com mau comportamento?",
                "CASO SIM: Ir para A12 e seguir leitura",
                "CASO NÃO: Ir para A11 e finalizar leitura",
                "A11: Processo Finalizado",
                "A12: Aplicar suspensão",
                "A13: Arquivar ocorrido",
                "A14: Colaborador continua com mau comportamento?",
                "CASO SIM: Ir para A16 e seguir leitura",
                "CASO NÃO: Ir para A15 e finalizar leitura",
                "A15: Processo Finalizado",
                "A16: Verificar com jurídico se aplica justa causa",
                "A17: Se aplica justa causa?",
                "CASO SIM: Ir para A18 e seguir leitura",
                "CASO NÃO: Retornar leitura para A12",
                "A18: Aplicar justa causa",
                "A19: Processo Finalizado",
            ],

            "Recrutamento e seleção": [
                "Condicional: Quando abre uma nova vaga",
                "A02: Receber informação de abertura de vaga, via formulário",
                "A03: Solicitar requisitos para a vaga aos gestores, via e-mail ou Teams",
                "A04: Receber os requisitos",
                "A05: Solicitar arte para o setor de marketing",
                "A06: Receber arte",
                "A07: Divulgar nas redes sociais",
                "A08: Receber currículos via gestor ou rede social",
                "A09: Realizar pré-seleção a partir da pré-requisição da vaga",
                "A10: Entender quais se enquadram no perfil da vaga",
                "A11: Marcar entrevista",
                "A12: Realizar entrevista",
                "A13: O candidato foi aprovado?",
                "CASO SIM: Ir para A14 e seguir leitura",
                "CASO NÃO: Ir para A16 e seguir leitura",
                "A14: Marcar entrevista entre candidato e gestor",
                "A15: Houve aprovação?",
                "CASO SIM: Ir para A17 e seguir leitura",
                "CASO NÃO: Ir para A16 e seguir leitura",
                "A16: Comunicar aos candidatos que não foram aprovados - Retornar leitura para A07",
                "A17: Seguir candidato para processo admissional",
                "A18: Processo Finalizado",
            ],

            "Rescisão de contrato CLT": [
                "Condicional: Quando receber formulário assinado pela Diretoria e Gestão com informações, via e-mail",
                "A02: Enviar solicitação para jurídico, qualidade e financeiro, por e-mail",
                "A03: Receber solicitação, por e-mail",
                "A04: Conseguiu acordo?",
                "CASO SIM: Ir para A06 e seguir leitura",
                "CASO NÃO: Ir para A05 e seguir leitura",
                "A05: Enviar acordo, para DP, por e-mail - Ir para A18 e finalizar leitura",
                "A06: Devolver o aviso para ADM de contrato, para assinatura e solicitação do exame demissional, por e-mail",
                "A07: Aguardar assinatura",
                "A08: Receber e-mail com assinatura e ASO demissional",
                "A09: Confeccionar aviso de recisão no sistema",
                "A10: Calcular rescisão",
                "A11: Enviar provisão de pagamento para o financeiro no Teams",
                "A12: Aguardar pagamento",
                "A13: Receber comprovante do pagamento pelo financeiro, via Teams",
                "A14: Guardar comprovante na pasta do contrato do colaborador, no Drive, de Desmobilização",
                "A15: Enviar kit de desmobilização para assinatura do funcionário",
                "A16: Aguardar assinatura",
                "A17: Receber assinatura",
                "A18: Processo Finalizado",
            ],

            "Solicitação de adiamento da ajuda de custo para estagiário": [
                "Condicional: Assim que a data de admissão do estagiário for definida",
                "A02: Calcular valor, proporcional aos dias do mês",
                "A03: Enviar para o financeiro o valor do centro de custos",
                "A04: Aguardar aprovação do financeiro em até 24h",
                "A05: Receber aprovação do financeiro",
                "A06: Aguardar depósito",
                "A07: Descontar em folha",
                "A08: Processo Finalizado",
            ],

            "Solicitação de hora extra": [
                "Condicional: Quando há necessidade",
                "A02: Colaborador ou Gestor solicita hora extra ao RH",
                "A03: Informar ao gestor ou colaborador",
                "A04: Enviar autorização ao RH e DP, via e-mail",
                "A05: DP ou RH salva, na pasta de ponto do mês",
                "A06: Processo Finalizado",
            ],

            "Triagem de candidaturas": [
                "Condicional: Quando receber candidaturas",
                "A02: Fazer avaliação do currículo",
                "A03: Realizar triagem",
                "A04: Candidato passou?",
                "CASO SIM: Ir para A07 e seguir leitura",
                "CASO NÃO: Ir para A05 e seguir leitura",
                "A05: Enviar e-mail com resultados para o candidato",
                "A06: Passar candidato - Ir para A14 e finalizar leitura",
                "A07: Acordar com gestor a melhor data, por e-mail",
                "A08: Agendar entrevista, via mensagem",
                "A09: Aguardar momento da entrevista",
                "A10: Realizar entrevista",
                "A11: Realizar avaliação interna com gestores da área, em reunião",
                "A12: O candidato foi aprovado?",
                "CASO SIM: Ir para A15 e seguir leitura",
                "CASO NÃO: Ir para A13 e seguir leitura",
                "A13: Comunicar que não foi aprovado por e-mail ou WhatsApp",
                "A14: Triagem Cancelada",
                "A15: Comunicr que foi aprovado por e-mail ou WhatsApp",
                "A16: Receber documentação do candidato aprovado",
                "A17: Enviar documentação do candidato aprovado por e-mail para o DP",
                "A18: Comunicar aos setores, via e-mail sobre a contratação",
                "A19: Acordar com Gestor",
                "A20: Avisar ao candidato",
                "A21: Processo Finalizado",
            ],
        },
    },

    "Setor de Compliance e LGPD": {
        "Setor de Compliance e LGPD": {
            "Implementação": [
                "Condicional: Quando há necessidade",
                "A02: Abrir canal de denúncias",
                "A03: Realizar levantamento das denúncias",
                "A04: Tem denúncias?",
                "CASO SIM: Ir para A06 e seguir leitura",
                "CASO NÃO: Ir para A05 e seguir leitura",
                "A05: Separar como indicador - Ir para A08 e seguir leitura",
                "A06: Investigar denúncias de não conformidades",
                "A07: Tratar denúncia",
                "A08: Realizar levantamento de contratos de terceiro",
                "A09: Revisar o modelo",
                "A10: Tem cláusula de compliance?",
                "CASO SIM: Ir para A12 e seguir leitura",
                "CASO NÃO: Ir para A11 e seguir leitura",
                "A11: Adicionar cláusula de compliance",
                "A12: Preparar design do código de ética e conduta",
                "A13: Publicar no site da empresa",
                "A14: Realizar a gestão de terceiros",
                "A15: Processo Finalizado"
            ],

            "Elaboração e Revisão do Compliance": [
                "Periodicamente/Condicional: Anualmente ou quando há necessidade",
                "A02: Se reunir com o comitê, online ou presencial",
                "A03: Fazer análise dos riscos de compliance da empresa, levantando os riscos",
                "A04: Elaborar e/ou revisar políticas e procedimentos de compliance",
                "A05: Elaborar e/ou revisar código de ética e conduta",
                "A06: Realizar mudanças necessárias",
                "A07: Comunicar a equipe interna, a respeito das mudanças, realizando um repasse",
                "A08: Realizar treinamentos e orientações",
                "A09: Aguardar fim dos treinamentos e orientações",
                "A10: Avaliar treinamentos",
                "A11: Receber informações sobre a pesquisa",
                "A12: Avaliar e monitorar o programa de treinamento",
                "A13: Tem algum problema ou inconformidade?",
                "CASO SIM: Ir para A14 e seguir leitura",
                "CASO NÃO: Ir para A15 e finalizar leitura",
                "A14: Reanalisar riscos",
                "A15: Processo Finalizado",
            ],

            "Diagnóstico Inicial": [
                "Condicional: Quando há necessidade",
                "A02: Mapear",
                "A03: Validar",
                "A04: Está tudo certo?",
                "CASO SIM: Ir para A05 e seguir leitura",
                "CASO NÃO: Ir para A06 e seguir leitura",
                "A05: Otimizar processos",
                "A06: Reanalisar os riscos de compliance",
                "A07: Estudar documentação",
                "A08: Processo Finalizado",
            ],
        },
    },
};

// Função de pesquisa recursiva
function searchInData(query, data) {
    query = query.toLowerCase(); // Converte a pesquisa para letras minúsculas
    let results = [];

    function recursiveSearch(obj, path = "") {
        for (let key in obj) {
            const currentPath = path ? `${path} > ${key}` : key;

            if (typeof obj[key] === "object") {
                // Se o valor for um objeto ou array, busca recursivamente
                recursiveSearch(obj[key], currentPath);
            } else if (typeof obj[key] === "string") {
                // Verifica se a chave ou valor contém o termo pesquisado
                if (key.toLowerCase().includes(query) || obj[key].toLowerCase().includes(query)) {
                    results.push({ path: currentPath, value: obj[key] });
                }
            }
        }
    }

    recursiveSearch(data);
    return results;
}

// Exibir os resultados no HTML
function displayResults(results) {
    const resultsContainer = document.getElementById("results-container");

    if (results.length > 0) {
        resultsContainer.innerHTML = results
            .map(
                (result) =>
                    `<div style="margin-bottom: 10px; border-bottom: 1px solid #fff; padding: 5px;">
                        <h3 style="margin: 0; color: #fff;">Caminho: ${result.path}</h3>
                        <p style="margin: 0; color: #fff;">Valor: ${result.value}</p>
                    </div>`
            )
            .join("");
    } else {
        resultsContainer.innerHTML = "<p>Nenhum resultado encontrado.</p>";
    }
}

// Configurar evento de pesquisa
document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.querySelector(".search-button");
    const searchBar = document.querySelector("#search-bar");

    searchButton.addEventListener("click", () => {
        const query = searchBar.value.trim();
        const results = searchInData(query, data); // Chama a função recursiva
        displayResults(results); // Exibe os resultados
    });
});

const descricaoDetalhada = {
    "A06: Entender necessidades de enxoval para a equipe": "Faça o login e, em seguida, clique no ícone localizado no canto inferior central da tela para realizar o cadastro do seu veículo.",
    "A05: Cadastrar veículo no aplicativo do Zona Azul": "Vá até o menu de veículos e insira as informações necessárias para o cadastro do novo veículo.",
    "A02: Receber programas (PGR)": "https://res.cloudinary.com/dph0fqovo/image/upload/v1736022148/Estrat%C3%A9gica%20Engenharia/kpq0jzjngwrc31f4d27j.png",
    "A02: Receber solicitação, via formulário": "FO.FI.001_00 - Solicitação de Seguro Garantia: https://docs.google.com/document/d/1ITM0c632SpdcWjRlCCjGKedGg9NBhRjq/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A02: Receber RPA via HelpDesk": "FO.FI.003_00 - Formulário Requisição de RPA: https://docs.google.com/document/d/1DGekne-Uot3CitPZbHFxx-nXugfV-yZ6/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A02: Receber solicitação, via HelpDesk ou gestor do contrato": "FO.FI.002_00 - Solicitação de Seguro Garantia_Endosso: https://docs.google.com/document/d/1Vi35qasTtQ15GWveAeMAtVoV68PS_Qkx/edit?usp=drive_link&ouid=108163210555426966998&rtpof=true&sd=true",
    "A02: Receber prestação de contas via sistema, assinada pelo gestor e superior imediato": "FO.FI.004_00 - Solicitação de Adiantamento: https://docs.google.com/spreadsheets/d/18C8lXo_WWfzlVTVwRO1QA-BXEAjtYmDW/edit?usp=drive_link&ouid=108163210555426966998&rtpof=true&sd=true; FO.FI.007_00 - Prestação de Contas: https://docs.google.com/spreadsheets/d/1rGMIqSXCL9AsqLS1R7bAfwK2s0PJLJ7c/edit?usp=drive_link&ouid=108163210555426966998&rtpof=true&sd=true; FO.FI.008_00 - Termo de Responsabilidade: https://docs.google.com/spreadsheets/d/1hHVYp8SntXdMJ5tCcdz2X5kZB6zLabjl/edit?usp=drive_link&ouid=108163210555426966998&rtpof=true&sd=true",
    "A02: Receber formulário de solicitação de viagem preenchido, assinado pelo gestor e superior imediato via sistema (em até 15 dias)": "FO.FI.005_00 - Solicitação viagem: https://docs.google.com/spreadsheets/d/1akfwJFcz38TMU_RR5Hvlf_U0W23vUc_4/edit?usp=drive_link&ouid=108163210555426966998&rtpof=true&sd=true",
    "A02: Receber formulário de reembolso via Helpdesk junto com os comprovantes e assinado pelo gestor do contrato": "FO.FI.009_00 - Solicitação de Crédito Cartão: https://docs.google.com/document/d/1VIWMbBJ5HBmJ141hjrURWhYHQ3ImXDAH/edit?usp=drive_link&ouid=108163210555426966998&rtpof=true&sd=true",
    "A02: Receber chamado no HelpDesk do administrativo": "FO.FI.006_00 - Termo de Responsabilidade - Cartão Pré Pago: https://docs.google.com/document/d/1YeAFhG0xMrM22xgbH1yADXZta5oyL21M/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A06: Informar para o solicitante e solicitar equipamento ao setor de compras.": "FO.TI.001_00 Solicitação de Linha de Voz e Dados: https://docs.google.com/document/d/1RNmQ2HCALsTzzcv44gD7_o6EdFeU7luV/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A02: Receber solicitação do gestor para abertura da pasta do novo contrato, pelo e-mail.": "FO.TI.002_00 Termo de Responsabilidade - Celular e Internet: https://docs.google.com/document/d/1lLRN022aWiUPBuXv4nywJWunQtxyM7_j/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A02: Localizar o contrato que deve ser encerrado.": "FO.TI.003_00 Termo de Devolução - Celular e Internet: https://docs.google.com/document/d/1jPbGCdZbYhJwUF35jUoLZw1uuowuiWjd/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A03: Realizar bloqueio de conta de e-mail pelo painel de administração do Microsoft Office e outras plataformas necessárias.": "FO.TI.001_00 Solicitação de Linha de Voz e Dados: https://docs.google.com/document/d/1RNmQ2HCALsTzzcv44gD7_o6EdFeU7luV/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A08: Realizar planejamento do projeto": "Juntamente com a equipe de planejamento com a apresentação da EAP, Elaboração de Estimativa de Custos, Cronograma detalhado e Elaboração de Escopo - FO.SG.011 - EAP; FO.SG.012 - TAC; FO.SG.013 - Declaração de Escopo; FO.SG.014 - Estimativa de Custos; FO.SG.015 - Cronograma",
    "A02: Movimentação de pessoal": "FO.PE.001_03 - Movimentação de pessoal: https://docs.google.com/document/d/10Hwq8dJw2GXLGA27cZD0a0TYlG1SyAAo/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A09: Desmobilização dos estagiários": "FO.PE.003_04 - Desmobilização de Pessoal: https://docs.google.com/document/d/1zDU2Gv7czW3zvFNnkonVzotr9v01SRUn/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A18: Cadastro de Admissões de colaboradores no sistema": "FO.PE.002_04 - Ficha Cadastral: https://docs.google.com/document/d/1KxRtG7qjqq7ZfhoDxAyiy54wuwaJgRKV/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A18: Cadastro de Admissões de colaboradores no sistema": "FO.PE.005_02 - Ficha Cadastral Estágio: https://docs.google.com/document/d/1kRo1sZdXvLDYrGqqOot9HLHpK9PMcgq-/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A02: Recrutamento e seleção": "FO.PE.004_03 - Requisição Pessoal: https://docs.google.com/document/d/1oatPOUg-S97zhElKfWf03iIwkoKbdht1/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A04: Controle e Frequência de Ponto Manual": "FO.PE.006_00 - Folha de Ponto: https://docs.google.com/spreadsheets/d/1dYHlm3f0ZDmnfO-Co1zqwyNAk-hsMMev/edit?gid=375739944#gid=375739944",
    "A10: Cadastro de Admissões de colaboradores no sistema": "FO.PE.007_01 - Lista de Documentos Admissão: https://docs.google.com/spreadsheets/d/1sVo6yLyGZ7eyc_9kPKI6V-Pd4Qmc_6IB/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A05: Treinamentos de Integração de Segurança": "FO.PE.008_01 - Certificado: https://docs.google.com/presentation/d/16WvvFrD_U2voe6lXLYE-lZ3L3cl-nTD1/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A04: Treinamentos de Integração de Segurança": "FO.PE.009_00 - Lista de Presença: https://docs.google.com/spreadsheets/d/1Ev1YXtoQipwhAkF50zYCxXhYJrnw0LAI/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A02: Formulário de avaliação de desempenho": "FO.PE.011_01 - Avaliação de Desempenho: https://docs.google.com/spreadsheets/d/1ex7rLimYq-oGJ5K0_ky2bZ8SQgkZvGR_/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true; FO.SG.030_00 - Avaliação de Desempenho do Auditor Interno - https://docs.google.com/spreadsheets/d/1IWsLLPFm9pOn8ak0mwXwLhQd9LzfCEkF/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A02: Formulário de desempenho anual": "FO.PE.011_01 - Avaliação de Desempenho: https://docs.google.com/spreadsheets/d/1ex7rLimYq-oGJ5K0_ky2bZ8SQgkZvGR_/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A02: Levantamento de necessidades de treinamento": "FO.PE.012_01 - Levantamento de necessidades de treinamento: https://docs.google.com/spreadsheets/d/1XiWBkc3ww3UH81XD3wqWmeH6XxSsg8F4/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A12: Elaboração e Revisão do Compliance": "FO.PE.013_00 - Programa Anual de Treinamentos: https://docs.google.com/spreadsheets/d/1_HFQe1yNvtgvBVgfIQxFr3KpaJgLcB71/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A12: Realização de Compras": "FO.AD.001_00 - Ficha de solicitação de Cotação: https://docs.google.com/spreadsheets/d/1kvf_0ypT9s_VJsQZLSvwuq8BbkZBPrXQ/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true ",
    "A09: Rateio de Passagens e Hospedagens": "FO.AD.001_00 - Ficha de solicitação de Cotação: https://docs.google.com/spreadsheets/d/1kvf_0ypT9s_VJsQZLSvwuq8BbkZBPrXQ/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true ",
    "A03: Renovação de Licenças Atuais":  "FO.AD.001_00 - Ficha de solicitação de Cotação: https://docs.google.com/spreadsheets/d/1kvf_0ypT9s_VJsQZLSvwuq8BbkZBPrXQ/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true ",
    "A03: Preenchimento de EPI e Aplicação dos Programas de SST": "FO.AD.002_03 - Comprovante de Recebimento de EPI: https://docs.google.com/document/d/1V9ZQ4Nt9JDpIsbeIR2II4VSXc63TdUfg/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A12: Fluxo de Gestão de Projeto Adaptativo": "FO.AD.002_03 - Comprovante de Recebimento de EPI: https://docs.google.com/document/d/1V9ZQ4Nt9JDpIsbeIR2II4VSXc63TdUfg/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A10: Solicitação de Autorização para Desconto de Multa": "FO.AD.003_01 - https://docs.google.com/document/d/1vkWyJnm1adVVu-iFCAk7pNpKyihbVnQw/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A02: Solicitação de Veículos": "FO.AD.004_00 - https://docs.google.com/document/d/1ezlopMSi8IGaaNUNwQgVRL8pVd9CQ4iO/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A14: Ensaios de laboratório interno": "FO.AD.011_01 - https://docs.google.com/document/d/1gvbbzco-otVo6ubLjd5jVD7EDZeQDjTa/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A14: Misturas e Dosagens": "FO.AD.011_01 - https://docs.google.com/document/d/1gvbbzco-otVo6ubLjd5jVD7EDZeQDjTa/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A04: Medição": "FO.AD.013_00 - Medição_Aluguel equipamento - https://docs.google.com/spreadsheets/d/1aoMMUl1X1sknIy1BLbAgE7qyuTg7imLW/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A07: Entrega de Medição e Faturamento": "FO.AD.013_00 - Medição_Aluguel equipamento - https://docs.google.com/spreadsheets/d/1aoMMUl1X1sknIy1BLbAgE7qyuTg7imLW/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A05: Solicitação de Documentos para realização de Medição": "FO.AD.013_00 - Medição_Aluguel equipamento - https://docs.google.com/spreadsheets/d/1aoMMUl1X1sknIy1BLbAgE7qyuTg7imLW/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A03: Análise de Contrato de Aluguel": "FO.AD.014_00 - Aluguel e Caução - https://docs.google.com/spreadsheets/d/1ODUlb6zxKfF_vE7iF4W-4RZLIO2PaEhW/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A06: Alteração do Condutor Principal de Veículos Locados": "FO.AD.016_00 - Solicitação de Crédito Combustivel - https://docs.google.com/document/d/1sA_DA12PRhZgGJr0mlDo_JgwQz3009JG/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A02: Inserção de Crédito de Combustível Extra": "FO.AD.016_00 - Solicitação de Crédito Combustivel - https://docs.google.com/document/d/1sA_DA12PRhZgGJr0mlDo_JgwQz3009JG/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A02: Realização de Compras": "FO.AD.017_00 - Ordem de Compra - https://docs.google.com/spreadsheets/d/1T4SaXHYdnUbC5L1nRjwcZHQzzpQ2LQjp/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A06: Configuração de Equipamento": "FO.AD.017_00 - Ordem de Compra - https://docs.google.com/spreadsheets/d/1T4SaXHYdnUbC5L1nRjwcZHQzzpQ2LQjp/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A15: Criação de Material": "FO.AD.017_00 - Ordem de Compra - https://docs.google.com/spreadsheets/d/1T4SaXHYdnUbC5L1nRjwcZHQzzpQ2LQjp/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A27: Produção de Evento Externo": "FO.AD.017_00 - Ordem de Compra - https://docs.google.com/spreadsheets/d/1T4SaXHYdnUbC5L1nRjwcZHQzzpQ2LQjp/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A19: Produção de Evento Interno": "FO.AD.017_00 - Ordem de Compra - https://docs.google.com/spreadsheets/d/1T4SaXHYdnUbC5L1nRjwcZHQzzpQ2LQjp/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A02: Solicitação de compras de comunicação": "FO.AD.017_00 - Ordem de Compra - https://docs.google.com/spreadsheets/d/1T4SaXHYdnUbC5L1nRjwcZHQzzpQ2LQjp/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A02: Alteração do Condutor Principal de Veículos Locados": "FO.AD.020_00 - Solicitação de Cartão Combustivel - https://docs.google.com/document/d/1JcqV77son42Y-bGBaLnPI3zEGQJ8P-t7/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A02: Desbloqueio de Cartão de Combustível": "FO.AD.020_00 - Solicitação de Cartão Combustivel - https://docs.google.com/document/d/1JcqV77son42Y-bGBaLnPI3zEGQJ8P-t7/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A03: Manutenção do Escritório da Empresa": "FO.AD.024_00 - Manutenção Extintores - https://docs.google.com/spreadsheets/d/1anvfK_lGsG5vWOj0aA4yYaAENMZh_q6f/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A06: Manutenção do Escritório da Empresa": "FO.AD.023_00 - Controle de Manutenções Ar-Condicionados - https://docs.google.com/spreadsheets/d/1PubuKSRYakRVu1Ufck_Tb8DaXpuGlcpR/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A02: Manutenção do Escritório da Empresa": "FO.AD.026_00 - Programa Anual de Manutenções - https://docs.google.com/spreadsheets/d/1lbaatZJZQb_X7xjLDxbZfhW40mddF1lb/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A02: Manutenção dos Equipamentos de TI": "FO.AD.025_00 - Controle Manutenções T.I - https://docs.google.com/spreadsheets/d/1cnSOmNx22duuuZxMaWD2mmZ63OCT1TH_/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A02: Captação de Oportunidade de Licitação": "PR.CO.001_02 - Atividades Comerciais - https://drive.google.com/file/d/1yP5yn3pjR5u__n78QFcL_ReHx0NGOsc1/view?usp=sharing",
    "A05: Captação de Oportunidade de Licitação": "FO.CO.005_00 - Prospecção Oportunidade - https://docs.google.com/spreadsheets/d/1eM1FipsnpS4HCLYmG7VZQOX9q-EOCtA6/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A05: Acompanhamento de Oportunidade": "PR.CO.001_02 - Atividades Comerciais - https://drive.google.com/file/d/1yP5yn3pjR5u__n78QFcL_ReHx0NGOsc1/view?usp=sharing",
    "A02: Análise de Editais": "PR.CO.001_02 - Atividades Comerciais - https://drive.google.com/file/d/1yP5yn3pjR5u__n78QFcL_ReHx0NGOsc1/view?usp=sharing",
    "A07: Análise de Editais": "FO.CO.002_00 - Checklist documentos licitação - https://docs.google.com/spreadsheets/d/1f1v04w2AH6ywGHMs3TsNHdH6QxP6uhes/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A13: Acompanhamento de Oportunidade": "FO.CO.003_02 - Pipeline - https://docs.google.com/spreadsheets/d/1GwNMEzvpE2JMV1v_qEWJb8n157FgmShT/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A03: Análise de Editais": "FO.CO.003_02 - Pipeline - https://docs.google.com/spreadsheets/d/1GwNMEzvpE2JMV1v_qEWJb8n157FgmShT/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A08: Análise de Editais": "FO.CO.003_02 - Pipeline - https://docs.google.com/spreadsheets/d/1GwNMEzvpE2JMV1v_qEWJb8n157FgmShT/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A10: Captação de Oportunidade de Licitação": "FO.CO.003_02 - Pipeline - https://docs.google.com/spreadsheets/d/1GwNMEzvpE2JMV1v_qEWJb8n157FgmShT/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A09: Elaboração de proposta": "FO.CO.003_02 - Pipeline - https://docs.google.com/spreadsheets/d/1GwNMEzvpE2JMV1v_qEWJb8n157FgmShT/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A13: Elaboração de proposta": "FO.CO.003_02 - Pipeline - https://docs.google.com/spreadsheets/d/1GwNMEzvpE2JMV1v_qEWJb8n157FgmShT/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A04: Elaboração de proposta": "FO.CO.001_00 - Modelo Proposta - https://docs.google.com/document/d/1plr0hgKvJwdkyERM50ctV-Dj6W6MP-I8/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A13: Contratação e negociação com Fornecedor": "FO.CO.001_00 - Modelo Proposta - https://docs.google.com/document/d/1plr0hgKvJwdkyERM50ctV-Dj6W6MP-I8/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A03: Análise de Escopo": "FO.CO.001_00 - Modelo Proposta - https://docs.google.com/document/d/1plr0hgKvJwdkyERM50ctV-Dj6W6MP-I8/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A02: Ensaios de laboratório em campo": "FO.CO.001_00 - Modelo Proposta - https://docs.google.com/document/d/1plr0hgKvJwdkyERM50ctV-Dj6W6MP-I8/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A02: Ensaios de laboratório interno": "FO.CO.001_00 - Modelo Proposta - https://docs.google.com/document/d/1plr0hgKvJwdkyERM50ctV-Dj6W6MP-I8/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A02: Misturas e Dosagens": "FO.CO.001_00 - Modelo Proposta - https://docs.google.com/document/d/1plr0hgKvJwdkyERM50ctV-Dj6W6MP-I8/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A02: Recebimento de Solicitação para Manutenção ou Calibração de Equipamentos": "PR.SG.008_01 - Recursos de monitoramento e medição - https://drive.google.com/file/d/1y9FzXg5xw5o7BoPZrFvb58sX664jFvEe/view?usp=sharing",
    "A02: Recebimento de Solicitação para Manutenção ou Calibração de Equipamentos": "FO.SG.038_00 - Controle de Calibração - https://docs.google.com/spreadsheets/d/1EKQNBr2rmodHK2k8jZTHht_yrT3KQFaH/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A02: Encerramento de Contrato": "FO.SG.018_00 - TEC Termo de Encerramento de Contrato - https://docs.google.com/document/d/1W_mh2u7HmQ8cB6z5hi7xEkzl0nSqwym2/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A02: Processo de encerramento do contrato": "FO.SG.018_00 - TEC Termo de Encerramento de Contrato - https://docs.google.com/document/d/1W_mh2u7HmQ8cB6z5hi7xEkzl0nSqwym2/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A07: Solicitação de compras de comunicação": "FO.SG.017_00 - Inspeção de Produto - https://docs.google.com/document/d/1NReagcyLORoRt4igqqi0c86AVFm_MnYA/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A02: Entrega do Projeto": "FO.SG.016_00 - Projeto e Desenvolvimento - https://docs.google.com/document/d/1vnhpc0Lhn-UlF3zy0PpYzK_MbbeBnfMJ/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "A08: Início de Contratos": "juntamente com a equipe de planejamento com a apresentação da EAP, Elaboração de Estimativa de Custos, Cronograma detalhado e Elaboração de Escopo - FO.SG.011 - EAP; FO.SG.012 - TAC; FO.SG.013 - Declaração de Escopo; FO.SG.014 - Estimativa de Custos; FO.SG.015 - Cronograma",
    "A04: Início de Contratos": "FO.SG.012_00 - TAC-Termo de Abertura - https://docs.google.com/document/d/1qZkz82KN7XBhMjqvXo9bEB4hAATb-ECs/edit?usp=sharing&ouid=108163210555426966998&rtpof=true&sd=true",
    "AO6: Implementação": "PR.SG.005_01 - Não Conformidade e Ação Corretiva - https://drive.google.com/file/d/1-aTZtH1122Jurqa3Id_5jqAnIuCj_crm/view?usp=sharing",
    "A13: Elaboração e Revisão do Compliance": "PR.SG.005_01 - Não Conformidade e Ação Corretiva - https://drive.google.com/file/d/1-aTZtH1122Jurqa3Id_5jqAnIuCj_crm/view?usp=sharing",
    "A05: Lançamento de Aportes para Pagamento": "PR.SG.005_01 - Não Conformidade e Ação Corretiva - https://drive.google.com/file/d/1-aTZtH1122Jurqa3Id_5jqAnIuCj_crm/view?usp=sharing",
    "A05: Lançamento de RPA": "PR.SG.005_01 - Não Conformidade e Ação Corretiva - https://drive.google.com/file/d/1-aTZtH1122Jurqa3Id_5jqAnIuCj_crm/view?usp=sharing",
    "A04: Prestação de Contas de Viagens": "PR.SG.005_01 - Não Conformidade e Ação Corretiva - https://drive.google.com/file/d/1-aTZtH1122Jurqa3Id_5jqAnIuCj_crm/view?usp=sharing",
    "A04: Solicitação de Reembolsos": "PR.SG.005_01 - Não Conformidade e Ação Corretiva - https://drive.google.com/file/d/1-aTZtH1122Jurqa3Id_5jqAnIuCj_crm/view?usp=sharing",
    "A06: Elaboração e Revisão do Compliance": "PR.SG.003_01 -  Gestão de Mudanças - https://drive.google.com/file/d/1QVEijRvKzhdfth5Tyfy96qiP2MS6FpEb/view?usp=sharing",
};

// Inicialização ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('modal-overlay').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
    loadAreas();
});

// Carregar áreas
function loadAreas() {
    const areaSelect = document.getElementById('areas');
    areaSelect.innerHTML = '<option value="">Selecione uma área:</option>';
    Object.keys(data).forEach(area => {
        const option = document.createElement('option');
        option.value = area;
        option.textContent = area;
        areaSelect.appendChild(option);
    });
}

// Carregar cargos
function loadCargos() {
    const area = document.getElementById('areas').value;
    const cargoSelect = document.getElementById('cargos');
    cargoSelect.innerHTML = '<option value="">Selecione um cargo:</option>';
    resetProcessDropdown();

    if (area) {
        Object.keys(data[area]).forEach(cargo => {
            const option = document.createElement('option');
            option.value = cargo;
            option.textContent = cargo;
            cargoSelect.appendChild(option);
        });
        cargoSelect.disabled = false;
    } else {
        cargoSelect.disabled = true;
    }
}

// Carregar processos
function loadProcessos() {
    const area = document.getElementById('areas').value;
    const cargo = document.getElementById('cargos').value;
    const processoSelect = document.getElementById('processos');
    resetProcessDropdown();

    if (cargo) {
        Object.keys(data[area][cargo]).forEach(processo => {
            const option = document.createElement('option');
            option.value = processo;
            option.textContent = processo;
            processoSelect.appendChild(option);
        });
        processoSelect.disabled = false;
    } else {
        processoSelect.disabled = true;
    }
}

// Carregar detalhes do processo
function loadDetalhes() {
    const area = document.getElementById('areas').value;
    const cargo = document.getElementById('cargos').value;
    const processo = document.getElementById('processos').value;
    const detalhesList = document.getElementById('detalhes-list');

    if (processo) {
        const etapas = data[area][cargo][processo];
        detalhesList.innerHTML = '';
        etapas.forEach(etapa => {
            const li = document.createElement('li');
            li.textContent = etapa;
            li.onclick = () => openModal(etapa);
            detalhesList.appendChild(li);
        });
        document.getElementById('detalhes').style.display = 'block';
    }


        // Mapeamento do nome do processo para a imagem do fluxograma correspondente
        //SEGURANÇA 
        let fluxogramaUrl;
        if (processo === "Preenchimento de EPI e Aplicação dos Programas de SST") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736022148/Estrat%C3%A9gica%20Engenharia/kpq0jzjngwrc31f4d27j.png';
        } else if (processo === "Atendimento aos Requisitos Legais SSO") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736022265/Estrat%C3%A9gica%20Engenharia/zngjjlawnkzzseovaklc.png';
        } else if (processo === "Fiscalizações de SST") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736022265/Estrat%C3%A9gica%20Engenharia/eoeesnxzsgkpunife109.png';
        } else if (processo === "Levantamento e Avaliação de Perigos e Riscos") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736022265/Estrat%C3%A9gica%20Engenharia/ut96wjiz5hyg6ejhtvhg.png';
        } else if (processo === "Manutenção do Escritório da Empresa") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736022264/Estrat%C3%A9gica%20Engenharia/sdeuk8l8kwgpvstptxpe.png';
        } else if (processo === "Regularização da Brigada de Incêndios e Simulados") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736022264/Estrat%C3%A9gica%20Engenharia/iosk7p9trfe77fv7rp31.png';
        } else if (processo === "Treinamentos de Integração de Segurança") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736022264/Estrat%C3%A9gica%20Engenharia/cpwk5kfag22o3wpv0fng.png';
        } 
        
        //COMERCIAL
        else if (processo === "Acompanhamento de Oportunidade") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736120200/Estrat%C3%A9gica%20Engenharia/yaiepxillchozjufjk7t.png';
        } else if (processo === "Análise de Editais") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736120199/Estrat%C3%A9gica%20Engenharia/yldlyyp0ue6ptsi4vfdw.png';
        } else if (processo === "Atualização de Documentação") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736120199/Estrat%C3%A9gica%20Engenharia/muumarrtvusbcvyqp6g6.png';
        } else if (processo === "Captação de Oportunidade de Licitação") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736120199/Estrat%C3%A9gica%20Engenharia/rsciypkdkthupedngoqb.png';
        } else if (processo === "Elaboração da Proposta") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736120199/Estrat%C3%A9gica%20Engenharia/cu4tvm0svbqiwdhn3mn9.png';
        } else if (processo === "Substituição de Profissionais de Contrato Vigente") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736120199/Estrat%C3%A9gica%20Engenharia/jj4uhzgd9f8rsxcbipfl.png';
        } 
        
        //PLANEJAMENTO
        else if (processo === "Assessoria nos Planejamentos dos Contratos") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736120399/Estrat%C3%A9gica%20Engenharia/lkrpv6dnnlkfl6fgse5x.png';
        } else if (processo === "Atualização de Status dos Contratos") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736120399/Estrat%C3%A9gica%20Engenharia/zqssd3linvztgylffsca.png';
        } else if (processo === "Coleta de Dados Profissionais e Despesas") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736120399/Estrat%C3%A9gica%20Engenharia/mvecpiusohph6avi4hi9.png';
        } else if (processo === "Encerramento dos Contratos") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736120399/Estrat%C3%A9gica%20Engenharia/locdnh3mdne23yvrogjq.png';
        } else if (processo === "Previsão de Despesas e Receitas dos Contratos Ativos") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736120399/Estrat%C3%A9gica%20Engenharia/dtvfiqy31arm4bp7l1vw.png';
        } 

        //ADM E FINANCEIRO
        else if (processo === "Atendimento de Demanda de Informações Financeiras") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121940/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Financeiro/ocuzbvp7oc1ilzqlb79x.png';
        } else if (processo === "Processamento de Pagamento de Demandas Específicas") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121939/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Financeiro/dupxhfl6lndhdeznbkxz.png';
        } else if (processo === "Proposição de Pagamentos") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121939/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Financeiro/zqakv9jerl3j379ldy1l.png';
        } else if (processo === "Realizar Análise de Conciliação") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121938/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Financeiro/lqb2hclswggoarl5ydfb.png';
        } else if (processo === "Reunião com Equipe Financeira (Diretoria e Operacional)") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121938/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Financeiro/cl9jxhof7nyzjav9dzee.png';
        } else if (processo === "Reunião com Equipe Financeira (Lideranças)") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121938/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Financeiro/luwukqaie1uk0tzjzbkc.png';
        } else if (processo === "Reunir Comprovantes de Pagamentos da Semana") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121938/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Financeiro/ddeunsmpaph4hfqvugtv.png';
        } else if (processo === "Verificação de Pagamentos a Receber pelas Contas Bancárias") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121938/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Financeiro/uvwk8zjhol8vjvjfpa38.png';
        } else if (processo === "Auditoria Anual") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121937/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Financeiro/jyydiz57oq5ybczbd8cp.png';
        } else if (processo === "Auditoria Mensal") {
           fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121938/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Financeiro/mvpzo6znb2pctsen4oxw.png';
        } else if (processo === "Envio de Comprovantes de Pagamentos") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121936/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Financeiro/spgike8evp7wmd1j6onc.png';
        } else if (processo === "Lançamento de Aportes para Pagamento") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121936/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Financeiro/r4ql5mowqyndjunxx1es.png';
        } else if (processo === "Lançamento de RPA") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121936/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Financeiro/dgmpw4rn4coms73dv3mx.png';
        } else if (processo === "Lançamento dos CREA's e ART's") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121936/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Financeiro/ijzmqdrt2ko7lcltphhb.png';
        } else if (processo === "Prestação de Contas de Viagens") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121936/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Financeiro/ooevkwmrym3z9b4hfngb.png';
        } else if (processo === "Prestação de Conta Referente ao Adiantamento de Fundo Fixo") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121936/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Financeiro/qxtbaa0duqeuisnuouun.png';
        } else if (processo === "Solicitação de Reembolsos") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121935/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Financeiro/ljyzjei350andpeloslo.png';
        } else if (processo === "Acompanhamento de Relatórios Contábeis, Financeiros, de Performance e Controladoria") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121935/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Financeiro/kwz0yuvow8zfjfwnehlo.png';
        } else if (processo === "Reunião de Planejamento de Fluxo de Caixa (Geral e Diretoria)") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121935/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Financeiro/zqby79nct5zpdnzujrl8.png';
        } else if (processo === "Reunião do Financeiro com Operacional em Situações de Crise de Liquidez") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121935/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Financeiro/liddoahlizc1zxl3zuxr.png';
        } 

        //ADM E COMPRAS
        else if (processo === "Inclusão de Contrato no Sistema") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121228/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Compras/h1rv3mngl9h4phnh3cyb.png';
        } else if (processo === "Lançamento de Notas e Faturas dos Fornecedores") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121212/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Compras/y3uc6rpts7hmsbyntpil.png';
        } else if (processo === "Realizar Faturamento das Medições") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121212/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Compras/tdnpe4jnsonfwqxwiu4z.png';
        } else if (processo === "Revisão das Notas de Fornecedores") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121615/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Compras/wit6anuowhsuv5lp8g9g.png';
        } else if (processo === "Análise de Contrato de Aluguel") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121211/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Compras/cnopbj07u9wj0znd9hkl.png';
        } else if (processo === "Lançamento de Notas e Faturas de Imóveis e Outros") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121211/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Compras/l8xpmy31jligmw6quekq.png';
        } else if (processo === "Lançamento de Despesas de Imóveis") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121211/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Compras/go6siqm0wupbzchrtxo7.png';
        } else if (processo === "Realização de Cadastro de Cliente e Fornecedor") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121210/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Compras/qx72hgcd3iznqrs1lfeo.png';
        } else if (processo === "Recebimento de Demonstrativo de Pagamento dos Correios") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121210/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Compras/lfedywkrfyov7snutuf4.png';
        } else if (processo === "Solicitação de Envio de Material pelo Correios") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121210/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Compras/hwspvdgz352dxq7zqi6i.png';
        } else if (processo === "Assinatura de Documentos") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121210/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Compras/w6uksza2s5xcu87ltvzq.png';
        } else if (processo === "Autorização de Pagamentos e Transferências") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121210/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Compras/mgp48tpsnvbrsvwptbbm.png';
        } else if (processo === "Rateio de Passagens e Hospedagens") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736121210/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Compras/leizpwdb75gvvppitx4k.png';
        } else if (processo === "Solicitação de Veículos") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736214355/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Compras/xso5gdpoeaixovq9gq7e.png';
        } else if (processo === "Tombamento de Patrimônio") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736214355/Estrat%C3%A9gica%20Engenharia/ADM%20e%20Compras/nqcwmmsseapuevldlstz.png';
        }
        
        //TI
        else if (processo === "Bloqueio ou Redirecionamento de Conta") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736120748/Estrat%C3%A9gica%20Engenharia/TI/pr1uufowhrh7xydb8goo.png';
        } else if (processo === "Configuração de Equipamento") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736120748/Estrat%C3%A9gica%20Engenharia/TI/scycpizg1zvz0kb2anma.png';
        } else if (processo === "Encerramento de Contrato") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736120748/Estrat%C3%A9gica%20Engenharia/TI/mxytkviii8gdwojsuhyh.png';
        } else if (processo === "Início de Contrato") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736120747/Estrat%C3%A9gica%20Engenharia/TI/mrzexwmev9mu8w6ghdn8.png';
        } else if (processo === "Lançamento de Nota Fiscal e Fatura de Software e Telefonia") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736120747/Estrat%C3%A9gica%20Engenharia/TI/seuyjdz9abochoucyvpz.png';
        } else if (processo === "Manutenção dos Equipamentos de TI") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736120747/Estrat%C3%A9gica%20Engenharia/TI/yvhusoa8j34yqymgtlyy.png';
        } else if (processo === "Monitoramento de Contrato") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736120747/Estrat%C3%A9gica%20Engenharia/TI/ybtlmdshzkfjdjp4wpet.png';
        } else if (processo === "Renovação de Licenças Atuais") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736120747/Estrat%C3%A9gica%20Engenharia/TI/mrsfwzef9dpvpi0n2na6.png';
        } else if (processo === "Suporte Técnico aos Colaboradores") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736120747/Estrat%C3%A9gica%20Engenharia/TI/cegbod1hujylgzmyw8xs.png';
        }

        //CONTRATOS - Guga
        else if (processo === "Reunião de Project Review") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1734361016/dfrjkqtsxggve5wnvi2r.png';
        } else if (processo === "Acompanhamento do Fluxo de Caixa") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736123706/Estrat%C3%A9gica%20Engenharia/Contratos/dt8ratyab5vc2zebdrdo.png';
        }  else if (processo === "Contabilização de Disciplina") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736123706/Estrat%C3%A9gica%20Engenharia/Contratos/iruxlyqboemrmg2mu2v8.png';
        }   else if (processo === "Contratação e negociação com Fornecedor") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736123706/Estrat%C3%A9gica%20Engenharia/Contratos/cudahitwfa7dvu14bk3e.png';
        }   else if (processo === "Entrega de Medição e Faturamento") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736123705/Estrat%C3%A9gica%20Engenharia/Contratos/aihnwjyr9pkrspmf0mdq.png';
        }   else if (processo === "Entrega do Projeto") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736123705/Estrat%C3%A9gica%20Engenharia/Contratos/wlhk8jtql7pnwrw9fu1h.png';
        }   else if (processo === "Envio de Contrato para assinatura do CEO de Gestor") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736123705/Estrat%C3%A9gica%20Engenharia/Contratos/ekal8v9vbuwvqamhoqji.png';
        }   else if (processo === "Fluxo de Gestão de Projeto Adaptativo") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736123704/Estrat%C3%A9gica%20Engenharia/Contratos/nl86ia0cl8ddcfedzzk6.png';
        }   else if (processo === "Gestão de Consórcios") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736123704/Estrat%C3%A9gica%20Engenharia/Contratos/ybkbrkjgqkyajhapi5kb.png';
        }   else if (processo === "Início de Contratos") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736123704/Estrat%C3%A9gica%20Engenharia/Contratos/fldyh9baehq5jrumxb2r.png';
        }   else if (processo === "Preenchimento de requisição de pessoal") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736123703/Estrat%C3%A9gica%20Engenharia/Contratos/yzqzxqspqeyaw8qxbcbe.png';
        }   else if (processo === "Previsão de aporte mensal") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736123703/Estrat%C3%A9gica%20Engenharia/Contratos/het1g6wqinbvdareylaq.png';
        }   else if (processo === "Processo de encerramento do contrato") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736123703/Estrat%C3%A9gica%20Engenharia/Contratos/iouiwhw5mjpajlkk9fwt.png';
        }   else if (processo === "Realização interface com os consórcios") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736123703/Estrat%C3%A9gica%20Engenharia/Contratos/hpffwcsb2jpstc8rcnzw.png';
        }   else if (processo === "Reunião de Partida com Cliente") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736123703/Estrat%C3%A9gica%20Engenharia/Contratos/lkbm9jdxtu807dtlmshy.png';
        }   else if (processo === "Solicitação de Documentos para realização de Medição") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736123703/Estrat%C3%A9gica%20Engenharia/Contratos/xejdre4iurztbvtvqq9b.png';
        }    

        //MARKETING - Guga
        else if (processo === "Criação de Material") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736125053/Estrat%C3%A9gica%20Engenharia/Comunica%C3%A7%C3%A3o%20e%20MKT/p4coymcbs5cfwwypus6e.png';
        } else if (processo === "Criação de Newsletter") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736125053/Estrat%C3%A9gica%20Engenharia/Comunica%C3%A7%C3%A3o%20e%20MKT/htfdrfc0mchqcvkwwtg7.png';
        } else if (processo === "Desenvolvimento de identidade visual") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736125053/Estrat%C3%A9gica%20Engenharia/Comunica%C3%A7%C3%A3o%20e%20MKT/jch6wcofboaweezfhqbh.png';
        } else if (processo === "Divulgação de Campanhas e Palestras") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736125052/Estrat%C3%A9gica%20Engenharia/Comunica%C3%A7%C3%A3o%20e%20MKT/s7fpixytxgladgrzc7lz.png';
        } else if (processo === "Gestão de e-mails de Comunicação Interna") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736125051/Estrat%C3%A9gica%20Engenharia/Comunica%C3%A7%C3%A3o%20e%20MKT/sfxectinjvdlsrloetzo.png';
        } else if (processo === "Gestão do Site") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736125051/Estrat%C3%A9gica%20Engenharia/Comunica%C3%A7%C3%A3o%20e%20MKT/ggoxjfsr7c625t2zyahr.png';
        } else if (processo === "Planejamento de Ações Anuais") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736125050/Estrat%C3%A9gica%20Engenharia/Comunica%C3%A7%C3%A3o%20e%20MKT/nkjmcxzlkwptaxcb7tq3.png';
        } else if (processo === "Produção de Evento Externo") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736125051/Estrat%C3%A9gica%20Engenharia/Comunica%C3%A7%C3%A3o%20e%20MKT/zlqkigwqwreqngm4wk7s.png';
        } else if (processo === "Produção de Evento Interno") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736125051/Estrat%C3%A9gica%20Engenharia/Comunica%C3%A7%C3%A3o%20e%20MKT/pa8v0gayon86ajpavqiu.png';
        } else if (processo === "Produção de relatório mensal") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736125050/Estrat%C3%A9gica%20Engenharia/Comunica%C3%A7%C3%A3o%20e%20MKT/m81u4kz61rcute4mcnkm.png';
        } else if (processo === "Solicitação de compras de comunicação") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736125050/Estrat%C3%A9gica%20Engenharia/Comunica%C3%A7%C3%A3o%20e%20MKT/qosn60xtcctqesrucfik.png';
        } else if (processo === "Solicitação Urgente de Produção de Conteúdo") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736125050/Estrat%C3%A9gica%20Engenharia/Comunica%C3%A7%C3%A3o%20e%20MKT/o3e0ggh7xpygd1pa0ysf.png';
        }


        //JURÍDICO - Guga
        else if (processo === "Análise da elaboração do contrato") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736124558/Estrat%C3%A9gica%20Engenharia/Jur%C3%ADdico/vkcdsa2ckblbvgbkcaeu.png';
        } else if (processo === "Análise Jurídica do edital") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736124557/Estrat%C3%A9gica%20Engenharia/Jur%C3%ADdico/yclkvswlyc0evlm4rvsu.png';
        } else if (processo === "Consultoria Jurídica") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736124557/Estrat%C3%A9gica%20Engenharia/Jur%C3%ADdico/xfufirqv9dhskmq5zkm8.png';
        } else if (processo === "Contratação de Terceiros") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736124557/Estrat%C3%A9gica%20Engenharia/Jur%C3%ADdico/lhkyqvt0ceirycyoztg2.png';
        } else if (processo === "Intermedição com os escritórios de advocacia") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736124557/Estrat%C3%A9gica%20Engenharia/Jur%C3%ADdico/om4ob71agobo7mxw0xbs.png';
        } else if (processo === "Monitoramento dos processos judiciais") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736124556/Estrat%C3%A9gica%20Engenharia/Jur%C3%ADdico/s2mhixpj13dvaxbr4tvp.png';
        } else if (processo === "Solicitação de seguro e garantia contratual") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736124556/Estrat%C3%A9gica%20Engenharia/Jur%C3%ADdico/k5myp88qujlp9o6olhpn.png';
        } else if (processo === "Solicitação de seguro e garantia judicial") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736124556/Estrat%C3%A9gica%20Engenharia/Jur%C3%ADdico/nkuwip8d6gmfpt62pkzw.png';
        }

        //GEOTECNIA - Guga
        else if (processo === "Análise do escopo") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736127256/Estrat%C3%A9gica%20Engenharia/Geotecnia/vktfbeqiaj23mkxpyh8r.png';
        } else if (processo === "Análise de produção de etapa de escritório") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736127255/Estrat%C3%A9gica%20Engenharia/Geotecnia/cyrz3geq87oovebeyzzi.png';
        } else if (processo === "Empréstimo de equipamentos") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736127255/Estrat%C3%A9gica%20Engenharia/Geotecnia/sh8n0goxalet7zydrbhc.png';
        } else if (processo === "Ensaios de laboratório em campo") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736127254/Estrat%C3%A9gica%20Engenharia/Geotecnia/n0iyi34yvvtsz05dcvf7.png';
        } else if (processo === "Ensaios de laboratório interno") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736127254/Estrat%C3%A9gica%20Engenharia/Geotecnia/fjt1br1hcsxtrgq5yqzf.png';
        } else if (processo === "Levantamento aerofotogramétrico") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736127254/Estrat%C3%A9gica%20Engenharia/Geotecnia/awfzvdlz9tw3t477uoja.png';
        } else if (processo === "Levantamento de topografia em drone") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736127253/Estrat%C3%A9gica%20Engenharia/Geotecnia/ztzg2u9jc0epkfainxdw.png';
        } else if (processo === "Levantamento de topografia com Estação Total/Nível") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736127253/Estrat%C3%A9gica%20Engenharia/Geotecnia/ohizxvvopv7jernpqduv.png';
        } else if (processo === "Levantamento de topografia pelo GNSS") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736127252/Estrat%C3%A9gica%20Engenharia/Geotecnia/u3zfrdgylory3gtcvked.png';
        } else if (processo === "Levantamento de topografia pelo GNSS + Pegasus") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736127252/Estrat%C3%A9gica%20Engenharia/Geotecnia/ncldqzvazep6esrqy3dg.png';
        } else if (processo === "Manutenção de equipamentos") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736127252/Estrat%C3%A9gica%20Engenharia/Geotecnia/t509mu54ad5tebiyqygt.png';
        } else if (processo === "Misturas e dosagens") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736127251/Estrat%C3%A9gica%20Engenharia/Geotecnia/tv8ajac3kqi0o8ughji0.png';
        } else if (processo === "Pavimentação com Pegasus") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736127251/Estrat%C3%A9gica%20Engenharia/Geotecnia/lbtskhzymi5pjwxhncuv.png';
        } else if (processo === "Processamento aerofotogramético + GNSS") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736127250/Estrat%C3%A9gica%20Engenharia/Geotecnia/dyg6kcxedugkyzfbdqdx.png';
        } else if (processo === "Processamento do GNSS") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736127250/Estrat%C3%A9gica%20Engenharia/Geotecnia/ikmefv08zgcj5ctx0kdk.png';
        } else if (processo === "Processamento do Pegasus + GNSS") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736127250/Estrat%C3%A9gica%20Engenharia/Geotecnia/fsw6c8utomnyt5tr9fxq.png';
        } else if (processo === "Receber demandas e operações de campo") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736127250/Estrat%C3%A9gica%20Engenharia/Geotecnia/mexzqfnjclzujfz9iiby.png';
        } else if (processo === "Reunião com cliente - Com necessidade de ata") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736127249/Estrat%C3%A9gica%20Engenharia/Geotecnia/ulwcgzfs56o6oraojyfh.png';
        } else if (processo === "Trabalho de campo com equipamentos avançados") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736127249/Estrat%C3%A9gica%20Engenharia/Geotecnia/pdiqr9liyzp4cfm4fxkw.png';
        }

        //RECURSOS HUMANOS - Guga
        else if (processo === "Acompanhamento da desmobilização") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259819/Estrat%C3%A9gica%20Engenharia/RH/i7a4z5yxkftnx3iyqqwo.png';
        } else if (processo === "Alteração de função e salário") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259819/Estrat%C3%A9gica%20Engenharia/RH/bol0oomk5n1u46w2b4yu.png';
        } else if (processo === "Aniversariante do mês") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259819/Estrat%C3%A9gica%20Engenharia/RH/jjljuiwcib7s0sxmkppo.png';
        } else if (processo === "Aplicação de pesquisa de clima") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259819/Estrat%C3%A9gica%20Engenharia/RH/nphcivexmudhpy2uhqfk.png';
        } else if (processo === "Atualização de PJ") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259818/Estrat%C3%A9gica%20Engenharia/RH/c2xtb6fo43g2zgsxw6ol.png';
        } else if (processo === "Cadastro de Admissões de colaboradores no sistema") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259819/Estrat%C3%A9gica%20Engenharia/RH/hwwwu2tysyh5sr2zkpje.png';
        } else if (processo === "Contratação de Ex Colaboradores") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259818/Estrat%C3%A9gica%20Engenharia/RH/sj30xzbnjjjxoioutq7i.png';
        } else if (processo === "Cadastro de novo funcionário para batida de ponto") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259818/Estrat%C3%A9gica%20Engenharia/RH/fjsnscfdfkr0gfb1p7as.png';
        } else if (processo === "Controle de compra de vale transporte") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259818/Estrat%C3%A9gica%20Engenharia/RH/vikkcxjlo8jlykq5ygiw.png';
        } else if (processo === "Controle e Frequência de Ponto do Portal") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259817/Estrat%C3%A9gica%20Engenharia/RH/loewryelkvevkwegh7xd.png';
        } else if (processo === "Controle e Frequência de Ponto Manual") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259817/Estrat%C3%A9gica%20Engenharia/RH/p8f1xbccgqonpild0xx4.png';
        } else if (processo === "Descrição de cargos") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259817/Estrat%C3%A9gica%20Engenharia/RH/zaehxfojptah1wik86oe.png';
        } else if (processo === "Desmobilização dos estagiários") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259817/Estrat%C3%A9gica%20Engenharia/RH/xyv7hbr3wwaj0hlvg6ic.png';
        } else if (processo === "Divulgação de campanhas") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259817/Estrat%C3%A9gica%20Engenharia/RH/nqegfduqt3ilx3eik3bu.png';
        } else if (processo === "Emissão de contrato de entrada de estagiários") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259818/Estrat%C3%A9gica%20Engenharia/RH/jy91lv0vuzkhwxw56afc.png';
        } else if (processo === "Emissão e conferência de Encargos") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259817/Estrat%C3%A9gica%20Engenharia/RH/s25jisrorazk496hay5e.png';
        } else if (processo === "Entrevista de desmobilização") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259817/Estrat%C3%A9gica%20Engenharia/RH/qqjjdezcww8gsdbjfz5d.png';
        } else if (processo === "Fechamento Mensal de benefícios") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259816/Estrat%C3%A9gica%20Engenharia/RH/co78d3xwic0cxd0awjou.png';
        } else if (processo === "Formulário de avaliação de desempenho") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259816/Estrat%C3%A9gica%20Engenharia/RH/gvnugecdinemreqik1cl.png';
        } else if (processo === "Formulário de desempenho anual") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259816/Estrat%C3%A9gica%20Engenharia/RH/vlbxnvwqvlh0pqmm8thi.png';
        } else if (processo === "Gestão de férias") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259816/Estrat%C3%A9gica%20Engenharia/RH/xldxeooq3zbro5jswpkx.png';
        } else if (processo === "Lançamento de atestado médico") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736262659/Estrat%C3%A9gica%20Engenharia/RH/lmhixc0aagigc70kcrzk.png';
        } else if (processo === "Lançamentos de multas de carro CLT") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736262659/Estrat%C3%A9gica%20Engenharia/RH/aka0t6lns1q8twwwfu0z.png';
        } else if (processo === "Lançamento de Notas Fiscais") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736262659/Estrat%C3%A9gica%20Engenharia/RH/jjc0fmmxdqql1fnrpteo.png';
        } else if (processo === "Lançamento de Notas Fiscais de estagiários") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259814/Estrat%C3%A9gica%20Engenharia/RH/xqesul401jlvue3axxpi.png';
        } else if (processo === "Lançamento de reembolso de exames ocupacionais CLT") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259814/Estrat%C3%A9gica%20Engenharia/RH/hdry1nt4z3co3lu7pjho.png';
        } else if (processo === "Levantamento de necessidades de treinamento") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259814/Estrat%C3%A9gica%20Engenharia/RH/nzcejxwpgmrlxuts80yf.png';
        } else if (processo === "Medição") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259814/Estrat%C3%A9gica%20Engenharia/RH/qzzhcgcotolohelapgvy.png';
        } else if (processo === "Movimentação de pessoal") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259814/Estrat%C3%A9gica%20Engenharia/RH/wsheexbl2lqhhbb3e4ek.png';
        } else if (processo === "Onboard de integração de novo colaborador") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259814/Estrat%C3%A9gica%20Engenharia/RH/ygdgxlxvglhywzxzksf1.png';
        } else if (processo === "Onboard de reintregração") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259814/Estrat%C3%A9gica%20Engenharia/RH/pn9f6wos0kzjs4cvuk2j.png';
        } else if (processo === "Postagem de divulgação de vagas") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259815/Estrat%C3%A9gica%20Engenharia/RH/jrci7drww3zlmtonmhl8.png';
        } else if (processo === "Processo de advertência e suspensões") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259815/Estrat%C3%A9gica%20Engenharia/RH/y5eacdrqd6xetquouavr.png';
        } else if (processo === "Recrutamento e seleção") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259815/Estrat%C3%A9gica%20Engenharia/RH/yclxra5go1ie7xcrzoxx.png';
        } else if (processo === "Rescisão de contrato CLT") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259815/Estrat%C3%A9gica%20Engenharia/RH/glaxtsqjd2kmhvw1vicu.png';
        } else if (processo === "Solicitação de adiamento da ajuda de custo para estagiário") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259816/Estrat%C3%A9gica%20Engenharia/RH/csscbb145qvau4seadz5.png';
        } else if (processo === "Solicitação de hora extra") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259816/Estrat%C3%A9gica%20Engenharia/RH/zw0x8ux2udm06iqhscjb.png';
        } else if (processo === "Triagem de candidaturas") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736259816/Estrat%C3%A9gica%20Engenharia/RH/loci8kuyd1ogsv7xsqef.png';
        } 

        //COMPLIANCE E LGPD - Guga
        else if (processo === "Implementação") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736213279/Estrat%C3%A9gica%20Engenharia/Compliance%20e%20LGPD/hfquqom13xa5wajjkum4.png';
        } else if (processo === "Elaboração e Revisão do Compliance") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736213279/Estrat%C3%A9gica%20Engenharia/Compliance%20e%20LGPD/p6njhadikdveicg0df7h.png';
        } else if (processo === "Diagnóstico Inicial") {
            fluxogramaUrl = 'https://res.cloudinary.com/dph0fqovo/image/upload/v1736213278/Estrat%C3%A9gica%20Engenharia/Compliance%20e%20LGPD/o2mzfppmd094lviuk3ss.png';
        }

        else {
            fluxogramaUrl = null;
        }
        

        // Verificar se o URL do fluxograma foi definido e carregar a imagem
        const fluxogramaContainer = document.getElementById('fluxograma');
        const fluxogramaImagem = document.getElementById('fluxograma-imagem');

        if (fluxogramaUrl) {
            fluxogramaImagem.src = fluxogramaUrl;
            fluxogramaContainer.style.display = 'block';  // Mostrar o container
        } else {
            fluxogramaContainer.style.display = 'none';  // Ocultar o container se não houver imagem
        }
    }


function resetProcessDropdown() {
    const processoSelect = document.getElementById('processos');
    processoSelect.innerHTML = '<option value="">Selecione um processo:</option>';
    processoSelect.disabled = true;
    document.getElementById('detalhes-list').innerHTML = '';
    document.getElementById('fluxograma').style.display = 'none';
}

function openModal(etapa) {
    const descricao = descricaoDetalhada[etapa] || "Descrição detalhada não disponível.";
    document.getElementById('modal-description').innerHTML = descricao;
    openOverlay();
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    closeOverlay();
}

function openAddModal() {
    openOverlay();
    document.getElementById('add-process-modal').style.display = 'block';
}

function closeAddModal() {
    document.getElementById('add-process-modal').style.display = 'none';
    closeOverlay();
}

function addNewProcess() {
    const area = document.getElementById('new-area').value.trim();
    const role = document.getElementById('new-role').value.trim();
    const process = document.getElementById('new-process').value.trim();
    const steps = document.getElementById('new-steps').value.split(';').map(step => step.trim());

    if (!area || !role || !process || steps.length === 0) {
        alert('Preencha todos os campos.');
        return;
    }

    if (!data[area]) {
        data[area] = {};
    }
    if (!data[area][role]) {
        data[area][role] = {};
    }

    data[area][role][process] = steps;

    alert('Processo adicionado com sucesso!');
    closeAddModal();
    loadAreas(); // Atualizar os dropdowns
}

function openUpdateModal() {
    loadAreasForUpdate();
    openOverlay();
    document.getElementById('update-process-modal').style.display = 'block';
}

function closeUpdateModal() {
    document.getElementById('update-process-modal').style.display = 'none';
    closeOverlay();
}

function loadAreasForUpdate() {
    const areaSelect = document.getElementById('update-area');
    areaSelect.innerHTML = '<option value="">Selecione uma área:</option>';
    Object.keys(data).forEach(area => {
        const option = document.createElement('option');
        option.value = area;
        option.text = area;
        areaSelect.appendChild(option);
    });
}

function populateUpdateRoles() {
    const area = document.getElementById('update-area').value;
    const roleSelect = document.getElementById('update-role');
    roleSelect.innerHTML = '<option value="">Selecione um cargo:</option>';
    document.getElementById('update-process').innerHTML = '<option value="">Selecione um processo:</option>';
    document.getElementById('update-steps').value = '';

    if (area) {
        Object.keys(data[area]).forEach(role => {
            const option = document.createElement('option');
            option.value = role;
            option.textContent = role;
            roleSelect.appendChild(option);
        });
    }
}

function populateUpdateProcesses() {
    const area = document.getElementById('update-area').value;
    const role = document.getElementById('update-role').value;
    const processSelect = document.getElementById('update-process');
    processSelect.innerHTML = '<option value="">Selecione um processo:</option>';
    document.getElementById('update-steps').value = '';

    if (role) {
        Object.keys(data[area][role]).forEach(process => {
            const option = document.createElement('option');
            option.value = process;
            option.textContent = process;
            processSelect.appendChild(option);
        });
    }
}

function populateUpdateDetails() {
    const area = document.getElementById('update-area').value;
    const role = document.getElementById('update-role').value;
    const process = document.getElementById('update-process').value;

    if (process) {
        const steps = data[area][role][process];
        document.getElementById('update-steps').value = steps.join(', ');
    }
}

function updateProcess() {
    const area = document.getElementById('update-area').value;
    const role = document.getElementById('update-role').value;
    const process = document.getElementById('update-process').value;
    const steps = document.getElementById('update-steps').value.split(';').map(step => step.trim());

    if (!area || !role || !process || steps.length === 0) {
        alert('Preencha todos os campos.');
        return;
    }

    data[area][role][process] = steps;

    alert('Processo atualizado com sucesso!');
    closeUpdateModal();
    loadAreas();
}

function deleteProcess() {
    const area = document.getElementById('update-area').value;
    const role = document.getElementById('update-role').value;
    const process = document.getElementById('update-process').value;

    // Verificar se todos os campos necessários estão selecionados
    if (!area || !role || !process) {
        alert('Por favor, selecione a área, o cargo e o processo para excluir.');
        return;
    }

    // Confirmar exclusão
    const confirmDelete = confirm(`Tem certeza de que deseja excluir o processo "${process}"?`);
    if (!confirmDelete) return;

    // Remover o processo do objeto data
    delete data[area][role][process];

    // Verificar se o cargo ficou vazio
    if (Object.keys(data[area][role]).length === 0) {
        delete data[area][role]; // Remover o cargo se não tiver mais processos
    }

    // Verificar se a área ficou vazia
    if (Object.keys(data[area]).length === 0) {
        delete data[area]; // Remover a área se não tiver mais cargos
    }

    alert(`O processo "${process}" foi excluído com sucesso.`);
    closeUpdateModal();
    loadAreas(); // Atualizar os dropdowns
}

// Overlay handling
function openOverlay() {
    document.getElementById('modal-overlay').style.display = 'block';
}

function closeOverlay() {
    document.getElementById('modal-overlay').style.display = 'none';
}

// Carregar dados ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    loadAreas();
});

document.addEventListener("DOMContentLoaded", function () {
    const imagens = document.querySelectorAll("img"); // Seleciona todas as imagens da página

    imagens.forEach((img) => {
        // Criar um elemento de lupa
        const zoomLens = document.createElement("div");
        zoomLens.style.position = "absolute";
        zoomLens.style.border = "2px solid white";
        zoomLens.style.width = "200px"; // Tamanho da lupa
        zoomLens.style.height = "200px";
        zoomLens.style.backgroundRepeat = "no-repeat";
        zoomLens.style.pointerEvents = "none";
        zoomLens.style.display = "none";
        zoomLens.style.borderRadius = "50%"; // Mantém a lupa circular
        zoomLens.style.boxShadow = "0px 0px 15px rgba(0, 0, 0, 0.7)";
        zoomLens.style.zIndex = "9999"; // Mantém a lupa acima de outros elementos
        document.body.appendChild(zoomLens); // Adiciona a lupa ao corpo da página

        img.addEventListener("mousemove", function (e) {
            const { left, top, width, height } = img.getBoundingClientRect();
            const x = e.clientX - left; // Posição X do mouse na imagem
            const y = e.clientY - top;  // Posição Y do mouse na imagem

            // Ajusta a posição da lupa para ficar no centro do mouse
            zoomLens.style.left = `${e.pageX - zoomLens.offsetWidth / 2}px`;
            zoomLens.style.top = `${e.pageY - zoomLens.offsetHeight / 2}px`;
            zoomLens.style.display = "block";
            zoomLens.style.backgroundImage = `url(${img.src})`;

            // Define o fator de zoom corretamente
            const zoomFactor = 4;
            zoomLens.style.backgroundSize = `${width * zoomFactor}px ${height * zoomFactor}px`;

            // Corrigir a posição do background para alinhar com o mouse
            const bgX = (x / width) * (width * zoomFactor) - zoomLens.offsetWidth / 2;
            const bgY = (y / height) * (height * zoomFactor) - zoomLens.offsetHeight / 2;

            zoomLens.style.backgroundPosition = `-${bgX}px -${bgY}px`;
        });

        // Esconder a lupa quando o mouse sai da imagem
        img.addEventListener("mouseleave", function () {
            zoomLens.style.display = "none";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let fluxogramaUrl = document.querySelector("#fluxogramaUrl");
    if (!fluxogramaUrl) return; // Se o contêiner não existir, sai

    // Lista de URLs bloqueadas (pode ser expandida no futuro)
    const imagensBloqueadas = [
        "https://cdn-icons-png.flaticon.com/512/622/622669.png",
        "https://res.cloudinary.com/dph0fqovo/image/upload/v1736210234/Estrat%C3%A9gica%20Engenharia/rrvuyifou9ikh1ypg0oy.png"
    ];

    function bloquearImagem(img) {
        return imagensBloqueadas.some((url) => img.src.includes(url));
    }

    function aplicarEfeitoZoom(img) {
        if (!img || img.dataset.zoomApplied || bloquearImagem(img)) return; // Evita repetição e bloqueia imagens específicas

        img.dataset.zoomApplied = "true"; // Marca como processada

        // Criar um elemento de lupa
        const zoomLens = document.createElement("div");
        zoomLens.classList.add("zoom-lens"); // Adiciona classe para facilitar controle
        zoomLens.style.position = "absolute";
        zoomLens.style.border = "2px solid white";
        zoomLens.style.width = "200px";
        zoomLens.style.height = "200px";
        zoomLens.style.backgroundRepeat = "no-repeat";
        zoomLens.style.pointerEvents = "none";
        zoomLens.style.display = "none";
        zoomLens.style.borderRadius = "50%";
        zoomLens.style.boxShadow = "0px 0px 15px rgba(0, 0, 0, 0.7)";
        zoomLens.style.zIndex = "9999";
        document.body.appendChild(zoomLens);

        img.addEventListener("mousemove", function (e) {
            const { left, top, width, height } = img.getBoundingClientRect();
            const x = e.clientX - left;
            const y = e.clientY - top;

            zoomLens.style.left = `${e.pageX - zoomLens.offsetWidth / 2}px`;
            zoomLens.style.top = `${e.pageY - zoomLens.offsetHeight / 2}px`;
            zoomLens.style.display = "block";
            zoomLens.style.backgroundImage = `url(${img.src})`;

            const zoomFactor = 4;
            zoomLens.style.backgroundSize = `${width * zoomFactor}px ${height * zoomFactor}px`;

            const bgX = (x / width) * (width * zoomFactor) - zoomLens.offsetWidth / 2;
            const bgY = (y / height) * (height * zoomFactor) - zoomLens.offsetHeight / 2;

            zoomLens.style.backgroundPosition = `-${bgX}px -${bgY}px`;
        });

        img.addEventListener("mouseleave", function () {
            zoomLens.style.display = "none";
        });
    }

    function verificarImagens() {
        const imagens = fluxogramaUrl.querySelectorAll("img");

        imagens.forEach((img) => {
            if (bloquearImagem(img)) {
                img.classList.add("bloqueado"); // Adiciona classe para indicar que está bloqueado
                img.style.cursor = "default"; // Remove qualquer indicação de interatividade
                return;
            }

            aplicarEfeitoZoom(img);
        });
    }

    // Aplica zoom nas imagens iniciais
    verificarImagens();

    // Observa mudanças no DOM e aplica o zoom às novas imagens
    const observer = new MutationObserver(() => verificarImagens());
    observer.observe(fluxogramaUrl, { childList: true, subtree: true });
});
