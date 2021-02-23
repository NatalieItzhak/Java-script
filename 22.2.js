function show_img(){
    if (document.getElementById("check").checked){
    document.getElementById("img").innerHTML="<img src='https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'>";
    } if (document.getElementById("check").checked != true) {
        document.getElementById("img").innerHTML="";
    }
   }