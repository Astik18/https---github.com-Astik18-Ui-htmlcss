const codes= document.querySelectorAll('.code')

codes[0].focus()

codes.array.forEach((code ,idx) => {
    code.addEventListener('keydown' ,(e) => {
        if(e.key >=0 && e.key<=9){
            code[idx].value=''
            setTimeout(()  => code[index+1].focus(),10)
        }
        else if(e.key ==='Backsapce'){
            setTimeout(()  => codes[idx-1].focus(),10)
        }
    })
    
})