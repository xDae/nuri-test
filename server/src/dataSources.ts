import { RESTDataSource } from 'apollo-datasource-rest'

class BlockchainApi extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://blockchain.info/'
  }

  async blocks(time: number = Date.now()) {
    return this.get(`/blocks/${time}?format=json`)
  }

  async rawBlock(hash: string) {
    return this.get(`/rawblock/${hash}`)
  }
}

export default BlockchainApi
