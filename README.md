# 🔥 Zona Quente RJ — MVP v1

App web em tempo real para motoristas de aplicativo no Rio de Janeiro identificarem onde estão acontecendo eventos e quais regiões estão "quentes" para corridas.

**Foco inicial:** Zona Sul do RJ (Lapa, Botafogo, Copacabana, Ipanema, Leblon, Lagoa, Flamengo).

---

## 📁 O que tem nessa pasta

```
zona-quente-rj/
├── index.html      ← O app principal (motoristas usam esse)
├── admin.html      ← Painel para você cadastrar eventos
└── README.md       ← Esse arquivo
```

**Tudo num único arquivo HTML por enquanto** — sem build, sem npm, sem servidor. Abre direto no navegador.

---

## 🚀 Como rodar localmente (testar no seu PC)

**Opção 1 — A mais simples:**

Dê duplo-clique no arquivo `index.html`. Pronto, abre no navegador.

**Opção 2 — Para testar no celular pela rede local:**

```bash
# Entre na pasta
cd zona-quente-rj

# Rode um servidor local com Python (já vem instalado em Mac/Linux)
python3 -m http.server 8000

# Ou com Node.js:
npx serve
```

Depois acesse `http://SEU_IP_LOCAL:8000` no celular (mesmo Wi-Fi).

---

## 🌐 Como colocar no ar (deploy em 5 minutos, grátis)

### Opção 1 — Vercel (recomendado)
1. Crie conta em [vercel.com](https://vercel.com)
2. Arraste a pasta `zona-quente-rj` para o dashboard
3. Pronto. Você ganha uma URL tipo `zona-quente-rj.vercel.app`

### Opção 2 — Netlify
1. Crie conta em [netlify.com](https://netlify.com)
2. Vá em "Sites" → arraste a pasta
3. Pronto.

### Opção 3 — GitHub Pages
1. Crie um repositório no GitHub com esses arquivos
2. Settings → Pages → ative

**Custo: R$ 0/mês** até centenas de motoristas usando.

---

## 🛠️ Como cadastrar eventos (sem mexer em código)

1. Abra `admin.html` no seu PC
2. Preencha o formulário com os dados do evento
3. Clique em "Adicionar evento"
4. No final da página, clique em "📋 Copiar JSON"
5. Abra o `index.html` num editor de texto
6. Procure pela linha `const EVENTOS = [` e substitua por o que você copiou
7. Salve e suba o arquivo de novo no Vercel/Netlify

> **Dica:** O admin salva os eventos no localStorage do seu navegador. Se trocar de máquina, eles somem. Quando ligarmos backend (Firebase/Supabase), isso vai virar online automático.

### Como pegar latitude/longitude de um lugar:
1. Abra o Google Maps
2. Clique com botão direito no local desejado
3. Copie as duas primeiras coordenadas (ex: -22.9133, -43.1797)

---

## ✨ Funcionalidades implementadas (v1)

- [x] Mapa real da Zona Sul (Leaflet + tema dark, gratuito)
- [x] Marcadores coloridos por demanda (vermelho/amarelo/verde/roxo)
- [x] Animação de pulso nos pontos quentes
- [x] Card detalhado ao clicar (status, motivo, pico, tipo de corrida)
- [x] Filtros: agora, próximas horas, noite, todos
- [x] Lista de eventos em tela cheia
- [x] Sistema de feedback (4 botões: fraco/médio/bom/estourado)
- [x] Lógica de média ponderada por tempo (feedback recente pesa mais)
- [x] Botão "ir para a região" abre Google Maps com rota
- [x] Compartilhamento via WhatsApp (Web Share API)
- [x] Painel admin para cadastro fácil
- [x] PWA (motorista pode "instalar" no celular como app nativo)
- [x] Tema dark, mobile-first

---

## 🔮 Próximos passos sugeridos

### Curto prazo (próximas 2-4 semanas)
- [ ] Subir online e mandar para 10-20 motoristas testarem
- [ ] Coletar feedback estruturado (formulário Google Forms)
- [ ] Refinar UX baseado no uso real
- [ ] Adicionar mais eventos por dia (rotina diária de cadastro)

### Médio prazo (1-2 meses)
- [ ] **Backend real** com Firebase ou Supabase (grátis até X usuários):
  - Eventos vivos (sem precisar re-subir o arquivo)
  - Feedback compartilhado entre motoristas
  - Login simples (anônimo ou Google)
- [ ] Geolocalização: mostrar onde o motorista está agora
- [ ] Filtro por distância ("eventos a até 3km de mim")
- [ ] Notificações push ("evento começou perto de você")

### Longo prazo (3-6 meses)
- [ ] Expandir para Zona Norte, Barra, Baixada
- [ ] Integração com Sympla, Eventbrite, Ticketmaster
- [ ] Scraping de Instagram/perfis que postam eventos
- [ ] Histórico: "domingo passado a Lapa estourou às 23h"
- [ ] Modo estratégico: "maximizar ganhos" vs "corridas curtas"
- [ ] Sistema de gamificação (motorista ganha pontos por reportar)
- [ ] Versão nativa Flutter (se a versão web bombar)

---

## 💰 Custos estimados

| Etapa | Custo mensal |
|-------|-------------|
| MVP (v1 atual) | **R$ 0** |
| Com domínio próprio (.com.br) | ~R$ 4/mês |
| Com backend Firebase (até 1.000 usuários) | **R$ 0** |
| Com backend Firebase (10.000+ usuários ativos) | R$ 100–300 |
| Notificações push | **R$ 0** (Firebase) |

---

## 🧪 Como validar a ideia (antes de investir mais)

1. **Suba a versão atual** no Vercel
2. **Cadastre 10-20 eventos reais** de uma sexta/sábado de Zona Sul
3. **Mande o link** para 5-10 motoristas que você conhece (ou em grupos de WhatsApp de motoristas)
4. **Pergunte depois:**
   - Você abriu? Quantas vezes?
   - Te ajudou a decidir aonde ir?
   - O que faltou?
   - Pagaria R$ 10/mês por isso?
5. Se 3+ disserem "sim, pagaria" → vai para o próximo nível

---

## 🤝 Stack técnica

- **Frontend:** HTML + CSS + JavaScript puro (sem framework)
- **Mapa:** [Leaflet.js](https://leafletjs.com) + tiles CartoDB Dark (grátis)
- **Backend (futuro):** Firebase Firestore ou Supabase
- **Deploy:** Vercel/Netlify (CDN global, grátis)

**Por que não Flutter ainda?** Porque MVP precisa estar nas mãos dos motoristas em 1 semana, não em 3 meses. Web funciona em qualquer celular sem App Store. Quando provar tração, migra-se para nativo.

---

Feito com 🔥 para os motoristas do Rio.
