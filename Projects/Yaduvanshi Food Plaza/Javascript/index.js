
function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    var url = "https://wa.me/919845775520?text="
        + "Name : " + encodeURIComponent(name) + "%0a"
        + "Email : " + encodeURIComponent(email) + "%0a"
        + "Phone : " + encodeURIComponent(phone) + "%0a"
        + "Message : " + encodeURIComponent(message);

    alert('Continue Submitting form')

    window.open(url, '_blank').focus();
}

function resetForm() {
    alert('Continue Resetting form')

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
}
