

let botaoInicio= ()=>{

    document.getElementById('container-intro').style.display='none';
    document.getElementById('container-choice').style.display='block';
    

}

let botaoVolta=()=>{
    document.getElementById('container-intro').style.display='block';
    document.getElementById('container-choice').style.display='none';

}

let respostaFase=(fase)=>{

    let resposta=prompt("Para onde deseja seguir?");

    switch(fase){
        case 'fase1':
            console.log('entrou no case1');
    }

   
  

}

