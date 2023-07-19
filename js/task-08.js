const formElem = document.querySelector(".login-form");
formElem.addEventListener("submit", fooSubmit);

function fooSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields");
    }
    const objResult = {};
    objResult.Email = email.value;
    objResult.Password = password.value;
    console.log(objResult);

    event.currentTarget.reset();
}
