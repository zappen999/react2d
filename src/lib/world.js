'use strict';

/**
 * @TODO: Convert this to React component
 */

import Vector from './vector';
import Canvas from './canvas';

export default class World extends Canvas {

  /**
   * Initiate the world with some particles
   */
  constructor (ctx, width, height, particles = []) {
    super(ctx, width, height);
    this._particles = particles;
  }

  /**
   * The world decides what to render in this method
   */
  update () {
    this.particles.map((p) => {
      p.update();
    });
  }

  /**
   * Renders all particles to the world
   * @author Johan Kanefur <johan.kanefur@solidio.se>
   * @param  {object} ctx The 2D context to paint on
   */
  render () {
    // Clear the canvas
    this.clearCanvas();

    // Render all particles in the world
    this.particles.map((p) => {
      p.render(this.ctx);
    });

  }


  get particles() {
    return this._particles;
  }


}
