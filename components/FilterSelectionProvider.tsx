import {
  createContext,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";

type FilterSelectionContextType = {
  tags: string[];
  setTags: React.Dispatch<SetStateAction<string[]>>;
};

const FilterSelectionContext = createContext<FilterSelectionContextType>({
  tags: [],
  setTags: () => {},
});

const initialTags = ["React", "TypeScript", "Web development"];

export function FilterSelectionProvider({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const [tags, setTags] = useState<string[]>(initialTags);

  return (
    <FilterSelectionContext.Provider
      value={useMemo(() => ({ tags, setTags }), [tags, setTags])}
    >
      {children}
    </FilterSelectionContext.Provider>
  );
}

export function useFilterSelectionContext() {
  return useContext(FilterSelectionContext);
}
