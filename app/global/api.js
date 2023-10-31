import axios from "axios";

const { NEXT_PUBLIC_BASE_URL } = process.env;
// handle axios request
export const api = axios.create({
	baseURL: NEXT_PUBLIC_BASE_URL
});