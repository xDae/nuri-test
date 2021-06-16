import React from 'react';
import { Link } from 'react-router-dom';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { Maybe } from 'graphql/jsutils/Maybe';

import { Block } from '../__generated__/graphql.d';

import Table from '../ui/Table';

interface Props {
  blocks?: Maybe<
    Array<
      Maybe<{ __typename?: 'Block' } & Pick<Block, 'hash' | 'time' | 'height'>>
    >
  >
}

const BlocksTable = ({ blocks }: Props) => {
  const columns = React.useMemo(() => [
    {
      Header: 'Hash',
      accessor: 'hash',
      Cell: ({ value }: any) => <Link to={`/${value}`} className="text-blue-400 hover:text-blue-500">{value}</Link>
    },
    {
      Header: 'Time',
      accessor: 'time',
      Cell: ({ value }: any) => formatDistanceToNow(value*1000, { addSuffix: true })
    },
    {
      Header: 'Height',
      accessor: 'height',
    }
  ], []);

  const tableData = React.useMemo(() => blocks, []);

  return (
    <Table columns={columns} data={tableData} />
  );
};

export default BlocksTable;