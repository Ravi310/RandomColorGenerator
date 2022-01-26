document.querySelector("button").onclick = ()=>{
    document.body.style.backgroundColor=`hsl(${Math.floor(Math.random()*360)+1}, ${Math.floor(Math.random()*100)+1}%,  ${Math.floor(Math.random()*50)+1}%)`; 
}