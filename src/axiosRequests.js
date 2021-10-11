import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjFjZGMzMDhhNzkwMDhiMzYzYWNkYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzkzNjEzMiwiZXhwIjoxNjM0MTk1MzMyfQ.nprv9ZupRi2m_5JSK7CS8dwoEYl0nHrA213kFxmn7jI"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});