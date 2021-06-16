import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Block = {
  __typename?: 'Block'
  hash: Scalars['ID']
  height: Scalars['Int']
  time: Scalars['Int']
  block_index: Scalars['Int']
}

export type Query = {
  __typename?: 'Query'
  blocks?: Maybe<Array<Maybe<Block>>>
  rawBlock?: Maybe<RawBlock>
}

export type QueryRawBlockArgs = {
  hash: Scalars['ID']
}

export type RawBlock = {
  __typename?: 'RawBlock'
  hash: Scalars['ID']
  ver: Scalars['Int']
  prev_block?: Maybe<Scalars['String']>
  mrkl_root: Scalars['String']
  time: Scalars['Int']
  bits: Scalars['Int']
  fee: Scalars['Int']
  nonce?: Maybe<Scalars['Int']>
  n_tx: Scalars['Int']
  size: Scalars['Int']
  block_index: Scalars['Int']
  main_chain: Scalars['Boolean']
  height: Scalars['Int']
  weight: Scalars['Int']
  next_block?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type GetRawBlockQueryVariables = Exact<{
  hash: Scalars['ID']
}>

export type GetRawBlockQuery = { __typename?: 'Query' } & {
  rawBlock?: Maybe<
    { __typename?: 'RawBlock' } & Pick<
      RawBlock,
      | 'hash'
      | 'time'
      | 'mrkl_root'
      | 'bits'
      | 'fee'
      | 'n_tx'
      | 'size'
      | 'block_index'
      | 'height'
      | 'weight'
      | 'prev_block'
    >
  >
}

export type GetBlocksQueryVariables = Exact<{ [key: string]: never }>

export type GetBlocksQuery = { __typename?: 'Query' } & {
  blocks?: Maybe<
    Array<
      Maybe<{ __typename?: 'Block' } & Pick<Block, 'hash' | 'time' | 'height'>>
    >
  >
}

export const GetRawBlockDocument = gql`
  query getRawBlock($hash: ID!) {
    rawBlock(hash: $hash) {
      hash
      time
      mrkl_root
      bits
      fee
      n_tx
      size
      block_index
      height
      weight
      prev_block
    }
  }
`

/**
 * __useGetRawBlockQuery__
 *
 * To run a query within a React component, call `useGetRawBlockQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRawBlockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRawBlockQuery({
 *   variables: {
 *      hash: // value for 'hash'
 *   },
 * });
 */
export function useGetRawBlockQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetRawBlockQuery,
    GetRawBlockQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetRawBlockQuery, GetRawBlockQueryVariables>(
    GetRawBlockDocument,
    options
  )
}
export function useGetRawBlockLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRawBlockQuery,
    GetRawBlockQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetRawBlockQuery, GetRawBlockQueryVariables>(
    GetRawBlockDocument,
    options
  )
}
export type GetRawBlockQueryHookResult = ReturnType<typeof useGetRawBlockQuery>
export type GetRawBlockLazyQueryHookResult = ReturnType<
  typeof useGetRawBlockLazyQuery
>
export type GetRawBlockQueryResult = Apollo.QueryResult<
  GetRawBlockQuery,
  GetRawBlockQueryVariables
>
export const GetBlocksDocument = gql`
  query getBlocks {
    blocks {
      hash
      time
      height
    }
  }
`

/**
 * __useGetBlocksQuery__
 *
 * To run a query within a React component, call `useGetBlocksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlocksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlocksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBlocksQuery(
  baseOptions?: Apollo.QueryHookOptions<GetBlocksQuery, GetBlocksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetBlocksQuery, GetBlocksQueryVariables>(
    GetBlocksDocument,
    options
  )
}
export function useGetBlocksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBlocksQuery,
    GetBlocksQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetBlocksQuery, GetBlocksQueryVariables>(
    GetBlocksDocument,
    options
  )
}
export type GetBlocksQueryHookResult = ReturnType<typeof useGetBlocksQuery>
export type GetBlocksLazyQueryHookResult = ReturnType<
  typeof useGetBlocksLazyQuery
>
export type GetBlocksQueryResult = Apollo.QueryResult<
  GetBlocksQuery,
  GetBlocksQueryVariables
>
