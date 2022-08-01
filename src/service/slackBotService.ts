interface ISlackBotService {
  PunchIn(): Promise<void>
  PunchOut(): Promise<void>
}

export class SlackBotService implements ISlackBotService {
}
