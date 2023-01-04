class Builder {
    constructor(int) {
        this.int = int;
    }
    plus(...n) {
        this.int = n.reduce((sum, current) => sum + current, this.int)
        return this;
    }
    minus(...n) {
        this.int = n.reduce((sum, current) => sum - current, this.int)
        return this;
    }
    multiply(n) {
        this.int = this.int * n
        return this;
    }
    divide(n) {
        this.int = this.int / n
        return this;
    }
    mod(n) {
        this.int = this.int % n
        return this;
    }
    get() {
        return this;
    }
}
class IntBuilder extends Builder {
    constructor(int) {
        super(int);
    }
}

let intBuilder = new IntBuilder(10)
intBuilder
    .plus(2, 3, 2)
    .minus(1, 2)
    .multiply(2)
    .divide(4)
    .mod(3)
    .get()
console.log(intBuilder)

function Builder2 (str = "") {
        this.str = str;
    }
    Builder2.prototype.plus = function (...str) {
        this.str = str.reduce((sum, current) => sum + current, this.str)
        return this;
    }
    Builder2.prototype.minus = function (n) {
        this.str = this.str.slice(0, -n);
        return this;
    }
    Builder2.prototype.multiply = function (int) {
        this.str = Array(int).fill(this.str).join('')
        return this;
    }
    Builder2.prototype.divide = function (n) {
        let k = Math.floor(this.str.length / n)
        this.str = this.str.slice(0, k)
        return this;
    }
    Builder2.prototype.remove = function (str) {
        this.str = this.str.split(str).join("")
        return this;
    }
    Builder2.prototype.sub = function (from, n) {
        this.str = this.str.substring(from, from + n)
        return this;
    }
    Builder2.prototype.get = function () {
        return this;
    }

function StringBuilder(str = "") {
 Builder2.call(this, str)
    this.str = str;
}
StringBuilder.prototype = Object.create(Builder2.prototype);

let stringBuilder = new StringBuilder('Hello')
stringBuilder
    .plus(' all', '!')
    .minus(4)
    .multiply(3)
    .divide(4)
    .remove('l')
    .sub(1, 1)
    .get()
console.log(stringBuilder)