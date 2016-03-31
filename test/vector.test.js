'use strict';

import {expect} from 'chai';

import Vector from '../src/components/vector';


describe('Vector test', () => {
  it('Should instantiate the vector with initial values', () => {
    let v1 = new Vector(3, 5);
    expect(v1.x).to.equal(3);
    expect(v1.y).to.equal(5);
  });

  it('Should set X and Y', () => {
    let v1 = new Vector(12, 23);
    v1.x = 1;
    v1.y = 4;

    expect(v1.x).to.equal(1);
    expect(v1.y).to.equal(4);
  });

  it('Should add two vectors together', () => {
    let v1 = new Vector(3, 5);
    let v2 = new Vector(4, 7);
    let v3 = v1.add(v2);
    expect(v3.x).to.equal(7);
    expect(v3.y).to.equal(12);
  });

  it('Should add a vector to the current vector', () => {
    let v1 = new Vector(3, 5);
    let v2 = new Vector(4, 7);
    v1.addTo(v2);
    expect(v1.x).to.equal(7);
    expect(v1.y).to.equal(12);
  });

  it('Should subtract two vectors', () => {
    let v1 = new Vector(3, 5);
    let v2 = new Vector(4, 7);
    let v3 = v1.subtract(v2);
    expect(v3.x).to.equal(-1);
    expect(v3.y).to.equal(-2);
  });

  it('Should subtract a vector from the current vector', () => {
    let v1 = new Vector(6, 4);
    let v2 = new Vector(4, 5);
    v1.subtractFrom(v2);
    expect(v1.x).to.equal(2);
    expect(v1.y).to.equal(-1);
  });

  it('Should multiply a vector by a scalar', () => {
    let v1 = new Vector(2, 5);
    let v2 = v1.multiply(5);
    expect(v2.x).to.equal(10);
    expect(v2.y).to.equal(25);
  });

  it('Should multiply the current vector by a scalar', () => {
    let v1 = new Vector(2, 5);
    v1.multiplyBy(5);
    expect(v1.x).to.equal(10);
    expect(v1.y).to.equal(25);
  });

  it('Should divide a vector by a scalar', () => {
    let v1 = new Vector(10, 25);
    let v2 = v1.divide(5);
    expect(v2.x).to.equal(2);
    expect(v2.y).to.equal(5);
  });

  it('Should divide the current vector by a scalar', () => {
    let v1 = new Vector(10, 25);
    v1.divideBy(5);
    expect(v1.x).to.equal(2);
    expect(v1.y).to.equal(5);
  });

  it('Should calculate the distance between two vectors', () => {
    let v1 = new Vector(0, 0);
    let v2 = new Vector(100, 0);

    expect(v1.distanceTo(v2)).to.equal(100);
  });


});
