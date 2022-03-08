let num = prompt("Insira o tamanho da ampulheta:");

const ampulheta = (num) => {
    let metade = parseInt(num/2);
    let auxNum;
    let aux = 1;
    let caracter = '#'
    let space = '\40'
    auxNum = num-2;

    console.log(`${caracter.repeat(num)}`)
    for(i=1; i<metade; i++){
        console.log(`#${space.repeat(i)}#${space.repeat(auxNum-4)}#${space.repeat(i)}#`);
        auxNum-=2;
        if(auxNum<=3){
            auxNum+=2;
            i=metade;
        }
    }
    auxNum = num-2
    for(i=metade-1; i>1; i--) {
        if(num%2==0) {
            console.log(`#${space.repeat(i-1)}${caracter.repeat(aux+1)}${space.repeat(i-1)}#`);
        }
        else {
            console.log(`#${space.repeat(i)}${caracter.repeat(aux)}${space.repeat(i)}#`);
        }
        aux+=2;
    }
    console.log(`${caracter.repeat(num)}`)
}
ampulheta(num);