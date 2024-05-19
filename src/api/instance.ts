import { ENV_CONFIG } from '@/utils';
import axios from 'axios';

const api = axios.create({
	baseURL: ENV_CONFIG.apiEndpoint,
	headers: { 'Content-Type': 'application/json' },
});

export default api;
