function recoverPassword(triplets) {
  // Step 1: Build the graph
  const graph = new Map();
  for (const triplet of triplets) {
    for (let i = 0; i < 2; i++) {
      const from = triplet[i];
      const to = triplet[i + 1];
      if (!graph.has(from)) graph.set(from, new Set());
      graph.get(from).add(to);
    }
  }

  // Step 2: Perform topological sort
  const visited = new Set();
  const result = [];

  function dfs(node) {
    if (visited.has(node)) return;
    visited.add(node);
    const neighbors = graph.get(node) || new Set();
    for (const neighbor of neighbors) {
      dfs(neighbor);
    }
    result.unshift(node);
  }

  for (const node of graph.keys()) {
    dfs(node);
  }

  // Step 3: Concatenate the ordered letters
  return result.join('');
}

// Example usage:
const triplets = [
  ['t', 'u', 'p'],
  ['w', 'h', 'i'],
  ['t', 's', 'u'],
  ['a', 't', 's'],
  ['h', 'a', 'p'],
  ['t', 'i', 's'],
  ['w', 'h', 's'],
];

var recoverSecret = function (triplets) {
  for (var [first] of triplets) {
    console.log(triplets.every((tuple) => tuple.indexOf(first) <= 0));
    if (triplets.every((tuple) => tuple.indexOf(first) <= 0)) {
      // triplets
      //   .filter(([item]) => item == first)
      //   .forEach((tuple) => tuple.shift());
      // const a =
      //   first + recoverSecret(triplets.filter((tuple) => tuple.length > 0));
      // return a;
    }
  }
  return '';
};

console.log(recoverSecret(triplets));
