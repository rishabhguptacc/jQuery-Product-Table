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

    if (isExists(id)) {
      $(".warning").css("display", "block");
    } else products.push(product);
    
    // clear();   

    display();

    // clr(); 
    
    $("#product_list").on("click", ".edit", function () {
        console.log("edit clicked");
        console.log(id)

        var pid = $(this).data('pid');

        // ******  Below Lines are equally working fine as we are using it on the Function called pEdit(pid)********

        // var product = getProduct(pid);

        // $("#product_sku").val(product.id) ;
        // $("#product_name").val(product.name) ;
        // $("#product_price").val(product.price) ;
        // $("#product_quantity").val(product.qty) ;

       pEdit(pid);
    });
  });
  //   console.log("out of add button");

  $("#product_list").on("click", ".delete", function () {
    console.log("delete clicked");
    pDel(id);
  });
});






function isExists(id) {
  for (var i = 0; i < products.length; i++) {
    if (products[i].id == id) {
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
                            <a href='#' class='edit' data-pid='"+products[i].id+"'>Edit</a>\
                            <a href='#' class='delete' data-pid='"+products[i].id+"'>Delete</a>\
                        </td>\
                    </tr>\
                    ";
  } 
  html += "</table>";
  // var tbl = $("table tbody");
  $("#product_list").html(html);
}


// function clr(){
//     $("#product_sku").val() ="";
//             $("#product_name").val() ="";
//             $("#product_price").val() = "";
//             $("#product_quantity").val() = "";
// }


function pEdit(pid){
    // var pid = $(this).data('pid');

    var product = getProduct(pid);

  
    $("#product_sku").val(product.id) ;
    $("#product_name").val(product.name) ;
    $("#product_price").val(product.price) ;
    $("#product_quantity").val(product.qty) ;
    // $(".warning").css("display", "block");
    $('#add_product').css("display", "none");
    $('#update_product').css("display", "block");
}

function getProduct(pid){
  for (var i=0 ; i<products.length; i++){
    if(pid == products[i].id ){
      return products[i];
    }
  }
  
  
}