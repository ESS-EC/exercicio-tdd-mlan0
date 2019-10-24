  function Triangulo(a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  Triangulo.prototype.tipo = function () {
    let ans
    if (this.a == this.b && this.b == this.c) ans = "Equilatero"
    else if (this.a != this.b && this.a != this.c && this.b != this.c) ans = "Escaleno"
    else if (this.a == this.b || this.a == this.c || this.b == this.c) ans = "Isosceles"
    return ans;
  };

  Triangulo.prototype.valido = function () {
    if (this.a + this.b <= this.c && this.a + this.c <= this.b && this.b + this.c <= this.a) return true
    return false
  };

  Triangulo.prototype.naoNull = function () {
    if (this.a != 0 && this.b != 0 && this.c != 0) return true
    return false
  };
  
  Triangulo.prototype.toString = function () {
    return `Lado A ${this.a}, Lado B ${this.b}, Lado C ${this.c}`
  };
  
  
  module.exports = Triangulo;