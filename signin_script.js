
function getSelectedRole() {
    var radioButtons = document.getElementsByName('pilih');

    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            return radioButtons[i].value;
        }
    }
    return null;
}
document.querySelector('form[name="sign_in_form"]').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    var username1='ahmed'
    var password1='ahmed'
    var radioButtons = document.getElementsByName('pilih');
    if (username === username1 && password === password1) {
        if (getSelectedRole()==='admin'){
            window.location.href = './Admin_pages/Manage.html';
        }
        else{
            window.location.href = './home.html';
        }
    } else {
        alert('Incorrect username or password. Please try again.');
    }
});

