import { useReducer, useCallback } from 'react';
import axios from 'axios';
import reducer, { initialState } from './reducer';
import { fetching, success, error } from './action-creators';

const useApiRequest = (endpoint, { verb = 'get', params = {} } = {}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const makeRequest = useCallback(async () => {
      dispatch(fetching());
        try {
          const {data} = await axios[verb](endpoint, params);
          dispatch(success(data));
        } catch(err) {
          dispatch(error(err));
        }
    }, [endpoint, verb, params]);

    return [state, makeRequest];
};

export default useApiRequest;