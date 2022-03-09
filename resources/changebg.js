
const btn = document.getElementById('btn');
let i = 0;

const imgArr= ["url('resources/img/carac-2.jpg')", "url('resources/img/carc-3.jpg')","url('resources/img/carc-1.jpg')"]

let changeBg = function(){
    document.body.style.backgroundImage = imgArr[i];
    if(i >= imgArr.length-1){
        i = 0;
    } else{ i++};
}

btn.addEventListener("click", changeBg);