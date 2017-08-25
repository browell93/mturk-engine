import { configureApiRoot } from '../utils/config';

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export type SEARCH_REQUEST = typeof SEARCH_REQUEST;

export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export type SEARCH_SUCCESS = typeof SEARCH_SUCCESS;

export const SEARCH_FAILURE = 'SEARCH_FAILURE';
export type SEARCH_FAILURE = typeof SEARCH_FAILURE;

export const FETCH_TURKOPTICON_SUCCESS = 'FETCH_TURKOPTICON_SUCCESS';
export type FETCH_TURKOPTICON_SUCCESS = typeof FETCH_TURKOPTICON_SUCCESS;

export const FETCH_TURKOPTICON_REQUEST = 'FETCH_TURKOPTICON_REQUEST';
export type FETCH_TURKOPTICON_REQUEST = typeof FETCH_TURKOPTICON_REQUEST;

export const FETCH_TURKOPTICON_FAILURE = 'FETCH_TURKOPTICON_FAILURE';
export type FETCH_TURKOPTICON_FAILURE = typeof FETCH_TURKOPTICON_FAILURE;

export const FETCH_QUEUE_SUCCESS = 'FETCH_QUEUE_SUCCESS';
export type FETCH_QUEUE_SUCCESS = typeof FETCH_QUEUE_SUCCESS;

export const FETCH_QUEUE_REQUEST = 'FETCH_QUEUE_REQUEST';
export type FETCH_QUEUE_REQUEST = typeof FETCH_QUEUE_REQUEST;

export const FETCH_QUEUE_FAILURE = 'FETCH_QUEUE_FAILURE';
export type FETCH_QUEUE_FAILURE = typeof FETCH_QUEUE_FAILURE;

export const ACCEPT_HIT_SUCCESS = 'ACCEPT_HIT_SUCCESS';
export type ACCEPT_HIT_SUCCESS = typeof ACCEPT_HIT_SUCCESS;

export const ACCEPT_HIT_FAILURE = 'ACCEPT_HIT_FAILURE';
export type ACCEPT_HIT_FAILURE = typeof ACCEPT_HIT_FAILURE;

export const RETURN_HIT_REQUEST = 'RETURN_HIT_REQUEST';
export type RETURN_HIT_REQUEST = typeof RETURN_HIT_REQUEST;

export const RETURN_HIT_FAILURE = 'RETURN_HIT_FAILURE';
export type RETURN_HIT_FAILURE = typeof RETURN_HIT_FAILURE;

export const RETURN_HIT_SUCCESS = 'RETURN_HIT_SUCCESS';
export type RETURN_HIT_SUCCESS = typeof RETURN_HIT_SUCCESS;

export const UPDATE_FIELD = 'UPDATE_FIELD';
export type UPDATE_FIELD = typeof UPDATE_FIELD;

export const TOGGLE_FORM = 'TOGGLE_FORM';
export type TOGGLE_FORM = typeof TOGGLE_FORM;

export const CHANGE_SELECTED_TAB = 'CHANGE_SELECTED_TAB';
export type CHANGE_SELECTED_TAB = typeof CHANGE_SELECTED_TAB;

export const CHANGE_SORTING_OPTION = 'CHANGE_SORTING_OPTION';
export type CHANGE_SORTING_OPTION = typeof CHANGE_SORTING_OPTION;

export const BLOCK_HIT_GROUP = 'BLOCK_HIT_GROUP';
export type BLOCK_HIT_GROUP = typeof BLOCK_HIT_GROUP;

export const UNBLOCK_HIT_GROUP = 'UNBLOCK_HIT_GROUP';
export type UNBLOCK_HIT_GROUP = typeof UNBLOCK_HIT_GROUP;

export const API_URL = configureApiRoot();
/**
 * The string to be passed to querySelector in order to find the table containing all fetched HITs.
 * Credit to: L697 https://greasyfork.org/en/scripts/21815-hit-finder-beta/code#n697
 */
export const hitTableIdentifier = `table[cellpadding="0"][cellspacing="0"][border="0"][width="100%"][height="100%"]`;

/**
 * The string to be passed to querySelector in order to find the anchor HTML Element containing the requesterID.
 * Credit to: L704 https://greasyfork.org/en/scripts/21815-hit-finder-beta/code#n704
 */
export const requesterIdAnchor = `a[href^="/mturk/searchbar?selectedSearchType=hitgroups&requesterId="]`;

export const groupIdAnchor = `a[href^="/mturk/preview?groupId="]`;

export const hitIdAnchor = `a[href^="/mturk/continue?hitId="]`;

export const timeLeftSelector = `tbody > tr > td:nth-child(3) > table > tbody > tr > td.capsule_field_text`;
/**
 * The root URL for querying the attributes of multiple requesters simultaneously
 */
export const turkopticonApiMulti = `https://turkopticon.ucsd.edu/api/multi-attrs.php?ids=`;

export const tutkopticonBaseUrl = `https://turkopticon.ucsd.edu/`;
