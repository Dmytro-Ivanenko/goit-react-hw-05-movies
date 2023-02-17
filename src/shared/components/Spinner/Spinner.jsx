import React from 'react';
import { ColorRing } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <ColorRing
      visible={true}
      height="90"
      width="90"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="spinner-wrapper"
      colors={['#000000', '#ff0000', '#000000', '#ff0000', '#389482']}
    />
  );
};

export default Spinner;
