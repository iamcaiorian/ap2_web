import { alunos } from "../data/db";
import { useState, useEffect } from "react";

export function ListarAlunos() {
    const [alunosDB, setAlunosDB] = useState([]);

    useEffect(() => {
        setAlunosDB(alunos);
    }, []);

    return (
        <div className="mx-auto p-4">
            <table class="table table-hover">
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
                        <tr>
                            <th scope="row">{aluno.id}</th>
                            <td>{aluno.nome}</td>
                            <td>{aluno.curso}</td>
                            <td>{aluno.ira}</td>
                            <td>
                                <div className="">
                                    <button type="button" className="btn btn-primary mx-2">Editar</button>
                                    <button type="button" className="btn btn-danger">Deletar</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}