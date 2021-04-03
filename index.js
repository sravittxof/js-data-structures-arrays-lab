// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push(name);
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
    drivers.pop();
}

function destructivelyRemoveFirstDriver() {
    drivers.shift();
}

function appendDriver(name) {
    const driverAppended = [...drivers, name];
    return driverAppended;
}

function prependDriver(name) {
    const driverPrepended = [name, ...drivers];
    return driverPrepended;
}

function removeLastDriver() {
    const lastDriverRemoved = [...drivers];
    lastDriverRemoved.pop();
    return lastDriverRemoved;
}

function removeFirstDriver() {
    const firstDriverRemoved = [...drivers];
    firstDriverRemoved.shift();
    return firstDriverRemoved;
}