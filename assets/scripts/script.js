function generate() {
    var range = document.getElementById("length").value;

    var display = document.getElementById("display");
   
    var password = '';

    var charaters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';

    var charlenght = charaters.length;

    for (i = 0; i < range; i++) {
        password += charaters.charAt(Math.floor(Math.random() * charlenght));
    }
    display.value = password;

    $('#copypsw').click(
        function () {
            var result = document.getElementById('display');
            result.select();
            result.setSelectionRange(0,99999);
            document.execCommand("copy");
            alert("Your Password Copied: "+ '\"'+result.value+ '\"');
            // document.selection.empty();
        }
    );
}

// $('#copypsw').click(
//     function () {
//         password.select();
//         document.execCommand("copy");
//     }
// );

// setInterval(generate,1000);



// $('#copypsw').click(
//     function () {
//        setTimeout(generate,100);
//     }
// );