import { Link } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export function NavBar() {
    return (
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
            <div className='container-fluid'>
                <a className='navbar-brand' href='http://localhost:3000/'>CRUD</a>
                <div className='collapse navbar-collapse' id="navbarNav">
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link className='nav-link active' to="/">Home</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="http://localhost:3000/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Aluno
                            </a>
                            <ul class="dropdown-menu">
                                <li className='nav-item'>
                                    <Link className='nav-link active' to="/listar-alunos">Listar Alunos</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link active' to="/criar-aluno">Criar Aluno</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}