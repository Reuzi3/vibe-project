// src/components/Tabela.js
import React, { useState } from "react";
import { dadosTabelas, adicionarItem, removerItem } from "./Utils/tabelaUtils.js";

const Tabela = () => {
    const [abaAtual, setAbaAtual] = useState("contas");
    const [dados, setDados] = useState(dadosTabelas[abaAtual].dados);

    const mudarAba = (novaAba) => {
        setAbaAtual(novaAba);
        setDados([...dadosTabelas[novaAba].dados]); // Atualiza os dados da aba
    };

    const handleAdicionar = () => {
        adicionarItem(abaAtual);
        setDados([...dadosTabelas[abaAtual].dados]);
    };

    const handleRemover = (index) => {
        removerItem(abaAtual, index);
        setDados([...dadosTabelas[abaAtual].dados]);
    };

    return (
        <div className="container">
            {/* Abas */}
            <div className="tabs">
                {Object.keys(dadosTabelas).map((aba) => (
                    <button key={aba} className={aba === abaAtual ? "active" : ""} onClick={() => mudarAba(aba)}>
                        {aba.charAt(0).toUpperCase() + aba.slice(1)}
                    </button>
                ))}
            </div>

            {/* Botão adicionar */}
            <button onClick={handleAdicionar}>Adicionar Item</button>

            {/* Tabela */}
            <table>
                <thead>
                    <tr>
                        {dadosTabelas[abaAtual].colunas.map((coluna) => (
                            <th key={coluna}>{coluna}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dados.length > 0 ? (
                        dados.map((linha, index) => (
                            <tr key={index}>
                                {linha.map((item, i) => (
                                    <td key={i}>{item}</td>
                                ))}
                                <td>
                                    <button onClick={() => handleRemover(index)}>Remover</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={dadosTabelas[abaAtual].colunas.length} style={{ textAlign: "center" }}>
                                Nenhum item encontrado.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Tabela;
