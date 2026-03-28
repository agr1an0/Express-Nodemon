import {aritimetico} from "./aritimetico.js";
import {se} from "./se.js";
import {operadorRelacionado} from "./operadorRelacionado.js";
import {operadorLogico} from "./operadorLogico.js";
import {switchCase} from "./switchCase.js";
import {repeticao} from "./repeticao.js";
import {variaveis} from "./variaveis.js";
import {vetor} from "./vetor.js";
import express from 'express'
//import inquirer from "inquirer";


const app = express()
let resp
let entrada = {
    escolha: "aritimetico", //mude manuelmente aqui se precisar
};
//código se for instalar o inquirer
//let question = inquirer.prompt([ { type: "input", name: "escolha", message: "oi, se você quiser ver uma atividade é só digitar o nome dela (veja o nome pelas pastas ou pelo VScode). Isso também foi passado como uma atividade sobre uso de import e export. pode digitar:"}]); entrada.escolha = await (question)

if (entrada.escolha) {
    switch (entrada.escolha){
        case "aritimetico": resp = aritimetico(22, 8) //area(base, lado)
            break;
        case "ifElse": resp = se(1.75, 77) //imc(metro, kilos)
            break;
        case "operadorRelacionado": resp = operadorRelacionado(40, 70) //(J, P) Pedro cresce menos que João
            break;
        case "operadorLogico": resp = operadorLogico(6, 2, 9) //(primeiro, segundo, terceiro)
            break;
        case "switchCase": resp = switchCase(17, 70, 80) //idades(idade1, idade2, idade3)
            break;
        case "repeticao": resp = repeticao(30) //sequencia (num) vezes, (o sgundo soma ao anterior)
            break;
        case "variaveis": resp = variaveis(30, 4) //(preço, quantidade)
            break;
        case "vetor": resp = vetor([1,2,3,4,5,6,7,8,9,10,11,12,13,14]) //quadrado de cada posição
                break;
        default: resp = "nome inexistente, confirme e tente denovo"
    } 
}
app.get('/Ativ/Adriano', (req, res) => {
  res.send(resp)
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/Ativ/Adriano')
})
