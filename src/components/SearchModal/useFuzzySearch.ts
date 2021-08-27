import Fuse from 'fuse.js';
import isEqual from 'lodash.isequal';
import { useEffect, useRef, useState } from 'react';

export interface FuzzySearchConfig {
  list: any[];
  options?: Fuse.IFuseOptions<any>;
}

export const useFuzzySearch = ({ list, options }: FuzzySearchConfig) => {
  const [query, setQuery] = useState<string>();
  const [results, setResults] = useState<any[]>(list);

  const fuseRef = useRef<Fuse<any>>();

  useEffect(() => {
    fuseRef.current = new Fuse(list, options);
  }, [list, options]);

  useEffect(() => {
    if (!(fuseRef && fuseRef.current)) {
      return;
    }

    const newResults = query ? fuseRef.current.search(query).map(({ item }: any) => item) : list;
    if (isEqual(results, newResults)) {
      return;
    }

    setResults(newResults);
  }, [list, results, query]);

  return {
    results,
    query,
    setQuery,
  };
};
