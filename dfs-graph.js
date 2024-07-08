function dataPacketTransferGraph(network) {
  if (!network || !network.length || !network[0].length) {
    return false;
  }

  const rows = network.length;
  const cols = network[0].length;
  const stack = [[0, 0]];
  const directions = [
    [0, 1], // right
    [1, 0], // down
    [0, -1], // left
    [-1, 0], // up
  ];
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  while (stack.length > 0) {
    const [r, c] = stack.pop();

    // Check if we've reached the destination
    if (network[r][c] === 9) {
      return true;
    }

    // Mark the cell as visited
    visited[r][c] = true;

    // Explore neighbors
    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      // Check if the neighbor is within bounds and not visited and not a wall
      if (
        nr >= 0 &&
        nr < rows &&
        nc >= 0 &&
        nc < cols &&
        !visited[nr][nc] &&
        network[nr][nc] !== 0
      ) {
        stack.push([nr, nc]);
      }
    }
  }

  return false;
}

module.exports = dataPacketTransferGraph;

// const network = [
//   [1, 1, 1, 1],
//   [1, 0, 1, 0],
//   [1, 0, 9, 1],
//   [1, 1, 1, 1],
// ];

// console.log(dataPacketTransfer(network));
