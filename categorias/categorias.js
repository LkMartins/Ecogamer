import items from "../_js/produtos.js";
import iniciarcategorias from "../_js/script.js";

console.log(iniciarcategorias);

// Pes mobile
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
    </div>
    `;
})


//Csgo
const itemscsgo = items.filter(val => val.jogo === "csgo");
itemscsgo.map((val)=>{
    ctprodutos.innerHTML+= `
    
    <div class="item">
        <div class="item-img" style="background-image: url('`+val.img+`')"></div>
        
        <h5 class=>`+val.nome+` - R$ `+val.valoruni+`</h5>
        <div class="item-text">
        <p class=>`+val.descricao+`</p>
        </div>
        
        <a key="`+val.id+`" name="calabresa" href="https://api.whatsapp.com/send?1=pt_BR&phone=13974258464&text=Oii,%20vim%20pelo%20site" class="linkadd">Entrar em contato</a>
    </div>
    `;
})