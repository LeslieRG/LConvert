(function (){
    $("#btnLogin").click(function(e){
        e.preventDefault();
        GoogleAuth();
    })

    function GoogleAuth (){
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            localStorage.setItem("UserName",result.user.email)
            //alert("Logeado")
            location.href = "Convertion.html";
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            alert(errorMessage);
        });
    }

})();