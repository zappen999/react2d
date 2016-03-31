'use strict';

/**
 * @TODO: Convert this to React component
 */


import Particle from './particle';
import Vector from './vector';

export default class Map extends Particle {

  constructor (position, velocity, image, attractionPoint) {
    super(position, velocity);

    this._image = image;
    this._attractionPoint = attractionPoint; // The point to attract to
    this._k = 0.15;
    this._startingPoint = position.copy();
  }

  update () {
    // Make the map attract to a set point
    var distance = this.attractionPoint.subtract(this.position);
    var springForce = distance.multiply(this._k);

    // Calculate the travel-progress (distance travelled)
    var distanceLeft = this.position.distanceTo(this.attractionPoint);
    var totalTravelDistance = this._startingPoint.distanceTo(this.attractionPoint);
    let percent = distanceLeft / totalTravelDistance * 100 || 0;

    // Convert the percentage to radians to get a cosinus wave
    let transition = percent * 1.8; // 0-100% to 0-180
    transition *= (Math.PI / 180); // Convert to radians

    this.velocity.addTo(springForce);
    //this.radius = (Math.cos(transition) * 0.6) + 3;

    super.update();


    //console.log("Radius är ", this.radius);
    //console.log("Percent är ", percent);

    this.radius = (Math.cos(transition) * 15) + 50;
  }



  // External forces
  // here we could add the 'panning' feature later on.
  accelerate (force) {
    this.velocity.addTo(force);
  }


  /**
  * @todo here we override the parent (particle) class
  * @todo draw from center of image
  * @todo add zooming functionality
  * @author Johan Kanefur <johan.kanefur@solidio.se>
  * @param  {object} ctx The 2D context to paint on
  render (ctx) {
    // Calculate the new width and height based on zoom
    var width = this._image.width * this._radius;
    var height = this._image.height * this._radius;

    ctx.drawImage(
      this.image,
      this.position.x - (width / 2), // Center the image on x
      this.position.y - (height / 2), // Center the image on y
      width,
      height
    );
  }

  */
  toString() {
    return super.toString() + ' (Map)';
  }


  /**
  * Getters and setters
  */

  get image() {
    return this._image;
  }

  set image(image) {
    this._image = image;
  }

  get attractionPoint() {
    return this._attractionPoint;
  }

  set attractionPoint(atp) {
    // Set the new attraction point
    this._attractionPoint = atp;

    // Save current position to know where to start from
    this._startingPoint = this.position.copy();
  }

}
