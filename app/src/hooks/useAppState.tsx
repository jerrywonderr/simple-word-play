import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

/**
 * Basically for exposing the payload of the AppContext to other components
 */
const useAppState = () => {
  const appState = useContext(AppContext);

  if (!appState) {
    throw new Error("useAppState must be used within")
  }

  return appState;
};

export default useAppState;
