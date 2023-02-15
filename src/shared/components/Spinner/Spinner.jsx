import React from 'react';
import { ColorRing } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#ffeb0d', '#3f51b5', '#ffeb0d', '#3f51b5', '#ffeb0d']}
    />
  );
};

export default Spinner;
