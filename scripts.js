
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
    


    while(respostaLoop==false){

       

        switch(fase){
            case 'fase1-ch':
                let resposta1=prompt('Para onde deseja seguir?\n A: Para o outro lado da vila\n B: Em direção a rua\nResponda com A ou B');
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
                let resposta2=prompt('Você aceita o presente do vendedor ?\n A: Sim,é melhor procurar com a barriga cheia.\n B: Não, preciso encontrá-lo o quanto antes.\nResponda com A ou B');

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
                let resposta3=prompt('O que você faz ? \nA: Sai correndo em direção ao gato e o salva \n B: Espera o gato voltar\nResponda com A ou B');
                if(resposta3.toUpperCase()=='A'){
                    alert('Você sai correndo e salva o gato antes que qualquer mal lhe aconteça.');
                    window.location.href='../chaves/endgame-chaves.html';
                    respostaLoop=true;
                    break;

                }
                else if(resposta3.toUpperCase()=='B'){
                    alert('Ruas movimentadas não são lugares seguros para pequenos animais...');
                    window.location.href='../chaves/g-over-chaves3.html';
                    respostaLoop=true;
                    break;

                }

                else{
                    alert('Opção Inválida. Tente novamente !');
                    break;
                }

            case 'fase1-qo':
                let resposta4=prompt('O que você faz ?\nA: Ignora ele completamente e continua indo para a vendinha.\nB: Compra um sanduíche pra ele e pra você.\nResponda com A ou B');
                if(resposta4.toUpperCase()=='B'){
                    alert('Você desobedeceu sua mãe comprando o sanduíche, mas pelo menos seu amigo ficou feliz com você.');
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
                let resposta5=prompt('Você aceita o desafio ? \nA: Não \n B: Sim\nResponda com A ou B');
                if(resposta5.toUpperCase()=='A'){
                    alert('Não será dessa vez que o chaves terá o que quer...e nem você!')
                    window.location.href='../quico/g-over-quico2.html';
                    respostaLoop=true;
                    break;

                }
                else if(resposta5.toUpperCase()=='B'){
                    alert('Você bate no peito e aceita o desafio.');
                    window.location.href='../quico/quico_fase_3.html';
                    respostaLoop=true;
                    break;

                }

                else{
                    alert('Opção Inválida. Tente novamente !');
                    break;
                }


            case 'fase3-qo':
                let resposta6=prompt('Para onde você chuta ? \nA: Na esquerda no cantinho \n B: No meio do gol\nResponda com A ou B');
                if(resposta6.toUpperCase()=='A'){
                    alert('Chaves fica parado enquanto a bola entra pelo canto.');
                    window.location.href='../quico/endgame-quico.html';
                    respostaLoop=true;
                    break;

                }
                else if(resposta6.toUpperCase()=='B'){
                    alert('A bola bate em cheio no peito de Cahves e volta pra você.');
                    window.location.href='../quico/g-over-quico3.html';
                    respostaLoop=true;
                    break;

                }

                else{
                    alert('Opção Inválida. Tente novamente !');
                    break;
                }

                //seu madruga

                case 'fase1-ma':
                    let resposta7=prompt('Como você irá fugir ?\nA: Pede ajuda para o carteiro Jaiminho para que ele distraia o Seu Barriga.\nB: Pede ajuda do Chaves que está na sua porta conversando com a Chiquinha\nResponda com A ou B');
                    if(resposta7.toUpperCase()=='A'){
                        alert('Acho que você escolheu a pessoa errada para pedir socorro...');
                        window.location.href='../madruga/g-over-madruga1.html';
                        respostaLoop=true;
                        break;
    
                    }
                    else if(resposta7.toUpperCase()=='B'){
                        alert('Chaves aceita te ajudar.');
                        window.location.href='../madruga/madruga_fase_2.html';
                        respostaLoop=true;
                        break;
    
                    }
    
                    else{
                        alert('Opção Inválida. Tente novamente !');
                        break;
                    }

                    case 'fase2-ma':
                        let resposta8=prompt('Você concorda com o acordo? \nA: Concorda,dá um dinheiro no ato.\nB: Já que você mal tem dinheiro, diz que irá dar pra ele depois que resolver tudo\nResponda com A ou B');
                        if(resposta8.toUpperCase()=='A'){
                            alert('Ótima escolha. Agora basta saber o que vocês irão fazer.');
                            window.location.href='../madruga/madruga_fase_3.html';
                            respostaLoop=true;
                            break;
        
                        }
                        else if(resposta8.toUpperCase()=='B'){
                            alert('Chaves fica desconfiado mas aceita o acordo.');
                            window.location.href='../madruga/g-over-madruga2.html';
                            respostaLoop=true;
                            break;
        
                        }
        
                        else{
                            alert('Opção Inválida. Tente novamente !');
                            break;
                        }

                        case 'fase3-ma':
                            let resposta9=prompt('Como você irá fugir ?\nA: Envia Chaves para distrair o cobrador.\nB: Aceita a idéia do garoto e pula rapidamente no barril.\nResponda com A ou B');
                            if(resposta9.toUpperCase()=='B'){
                                alert('Você sai correndo e pula direto no barril.');
                                window.location.href='../madruga/endgame-madruga.html';
                                respostaLoop=true;
                                break;
            
                            }
                            else if(resposta9.toUpperCase()=='A'){
                                alert('Chaves chama a atenção de Sr. Barriga.');
                                window.location.href='../madruga/g-over-madruga3.html';
                                respostaLoop=true;
                                break;
            
                            }
            
                            else{
                                alert('Opção Inválida. Tente novamente !');
                                break;
                            }
                            
                            default:
                                alert('Fase não configurada. Procure o suporte.');
                                break;
                             
                   
        }

    }

}




