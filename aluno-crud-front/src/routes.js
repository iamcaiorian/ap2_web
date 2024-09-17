import { createBrowserRouter } from 'react-router-dom';

import { Home }from './pages/Home';
import { CirarAluno } from './pages/CirarAluno';
import { EditarAluno }from './pages/EditarAluno';
import { ListarAlunos } from './pages/ListarAlunos';
import { DeletarAluno } from './pages/DeletarAluno';
import { ListarAlunosPorCurso } from './pages/ListarAlunosPorCurso';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: 'criar-aluno',
                element: <CirarAluno />
            },
            {
                path: 'editar-aluno/:id',
                element: <EditarAluno />
            },
            {
                path: 'listar-alunos',
                element: <ListarAlunos />
            },
            {
                path: '/listar-alunos-por-curso',
                element: <ListarAlunosPorCurso />
            }
        ]
    }
]);