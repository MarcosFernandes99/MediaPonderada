// Crie uma função que recebe 3 notas de um aluno como parâmetro e uma letra. Se a
// letra for A a função calcula a média aritmética das notas do aluno, se for P, a sua
// média ponderada (pesos: 5, 3 e 2). A média calculada deve ser retornada;

let prova1 = 0
let prova2 = 0
let prova3 = 0
let qualMedia

prova1 = parseFloat(prompt(`Digite a nota da primeira prova!`))
prova2 = parseFloat(prompt(`Digite a nota da segunda prova!`))
prova3 = parseFloat(prompt(`Digite a nota da terceira prova!`))
qualMedia = prompt(`Qual média deseja calcular. Aritmética - A/ Ponderada - P`)

console.log("Média: ", CalcularMedia(prova1, prova2, prova3, qualMedia))

function CalcularMedia(nota1, nota2, nota3, mediaparametro){
    let media = 0
    if(mediaparametro == "A"){
        media = (nota1+nota2+nota3) / 3
        return media.toFixed(1)
    }

    else if(mediaparametro == "P"){
        media = ((nota1*5) + (nota2*3) + (nota3*2))/ (5+3+2)
        return media.toFixed(1)    
    }

}