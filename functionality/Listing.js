
module.exports = function(Data, Card) {

    var ProductList = "";
    
    for(let i = 0; i < Data.length; ++i){
        
        let data = Data[i];

        let CardNew = Card;

        CardNew = CardNew.replace(/{Image}/g, data.image);
        CardNew = CardNew.replace(/{Name}/g, data.productName);

        if(data.organic === false){
            CardNew = CardNew.replace(/{No_Organic}/g, "not-organic");
        }
        else{
            CardNew = CardNew.replace(/{No_Organic}/g, "");
        }
        
        CardNew = CardNew.replace(/{Quantity}/g, data.quantity);
        CardNew = CardNew.replace(/{Price}/g, data.price);

        const route = "/product?id=" + data.id;
        CardNew = CardNew.replace(/{Prod_Detail}/g, route);
        
        ProductList += CardNew;

    }

    return ProductList;

}

// module.exports()
