
let form= document.getElementById("form");
let sb= document.getElementById("sb");
let text= document.getElementsByTagName("textarea");
let flex=document.getElementById("flex");

let n=-1;
let del=document.getElementsByClassName("del");
let car=document.getElementsByClassName("car");
let edi=document.getElementsByClassName("edi");

sb.addEventListener("click",(e)=>{
    n++;
    localStorage.setItem(text[0].value , text[1].value);
    flex.insertAdjacentHTML('afterbegin',`
    <div class="card-body  car" style="margin:1vw; border:2px solid black; border-radius:10px;">
    <h5 class="card-title">${text[0].value}</h5>
    <p class="card-text">${localStorage.getItem(text[0].value)}</p>
    <a href="#" class="btn btn-danger del">Delete</a>
    <a href="#" class="btn btn-primary edi">Edit</a>
    </div>
    `)
    e.preventDefault();
    form.reset();

    //Delete button
    for(let i=0;i<=n;i++){
        del[i].addEventListener("mousedown",()=>{
       car[i].style.display="none";
    });
    }

    //Edit Button
    for(let i=0;i<=n;i++){
        edi[i].addEventListener("mousedown",()=>{
            text[0].value=car[i].firstElementChild.innerHTML;  
            text[1].value=localStorage.getItem(`${car[i].firstElementChild.innerHTML}`);
       car[i].style.display="none";
    });
    }
})



