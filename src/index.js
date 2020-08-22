const fs = require('fs')
const path = require('path')



const matriculas_cadastradas = fs.readFileSync('./files/matriculas.txt', 'utf8')
const parse_matriculas = matriculas_cadastradas.split('\n');


const alunos_comparecidos = fs.readFileSync('./files/alunos_comparecidos.txt', 'utf8')
const alunos = alunos_comparecidos.split('\n');


let alunos_nao_presente = new Set(parse_matriculas);
for (let matriculas of alunos) {
   alunos_nao_presente.delete(matriculas)
}


alunos_nao_presente = Array.from(alunos_nao_presente);
alunos_nao_presente = alunos_nao_presente.filter(matriculas => String(matriculas).trim());
//alunos_nao_presente = alunos_nao_presente.filter(s => s.replace(/\s+/g, '').length !== 0);
console.log(`Total de alunos que não compareceu na aula: ${alunos_nao_presente.length} \n\n  ${alunos_nao_presente} `);
