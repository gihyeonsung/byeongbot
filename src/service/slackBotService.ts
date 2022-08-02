interface ISlackBotService {
  PunchIn(): Promise<void>
  PunchOut(): Promise<void>
}

export class SlackBotService implements ISlackBotService {
  PunchIn(): Promise<void> {
    throw new Error("Method not implemented.")
  }
  PunchOut(): Promise<void> {
    throw new Error("Method not implemented.")
  }
}
