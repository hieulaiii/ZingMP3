import { appContainer } from '@/lib/core/container';

const { songService } = appContainer.cradle;

export const useStreaming = () => {
    const loadStreamingData = async (id: string) => {
        const data = await songService.getStreaming(id);
        return data;
    };
    return {
        loadStreamingData,
    };
};
