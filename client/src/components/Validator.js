
module.exports = {
  validateEmail: email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  },

  validatePassword: password => {
    if(typeof password == "string" && password.length >= 6) {
      return true;
    } else return false;
  },

  validateConfirm: (password, confirm) => {
    if(password === confirm) return true;
    else return false;
  }
}

