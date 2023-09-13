// Question 1
function askPassword(ok, fail) {
    let password = prompt("Password?", "");
    if (password == "rockstar") {
        ok.apply(user);
    } else {
        fail.apply(user);
    }
}

let user = {
    name: 'John',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },
};

askPassword(user.loginOk, user.loginFail);

// Question 2

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
        this.students.forEach(function(student) {
            console.log(this.title + ": " + student);
        }.bind(this));
    }
};
group.showList();