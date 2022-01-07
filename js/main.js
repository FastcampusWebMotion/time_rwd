const main = document.querySelector('main');
const menus = document.querySelectorAll('nav span');
const numbers = document.querySelectorAll('.screen span');
const [am, pm] = document.querySelectorAll('.screen em');

setInterval(()=>{
    let now = new Date();
    let hr = now.getHours();

    if(hr>=5 && hr<11){
        main.className='';
        main.classList.add('morning');
    }
    if(hr>=11 && hr<16){
        main.className='';
        main.classList.add('afternoon');
    }
    if(hr>=16 && hr<19){
        main.className='';
        main.classList.add('evening');        
    }
    if(hr>=19 || hr<5){
        main.className='';
        main.classList.add('night');
    }

    const times = setTime();
    times.forEach((time, index)=> getTime(time, index));    
},1000);


function setTime(){
    let hr2 = null;
    let now = new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    if(hr>12){
        hr2 = hr-12;
        pm.classList.add('on');
        am.classList.remove('on');
    }else{
        hr2 = hr;
        am.classList.add('on');
        pm.classList.remove('on');
    }

    return [hr2, min, sec];
}

function getTime(num, index){
    if(num<10) num = '0'+num;
    numbers[index].innerText = num;
}












