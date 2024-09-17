import axios from 'axios';

const API_URL = 'http://localhost:3003/aluno';

class AlunoService{
    
        getAlunos(){
            return axios.get(API_URL + '/listar');
        }
    
        getAlunoById(alunoId){
            return axios.get(API_URL + '/buscar/' + alunoId);
        }
    
        createAluno(aluno){
            return axios.post(API_URL + '/adicionar', aluno);
        }
    
        updateAluno(aluno){
            return axios.put(API_URL + '/atualizar', aluno);
        }
    
        deleteAluno(alunoId){
            return axios.delete(API_URL + '/deletar/' + alunoId);
        }
    }


export default AlunoService