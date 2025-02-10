// src/utils/tabelaUtils.js
export const dadosTabelas = {
    contas: {
        colunas: ["Banco", "Agência", "Conta", "Nome", "Ações"],
        dados: []
    },
    saques: {
        colunas: ["Data", "Valor", "Banco", "Ações"],
        dados: []
    },
    notas: {
        colunas: ["Título", "Descrição", "Data", "Ações"],
        dados: []
    }
};

export function adicionarItem(abaAtual) {
    let novoItem = [];

    if (abaAtual === "contas") {
        novoItem = ["Banco XYZ", "1234", "56789-0", "João da Silva"];
    } else if (abaAtual === "saques") {
        novoItem = ["10/02/2025", "R$ 500,00", "Banco XYZ"];
    } else if (abaAtual === "notas") {
        novoItem = ["Reunião", "Planejamento financeiro", "10/02/2025"];
    }

    dadosTabelas[abaAtual].dados.push(novoItem);
}

export function removerItem(abaAtual, index) {
    dadosTabelas[abaAtual].dados.splice(index, 1);
}
