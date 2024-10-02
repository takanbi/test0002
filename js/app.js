$(document).ready(function(){

    // jQuery methods go here...
    let hamburger = $("#hamburger");
        let navigation = $("#navigation");
        navigation.addClass("hide");
        let isShow = false;
        hamburger.click(()=> {
            showNav();
        }) 
        // {
        //     navigation.removeClass("hide");
        //     navigation.addClass("show");
    
        // }
        console.log(hamburger);
    
        function showNav() {
            if(isShow == false) {
                navigation.addClass("show").removeClass("hide");
                isShow = true;
            }
            
            else if(isShow == true) {
            navigation.addClass("hide").removeClass("show");
            isShow = false;
        }
    }
    
    });
    