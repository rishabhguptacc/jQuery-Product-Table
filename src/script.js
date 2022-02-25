var products = [];

$(document).ready(function () {
  $("#add_product").click(function () {
    // console.log("clicked addbtn");

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
      $(".success").css("display", "none");            //  to be done later ... use defined functions instead
    } else products.push(product);

    display();
    clr();
    $(".success").css("display", "block");
  });

  // 

  $("#product_list").on("click", ".edit", function () {
    console.log("edit clicked");
    console.log($(this).data("pid"));

    var pid = $(this).data("pid");

    // ******  Below Lines are equally working fine as we are using it on the Function called pEdit(pid)********

                                        // var product = getProduct(pid);

                                        // $("#product_sku").val(product.id) ;
                                        // $("#product_name").val(product.name) ;
                                        // $("#product_price").val(product.price) ;
                                        // $("#product_quantity").val(product.qty) ;

    pEdit(pid);
  });




  //   console.log("out of add button");

                        // $("#product_list").on("click", ".delete", function () {
                        //   console.log("delete clicked");
                        //   var pid = $(this).data("pid");
                        //   pDel(pid);
                        // });

  $("#update_product").click(function () {
    console.log("clicked updatebtn");

    var id = $("#product_sku").val();
    var name = $("#product_name").val();
    var price = $("#product_price").val();
    var qty = $("#product_quantity").val();

    var product = {};

    product.id = id;
    product.name = name;
    product.price = price;
    product.qty = qty;

    // console.log(product);

    updatePTable(product);

    $("#product_sku").prop("disabled", false);
    display();
    clr();
    $("#add_product").css("display", "block");
    $("#update_product").css("display", "none");
  });


  $('#product_list').on('click','.delete',function(){
    console.log("delete clicked");
    var pid = $(this).data('pid');

    pDel(pid);

    display();
  });




});


function pDel(pid){
 // var product = getProduct(pid);

  for(var i=0; i< products.length ; i++)
  {
    if(pid == products[i].id){
      console.log(pid);
      console.log(products[i].id);
      products.splice(i,1);
    }
  }
}







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
                            <a href='#' class='edit' data-pid='" +
      products[i].id +
      "'>Edit</a>\
                            <a href='#' class='delete' data-pid='" +
      products[i].id +
      "'>Delete</a>\
                        </td>\
                    </tr>\
                    ";
  }
  html += "</table>";
  // var tbl = $("table tbody");
  $("#product_list").html(html);
}




// ***** Function to clear the values of Input block on the webpage.
function clr(){
  $('label input').val("");
}





//  ****** Funtion to make "Edit" link responsive and put on the values of the product
//  ****** to the input places those have to be edited. 
//  ****** Toggles the "Add Product" button to the "Update Product".
function pEdit(pid) {
  // var pid = $(this).data('pid');

  var product = getProduct(pid);

  $("#product_sku").val(product.id);
  $("#product_sku").prop("disabled", true);
  $("#product_name").val(product.name);
  $("#product_price").val(product.price);
  $("#product_quantity").val(product.qty);

  $("#add_product").css("display", "none");
  $("#update_product").css("display", "block");
}

function getProduct(pid) {
  for (var i = 0; i < products.length; i++) {
    if (pid == products[i].id) {
      return products[i];
    }
  }
}



// ****** Updates the value of the product to that has been edited, 
// ****** makes the updates on the Product Table.
function updatePTable(pproduct) {
  console.log(pproduct.id);
  
  for (var i = 0; i < products.length; i++) {
    if (pproduct.id == products[i].id) {
      // console.log(products[i] + " " + pproduct);
      products[i] = pproduct;
    }
  }
}





function Success(){
  $(".success").css("display", "block");
  $(".error").css("display", "none");
  $(".warning").css("display", "none");
}


function Error(){
  $(".error").css("display", "block");
  $(".success").css("display", "none");
  $(".warning").css("display", "none");
}

function warning(){
  $(".warning").css("display", "block");
  $(".error").css("display", "none");
  $(".success").css("display", "none");
}
