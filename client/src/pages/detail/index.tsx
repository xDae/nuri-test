import React from 'react'
import { Link, useParams } from 'react-router-dom';

import { gql } from "@apollo/client";
import formatRelative from 'date-fns/formatRelative'
import formatISO from 'date-fns/formatISO'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import { useGetRawBlockQuery } from '../../__generated__/graphql.d';
import Table from '../../ui/Table';
import List from '../../ui/List';
import LayoutWrapper from '../../ui/LayoutWrapper';

const BLOCKS = gql`
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
`;

interface Props {
  children?: any
}

const Main = (props: Props) => {
  const { hash } = useParams();
  const { loading, error, data } = useGetRawBlockQuery({
    variables: {
      hash
    }
  });

  const formatNumber = (num: number = 0, locale: string = 'de-DE') => Intl.NumberFormat(locale).format(num)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <LayoutWrapper title={`Block ${data?.rawBlock?.block_index}`}>
      <List>
        <List.Item title="Hash">
          {data?.rawBlock?.hash}
        </List.Item>
        <List.Item title="Time">
          {data?.rawBlock?.time && formatDistanceToNow(data?.rawBlock?.time*1000, { addSuffix: true })}
        </List.Item>
        <List.Item title="Height">
          {data?.rawBlock?.height}
        </List.Item>
        <List.Item title="Number of Transactions">
          {data?.rawBlock?.n_tx}
        </List.Item>
        <List.Item title="Merkle root">
          {data?.rawBlock?.mrkl_root}
        </List.Item>
        <List.Item title="Bits">
          {formatNumber(data?.rawBlock?.bits)}
        </List.Item>
        <List.Item title="Weight">
          {formatNumber(data?.rawBlock?.weight)} WU
        </List.Item>
        <List.Item title="Size">
          {formatNumber(data?.rawBlock?.size)} bytes
        </List.Item>

        {data?.rawBlock?.prev_block && (
          <List.Item title="Previous Block">
            <Link
              to={`/${data?.rawBlock?.prev_block}`}
              className="text-blue-400 hover:text-blue-500"
            >
              {data?.rawBlock?.prev_block}
            </Link>
          </List.Item>
        )}
      </List>
    </LayoutWrapper>
  )
}

export default Main;
