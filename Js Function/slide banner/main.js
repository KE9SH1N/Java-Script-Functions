
            var bannerStatus = 1;
            var bannerTimer = 4000;

            window.onload = function(){
                bannerLoop();
            }

            var startBannerLoop = setInterval(function(){
                bannerLoop();
            },bannerTimer);
            
            function bannerLoop(){

                // 1st image status
                if(bannerStatus === 1){

                    document.getElementById("image_banner2").style.opacity = "0";
                    setTimeout(function(){

                        //all 3 images stacked by z index 

                        document.getElementById("image_banner1").style.right = "0px";
                        document.getElementById("image_banner1").style.zIndex = "1000";

                        document.getElementById("image_banner2").style.right = "-1200px";
                        document.getElementById("image_banner2").style.zIndex = "1500";

                        document.getElementById("image_banner3").style.right = "1200px";
                        document.getElementById("image_banner3").style.zIndex = "800";

                    },500);
                    setTimeout(function(){
                        document.getElementById("image_banner2").style.opacity = "1";

                    },1000);



                    bannerStatus=2;
                }

                else if(bannerStatus === 2){

                    // 2nd image status

                    document.getElementById("image_banner3").style.opacity = "0";
                    setTimeout(function(){
                        
                        //all 3 images stacked by z index 

                        document.getElementById("image_banner2").style.right = "0px";
                        document.getElementById("image_banner2").style.zIndex = "1000";

                        document.getElementById("image_banner3").style.right = "-1200px";
                        document.getElementById("image_banner3").style.zIndex = "1500";

                        document.getElementById("image_banner1").style.right = "1200px";
                        document.getElementById("image_banner1").style.zIndex = "800";

                    },500);
                    setTimeout(function(){
                        document.getElementById("image_banner3").style.opacity = "1";

                    },1000);




                    bannerStatus=3;
                }

                else if(bannerStatus === 3){
                    
                    // 3rd image status

                    document.getElementById("image_banner1").style.opacity = "0";
                    setTimeout(function(){
                        
                        //all 3 images stacked by z index
                        
                        document.getElementById("image_banner3").style.right = "0px";
                        document.getElementById("image_banner3").style.zIndex = "1000";

                        document.getElementById("image_banner1").style.right = "-1200px";
                        document.getElementById("image_banner1").style.zIndex = "1500";

                        document.getElementById("image_banner2").style.right = "1200px";
                        document.getElementById("image_banner2").style.zIndex = "800";

                    },500);
                    setTimeout(function(){
                        document.getElementById("image_banner1").style.opacity = "1";

                    },1000);

                    bannerStatus=1;
                }
        }