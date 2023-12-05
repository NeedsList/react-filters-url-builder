import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type FilterContextType = [string, (name: string, value: string) => void];

const FilterContext = createContext<FilterContextType>(["", () => {}]);

type FilterProviderProps = {
  children: ReactNode;
  onChange: (queryString: string) => void;
};

type QSValuesTypes = Record<string, string>;

const FilterProvider = ({ children, onChange }: FilterProviderProps) => {
  const [qsValues, setQSValues] = useState<QSValuesTypes>({});
  const [queryString, setQueryString] = useState("");

  const addFilter = (name: string, value: string) => {
    setQSValues((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    const newQS = Object.keys(qsValues)
      .map(
        (key) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(qsValues[key])}`
      )
      .join("&");
    setQueryString(newQS);
  }, [qsValues]);

  useEffect(() => {
    onChange(queryString);
  }, [queryString]);

  return (
    <FilterContext.Provider value={[queryString, addFilter]}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterStore = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("`useFilterStore` must be used within a `FilterContext`.");
  }
  return context;
};

export { FilterContext, FilterProvider, useFilterStore };
