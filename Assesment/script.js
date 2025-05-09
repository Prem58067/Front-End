const container = document.querySelector(".container")
      pwshowhide = document.querySelector(".showhidePw")
      pwshowhide = document.querySelector(".password")


      pwshowhide.foreach(eyeicon =>{
        eyeicon.addeventlistener("click", ()=>{
            pwfields.foreach(pwfield =>{
                if(pwfield.type ==="password"){
                    pwfield.type = "text";

                    pwshowhide.foreach(icon =>{
                        pwshowhide.classlist.replace("","uil-eye");
                    })
                }else{
                    pwfield.type = "password";
                }
                }
            })
        })
      })
