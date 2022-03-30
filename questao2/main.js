function fazerGet(url) {
    request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criarLinha(characters) {
    linha = document.createElement("tr");
    tdNome = document.createElement("td");
    tdNickname = document.createElement("td");
    tdStatus = document.createElement("td");
    tdOccupation = document.createElement("td");
    tdImg = document.createElement("img");
    tdImg.src = characters.img
    tdNome.innerHTML = characters.name
    tdNickname.innerHTML = characters.nickname
    tdStatus.innerHTML = characters.status
    tdOccupation.innerHTML = characters.occupation
    
    linha.appendChild(tdImg);
    linha.appendChild(tdNome);
    linha.appendChild(tdNickname);
    linha.appendChild(tdOccupation);
    linha.appendChild(tdStatus);

    return linha
}

function main() {
    arquivo = fazerGet("https://breakingbadapi.com/api/characters");
    characters = JSON.parse(arquivo);
    tabela = document.getElementById("tabela")
    characters.forEach(element => {
        linha = criarLinha(element);
        tabela.appendChild(linha);
    });
}
main()