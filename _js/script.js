//Pegando os produtos pelo arquivo js. através do import 
import items from "./produtos.js";
console.log(items);



// Iniciar a loja geral
function inicializarLoja(){
    var containerProdutos = document.getElementById('produtos');

    items.map((val)=>{
       containerProdutos.innerHTML+= `
        
        <div class="item">
            <div class="item-img" style="background-image: url('`+val.img+`')"></div>
            
            <h5 class=>`+val.nome+` - R$ `+val.valoruni+`</h5>
            <div class="item-text">
            <p class=>`+val.descricao+`</p>
            </div>
            
            <a key="`+val.id+`" name="calabresa" href="https://api.whatsapp.com/send?1=pt_BR&phone=5513997946566&text=Oii,%20vim%20pelo%20site" class="linkadd">Entrar em contato</a>
        </div>
       `;
    })
}

inicializarLoja();


// Seção de categorias 

var iniciarcategorias = function lojact(){
const menuitem = document.querySelector(".jogo1");
const menuitem2 = document.querySelector(".jogo2");

    menuitem.addEventListener("click", function() {
        window.location="categorias/categorias.html";
        var ctprodutos = document.getElementById('ctprodutos');

        const itemspesmobile = items.filter(val => val.jogo === "pesmobile");
        itemspesmobile.map((val)=>{
            ctprodutos.innerHTML+= `
                <div class="item">
                    <div class="item-img" style="background-image: url('`+val.img+`')"></div>
                    
                    <h5 class=>`+val.nome+` - R$ `+val.valoruni+`</h5>
                    <div class="item-text">
                    <p class=>`+val.descricao+`</p>
                    </div>
                    
                    <a key="`+val.id+`" name="calabresa" href="https://api.whatsapp.com/send?1=pt_BR&phone=13974258464&text=Oii,%20vim%20pelo%20site" class="linkadd">Entrar em contato</a>
                </div>`
            ;

        })
    })

    //Csgo

    menuitem2.addEventListener("click", function() {
        window.location="categorias/categorias.html";
        var ctprodutos = document.getElementById('ctprodutos');

        const itemspesmobile = items.filter(val => val.jogo === "csgo");
        itemspesmobile.map((val)=>{
            ctprodutos.innerHTML+= `
                <div class="item">
                    <div class="item-img" style="background-image: url('`+val.img+`')"></div>
                    
                    <h5 class=>`+val.nome+` - R$ `+val.valoruni+`</h5>
                    <div class="item-text">
                    <p class=>`+val.descricao+`</p>
                    </div>
                    
                    <a key="`+val.id+`" name="calabresa" href="https://api.whatsapp.com/send?1=pt_BR&phone=13974258464&text=Oii,%20vim%20pelo%20site" class="linkadd">Entrar em contato</a>
                </div>`
            ;

        })
    })
}

export default iniciarcategorias;













// Pegando os produtos do json
/*
async function fetchProdutos(url) {
    const res = await fetch(url);
    const jsonBody = await res.json();
    const listaobj = JSON.stringify(jsonBody, null, 4)
}

const requisicao = fetchProdutos("_js/produtos.json");
*/