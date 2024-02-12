let count = 0;
const sec = 10;
function counter(){
    count++;
    console.log(count);

    if(count<sec){
        setTimeout(counter, 1000);
    }
}

counter();