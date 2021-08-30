import { createContext, useContext } from 'react';

// Create Context object.
const PositionContext = createContext();

// Export context Provider
export function PositionProvider(props) {
  const { value, children } = props;

  return (
    <PositionContext.Provider value={value}>
      {children}
    </PositionContext.Provider>
  );
}

// Export useContext Hook.
export function usePositionContext() {
  return useContext(PositionContext);
}
