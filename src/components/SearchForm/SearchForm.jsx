import React from 'react';
import { Form, Input } from './SearchForm.styled';

const SearchForm = ({ filter, handleGetQuery }) => {
  return (
    <Form onSubmit={evt => evt.preventDefault()}>
      <Input
        value={filter}
        onChange={handleGetQuery}
        placeholder="Type your request here..."
      ></Input>
    </Form>
  );
};

export default SearchForm;
