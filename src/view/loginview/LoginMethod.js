// Function for registration.

function Register(username, password) {
  localStorage.setItem("username", username)
  localStorage.setItem("password", password)
    if (username != null && password != null) {
        alert('You are registered.');
    }
    else {
        return null;
    }
}

module.exports = Register
