export const getFileLyric = async (link: string): Promise<any> => {
    const res = await fetch(link);
    const data = await res.text();
    return data;
};
