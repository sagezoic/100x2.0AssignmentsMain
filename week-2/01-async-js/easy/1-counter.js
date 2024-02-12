// Classic mistake, here the output will be all 11s, think why is it so?

// function counter(sec){
//     for(i=1;i<=sec;i++){
//         setInterval(()=>console.log(i),1000);
//     }
// }

let count = 0;
function counter(sec){
    count++;
    console.log(count);

    if(count>=sec){
        clearInterval(intervalId);
    }
}

const intervalId = setInterval(()=>counter(10), 1000);