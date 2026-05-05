import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

// -------------------- Axios Instance --------------------
const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5000'}/api`,
    withCredentials: true, // Important for cookies
});

// -------------------- Extend Config --------------------
interface CustomAxiosRequestConfig extends AxiosRequestConfig {
    _retry?: boolean;
}

// -------------------- Interceptor --------------------
api.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
        const originalRequest = error.config as CustomAxiosRequestConfig;

        if (
            error.response?.status === 401 &&
            originalRequest &&
            !originalRequest._retry &&
            !originalRequest.url?.includes('/auth/refresh')
        ) {
            originalRequest._retry = true;

            try {
                await api.post('/auth/refresh', {}, { withCredentials: true });
                return api(originalRequest);
            } catch (refreshError) {
                console.error('Refresh token failed', refreshError);
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

// -------------------- Types --------------------
interface RegisterData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface LoginData {
    email: string;
    password: string;
}

// -------------------- Auth API --------------------
export const authAPI = {
    register: (data: RegisterData) =>
        api.post('/auth/register', data),

    login: (data: LoginData) =>
        api.post('/auth/login', data),

    logout: () =>
        api.post('/auth/logout'),

    refresh: () =>
        api.post('/auth/refresh'),

    getProfile: () =>
        api.get('/auth/me'),
};

// -------------------- Export --------------------
export default api;