import { createContext, useReducer } from "react";
// eslint-disable-next-line no-unused-vars
import { initialState } from "../../Utility/Reducer";
import PropTypes from "prop-types";

export const DataContext = createContext();

export const DataProvider = ({ children, reducer, initialState }) => {
  return (
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
  reducer: PropTypes.func.isRequired,
  initialState: PropTypes.shape({
    basket: PropTypes.object,
  }).isRequired,
};
