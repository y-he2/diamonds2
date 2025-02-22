import { IHighscore } from "./highscore";
import { IRecording } from "./recording";
import { ITeam } from "./team";

export interface IBot {
  id: string;
  name: string;
  email: string;
  createTimeStamp: Date;
  updateTimeStamp: Date;
  password: string;
  teamId: string;

  team?: ITeam;
  highscores?: IHighscore[];
  recordings?: IRecording[];
}

export type INewBot = Omit<
  IBot,
  | "id"
  | "createTimeStamp"
  | "updateTimeStamp"
  | "team"
  | "highscores"
  | "recordings"
>;
export type IUpdateBot = Omit<
  IBot,
  "id" | "team" | "highscores" | "recordings"
>;
