

let botaoInicio= ()=>{

    document.getElementById('container-intro').style.display='none';
    document.getElementById('container-choice').style.display='block';
    

}

let botaoVolta=()=>{
    document.getElementById('container-intro').style.display='block';
    document.getElementById('container-choice').style.display='none';

}

let respostaFase=(fase)=>{

    let respostaLoop=false;

    while(!respostaLoop){

        switch(fase){
            case 'fase1-ch':
                let resposta1=prompt("Para onde deseja seguir?\n A: Para o outro lado da vila\n B: Em direção a rua");
                if(resposta1.toUpperCase()=='B'){
                    alert('Chaves confia na dica que a bruxa deu e vai em direção à rua.');
                    window.location.href='../chaves/chaves_fase_2.html';
                    respostaLoop=true;
                    break;
                }
                else if(resposta1.toUpperCase()=='A'){
                    alert('Ao chegar perto do poço que fica do outro lado você percebe uma leve força em suas costas...');                    
                    window.location.href='../chaves/g-over-chaves1.html';
                    respostaLoop=true;
                    break;
                }

                else{
                    alert('Opção Inválida. Tente novamente !');
                    break;
                }
                
            case 'fase2-ch':
                let resposta2=prompt('Você aceita o presente do vendedor ?\n A: Sim,é melhor procurar com a barriga cheia.\n B: Não, preciso encontrá-lo o quanto antes. ');

                if(resposta2.toUpperCase()=='A'){
                    window.location.href='../chaves/chaves_fase_3.html';
                    respostaLoop=true;
                    break;
                }
                else if(resposta2.toUpperCase()=='B'){
                    alert('Você continua andando pela rua e se assusta quando vê uma luz vindo do outro sentido.')
                    window.location.href='../chaves/g-over-chaves2.html';
                    respostaLoop=true;
                    break;
                }

                else{
                    alert('Opção Inválida. Tente novamente !');
                    break;
                }
                
            case 'fase3-ch':
                let resposta3=prompt('O que você faz ? \nA: Sai correndo em direção ao gato e o salva \n B: Espera o gato voltar');
                if(resposta3.toUpperCase()=='A'){
                    window.location.href='../chaves/endgame.html';
                    respostaLoop=true;
                    break;

                }
                else if(resposta3.toUpperCase()='B'){
                    window.location.href='../chaves/g-over-chaves3.html';
                    respostaLoop=true;
                    break;

                }

                else{
                    alert('Opção Inválida. Tente novamente !');
                    break;
                }

            case 'fase1-qo':
                let resposta4=prompt('O que você faz ?\nA: Ignora ele completamente e continua indo para a vendinha.\nB: Compra um sanduíche pra ele e pra você. ');
                if(resposta4.toUpperCase()=='B'){
                    alert('Você deseobedeceu sua mãe comprando o sanduíche ,mas pelo menos seu amigo ficou feliz com vbocê.');
                    window.location.href='../quico/g-over-quico1.html';
                    respostaLoop=true;
                    break;

                }
                else if(resposta4.toUpperCase()=='A'){
                    alert('Chaves irá te deixar em paz...por enquanto.')
                    window.location.href='../quico/quico_fase_2.html';
                    respostaLoop=true;
                    break;

                }

                else{
                    alert('Opção Inválida. Tente novamente !');
                    break;
                }



            case 'fase2-qo':
                let resposta5=prompt('O que você faz ? \nA: Sai correndo em direção ao gato e o salva \n B: Espera o gato voltar');
                if(resposta5.toUpperCase()=='B'){
                    window.location.href='../chaves/endgame.html';
                    respostaLoop=true;
                    break;

                }
                else if(resposta5.toUpperCase()='A'){
                    window.location.href='../chaves/g-over-chaves4.html';
                    respostaLoop=true;
                    break;

                }

                else{
                    alert('Opção Inválida. Tente novamente !');
                    break;
                }


            case 'fase3-qo':
                let resposta6=prompt('O que você faz ? \nA: Sai correndo em direção ao gato e o salva \n B: Espera o gato voltar');
                if(resposta6.toUpperCase()=='B'){
                    window.location.href='../chaves/endgame.html';
                    respostaLoop=true;
                    break;

                }
                else if(resposta6.toUpperCase()='A'){
                    window.location.href='../chaves/g-over-chaves4.html';
                    respostaLoop=true;
                    break;

                }

                else{
                    alert('Opção Inválida. Tente novamente !');
                    break;
                }




                       
                   
        }

    }


}




