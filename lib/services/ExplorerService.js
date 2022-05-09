class ExplorerService {

    static filterByMission(explorers, mission) {

        const explorerByMission = explorers.filer((explorer)  => explorer.mission === mission);
        return explorerByMission;

    }
    
    static getAmountOfExplorersByMission(explorers, mission) {

    }

    static getExplorersUsernamesByMission(explorers, mission) {

    }

}

module.exports = ExplorerService