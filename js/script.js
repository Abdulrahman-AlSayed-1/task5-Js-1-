var products= document.querySelectorAll(".offcanvas-body a")
var info = document.querySelector("info");
var close=document.querySelector(".btn-close")
var main=document.querySelector("main")
var parent=document.querySelector("#parent")
var child=document.querySelector("#child")
var buy=document.getElementById("buy-btn")
var purchases=document.getElementById("purchases")
var total_btn=document.getElementById("total-price")
var total_price_section=document.querySelector("total-price")
var total_price=0;

products.forEach(
    function (item){
        function show(){

            close.click();
            main.classList.add("d-none")
            info.classList.remove("d-none");

            switch(item.id){
            case "one":

                child.children[0].innerHTML="Sony WH-1000XM5";
                child.children[2].innerHTML="244$";
                 child.children[2].dataset.number="244"
                child.children[3].children[0].innerHTML="349$";
                parent.children[1].children[0].src="images/figure-1.webp"
                break

            case "two":
            
                child.children[0].innerHTML="Bose QuietComfort 45";
                child.children[2].innerHTML="230$";
                 child.children[2].dataset.number="230"
                child.children[3].children[0].innerHTML="329$";
                parent.children[1].children[0].src="images/figure-2.jpg"
                break 

            case "three":

              child.children[0].innerHTML="Apple AirPods Max";
              child.children[2].innerHTML="384$";
               child.children[2].dataset.number="384"
              child.children[3].children[0].innerHTML="549$";
              parent.children[1].children[0].src="images/figure-3.jpg"
              break 
            
            case "four":

              child.children[0].innerHTML="Sennheiser Momentum 4";
              child.children[2].innerHTML="244$";
               child.children[2].dataset.number="244"
              child.children[3].children[0].innerHTML="349$";
              parent.children[1].children[0].src="images/figure-4.jpg"
              break 

            case "five":
                
              child.children[0].innerHTML="Bowers & Wilkins PX7";
              child.children[2].innerHTML="209$";
               child.children[2].dataset.number="209"
              child.children[3].children[0].innerHTML="299$";
              parent.children[1].children[0].src="images/figure-5.webp"
              break 

            case "six":
                
              child.children[0].innerHTML="Jabra Elite 85h";
              child.children[2].innerHTML="174$";
               child.children[2].dataset.number="174"
              child.children[3].children[0].innerHTML="249$";
              parent.children[1].children[0].src="images/figure-6.jpg"
              break 
            
            case "seven":

              child.children[0].innerHTML="Bang & Olufsen Beoplay H95";
              child.children[2].innerHTML="210$";
              child.children[2].dataset.number="210"
              child.children[3].children[0].innerHTML="300$";
              parent.children[1].children[0].src="images/figure-7.webp"
              break 

            case "eight":

                child.children[0].innerHTML="AKG N700NC M2";
                child.children[2].innerHTML="180$";
                child.children[2].dataset.number="180"
                child.children[3].children[0].innerHTML="250$";
                parent.children[1].children[0].src="images/figure-8.jpg"
                break 

            case "nine":

                child.children[0].innerHTML="Microsoft Surface Headphones 2";
                child.children[2].innerHTML="200$";
                child.children[2].dataset.number="200"
                child.children[3].children[0].innerHTML="270$";
                parent.children[1].children[0].src="images/figure-9.webp"
                break 

            case "ten":
             
              child.children[0].innerHTML="Plantronics BackBeat Go 810";
              child.children[2].innerHTML="90$";
              child.children[2].dataset.number="90"
              child.children[3].children[0].innerHTML="130$";
              parent.children[1].children[0].src="images/figure-10.jpg"
              break 

            default:
                break  

            }    
        
        }
        item.addEventListener("click", show);
     
    
 }


)
var br1=document.createElement("br")
var br2=document.createElement("br")
var dollar=document.createElement("h1")

// adding element by javascript 
dollar.classList.add("display-6")
dollar.classList.add("text-success")
dollar.classList.add("d-inline")
dollar.textContent="$"
total_price_section.children[0].children[1].children[0].classList.add("d-inline")
buy.addEventListener("click", function(){
  
    total_btn.type="button"
    purchases.innerHTML+=child.children[0].textContent 
    purchases.appendChild(br1)
    purchases.appendChild(br2)
    total_price+= +(child.children[2].dataset.number)

}
)

total_btn.addEventListener("click", function(){
    total_price_section.children[0].children[1].children[0].innerHTML=total_price  ;
    total_price_section.children[0].children[1].children[0].appendChild(dollar)
    close.click()
    info.classList.add("d-none")
    total_price_section.classList.remove("d-none");
}
)

