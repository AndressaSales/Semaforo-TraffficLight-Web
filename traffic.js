function red(){
    var cor = document.getElementById('red');
    cor.style.backgroundColor = "red"
    cor.style.boxShadow = "0 0 20px red, 0 0 40px red, 0 0 60px red"

    setTimeout(function(){
        cor.style.backgroundColor = 'rgb(104, 29, 29)'
        cor.style.boxShadow = 'none'
        green()
    }, 10000)
}   
function yellow(){
    var cor = document.getElementById('yellow');


    var apagar = setInterval(function(){
        cor.style.backgroundColor = "yellow"
        cor.style.boxShadow = " 0 0 20px yellow, 0 0 40px yellow, 0 0 60px yellow" 
        setTimeout(function(){
            cor.style.backgroundColor = ' rgb(126, 126, 27)'
            cor.style.boxShadow = 'none' 
        }, 500)
    }, 1000)


    setTimeout(function(){
        clearInterval(apagar)
        cor.style.backgroundColor = ' rgb(126, 126, 27)'
        cor.style.boxShadow = 'none'
        red()
    }, 5000)
}
function green(){
    var cor = document.getElementById('green');
    cor.style.backgroundColor = "hsl(120, 91%, 63%)"
    cor.style.boxShadow = "0 0 20px hsl(120, 91%, 63%), 0 0 40px hsl(120, 91%, 63%), 0 0 50px hsl(120, 91%, 63%)"
    setTimeout(function(){
        cor.style.backgroundColor =" hsl(120, 62%, 19%)"
        cor.style.boxShadow = 'none'
        yellow()
    }, 10000)
    
}
function vermelho(){
        var men = document.getElementById('red-2');
        men.style.color = 'red'
        men.style.boxShadow = '0 0 20px red, 0 0 40px red, 0 0 60px red'

        setTimeout(function(){
            men.style.color = 'rgb(104, 29, 29)'
            men.style.boxShadow = 'none'
            verde()
        }, 15000)
    }
function verde(){
    var mem = document.getElementById('aa');
    mem.style.color = 'hsl(120, 91%, 63%)'
    mem.style.boxShadow = '0 0 20px hsl(120, 91%, 63%), 0 0 40px hsl(120, 91%, 63%), 0 0 60px hsl(120, 91%, 63%)'
    
    setTimeout(function(){
        mem.style.color = 'hsl(120, 62%, 19%)'
        mem.style.boxShadow = 'none'
        vermelho()
    }, 10200)
}
green();
vermelho();