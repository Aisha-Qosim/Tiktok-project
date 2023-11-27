function clik(){
    let a = document.getElementById('p')
    a.classList.toggle("active")
}

function log(){
    let log = document.getElementById('text')
    log.classList.toggle("hide")
}

// document.getElementById('cont').addEventListener('click', function(){
//     document.getElementById('cont').innerHTML = document.getElementById('capp').innerHTML
// })

function fam(){
    console.log("this is video")
     var x = document.getElementById('cappings');
    if (x.style.display === 'none'){
         x.style.display = 'block'
    }else{
         x.style.display = 'none'
    }

}