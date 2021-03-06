/**
 * Implementation of the Dijkstra algorithm for single source shortest path.
 * Without using Priority Queues.
 *
 * @author Tomas Perez <tom@0x101.com>
 */

const Algorithm = require('../algorithm');
const InvalidParameter = require('../../error/invalid-parameter');

/**
 * @constructor
 */
const Dijkstra = function() {
  Algorithm.call(this);
};

Dijkstra.prototype = new Algorithm();

/**
 * Initializes the computed costs array for a given source and number of elements.
 *
 * e.g. For a graph with 3 vertex, and source as the first node:
 *
 * [0, Infinity, Infinity]
 *
 * @param {Number} n
 * @param {Number} source
 * @return {Array}
 * @method _getComputedCostsArray
 * @private
 */
Dijkstra.prototype._getComputedCostsArray = function(n, source) {

  let i;
  const inf = Number.POSITIVE_INFINITY;
  const computedCosts = [];
  for (i = 0; i < n; i++) {
    computedCosts.push(i === source ? 0 : inf);
  }

  return computedCosts;

};

/**
 *  Dijkstra algorithm only works properly if the distances between nodes are positive.
 *  In the case when we have negative cost edges we need to try a different approach,
 *  for instance the Bellman-Ford algorithm.
 *
 * @param {Array} A Adjacency Matrix
 *  It represents the costs of traversing nodes in the original graph.
 * @param {Number} source Source vertex
 * @return {Array} costs of travelling from the source to the rest of nodes.
 * @method solve
 */
Dijkstra.prototype.solve = function(A, source) {

  if (typeof source === 'undefined') {
    source = 0;
  }

  const numberOfNodes = A.length;

  if (numberOfNodes === 0) {
    throw new InvalidParameter('The graph is empty.');
  }

  let i;

  // Compute the array of computed costs
  const d = this._getComputedCostsArray(numberOfNodes, source);

  // Initialize the set of visited vertices, starting with the source vertex.
  let currentCost;
  let currentNode = source;
  const v = {source: true};
  let visited = 0;

  while (visited < numberOfNodes) {

    for (i = 0; i < numberOfNodes; i++) {
      if (i !== currentNode) {
        currentCost = A[currentNode][i] + d[currentNode];
        if (d[i] > currentCost) {
          d[i] = currentCost;
        }
      }
    }

    // Find the next node to process
    let candidateCost = Number.MAX_VALUE;
    let candidateNode;
    for (i = 0; i < numberOfNodes; i++) {
      currentCost = d[i];
      if (typeof v[i] === 'undefined' && currentCost < candidateCost) {
        candidateCost = currentCost;
        candidateNode = i;
      }
    }

    currentNode = candidateNode;
    v[currentNode] = true;
    visited++;

  }

  return d;

};

module.exports = Dijkstra;
