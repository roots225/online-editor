export default class ChallengeRemoteDataSource {
  constructor(networkService) {
    this.networkService = networkService;
  }

  async saveChallenge(challenge) {
    const response = await this.networkService.post(
      "challenge",
      challenge.toJson()
    );
  }
}
