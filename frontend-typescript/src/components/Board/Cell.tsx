import { FC, memo } from 'react';
import {
  GameObjectType,
  IBase,
  IBot,
  IDiamond,
  IGameObject,
} from '../../hooks/useBoard';
import {
  base,
  botBase,
  botDiamond,
  diamond,
  diamondRed,
  redButton,
  robot,
  teleporter,
  wall,
} from '../images';

type CellProps = {
  gameObject: IGameObject | null;
  id: string;
};

type GameObjectMap = {
  [key in GameObjectType]: string;
};

function getGameCharacter(gameObject: IGameObject) {
  const goImgMap: GameObjectMap = {
    Teleporter: teleporter,
    Wall: wall,
    DiamondButtonGameObject: redButton,
    DiamondGameObject: diamond,
    DiamondGameObjectDiamondGameObject: diamond,
    BotGameObject: robot,
    BaseGameObject: base,
    BotGameObjectBaseGameObject: botBase,
    BaseGameObjectBotGameObject: botBase,
    DiamondGameObjectBotGameObject: botDiamond,
    BotGameObjectDiamondGameObject: botDiamond,
    TeleportGameObject: teleporter,
  };

  if (
    gameObject.type === 'DiamondGameObject' &&
    (gameObject.object as IDiamond)
  ) {
    const diamond = gameObject.object as IDiamond;
    if (diamond.points === 2) {
      return diamondRed;
    }
  }

  return goImgMap[gameObject.type as GameObjectType];
}

function getCharacterName(gameObject: IGameObject) {
  if (gameObject.object as IBase) {
    const base = gameObject.object as IBase;
    return base.name;
  } else if (gameObject.object as IBot) {
    const bot = gameObject.object as IBot;
    return bot.name;
  }
  return '';
}

export const Cell: FC<CellProps> = memo((props) => {
  const { gameObject, id } = props;

  if (gameObject && (gameObject.type as GameObjectType)) {
    return (
      <div
        key={id}
        className="border-l w-full aspect-square flex items-center justify-center "
      >
        <div>{getCharacterName(gameObject)}</div>
        <img src={getGameCharacter(gameObject)} className=" w-3/4 h-3/4" />
      </div>
    );
  } else {
    return (
      <div
        key={id}
        className="border-l justify-center w-full aspect-square"
      ></div>
    );
  }
});
