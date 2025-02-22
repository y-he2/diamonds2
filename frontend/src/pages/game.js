import React, { useState } from "react";
import Layout from "../blocks/Layout";
import BoardPicker from "../components/BoardPicker";
import GameBoard from "../components/GameBoard";
import HighScoreTable from "../components/HighScoreTable";
import PlayerTable from "../components/PlayerTable";
import RulesModal from "../components/RulesModal";
import SeasonPicker from "../components/SeasonPicker";
import { getCurrentSeason, useBoard } from "../hooks";

export default () => {
  const currentSeason = getCurrentSeason();
  const [boardId, setBoardId] = useState(1);
  const [seasonId, setSeasonId] = useState(0);
  const delay = 2000; // 0.25 s
  const [rulesVisible, setRulesVisible] = useState(false);

  const [rows, bots] = useBoard(boardId, delay);

  const onBoardChange = event => {
    setBoardId(event.target.value);
  };

  const onSeasonChange = event => {
    setSeasonId(event.target.value);
  };

  return (
    <Layout.Game>
      <GameBoard rows={rows} />
      <Layout.Tables>
        <BoardPicker value={boardId} onChange={onBoardChange} />
        <PlayerTable bots={bots} boardId={boardId} />
        <SeasonPicker
          value={seasonId ? seasonId : currentSeason.id}
          onChange={onSeasonChange}
          setRulesVisible={setRulesVisible}
        />
        <HighScoreTable
          seasonId={seasonId ? seasonId : currentSeason.id}
          currentSeasonId={currentSeason.id}
        />
      </Layout.Tables>
      <RulesModal
        visible={rulesVisible}
        setRulesVisible={setRulesVisible}
        seasonId={seasonId ? seasonId : currentSeason.id}
      />
    </Layout.Game>
  );
};
