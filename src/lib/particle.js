'use strict';

/**
 * @TODO: Convert this to React component
 */

import Vector from './vector';

export default class Particle {

  constructor (position, velocity) {
    this._position = position;
    this._velocity = velocity;
    this._gravity = new Vector(0, 0); // No gravity by default
    //this._friction = new Vector(0, 0); // No friction by default
    this._radius = 20;
    this._friction = 1;
  }

  update () {

    // Set the friction in the opposite direction of the velocity
    //this.friction.angle = this.velocity.angle;


    // Apply the friction
    //if (this.velocity.length > this.friction.length) {
    //  this.velocity.subtractFrom(this.friction);
  //} else {
      //this.velocity.length = 0;
    //}
    //
    this.velocity.multiplyBy(this.friction);

    // Apply the gravity to the velocity
    this.velocity.addTo(this.gravity);

    // Apply the velocity to the position
    this.position.addTo(this.velocity);
  }

  // External forces
  accelerate (force) {
    this.velocity.addTo(force);
  }

  /**
   * Renders a ball to the context if not overridden
   * @author Johan Kanefur <johan.kanefur@solidio.se>
   * @param  {object} ctx The 2D context to paint on
   */
  render (ctx) {
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.beginPath();
    ctx.arc(
      this.position.x,
      this.position.y,
      this.radius,
      0,
      Math.PI * 2
    );
    ctx.fill();
    ctx.stroke();
  }

  toString () {
    return `Particle at (${this.position.x}, ${this.position.y})`;
  }


  /**
   * Getters and setters
   */
  get position () {
    return this._position;
  }

  set position (position) {
    this._position = position;
  }

  get velocity () {
    return this._velocity;
  }

  set velocity (velocity) {
    this._velocity = velocity;
  }

  get gravity () {
    return this._gravity;
  }

  set gravity (gravity) {
    this._gravity = gravity;
  }

  get friction () {
    return this._friction;
  }

  set friction (friction) {
    this._friction = friction;
  }

  get radius () {
    return this._radius;
  }

  set radius (radius) {
    this._radius = radius;
  }
}
