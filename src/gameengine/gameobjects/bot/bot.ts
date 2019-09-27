import { IPosition } from "src/common/interfaces/position.interface";
import { AbstractGameObject } from "../abstract-game-object";

export interface BoardBot {
  base: IPosition;
  position: IPosition;
  diamonds: number;
  timeJoined: Date;
  millisecondsLeft: number;
  score: number;
  botId: string;
  nextMoveAvailableAt: Date;
}

export class BotGameObject extends AbstractGameObject {
  base: IPosition;
  diamonds: number = 0;
  timeJoined: Date;
  millisecondsLeft: number;
  inventorySize: number;
  score: number = 0;
  name: string;
  nextMoveAvailableAt: Date;

  get properties() {
    return {
      diamonds: this.diamonds,
      score: this.score,
      nextMoveAvailableAt: this.nextMoveAvailableAt,
      name: this.name,
      inventorySize: this.inventorySize,
      timeJoined: this.timeJoined,
      base: this.base,
    };
  }
}
