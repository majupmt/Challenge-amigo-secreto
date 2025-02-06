let listaAmigos = [];
    
    function adicionarAmigo() {
        let inputNome = document.getElementById("amigo");
        let nome = inputNome.value.trim();

        if (nome === "") {
            alert("Por favor, insira um nome válido.");
            return;
        }

        listaAmigos.push(nome);
        atualizarLista();
        inputNome.value = ""; 
    }

    function atualizarLista() {
        let ulLista = document.getElementById("listaAmigos");
        ulLista.innerHTML = "";

        listaAmigos.forEach((nome) => {
            let li = document.createElement("li");
            li.classList.add("coluna");
            li.textContent = nome;
            ulLista.appendChild(li);
        });
    }

    function sortearAmigo() {
        if (listaAmigos.length === 0) {
            alert("Adicione ao menos um nome antes de sortear.");
            return;
        }

        let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
        let amigoSorteado = listaAmigos[indiceSorteado];

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;

        listaAmigos = [];
        atualizarLista(); 
    }