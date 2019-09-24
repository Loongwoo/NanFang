import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'umi-plugin-locale';
import MyLayout from '@/layouts/MyLayout';

export default ({ location }) => {
  return (
    <MyLayout location={location}>
      <FormattedMessage id="middle" />
    </MyLayout>
  );
};
