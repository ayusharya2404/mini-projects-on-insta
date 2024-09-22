let presentStatus = document.querySelector('h5');
let btn = document.querySelector('#add');
let check = 0;

btn.addEventListener('click',function(){
    if(check == 0){
        presentStatus.innerHTML = `Friends`;
        add.innerText = `Remove Friend`;
        presentStatus.style.color = `Green`;
        check = 1;
    }
    else{
        presentStatus.innerHTML = `Add Friend`;
        add.innerHTML = `Add Friend`;
        presentStatus.style.color = `red`;
        check = 0;
    }
})



