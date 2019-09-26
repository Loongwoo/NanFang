import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'umi-plugin-locale';
import MyLayout from '@/layouts/MyLayout';
import Topology from './Topology';

export default ({ location }) => {
  return (
    <MyLayout location={location}>
      <Topology style={{ width: '100%', height: '100%' }} />
    </MyLayout>
  );
};
