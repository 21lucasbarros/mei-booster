# Implementações para Fazer - Dashboard MEI Booster

## 🎯 Header

### Botão de Ação Contextual

O botão "adicionar" muda conforme a seção ativa:

- **Financeiro** → "Adicionar Receita/Despesa"
- **Documentos** → "Upload Documento"
- **Lembretes** → "Novo Lembrete"
- **Notas Fiscais** → "Emitir NF"

### Componentes do Header

- [ ] Avatar/nome do usuário (dropdown com perfil, configurações, sair)
- [ ] Nome do MEI/CNPJ visível
- [ ] Notificações (sino com badge)
- [ ] Barra de progresso do limite anual (R$ X / R$ 81.000)
- [ ] Busca global

---

## 📱 Sidebar

### Estrutura Principal

#### 🏠 Principal

- [ ] **Início/Dashboard** - visão geral com KPIs e resumo

#### 💰 Financeiro

- [ ] **Receitas** - registro e listagem de entradas
- [ ] **Despesas** - controle de gastos
- [ ] **DAS** - histórico e geração de guias mensais

#### 📄 Documentos

- [ ] **Notas Fiscais** - emitidas e recebidas
- [ ] **Comprovantes** - DAS pagos, recibos
- [ ] **Contratos** - armazenamento organizado

#### 🔔 Lembretes

- [ ] **Calendário** - visualização mensal
- [ ] **Pendências** - o que está atrasado/próximo
- [ ] **Obrigações** - DAS, DASN, renovações

#### 📊 Relatórios

- [ ] **Mensais** - resumo do mês
- [ ] **Anuais** - balanço do ano
- [ ] **Exportar** - gerar PDF/Excel

#### ⚙️ Configurações

- [ ] **Meu MEI** - dados do CNPJ, editar informações
- [ ] **Perfil** - dados pessoais, senha
- [ ] **Preferências** - notificações, temas

#### 💡 Extras (opcional)

- [ ] **Ajuda** - tutoriais, FAQ
- [ ] **Suporte** - contato, chat

### Funcionalidades da Sidebar

- [ ] Logo + Nome do app no topo
- [ ] Seções colapsáveis (se tiver muitas opções)
- [ ] Indicadores visuais (badge vermelho em "Pendências", verde em "Em dia")
- [ ] Modo collapse (apenas ícones) para ganhar espaço
- [ ] Botão de Sair/Logout no rodapé
- [ ] Versão do app (pequeno) no rodapé

---

## 🖥️ Área Central (conteúdo dinâmico)

- [ ] Breadcrumb para não perder contexto
- [ ] Cards/widgets responsivos
- [ ] Estados vazios bem desenhados ("Você ainda não tem documentos")

---

## ✨ Extras

- [ ] Quick actions flutuante (FAB) como alternativa ao botão do header
- [ ] Atalhos de teclado (Ctrl+N para adicionar, por exemplo)

---

## 📋 Prioridades

### 🔴 Alta Prioridade

1. Estrutura básica da sidebar com navegação
2. Header com informações do MEI
3. Dashboard inicial com KPIs
4. Sistema de navegação entre seções

### 🟡 Média Prioridade

1. Botão contextual no header
2. Notificações
3. Barra de progresso de faturamento
4. Estados vazios

### 🟢 Baixa Prioridade

1. Modo collapse da sidebar
2. Quick actions flutuante
3. Atalhos de teclado
4. Busca global
