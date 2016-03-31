'use strict';

/**
 * Determines the current window size
 * @author Johan Kanefur <johan.kanefur@solidio.se>
 * @return {Array} Array with [width, height]
 */
module.exports.getWindowSize = () => {
  let w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;

  return [x, y];
};
