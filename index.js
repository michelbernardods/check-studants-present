/* 
    Tenho dois arquivos

    Ler dois arquivos com FS

    jogos tudo que esta nesse arquivo

    faço a separação com ele com a quantidade, e pula uma linha por arquivo
        EX: 2017200965 = 10 
    
    Depois de separar, verificar se cada arquivo desse separado, tem tamanho 10 

    Tenta ordenar por ano de cada matrícula
        
    Comparar se todos os arquivos arquivos em um array esta no outro

    os que não estão, criar um outro arquivo jogando essas matrículas 

*/


const fs = require('fs')
const path = require('path')



let listOne = fs.readFileSync('list.txt', 'utf8')
var list1 = listOne.split('\n');
//console.log(list1);


let listTwo = fs.readFileSync('verifylist.txt', 'utf8')
var list2 = listTwo.split('\n');
//console.log(list2);





let abertos = new Set(list1);
for (let e of list2) {
   abertos.delete(e)
}

abertos = Array.from(abertos);
console.log(abertos);



