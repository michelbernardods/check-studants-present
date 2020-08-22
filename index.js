/* 
    Tenho dois arquivos - OK

    Ler dois arquivos com FS OK

    jogos tudo que esta nesse arquivo OK

    faço a separação com ele com a quantidade, e pula uma linha por arquivo
        EX: 2017200965 = 10 
    
    Depois de separar, verificar se cada arquivo desse separado, tem tamanho 10 

    Tenta ordenar por ano de cada matrícula
        
    Comparar se todos os arquivos arquivos em um array esta no outro

    os que não estão, criar um outro arquivo jogando essas matrículas 

*/


const fs = require('fs')
const path = require('path')



const matriculas_cadastradas = fs.readFileSync('matriculas.txt', 'utf8')
const parse_matriculas = matriculas_cadastradas.split('\n');


const alunos_comparecidos = fs.readFileSync('alunos_comparecidos.txt', 'utf8')
const alunos = alunos_comparecidos.split('\n');


let alunos_nao_presente = new Set(parse_matriculas);
for (let matriculas of alunos) {
   alunos_nao_presente.delete(matriculas)
}


alunos_nao_presente = Array.from(alunos_nao_presente);
alunos_nao_presente = alunos_nao_presente.filter(matriculas => String(matriculas).trim());
//alunos_nao_presente = alunos_nao_presente.filter(s => s.replace(/\s+/g, '').length !== 0);
console.log(`Total de alunos que não compareceu na aula: ${alunos_nao_presente.length} \n\n  ${alunos_nao_presente} `);