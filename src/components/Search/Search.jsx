import { useState } from 'react';

import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ onUpdateQuery, value }) => {
  const [query, setQuery] = useState(value ? value : '');

  const onChange = event => setQuery(event.target.value);

  const onSubmit = event => {
    event.preventDefault();
    onUpdateQuery(query.trim());
  };

  return (
    <form
      className="flex items-center justify-center rounded overflow-hidden bg-orange-600 p-3 mb-5 shadow-md"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        name="query"
        value={query}
        onChange={onChange}
        placeholder="Find the movie..."
        className="w-[385px] font-mono text-lg border-none rounded outline-none py-2 px-4 placeholder:font-mono text-sm"
      />
      <button
        type="submit"
        className="mx-5 py-1.5 w-[150px] bg-zinc-800 text-orange-700 rounded cursor-pointer transition-colors duration-300 hover:bg-red-800 hover:text-white hover:border-solid hover: border-mainColor"
      >
        Search
      </button>
    </form>
  );
};

export default Search;

Search.propTypes = {
  onUpdateQuery: PropTypes.func.isRequired,
  value: PropTypes.string,
};
