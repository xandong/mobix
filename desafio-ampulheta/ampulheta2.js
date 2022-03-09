const space = '\40', caracter = '#', segundo = 1000;
//let num = prompt("Insira um numero"),
let num = 20; if(num%2!=0) num++;

let countP1 = num/2,
    countP2 = num,
    timer = 0;

// console.log(countP1,countP2)
const ampulheta = (num) => {
    timer += segundo;
    let meio = num/2,
    auxNum = num,
    aux = meio;
    

    for (i=0; i<num; i++) {
        if (i < meio){
            if (i==0) {
                console.log(`${space.repeat(i+1)}${caracter.repeat(num)}`)
            }
            else if ((auxNum-2)/2>=countP1) {
                console.log(`${ space.repeat(i+1) }#${ space.repeat(auxNum-2) }#`)
            }
            else {
                console.log(space.repeat(i), caracter.repeat(auxNum))
            }
            auxNum-=2;
        }
        else {
            --meio;
            if (i==num-1) {
                console.log(`${space}${caracter.repeat(num)}`)
            }
            else if (i<countP2) {
                console.log(`${space.repeat(aux--)}#${space.repeat(auxNum)}#`)
            }
            else {
                console.log(space.repeat(meio), caracter.repeat(auxNum+2))           
            }
            auxNum+=2;
        }
    }
console.log('\n\n\n')
--countP1;
--countP2;
//console.log(`P1:${countP1} P2:${countP2}`)
}
const intervalo = setInterval(()=>{
    ampulheta(num);
    if (timer >= num*segundo/2){
        paraIntervalo = clearInterval(intervalo)
    }
}, segundo);
