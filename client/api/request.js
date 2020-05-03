import { useReducer, useCallback } from 'react';
import axios from 'axios';
import reducer, { initialState } from './reducer';
import { requesting, success, error } from './action-creators';

const useApiRequest = (endpoint, { verb = 'get', body = {} } = {}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const makeRequest = useCallback(async () => {
      dispatch(requesting());
        try {
          const {data} = await axios[verb](endpoint, body);
          dispatch(success(data));
        } catch(err) {
          dispatch(error(err));
        }
    }, [endpoint, verb, body]);

    return [state, makeRequest];
};

export default useApiRequest;