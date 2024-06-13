
/* Testar 5 idades diferentes */

function VerificarIdade () {
    if(idade >= 18) {
        console.log("É de maior!"); }
        else if (idade <= 12 && idade > 3) {
            console.log("É criança!"); }
            else if (idade >= 13 && idade < 18) {
                console.log("É adolescente!"); }
                else if (idade >= 70) {
                    console.log("É idoso!");
                    else }
        
}

VerificarIdade(2);
VerificarIdade(12);
VerificarIdade(15);
VerificarIdade(18);
VerificarIdade(80);