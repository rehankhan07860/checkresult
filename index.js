
    function isNumberKey(evt) {
        var charCode = (evt.which) ? evt.which : evt.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    }

    function captcha() {
        let a = parseInt(Math.random() * 20);
        let b = parseInt(Math.random() * 20);
        let sum = a + b;
        return [a, b, sum];
    }

    function showCaptcha() {
        let arr = captcha();
        document.getElementById("cap").innerHTML = arr[0] + " + " + arr[1] + " = ";
        return arr;
    }

    let arr = showCaptcha();

    function valiateCaptcha() {
        let input = parseInt(document.getElementById('total').value);
        if(input === arr[2]) {
            alert("Validation is Successful");
        } else {
            alert("Captcha is not match");
        }
    }