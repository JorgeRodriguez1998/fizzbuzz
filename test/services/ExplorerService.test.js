const ExplorerService = require("./../../lib/services/ExplorerService");

describe("ExplorerService Test", () => {
    test("Requirement 1: Calculate all explorers in a mission", () => {
        const explorers = [{ mission: "node" }];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    })
})