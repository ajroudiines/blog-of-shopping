//hello page//
function Hello() {
    window.location.href = "loginuser.html";
}

//index page / inscription//
function testpassword() {

    var mp = document.getElementById("pwd").value;
    var test;
    if (mp.length >= 8) {
        test = true;
    }
    else {
        test = false;
    }
    console.log(test);
    return test;
}

function testage() {
    var test;
    var today = new Date();
    var bd = document.getElementById("Birth").value;

    var birthDate = new Date(bd);
    var yourage = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        yourage--;
    }

    console.log(yourage + "ans");

    if (yourage >= 18) {
        test = true;
    } else {
        test = false;
    }

    return test;
}

function valide() {

    if (testage()) {
        if (testpassword()) {
            var user = {
                Id: document.getElementById("CIN").value,
                Firstname: document.getElementById("Fname").value,
                Lastname: document.getElementById("Lname").value,
                Birthdate: document.getElementById("Birth").value,
                Email: document.getElementById("Email").value,
                Password: document.getElementById("pwd").value
            }
            var tabUsers = JSON.parse(localStorage.getItem("tabUsers")) || [];
            tabUsers.push(user);
            localStorage.setItem("tabUsers", JSON.stringify(tabUsers));



        } else {
            document.getElementById("para1").innerHTML = ("vous devez entre au moins 8 caracteres !!");
        }

    } else {
        document.getElementById("para").innerHTML = ("vous etes mineur !!")
    }
}

//visibilite //

function openForm() {
    document.getElementById("loginForm").style.display = "none";

    document.getElementById("registerForm").style.display = "block";

}
function openForm2() {

    document.getElementById("registerForm").style.display = "none";

    document.getElementById("loginForm").style.display = "block";

}

//index page / login//

function connexion() {
    var test = false;
    var login = document.getElementById("log").value;
    var password = document.getElementById("pass").value;
    var tab = JSON.parse(localStorage.getItem("tabUsers"));
    for (let i = 0; i < tab.length; i++) {
        if ((tab[i].Id == login) && (tab[i].Password == password)) {
            localStorage.setItem("idUser", tab[i].Id);
            test = true;
            break;
        }

    }
    if (test == true) {
        window.location.href = "hellouser.html";
    }
    else {
        document.getElementById("message").innerHTML = ("vérifier vos information");
    }

}

//AjoutArticle//

function AddArticle() {
    var size = document.querySelectorAll('input[name="gridCheck"]:checked');

    var sizes = [];

    for (var x = 0, l = size.length; x < l; x++) {
        sizes.push(size[x].value);
    }

    var str = sizes.join(', ');
    var image=document.getElementById("exampleFormControlFile1").value;

       
var test = image.replace("fakepath", "Users/Ines/Desktop/projet/img2");
        
        
    
  
    console.log(test);

    var Article = {
        id:new Date().valueOf(),
        NameofArticle: document.getElementById("inputArticleName").value,
        Sale: document.getElementById("inputSale").value,
        size:str,
        image:test

    }
    console.log(Article);
    var type = document.querySelector('input[name="gridRadios"]:checked').value;
   // console.log("gfcvbhjkl");
    var tabArticle = JSON.parse(localStorage.getItem(type)) || [];
    tabArticle.push(Article);
    localStorage.setItem(type, JSON.stringify(tabArticle));
  //  document.getElementById("Card").innerHTML+= Article;

}

//login blogger //

function connexion2() {
    var test = false;
    var login = document.getElementById("log1").value;
    var password = document.getElementById("pass1").value;
    var tab = JSON.parse(localStorage.getItem("tabloggers"));
    for (let i = 0; i < tab.length; i++) {
        if ((tab[i].Id == login) && (tab[i].Password == password)) {
            test = true;
            localStorage.setItem("idBlog", tab[i].Id);
            break;
        }

    }
    if (test == true) {
        window.location.href = "helloblogger.html";
    }
    else {
        document.getElementById("message").innerHTML = ("vérifier vos information");
    }

}
//logout user //

function refresh() {
    localStorage.setItem("idUser", "");


}

//logout bloggers

function refresh2() {
    localStorage.setItem("idBlog", "");

    


}

//affichage all dresses//

function AllDresses() {
    var html=``;
    var Dresses = JSON.parse(localStorage.getItem("Dresses"));
    for (let i = 0; i < Dresses.length; i++) {
    console.log(Dresses);
         html += `<div class="card text-center  col-md-4">
         
         <div class="card-body">
         <img  class="card-img-top w-50" src="${Dresses[i].image}">
           <h5 class="card-title">${Dresses[i].NameofArticle}</h5>
           <p class="card-text"> ${Dresses[i].Sale}</p>
           <p class="card-text">${Dresses[i].size}</p>
          
         </div>
       </div>`
       
        
    }
    document.getElementById("Card").innerHTML += html;

    
}

