function fetchPage(whatPage) {
    fetch(whatPage)
        .then((response) => response.text())
        .then((data) => (document.getElementById("body").innerHTML = data));
}

// //Mac products
// function changegrey() {
//     document.getElementById("macPicture").src = "images/apple grey.webp";
// }
// function changepink() {
//     document.getElementById("macPicture").src = "images/imac pink.webp";
// }
// function changepurple() {
//     document.getElementById("macPicture").src = "images/imac purple.webp";
// }
// function changeorange() {
//     document.getElementById("macPicture").src = "images/ipad orange.jpeg";
// }

// //iphone products
// function changegreen() {
//     document.getElementById("iphonePic").src = "images/iphonegreen1.jpg";
// }
// function changered() {
//     document.getElementById("iphonePic").src = "images/iphone red1.jpg";
// }
// function changewhite() {
//     document.getElementById("iphonePic").src = "images/iphone white.jpg";
// }
// function changeblack() {
//     document.getElementById("iphonePic").src = "images/iphoneblack.webp";
// }

// //watch products
// function changeappleb() {
//     document.getElementById("apWatch").src = "images/watch_black.jpg";
// }
// function changeapplew() {
//     document.getElementById("apWatch").src = "images/watch_white.jpg";
// }


function up(max) {
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) + 1;
    if (document.getElementById("myNumber").value >= parseInt(max)) {
        document.getElementById("myNumber").value = max;
    }
}
function down(min) {
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) - 1;
    if (document.getElementById("myNumber").value <= parseInt(min)) {
        document.getElementById("myNumber").value = min;
    }
}


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


function showIphone() {
    fetch("/getiphone")
        .then((response) => response.text())
        .then((data) => {
            var iphoneTypes = JSON.parse(data);
            var myTables = `<table class="styled-table">
            <tr>
            <th></th>
            <th>Name</th>
            <th>Color</th>
            <th>Image</th>
            <th>Price $</th>
          
        </tr>
    </table>`;
            iphoneTypes.forEach((element) => {
                myTables += `
                <table class="styled-table">

                    <tr>
                    <td><label><input type="radio" id='regular' name="phone"></label></td>
                        <td>${element.name}</td>
                        <td>${element.color}</td>
                       
                        <td>
                        <img src="./images/${element.img}.jpg" alt="${element.img}" width="150" height="120">
                        </td>
                        <td>${element.price}</td>
                    </tr>
                    </table>
                `;
            });
            document.getElementById("myphone").innerHTML = myTables;
        });
}



function showIwatch() {
    fetch("/getwatch")
        .then((response) => response.text())
        .then((data) => {
            var watchTypes = JSON.parse(data);
            var myTables = `<table class="styled-table">
        <tr>
        <th></th>
        <th>Name</th>
        <th>Color</th>
        <th>Image</th>
        <th>Price $</th>
      
    </tr>
</table>`;
            watchTypes.forEach((element) => {
                myTables += `
                <table class="styled-table">

                    <tr>
                    <td><label><input type="radio" id='regular' name="watch"></label></td>
                        <td>${element.name}</td>
                        <td>${element.color}</td>
                        <td>
                        <img src="./images/${element.img}.jpg" alt="${element.image}" width="150" height="120">
                        </td>
                        <td>${element.price}</td>
                    </tr>
                    </table>
                `;
            });
            document.getElementById("mywatch").innerHTML = myTables;
        });
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function showImac() {
    fetch("/getimac")
        .then((response) => response.text())
        .then((data) => {
            var macTypes = JSON.parse(data);
            var myTables = `<table class="styled-table">
                <tr>
                <th></th>
                <th>Name</th>
                <th>Color</th>
                <th>Image</th>
                <th>Price $</th>
              
            </tr>
        </table>`;
            macTypes.forEach((element) => {
                myTables += `
        <table class="styled-table">
                <td><label><input type="radio" id='regular' name="mac"></label></td>
                <td>${element.name}</td>
                <td>${element.color}</td>
                <td>
                <img src="./images/${element.img}.webp" alt="${element.image}" width="150" height="120">
                </td>
                <td>${element.price}</td>
            </tr>
            </table>
        `;
            });
            document.getElementById("myData").innerHTML = myTables;
        });
}