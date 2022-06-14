const carBtn = document.getElementById("car-btn");
const lawnBtn = document.getElementById("lawn-btn");
const weedsBtn = document.getElementById("weeds-btn");
const sendBtn = document.getElementById("send-btn");
let summary = document.getElementById("summary");
let amountFinal = document.getElementById("amount-final");

//Array que armazena os objetos
let services = [];

let amount = 0;

//Botões que invocam a função que armazena os objetos no array
//e passam seus atributos
carBtn.addEventListener("click", function(){
    setObjToArray("Wash Car", 10);
});

lawnBtn.addEventListener("click", function(){
    setObjToArray("Mow Lawn", 20);
});

weedsBtn.addEventListener("click", function(){
    setObjToArray("Pull Weeds", 30);
});

sendBtn.addEventListener("click", function(){
    clearServices();
    amount = 0;
    render();
});

//Função que recebe dois parâmetros, verifica se o array está vazio
//ou se possui algum parâmetro já armazenado igual ao recebido, e armazena
//os valores no array, além de acrescentar o valor
function setObjToArray(name, price){
    
    //Verifica se o array está vazio
    if(services[0] === undefined){
        services.push({
            name: name,
            price: price
        });

        setAmount(name);
    } else {
        //Limita o tamanho do array para 3 elementos e o percorre para
        //verificar se o elemento a ser inserido já está armazenado
        if(services.length < 3){
            
            ////////// NOTA /////////
            //////Refazer com///////
            ////arrow functions////
            //////////////////////
            
            let hasEqual = false;

            for(let i = 0; i < services.length; i++){
                if(name === services[i].name){
                    hasEqual = true;
                    break;
                }
            }   
            
            if (hasEqual === false){
                services.push({
                    name: name,
                    price: price
                });
                
                setAmount(name);
            } 
        }
    }

    console.log(services)
    
    render();
}
 
//Função que renderiza os itens do array e atualiza o amount
function render(){
    let renderTemplate = "";

    for(let i = 0; i < services.length; i++){
        renderTemplate += ` 
            <div class="item">
                <span>${services[i].name}</span>    
                <span><span style="color: #D5D4D8;">$</span>${services[i].price}</span>
            </div>            
            `
    }

    summary.innerHTML = renderTemplate;
    amountFinal.textContent = "$" + amount;
}

//Função que esvazia o array e limpa a área do amount
function clearServices() {
    services.splice(0,services.length)
    
    console.log(services)
}

//Função que verifica quanto deve ser adicionado ao amount
function setAmount(name){
    if(name === "Wash Car"){
        amount += 10;
    } else if(name === "Mow Lawn"){
        amount += 20;
    } else if(name === "Pull Weeds"){
        amount += 30;
    }
}