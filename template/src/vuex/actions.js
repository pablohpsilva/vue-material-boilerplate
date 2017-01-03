import * as mutations from './mutation-types';
/* eslint-disable import/prefer-default-export */

/**
 * Category Actions
 */
export const setData = ({ commit }, data) => commit(mutations.DATA_OBJECT, data);
