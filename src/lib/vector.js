'use strict';

export default class Vector {
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }

  add (v2) {
    return new Vector(this._x + v2.x, this._y + v2.y);
  }

  addTo (v2) {
    this._x += v2.x;
    this._y += v2.y;
    return this;
  }

  subtract (v2) {
    return new Vector(this._x - v2.x, this._y - v2.y);
  }

  subtractFrom (v2) {
    this._x -= v2.x;
    this._y -= v2.y;
    return this;
  }

  multiply (scalar) {
    return new Vector(this._x * scalar, this._y * scalar);
  }

  multiplyBy (scalar) {
    this._x *= scalar;
    this._y *= scalar;
    return this;
  }

  divide (scalar) {
    return new Vector(this._x / scalar, this._y / scalar);
  }

  divideBy (scalar) {
    this._x /= scalar;
    this._y /= scalar;
    return this;
  }

  distanceTo(v2) {
    return Math.sqrt(Math.pow((this.x - v2.x), 2) + Math.pow((this.y - v2.y), 2));
  }

  copy() {
    return new Vector(this._x, this._y);
  }

  get angle() {
    return Math.atan2(this._y, this._x);
  }

  set angle(angle) {
    let length = this.length;
    this._x = Math.cos(angle) * length;
    this._y = Math.sin(angle) * length;
    return this;
  }

  get length() {
    return Math.sqrt(this._x * this._x + this._y * this._y);
  }

  set length(length) {
    let angle = this.angle;
    this._x = Math.cos(angle) * length;
    this._y = Math.sin(angle) * length;
    return this;
  }

  get x() {
    return this._x;
  }

  set x(x) {
    this._x = x;
  }

  get y() {
    return this._y;
  }

  set y(y) {
    this._y = y;
  }
}
