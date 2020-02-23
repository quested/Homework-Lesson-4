// Задача 1
var user = {
    name: 'Dima',
    age: 25,
    eyesColor: 'green',
    isAdmin: false,
    role: 2,
}

function copy(user) {
    var newUser = {};
    for (var key in user) {
        newUser[key] = user[key];
    }
    return newUser;
}

var newUser = copy(user);
console.log(copy(user));



// Задача 2
var oneMoreUser = {
    name: 'Dima',
    age: 25,
    eyesColor: 'green',
    isAdmin: false,
    role: 2,
}

function isEquil(user, oneMoreUser) {
    for (var key in user) {
        if (user[key] != oneMoreUser[key]) {
            return false;
        }
    }
    return true;
}

console.log(isEquil(user, oneMoreUser));



// Задача 3
function copyWithModify(user, name, age) {
    var userWithModify = {};
    for (var key in user) {
        userWithModify[key] = user[key];
        if (key === 'name') {
            userWithModify[key] = name;
        }
        if (key === 'age') {
            userWithModify[key] = age; 
        }
    }
    return userWithModify;
}

console.log(copyWithModify(user, 'Max', 20));