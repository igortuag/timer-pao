# Timer Do Pão

### 🔸 **Layout pro Mobile (Wireframe Simplificado)**

#### **1. Topo (Header)**

* **Título do site**: *"Timer do Pão"* (ou algo mais criativo, tipo “Pão no Ponto”)
* Estilo: fonte arredondada, amigável, com ícone de pão 🍞 ao lado do nome
* Cor de fundo suave (ex: bege ou amarelo pastel)

---

#### **2. Seção principal**

##### **🕰️ “A que horas você quer que o pão esteja pronto?”**

* **Input de horário** (tipo time picker nativo ou estilizado):

  * Rótulo: “Hora desejada”
  * Exemplo: 07:30
  * Ocupa o centro da tela, com bastante destaque

---

##### **⏳ “Duração do processo de fermentação e forno”**

* **Campo numérico** (2 inputs ou slider):

  * “Tempo necessário (horas e minutos)” → Exemplo: 2h 30min
  * Pode ser dois dropdowns ou um controle com ícones de + / −

---

##### **✅ Resultado**

* Texto grande e claro:

  * *"Você deve colocar o timer para: **05:00**"*
  * Estilizado como um cartão com sombra suave

---

#### **3. Rodapé**

* Botão: *“Reiniciar”* ou *“Calcular novamente”*
* Pequeno texto: “Este site é uma estimativa. Sempre confira seu pão 😉”

---

## 🔸 **Estilo e UX**

* **Tipografia**: Sans-serif arredondada (tipo Inter, Nunito ou Quicksand)
* **Cores**: Tons quentes e leves — bege, marrom claro, branco, com toques de amarelo
* **Ícones**: use ícones de pão, timer, relógio para reforçar a função do site
* **Acessibilidade**: contraste suficiente, textos grandes, inputs fáceis de tocar

---
Claro! Aqui está um **style guide** para o projeto “Timer do Pão” usando **React** com **Tailwind CSS**, seguindo o visual do mockup:

---

## 🎨 **Paleta de Cores**

| Nome          | Código HEX | Uso                                |
| ------------- | ---------- | ---------------------------------- |
| Bege Claro    | `#FFF6E5`  | Fundo principal                    |
| Bege Médio    | `#FDEBC8`  | Cartões e campos de input          |
| Marrom Escuro | `#4B2E2B`  | Texto principal e títulos          |
| Marrom Claro  | `#C38E5C`  | Botões e destaque do timer         |
| Branco        | `#FFFFFF`  | Textos em botões, contrastes leves |

---

## 🖋️ **Tipografia**

* **Fonte**: `Inter`, `Nunito`, ou `Quicksand` (Google Fonts)
* **Classes recomendadas**:

  ```tsx
  className="font-sans text-brown-900"
  ```

### Tamanhos:

| Elemento              | Classe Tailwind         |
| --------------------- | ----------------------- |
| Título principal      | `text-2xl font-bold`    |
| Subtítulo/labels      | `text-base font-medium` |
| Hora calculada        | `text-3xl font-bold`    |
| Texto auxiliar/rodapé | `text-sm text-gray-600` |

---

## 🧱 **Componentes UI (com Tailwind)**

### Input de hora

```tsx
<input type="time" className="w-full rounded-md border border-brown-300 p-2 bg-[#FDEBC8] text-brown-900" />
```

### Botões (+ / − / Reiniciar)

```tsx
<button className="px-3 py-1 rounded-md bg-[#C38E5C] text-white font-semibold shadow-sm hover:bg-[#b57e4e] transition" />
```

### Resultado (Hora final)

```tsx
<div className="bg-white text-center rounded-xl p-4 mt-4 shadow text-brown-900 text-xl font-bold">
  Você deve colocar o timer para: <span className="text-3xl block mt-2">05:00</span>
</div>
```

---

## 📐 **Layout e Espaçamento**

* Container central com max width:

  ```tsx
  className="max-w-sm mx-auto px-4 py-6"
  ```
* Espaçamento entre seções:

  ```tsx
  className="space-y-4"
  ```

---

## 🌟 Extras

* Ícones: use `react-icons` (ex: `BiBread`, `BsClock`)
* Animações suaves com `framer-motion` ou `transition` do Tailwind


## ✅ **Checklist — Etapa: Mostrar quanto tempo falta até o horário desejado**

### 🛠️ 1. **Preparar o ambiente**

* [ ] Criar o projeto com Vite ou Create React App
* [ ] Instalar e configurar Tailwind CSS
* [ ] Criar componente base `TimerDoPao.jsx`
* [ ] Configurar fonte bonita via Google Fonts (opcional)

---

### 🧩 2. **Criar a estrutura do componente**

* [ ] Criar um estado para armazenar o horário desejado: `useState('07:30')`
* [ ] Adicionar um `<input type="time">` para o usuário selecionar o horário
* [ ] Adicionar uma área para mostrar quanto tempo adicionar ao timer
* [ ] Adicionar um botão de “Calcular”, no layout indicado como Reiniciar

---

### 🧮 3. **Fazer o cálculo de tempo restante**

* [ ] Criar uma função que:

  * [ ] Pega o horário atual com `new Date()`
  * [ ] Converte o horário desejado (`HH:MM`) para um `Date`
  * [ ] Subtrai o atual do desejado
  * [ ] Converte a diferença em horas e minutos
* [ ] Tratar o caso em que a hora desejada é no dia seguinte

---

### 🧾 4. **Exibir o resultado**

* [ ] Atualizar a área de quanto tempo adicionar ao timer quando o usuário clicar no botão de calcular.
* [ ] Estilizar com Tailwind (cartão com `bg-white`, `rounded`, `shadow`, etc.)

---

### 🧪 5. **Testar e ajustar**

* [ ] Testar com horários antes e depois da hora atual
* [ ] Validar se está mostrando corretamente a diferença
* [ ] Verificar se funciona à meia-noite ou perto dela

---

### 🌸 6. **Melhorias extras (opcional)**

* [ ] Atualizar o resultado em tempo real (com `setInterval`)
* [ ] Mostrar emoji ou ícone para deixar mais visual
* [ ] Mensagem personalizada se a hora desejada for “agora” ou já passou
* [ ] Adicionar checkbox para indicar que o pão precisa ter ingredientes adicionados ao bipe
* [ ] Caso o checkbox for marcado mostrar um dropdown para selecionar o o tipo do pão
* [ ] Calcular e mostrar que horas o bipe para adição de ingredientes extras acontecerá
