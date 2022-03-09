const num = 10, segundo = 1000;
let count = 0, stts = false, timer = 0;
const space = '\40', caracter = '#';

const ampulheta = (num) => {
    timer += segundo;
    let meio = num/2;
    auxNum = num;
    auxSpace = meio-1;
    
    for (i=0; i<num; i++) {
        if (i < meio){
            console.log(space.repeat(i), caracter.repeat(auxNum))
            auxNum-=2;
        }
        else {
            console.log(space.repeat(--meio), caracter.repeat(auxNum+=2))
        }
    }
    ++count
    console.log(`Contando... ${count} : ${timer}ms`)
}
const intervalo = setInterval(()=>{
    ampulheta(num);
    if (timer >= num*segundo/2){
        paraIntervalo = clearInterval(intervalo)
    }
}, segundo);

//  ###### 
//   ####
//    ##   
// 
// 
// 
// 