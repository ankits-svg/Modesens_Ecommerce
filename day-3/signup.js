let form = document.querySelector("form");
    let userData = JSON.parse(localStorage.getItem("userData")) || [];
    form.addEventListener("submit", myfun)
    function myfun(event) {
        event.preventDefault();
        let data = {
            
            email: form.email.value,
            password: form.pass.value,
            sub: form.submit.value,
            
            // sub: form.sub.value,
        }

        if (checkMail(data.email) === true) {
            userData.push(data);
            localStorage.setItem("userData", JSON.stringify(userData));
            window.location.href="login.html"
        } else {
            alert("Some error occured or OTP limit exceeded.");
            alert("Account Already Exists");
        }
    }

    function checkMail(email) {
        let filtered = userData.filter(function (elem) {
            return email === elem.email;
        })
        if (filtered.length > 0) {
            return false;
        } else {
            return true;
        }
    }