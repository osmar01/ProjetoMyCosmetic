function adicionarProduto() {
    
    if (!localStorage.getItem("carrinho")) {
        produto = (document.getElementById('nome').value);
        //criando carrinho (array) de produtos      
        carrinho = [];
        //incluindo produto no carrinho (array)
        carrinho[0] = produto;
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
    } else {
        //-- atualizando carrinho  --//
        //adicionando novo produto ao carrinho
        produto = (document.getElementById('nome').value);
        //recuperando carrinho sessão
        carrinho = JSON.parse(localStorage.getItem("carrinho"));
        //recuperando quantidade produtos no carrinho
        qtde = carrinho.length;
        carrinho[qtde] = produto;
        //atualizando carrinho da sessão
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }
}

function listarProdutos() {
    if (!localStorage.getItem("carrinho")) {
        document.getElementById("itensCarrinho").innerHTML = "Carrinho Vazio!!";
    } else {
        itens = "";
        //exibindo informações do carrinho
        carrinho = JSON.parse(localStorage.getItem("carrinho"));
        for (i = 0; i < carrinho.length; i++) {
            itens = carrinho[i] + "<br>" + itens;
        }
        document.getElementById("itensCarrinho").innerHTML = itens;
    }
}

function esvaziarCarrinho() {
    localStorage.removeItem("carrinho");
    listarProdutos();
}


