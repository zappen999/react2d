'use strict';

import { expect } from 'chai';

import Canvas from '../src/components/canvas';


describe('Canvas test', () => {

  it('Should set context', () => {
    let canvas = new Canvas("contextet");
    expect(canvas.ctx).to.equal("contextet");
  });

  it('Should set width', () => {
    let canvas = new Canvas("contextet", 450);
    expect(canvas.width).to.equal(450);
  });

  it('Should set height', () => {
    let canvas = new Canvas("contextet", 450, 200);
    expect(canvas.height).to.equal(200);
  });




});
