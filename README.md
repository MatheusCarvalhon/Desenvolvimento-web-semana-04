# Desenvolvimento-web-semana-04
Aula de front end universidade Ceuma - TechX

# Entregável Semana 04 - Arrays, DOM e Eventos em JavaScript

Este projeto é a resolução dos desafios práticos da Semana 04, focado em consolidar fundamentos essenciais do JavaScript no lado do cliente. O script manipula dados estruturados, renderiza essas informações no HTML dinamicamente e responde a interações do usuário.

## 🚀 Conceitos Abordados

### 1. Métodos de Array
Manipulamos arrays de strings e objetos sem utilizar loops convencionais (como `for` ou `while`), optando por métodos funcionais mais modernos:
*   **`map()`:** Utilizado para transformar elementos originais, como converter nomes para maiúsculas ou extrair chaves de objetos, gerando sempre um *novo array*.
*   **`filter()`:** Usado para criar novos arrays apenas com itens que passam em um teste lógico (ex: preços maiores que 20).
*   **`reduce()`:** Aplicado para acumular valores (ex: somar todos os preços de um carrinho de produtos), reduzindo o array a um único valor final.
*   **`forEach()`:** Utilizado simplesmente para percorrer listas, executar `console.log` e gerar elementos DOM iterativamente.

### 2. Manipulação do DOM
Fizemos a ponte entre a lógica JavaScript e a interface HTML utilizando:
*   **Seletores:** `querySelector` e `querySelectorAll` para capturar elementos específicos.
*   **Criação/Inserção:** `innerHTML` e `createElement` combinados com `append()` para injetar novos itens e listas na página de forma dinâmica.
*   **Classes:** O uso de `classList.add`, `toggle` e `contains` para injetar estilos e estados (ex: itens "destaque" ou "feitos").

### 3. Eventos e Event Delegation
*   Gerenciamento básico através de escutas como `click`, `mouseover`, `keyup` e interceptação de `submit` (protegida pelo `e.preventDefault()`).
*   **A Importância do Event Delegation:** Em vez de atribuir um ouvinte de evento (`addEventListener`) individualmente para cada `<li>` da página, colocamos um único ouvinte no elemento "pai" (`#lista`). Através da verificação `e.target.tagName === "LI"`, interceptamos o clique no filho correto. Isso garante alta performance de memória e resolve nativamente o problema de elementos criados dinamicamente no futuro (via inputs e botões), garantindo que os novos elementos também reajam a cliques sem precisarmos declarar novos listeners para eles.
