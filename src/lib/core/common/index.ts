export const joinQueryString = (obj: Record<string, any>) =>
    obj &&
    Object.entries(obj)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
        .join('&');
