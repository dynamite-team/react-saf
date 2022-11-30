
import {  fetchConTokenFiles } from "./fetch";


export const postImage = async (endpoint, values) => {
    const resp = await fetchConTokenFiles(endpoint, values, 'POST');
    const body = await resp.json();

    return body;

};