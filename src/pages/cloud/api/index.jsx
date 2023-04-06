import React from 'react';
import Layout from '@theme/Layout';
import Redoc from '@theme/Redoc';
import useSpecData from '@theme/useSpecData';

function CustomPage() {
  const specData = useSpecData('clickhouse-cloud-api');
  return (
    <Layout
      title="Custom Layout Docs"
      description="Example showing custom layout"
    >
      <Redoc {...specData} />
    </Layout>
  );
}

export default CustomPage;

