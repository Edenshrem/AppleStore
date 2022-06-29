function fetchPage(whatPage) {
    fetch(whatPage)
      .then((response) => response.text())
      .then((data) => (document.getElementById("body").innerHTML = data));
  }

  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function showAdminIphone() {
    fetch("/getiphone")
      .then((response) => response.text())
      .then((data) => {
        var iphoneTypes = JSON.parse(data);
        var myTables = `<table class="styled-table" >
              <tr>
              <th >Name</th>
              <th>Color</th>
              <th>Image</th>
              <th>Price $</th>

              
            
          </tr>
      </table>`;
        iphoneTypes.forEach((element) => {
          myTables += `
                  <table class="styled-table" >
                 
                      <tr>
                          <td><input type="hidden" name="name" value="${element.name}">${element.name}</td>
                          <td><input type="hidden" name="color" value="${element.color}">${element.color}</td>
                         
                          <td ><input type="hidden" name="img" value="${element.img}">
                          <img src="./images/${element.img}.jpg" alt="${element.img}" width="150" height="120">
                          </td>
                          <td> <input type="hidden" name="price" value="${element.price}">${element.price}</td>

                      </tr>
                      </table>
                  
                  `;
        });
        document.getElementById("myphone").innerHTML = myTables;
      });
  }

  function showAdminIwatch() {
    fetch("/getwatch")
      .then((response) => response.text())
      .then((data) => {
        var watchTypes = JSON.parse(data);
        var myTables = `<table class="styled-table">
          <tr>

          <th>Name</th>
          <th>Color</th>
          <th>Image</th>
          <th>Price $</th>

        
      </tr>
  </table>`;
        watchTypes.forEach((element) => {
          myTables += `
        

    <table class="styled-table" >
   
        <tr>
            <td><input type="hidden" name="name" value="${element.name}">${element.name}</td>
            <td><input type="hidden" name="color" value="${element.color}">${element.color}</td>
           
            <td ><input type="hidden" name="img" value="${element.img}">
            <img src="./images/${element.img}.jpg" alt="${element.img}" width="150" height="120">
            </td>
            <td> <input type="hidden" name="price" value="${element.price}">${element.price}</td>


        </tr>

        </table>
                  `;
        });
        document.getElementById("mywatch").innerHTML = myTables;
      });
  }

  function showAdminImac() {
    fetch("/getimac")
      .then((response) => response.text())
      .then((data) => {
        var macTypes = JSON.parse(data);
        var myTables = `<table class="styled-table">
                  <tr>
                  <th>Name</th>
                  <th>Color</th>
                  <th>Image</th>
                  <th>Price $</th>

                
              </tr>
          </table>`;
        macTypes.forEach((element) => {
          myTables += `

                  <table class="styled-table" >
                 
                      <tr>
                          <td><input type="hidden" name="name" value="${element.name}">${element.name}</td>
                          <td><input type="hidden" name="color" value="${element.color}">${element.color}</td>
                         
                          <td ><input type="hidden" name="img" value="${element.img}">
                          <img src="./images/${element.img}.jpg" alt="${element.img}" width="150" height="120">
                          </td>
                          <td> <input type="hidden" name="price" value="${element.price}">${element.price}</td>
                      </tr>

                      </table>
          `;
        });
        document.getElementById("myData").innerHTML = myTables;
      });
  }

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function openFormAddNewIphone() {
    document.getElementById("myFormProduct").style.display = "block";
  }
  
  function openFormAddNewImac() {
    document.getElementById("myFormNewImac").style.display = "block";
  }
  
  function openFormAddNewIwatch() {
    document.getElementById("myFormNewIwatch").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  
  function closeFormAddNewIphone() {
    document.getElementById("myFormProduct").style.display = "none";
  }
  
  function closeFormAddNewImac() {
    document.getElementById("myFormNewImac").style.display = "none";
  }
  
  function closeFormAddNewIwatch() {
    document.getElementById("myFormNewIwatch").style.display = "none";
  }

  


function showOpenOrders() {
    fetch("/getOpenOrders")
      .then((response) => response.text())
      .then((data) => {
        var OrdersTypes = JSON.parse(data);
        var myTables = `<table class="styled-table-openOrders" >
            <tr>
            <th style="width:100px">Name </th>
            <th style="width:100px">Address</th>
            <th style="width:100px">City</th>
            <th style="width:100px">Status</th>
            <th style="width:100px">name Product</th>
            <th style="width:100px">price Product</th>
            <th style="width:100px">quantity Product</th>
            <th style="width:130px">Order date</th>
            <th style="width:100px">Order_close</th>
  
        </tr>
    </table>`;
        OrdersTypes.forEach((element) => {
          myTables += ` <form action ="/getclose">
                    <table class="styled-table-openOrders" >
   
                        <tr>
                            <td style="width:100px">${element.name}</td>
                            <td style="width:130px">${element.address}</td>
                            <td style="width:100px">${element.city}</td>
                            <td style="width:100px">${element.status}</td>
                            <td style="width:100px">${element.nameProduct}</td>
                            <td style="width:100px">${element.priceProduct}</td>
                            <td style="width:100px">${element.quantityProduct}</td>
                            <td style="width:100px">${element.order_date}</td>
                            <td> <button onclick="closeOrder()"> Close order</button></td>
                            
                        </tr>
                     
                        </table>
                        </form>
                    `;
        });
        document.getElementById("OpenOrders").innerHTML = myTables;
      });
  }