module.exports = function(data, productpage) {
  productpage = productpage.replace(/{ProductName}/g, data.productName);
  productpage = productpage.replace(/{From}/g, data.from);
  productpage = productpage.replace(/{Quantity}/g, data.quantity);
  productpage = productpage.replace(/{Price}/g, data.price);
  productpage = productpage.replace(/{Nutrients}/g, data.nutrients);
  productpage = productpage.replace(/{Description}/g, data.description);
  return productpage;
};
