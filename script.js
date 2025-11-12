function mostrarFila(tipo) {
    document.querySelectorAll(".conteudo").forEach(div => div.classList.remove("ativo"));
    document.querySelectorAll(".tab").forEach(btn => btn.classList.remove("active"));
    document.getElementById(tipo).classList.add("ativo");
    event.target.classList.add("active");
}

// --- Fila Encadeada ---
let filaEncadeada = [];

function enfileirarEncadeada() {
    const valor = document.getElementById("valorEncadeada").value;
    if (!valor) return;
    filaEncadeada.push(valor);
    atualizarVisualizacao("filaEncadeada", filaEncadeada);
    document.getElementById("valorEncadeada").value = "";
}

function desenfileirarEncadeada() {
    filaEncadeada.shift();
    atualizarVisualizacao("filaEncadeada", filaEncadeada);
}

// --- Fila Circular ---
let filaCircular = [];
const TAM = 5;

function enfileirarCircular() {
    const valor = document.getElementById("valorCircular").value;
    if (!valor) return;
    if (filaCircular.length < TAM) filaCircular.push(valor);
    else alert("Fila cheia!");
    atualizarVisualizacao("filaCircular", filaCircular);
    document.getElementById("valorCircular").value = "";
}

function desenfileirarCircular() {
    filaCircular.shift();
    atualizarVisualizacao("filaCircular", filaCircular);
}

function atualizarVisualizacao(id, fila) {
    const div = document.getElementById(id);
    div.innerHTML = "";
    fila.forEach(v => {
        const el = document.createElement("div");
        el.className = "elemento";
        el.textContent = v;
        div.appendChild(el);
    });
}
