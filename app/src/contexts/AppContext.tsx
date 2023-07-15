import {
  createContext,
  ReactElement,
  useState,
} from "react";

type IAppState = {
  word: string;
  cleanWord: string;
};


export type IAppContext = {
  words: IAppState;
  setWords: (words: IAppState) => void;
};

const initialState: IAppState = {
  word: "",
  cleanWord: "",
};

export const AppContext = createContext<IAppContext>({
  words: initialState,
  setWords: () => {},
});

type IAppProviderProps = {
  children: ReactElement | undefined;
};


/**
 * Manage state for the words globally
 */
export const AppProvider = ({
  children,
}: IAppProviderProps): ReactElement => {
  const [words, setWords] = useState(initialState);

  const contextValue: IAppContext = { words, setWords};

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
