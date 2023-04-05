import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { BASE_URL, TIME_OUT } from '@/lib/config';

import { joinQueryString } from '../../common';

export interface RequestParams {
    url: string;
    options?: AxiosRequestConfig;
    data?: Record<string, any>;
}

export type ServerResponse<T = any> = ServerResponseFail | ServerResponseSuccess<T>;

export type ServerResponseFail = {
    err: number;
    msg: string;
    url: string;
    timestamp: number;
};

export type ServerResponseSuccess<T = any> = {
    err: number;
    msg: 'success';
    data: T;
    timestamp: number;
};

export class HTTPService {
    private apiInstance: AxiosInstance;
    constructor() {
        this.apiInstance = axios.create({
            baseURL: BASE_URL,
            timeout: TIME_OUT,
        });
        this.apiInstance.interceptors.request.use((config) => config);
        this.apiInstance.interceptors.response.use(
            (res: AxiosResponse<ServerResponse>) => {
                // throw error on server error
                if (res.data?.err !== 0) {
                    throw new Error(res.data?.msg);
                }

                return res;
            },
            (err) => {
                let error = err;
                const res = err.response;
                if (res.status !== 401 && res.data?.status === 'fail') {
                    error = new Error(res.data?.data.message || res.data?.data.error);
                }
                return Promise.reject(error);
            }
        );
    }

    public async get<T = any>(params: RequestParams): Promise<ServerResponseSuccess<T>> {
        const url = params.data
            ? `${params.url}?${params.data && joinQueryString(params.data)}`
            : params.url;

        const res = await this.apiInstance.get<ServerResponseSuccess<T>>(url, {
            ...params.options,
        });
        return res.data;
    }
}