//affichage all tops//

function AllTops() {
    var html=``;
    var Tops = JSON.parse(localStorage.getItem("Tops"));
    for (let i = 0; i < Tops.length; i++) {
    
         html += `<div class="card text-center  col-md-4">
         
         <div class="card-body">
         <img  class="card-img-top w-50" src="${Tops[i].image}">
           <h5 class="card-text">${Tops[i].NameofArticle}</h5>
           <p class="card-text"> ${Tops[i].Sale}</p>
           <p class="card-text">${Tops[i].size}</p>
         </div>
       </div>`
       
        
    }
    document.getElementById("Card1").innerHTML += html;

    
}
//affichage all bottoms//

function AllBottoms() {
    var html=``;
    var Bottoms = JSON.parse(localStorage.getItem("Bottoms"));
    for (let i = 0; i < Bottoms.length; i++) {
    
         html += `<div class="card text-center  col-md-4">
         
         <div class="card-body">
         <img  class="card-img-top w-50" src="${Bottoms[i].image}">
           <h5 class="card-text">${Bottoms[i].NameofArticle}</h5>
           <p class="card-text"> ${Bottoms[i].Sale}</p>
           <p class="card-text">${Bottoms[i].size}</p>
         </div>
       </div>`
       
        
    }
    document.getElementById("Card2").innerHTML += html;

    
}

//affichage all Accessories//

function AllAccessories() {
    var html=``;
    var Accessories = JSON.parse(localStorage.getItem("Accessories"));
    for (let i = 0; i < Accessories.length; i++) {
    
         html += `<div class="card text-center  col-md-4" >
         
         <div class="card-body " >
         <img  class="card-img-top w-50" src="${Accessories[i].image}">
           <h5 class="card-tittle">${Accessories[i].NameofArticle}</h5>
           <p class="card-text"> ${Accessories[i].Sale}</p>
           <p class="card-text">${Accessories[i].size}</p>
         </div>
       </div>`
       
        
    }
    document.getElementById("Card3").innerHTML += html;

    
}

//affichage all home&gifts//

function AllHome() {
    var html=``;
    var Home = JSON.parse(localStorage.getItem("Home & Gifts"));
    for (let i = 0; i < Home.length; i++) {
    
         html += `<div class="card text-center  col-md-4" >
         
         <div class="card-body " >
         <img  class="card-img-top w-50" src="${Home[i].image}">
           <h5 class="card-tittle">${Home[i].NameofArticle}</h5>
           <p class="card-text"> ${Home[i].Sale}</p>
           <p class="card-text">${Home[i].size}</p>
         </div>
       </div>`
       
        
    }
    document.getElementById("Card4").innerHTML += html;

    
}


//affichage all Outwear//

function AllOutwear() {
    var html=``;
    var Outwear = JSON.parse(localStorage.getItem("Outerwear"));
    for (let i = 0; i < Outwear.length; i++) {
    
         html += `<div class="card text-center  col-md-4" >
         
         <div class="card-body " >
         <img  class="card-img-top w-50" src="${Outwear[i].image}">
           <h5 class="card-tittle">${Outwear[i].NameofArticle}</h5>
           <p class="card-text"> ${Outwear[i].Sale}</p>
           <p class="card-text">${Outwear[i].size}</p>
         </div>
       </div>`
       
        
    }
    document.getElementById("Card5").innerHTML += html;

    
}

//affichage all Shoes//

function AllShoes() {
    var html=``;
    var Shoes = JSON.parse(localStorage.getItem("Shoes"));
    for (let i = 0; i < Shoes.length; i++) {
    
         html += `<div class="card text-center  col-md-4" >
         
         <div class="card-body " >
         <img  class="card-img-top w-50" src="${Shoes[i].image}">
           <h5 class="card-tittle">${Shoes[i].NameofArticle}</h5>
           <p class="card-text"> ${Shoes[i].Sale}</p>
           <p class="card-text">${Shoes[i].size}</p>
         </div>
       </div>`
       
        
    }
    document.getElementById("Card6").innerHTML += html;

    
}

//affichage all Swim//

function AllSwim() {
    var html=``;
    var Swims = JSON.parse(localStorage.getItem("Swim"));
    for (let i = 0; i < Swims.length; i++) {
    
         html += `
         <div class="card text-center col-md-4 ">
         
         <div class="card-body " >
         <img  class="card-img-top w-50" src="${Swims[i].image}">
           <h5 class="card-tittle">${Swims[i].NameofArticle}</h5>
           <p class="card-text"> ${Swims[i].Sale}</p>
           <p class="card-text">${Swims[i].size}</p>
         </div>
       </div>`
       
        
    }
    document.getElementById("Card7").innerHTML += html;

    
}




