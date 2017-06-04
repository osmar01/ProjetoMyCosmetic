function adicionarProduto() {
    
    if (!localStorage.getItem("carrinho")) {
        produto = (document.getElementById('nome').value);
        produtoPreco = (document.getElementById('preco').value);
        produtoQuantidade = (document.getElementById('quantidade').value);
        total = produtoQuantidade * produtoPreco;
        //criando carrinho (array) de produtos      
        carrinho = [];
        //incluindo produto no carrinho (array)
        carrinho[3] = produto+"------->";
        carrinho[2] = produtoPreco+"------>";        
        carrinho[1] = produtoQuantidade+"------->";
        carrinho[0] = total+"<br>";
        
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
    } else {
        //-- atualizando carrinho  --//
        //adicionando novo produto ao carrinho
        produto = (document.getElementById('nome').value);
        produtoPreco = (document.getElementById('preco').value);
        produtoQuantidade = (document.getElementById('quantidade').value);
        total = produtoQuantidade * produtoPreco;
        
        //recuperando carrinho sess�o
        carrinho = JSON.parse(localStorage.getItem("carrinho"));
        //recuperando quantidade produtos no carrinho
        qtde = carrinho.length;
        carrinho[qtde+3] = produto+"------->";
        carrinho[qtde+2] = produtoPreco+"------->";
        carrinho[qtde+1] = produtoQuantidade+"------->";
        carrinho[qtde] = total+"<br>";
        //atualizando carrinho da sess�o
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }
}

function listarProdutos() {
    if (!localStorage.getItem("carrinho")) {
        document.getElementById("itensCarrinho").innerHTML = "Carrinho Vazio!!";
    } else {
        itens = "";
        //exibindo informa��es do carrinho
        carrinho = JSON.parse(localStorage.getItem("carrinho"));
        for (i = 0; i < carrinho.length; i++) {
            itens = carrinho[i] + "" + itens;
        }       
        document.getElementById("itensCarrinho").innerHTML = itens;
    }
}

function esvaziarCarrinho() {
    localStorage.removeItem("carrinho");
    listarProdutos();
}


