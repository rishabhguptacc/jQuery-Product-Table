var products = [];

$(document).ready(function () {
  $("#add_product").click(function () {
    // console.log("clicked addbtn");

    var id = $("#product_sku").val();
    var nam = $("#product_name").val();
    var price = $("#product_price").val();
    var qty = $("#product_quantity").val();

    var product = {};

    

    product.id = id;
    product.nam = nam;
    product.price = price;
    product.qty = qty;

    if(inputCheck(id, nam, price, qty)){
      if (isExists(id)) {
      Warning();
      } 
      else {
        products.push(product);
        Success();
        $('#product_sku').css("border-color","black");
        $('#product_name').css("border-color","black");
        $('#product_price').css("border-color","black");
        $('#product_quantity').css("border-color","black");
      }
    }

    

    display();
    clr();
    
  });

  // 

  $("#product_list").on("click", ".edit", function () {
    console.log("edit clicked");
    console.log($(this).data("pid"));

    var pid = $(this).data("pid");

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
    var nam = $("#product_name").val();
    var price = $("#product_price").val();
    var qty = $("#product_quantity").val();

    var product = {};

    product.id = id;
    product.nam = nam;
    product.price = price;
    product.qty = qty;

    // console.log(product);

    updatePTable(product);

    $("#product_sku").prop("disabled", false);
    display();
    clr();
    $("#add_product").css("display", "block");
    $("#update_product").css("display", "none");
    Update();
  });


  $('#product_list').on('click','.delete',function(){
    // console.log("delete clicked");
    var pid = $(this).data('pid');

    if (confirm("Are you sure of deleting the Product?")) {
       pDel(pid);
    } else {
      Cross();
    }

    

    display();
  });


Cross();

});


function inputCheck(id, nam, price, qty){

  (id=="")?($('#product_sku').css("border-color","red")):($('#product_sku').css("border-color","black"));
  (nam=="")?($('#product_name').css("border-color","red")):($('#product_name').css("border-color","black"));
  (price=="")?($('#product_price').css("border-color","red")):($('#product_price').css("border-color","black"));
  (qty=="")?($('#product_quantity').css("border-color","red")):($('#product_quantity').css("border-color","black"));
  
  // if(id==""){
  //   $('#product_sku').css("border-color","red");
  //   // return false;
  // }
  // if(nam==""){
  //   $('#product_name').css("border-color","red");
  //   // return false;
  // }
  // if(price==""){
  //   $('#product_price').css("border-color","red");
  //   // return false;
  // }
  // if(qty==""){
  //   $('#product_quantity').css("border-color","red");
  //   // return false;
  // }
  if(id=="" || nam=="" ||price=="" || qty==""){
      // console.log("inside inputCheck()");
      // $('#product_sku').css("border-color","red");
      // $('#product_name').css("border-color","red");
      // $('#product_price').css("border-color","red");
      // $('#product_quantity').css("border-color","red");
      Error();
      return false;
    }
  else return true;

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
      products[i].nam +
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
  $("#product_name").val(product.nam);
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
  Delete();
}






function Success(){
  $(".success").css("display", "block");
  $(".update").css("display", "none");
  $(".Delete").css("display", "none");
  $(".error").css("display", "none");
  $(".warning").css("display", "none");
}

function Update(){
  $(".success").css("display", "none");
  $(".update").css("display", "block");
  $(".Delete").css("display", "none");
  $(".error").css("display", "none");
  $(".warning").css("display", "none");
}

function Delete(){
  $(".success").css("display", "none");
  $(".update").css("display", "none");
  $(".Delete").css("display", "block");
  $(".error").css("display", "none");
  $(".warning").css("display", "none");
}

function Error(){
  $(".error").css("display", "block");
  $(".update").css("display", "none");
  $(".Delete").css("display", "none");
  $(".success").css("display", "none");
  $(".warning").css("display", "none");
}

function Warning(){
  $(".warning").css("display", "block");
  $(".update").css("display", "none");
  $(".Delete").css("display", "none");
  $(".error").css("display", "none");
  $(".success").css("display", "none");
}

function Cross(){

  $('.close').click(function(){
    // console.log("close'X' clicked")
    $(".warning").css("display", "none");
    $(".update").css("display", "none");
    $(".Delete").css("display", "none");
    $(".error").css("display", "none");
    $(".success").css("display", "none");
  });

}

