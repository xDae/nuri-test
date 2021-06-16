import { Resolvers } from '../__generated__/resolver-types'

const resolvers: Resolvers = {
  Query: {
    blocks: async (_: any, __: any, { dataSources }: any) =>
      dataSources.blockchainApi.blocks(),
    rawBlock: async (_: any, { hash }: any, { dataSources }: any) =>
      dataSources.blockchainApi.rawBlock(hash),
  },
}

export default resolvers
