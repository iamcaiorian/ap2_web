import { useState, useEffect } from "react";
import AlunoService from '../services/AlunoService';
import { Link } from "react-router-dom";

export function ListarAlunos() {
    const [alunosDB, setAlunosDB] = useState([]);
    const [atualizar, setAtualizar] = useState(false);
    const [aplicarCores, setAplicarCores] = useState(false);

    useEffect(() => {
        const fetchAlunos = async () => {
            try {
                const alunoService = new AlunoService(); 
                const res = await alunoService.getAlunos();
                setAlunosDB(res.data);
            } catch (error) {
                console.error("Erro ao buscar os alunos:", error);
            }
        };

        fetchAlunos();
    }, [atualizar]);

    const handleDelete = async (id) => {
        const alunoService = new AlunoService();
        setAtualizar(false);
        if (window.confirm('Tem certeza que deseja deletar esse aluno?')) {
            try {
                const res = await alunoService.deleteAluno(id);  // Tenta deletar o aluno
                console.log(res);  // Verifica a resposta da API
                alert('Aluno deletado com sucesso!');
                setAlunosDB(alunosDB.filter(aluno => aluno.id !== id));  // Atualiza a lista de alunos
                setAtualizar(true);
            } catch (error) {
                console.error("Erro ao deletar o aluno:", error);  // Log do erro
                alert('Erro ao deletar o aluno!');
            }
        }
    };

    // Função para calcular a média do IRA
    const calcularMediaIRA = () => {
        if (alunosDB.length === 0) return 0;
        const somaIRA = alunosDB.reduce((acc, aluno) => acc + parseFloat(aluno.ira), 0);
        return (somaIRA / alunosDB.length).toFixed(2);
    };

    // Função para alternar a aplicação das cores
    const alternarCores = () => {
        setAplicarCores(!aplicarCores);
    };

    // Função para determinar a cor da linha
    const obterCorLinha = (ira) => {
        if (!aplicarCores) return ""; // Sem cor se não estiver aplicado

        const media = calcularMediaIRA();
        console.log(`IRA: ${ira}, Média: ${media}`); // Debug: Verificar valores de IRA e Média
        if (Number(ira) < Number(media)) return "table-danger"; // Vermelho
        if (Number(ira) > Number(media)) return "table-info"; // Azul
        return ""; // Sem cor para quem está na média
    };

    return (
        <div className="mx-auto p-4">
            <button onClick={alternarCores} className="btn btn-secondary mb-3">
                {aplicarCores ? 'Remover Cores' : 'Aplicar Cores'}
            </button>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Curso</th>
                        <th scope="col">IRA</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {alunosDB.map(aluno => (
                        <tr key={aluno.id} className={obterCorLinha(aluno.ira)}>
                            <th scope="row">{aluno.id}</th>
                            <td>{aluno.nome}</td>
                            <td>{aluno.curso}</td>
                            <td>{aluno.ira}</td>
                            <td>
                                <div className="">
                                    <Link to={`/editar-aluno/${aluno.id}`} className="btn btn-primary mx-2">Editar</Link>
                                    <button onClick={() => handleDelete(aluno.id)} className="btn btn-danger ml-4">Deletar</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td className="table-success" colSpan="3">Média IRA:</td>
                        <td className="table-success">{calcularMediaIRA()}</td>
                        <td className="table-success"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
