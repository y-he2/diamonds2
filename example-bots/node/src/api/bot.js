import { Bot } from "../models/bot";
import { client } from "./client";
import { logResponseError } from "./utils";

export const registerBot = async (inputName, inputEmail, password, team) => {
  try {
    const response = await client.post("/bots", {
      email: inputEmail,
      name: inputName,
      password: password,
      team: team,
    });
    console.log("response:", response);
    const { name, email, id } = response.data;
    return new Bot(name, email, id);
  } catch (error) {
    logResponseError(error);
  }
};

export const getBot = async (botToken) => {
  try {
    const { data } = await client.get(`/bots/${botToken}`);
    const { name, email, id } = data;

    return new Bot(name, email, id);
  } catch (error) {
    logResponseError(error);
  }
};
