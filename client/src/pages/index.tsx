import React from 'react'
import { gql } from "@apollo/client";

import { useGetBlocksQuery } from '../__generated__/graphql.d';
import LayoutWrapper from '../ui/LayoutWrapper';
import BlocksTable from '../components/BlocksTable';

const BLOCKS = gql`
  query getBlocks {
    blocks {
      hash
      time
      height
    }
  }
`;

interface Props {
  children?: any
}

const Main = (props: Props) => {
  const { loading, error, data } = useGetBlocksQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <LayoutWrapper title="Latest Blocks">
      <BlocksTable blocks={data?.blocks} />
    </LayoutWrapper>
  )
}

export default Main;
