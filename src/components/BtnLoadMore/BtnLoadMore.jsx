import React from 'react';
import { Button } from './BtnLoadMore.styled';

const BtnLoadMore = ({ onLoadMore }) => {
  return (
    <Button onClick={onLoadMore} type="button">
      Next
    </Button>
  );
};

export default BtnLoadMore;
