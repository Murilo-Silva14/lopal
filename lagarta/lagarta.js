async function lagarta(){
    let lagarta = "()()()(00)";
    let lagartaG = "( )( )( )(0w0) ";
    let espaco = "  ";

    function sleep(ms){
        return new Promise( resolve => setTimeout(resolve, ms))
    }

    for(let i = 0; i < 40; i++){
        lagarta = espaco + lagarta
        console.log(lagarta);
        await sleep (500);
        console.clear();

        
        lagartaG = espaco + lagartaG;   
        console.log(lagartaG);
        await sleep (500);
        console.clear();
    }
}

