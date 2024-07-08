const dataPacketTransferGraph = require("../../dfs-graph");

describe("dataPacketTransferGraph", () => {
  it("should return true when there is a path to the destination", () => {
    const network = [
      [1, 1, 1, 1],
      [1, 0, 1, 0],
      [1, 0, 9, 1],
      [1, 1, 1, 1],
    ];
    expect(dataPacketTransferGraph(network)).toBe(true);
  });

  it("should return false when there is no path to the destination", () => {
    const network = [
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 9, 1],
      [1, 1, 1, 1],
    ];
    expect(dataPacketTransferGraph(network)).toBe(false);
  });

  it("should return false for an empty network", () => {
    expect(dataPacketTransferGraph([])).toBe(false);
  });

  it("should return false for a network with no open paths", () => {
    const network = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(dataPacketTransferGraph(network)).toBe(false);
  });

  it("should return true for a single-cell network with the destination", () => {
    const network = [[9]];
    expect(dataPacketTransferGraph(network)).toBe(true);
  });
});
