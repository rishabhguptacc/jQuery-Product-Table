var products = [];

$(document).ready(function () {
  $("#add_product").click(function () {
    console.log("clicked addbtn");

    var id = $("#product_sku").val();
    var name = $("#product_name").val();
    var price = $("#product_price").val();
    var qty = $("#product_quantity").val();

    var product = {};

    product.id = id;
    product.name = name;
    product.price = price;
    product.qty = qty;

    if(isExists(id)){
        $('.warning').css("display","block");
    }
    else
    products.push(product);

    
    
    // clear();    
    display();
  });

  $(".edit").click(function () {});
});

function isExists(id){
    for(var i=0; i<products.length; i++){
        if(products[i].id == id){
            return true;
        }
    }
    return false;
}

function display() {
  var html = "";

  html +=
    "<table>\
                <tr>\
                    <th>SKU</th>\
                    <th>Name</th>\
                    <th>Price</th>\
                    <th>Quantity</th>\
                    <th>Action</th>\
                <tr>";

  for (var i = 0; i < products.length; i++) {
    html +=
      "<tr>\
                        <td>" +
      products[i].id +
      "</td>\
                        <td>" +
      products[i].name +
      "</td>\
                        <td>" +
      products[i].price +
      "</td>\
                        <td>" +
      products[i].qty +
      "</td>\
                        <td>\
                            <a href='#' class='edit'>Edit</a>\
                            <a href='#' class='delete'>Delete</a>\
                        </td>\
                    </tr>\
                    ";
  }
  html += "</table>";
 // var tbl = $("table tbody");
  $('#product_list').html(html);
}
