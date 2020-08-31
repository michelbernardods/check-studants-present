const fs = require('fs')

const matriculas_cadastradas = fs.readFileSync('./files/matriculas.txt', 'utf8')
let parse_matriculas = matriculas_cadastradas.split('\n');
const alunos_comparecidos = fs.readFileSync('./files/alunos_comparecidos.txt', 'utf8')
let alunos = alunos_comparecidos.split('\n');


alunos = alunos.map(matricula_aluno => matricula_aluno.replace(" ","") && matricula_aluno.trim())
alunos = alunos.filter(matricula_aluno => matricula_aluno.startsWith('20') && matricula_aluno.length  === 10)


let alunos_nao_presente = new Set(parse_matriculas)
for (let matriculas of alunos) {
    alunos_nao_presente.delete(matriculas)
}


alunos_nao_presente = Array.from(alunos_nao_presente)
alunos_nao_presente.sort()

let parse_alunos_nao_presentes = alunos_nao_presente.join("\n")


let alunos_que_faltou = `Total de alunos que não compareceu na aula: ${alunos_nao_presente.length - 1} \n\n${parse_alunos_nao_presentes}`


fs.writeFileSync('alunos_que_faltou.txt', alunos_que_faltou)







