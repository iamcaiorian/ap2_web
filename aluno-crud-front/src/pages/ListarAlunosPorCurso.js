import { useState, useEffect } from "react";
import AlunoService from '../services/AlunoService';
import { Link } from "react-router-dom";

export function ListarAlunosPorCurso() {
    const [alunosDB, setAlunosDB] = useState([]);
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
    }, []);

    // Agrupa alunos por curso
    const alunosPorCurso = alunosDB.reduce((acc, aluno) => {
        if (!acc[aluno.curso]) {
            acc[aluno.curso] = [];
        }
        acc[aluno.curso].push(aluno);
        return acc;
    }, {});

    // Função para alternar a aplicação das cores
    const alternarCores = () => {
        setAplicarCores(!aplicarCores);
    };

    // Função para determinar a cor da linha
    const obterCorLinha = (ira) => {
        if (!aplicarCores) return ""; // Sem cor se não estiver aplicado

        if (Number(ira) < 7 ) return "table-danger"; // Vermelho
        return "table-info";
    };

    return (
        <div className="mx-auto p-4">
            <button onClick={alternarCores} className="btn btn-secondary mb-3">
                {aplicarCores ? 'Remover Cores' : 'Aplicar Cores'}
            </button>
            <h2>Alunos Agrupados por Curso</h2>
            {Object.keys(alunosPorCurso).map(curso => (
                <div key={curso} className="mb-4">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th className="table-dark" colSpan="3"></th>
                                <th className="table-dark">{curso}</th>
                                <th className="table-dark"></th>
                            </tr>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nome</th>
                                <th scope="col">IRA</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alunosPorCurso[curso].map(aluno => (
                                <tr key={aluno.id} className={obterCorLinha(aluno.ira)}>
                                    <th scope="row">{aluno.id}</th>
                                    <td>{aluno.nome}</td>
                                    <td>{aluno.ira}</td>
                                    <td>
                                        <div className="">
                                            <Link to={`/editar-aluno/${aluno.id}`} className="btn btn-primary mx-2">Editar</Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
}
