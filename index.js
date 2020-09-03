const fs = require('fs')
const path = require('path')

let matriculas = 'matriculas.txt'
let matriculas_preenchidas = 'alunos_comparecidos.txt'


let file_alunos_cadastrados = fs.readdirSync(path.resolve(__dirname, "./alunos_cadastrados/"))

if(file_alunos_cadastrados == '' || file_alunos_cadastrados == null) throw err
if(file_alunos_cadastrados !==  matriculas) matriculas = file_alunos_cadastrados.toString()


let preenchimento_alunos = fs.readdirSync(path.resolve(__dirname,"./preenchimento_alunos/"))

if(preenchimento_alunos == '' || preenchimento_alunos == null) throw err
if(preenchimento_alunos !==  matriculas_preenchidas) matriculas_preenchidas = preenchimento_alunos.toString()



let matriculas_cadastradas = fs.readFileSync(`./alunos_cadastrados/${matriculas}`, 'utf8')
let parse_matriculas = matriculas_cadastradas.split('\n');


let alunos_comparecidos = fs.readFileSync(`./preenchimento_alunos/${matriculas_preenchidas}`, 'utf8')
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


let total_alunos = alunos_nao_presente.length -1
if(total_alunos === -1) {
     total_alunos = 0
} else {
    total_alunos = alunos_nao_presente.length
}


let alunos_que_faltou = `Total de alunos que não compareceu na aula: ${total_alunos} \n\n${parse_alunos_nao_presentes}`
fs.writeFileSync('./alunos que faltaram.txt', alunos_que_faltou)







