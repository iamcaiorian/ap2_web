import { useState } from "react";

export function CirarAluno() {

    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState('');
    const [ira, setIra] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(nome, curso, ira);
    }

    return (
        <div>
            <h1 style={{width: 540, marginLeft: 16, marginBottom: 4}}>Criar Aluno</h1>
            <form className="form-content" onSubmit={handleSubmit}>
                <div style={{width: 540, marginLeft: 16, marginBottom: 4}}>
                    <label className="form-label" htmlFor="inputNome">Nome:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)} 
                        id="inputNome"
                    />
                </div>
                <div style={{width: 540, marginLeft: 16, marginBottom: 4}}>
                    <label className="form-label" htmlFor="inputCurso">Curso:</label>
                    <input 
                        type="text" 
                        className='form-control' 
                        value={curso} 
                        onChange={(e) => setCurso(e.target.value)} 
                        id="inputCurso"
                    />
                </div>
                <div style={{width: 540, marginLeft: 16, marginBottom: 4}}>
                    <label className="form-label" htmlFor="inputIRA">IRA:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={ira} 
                        onChange={(e) => setIra(e.target.value)} 
                        id="inputIRA"
                    />
                </div>
                <button  style={{marginTop: 16, marginLeft: 16}} className="btn btn-primary" type="submit">Criar</button>
            </form>
        </div>
    );
}