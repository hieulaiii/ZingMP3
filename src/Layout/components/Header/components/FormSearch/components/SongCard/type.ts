import { ISuggestions } from '@/lib/interface';

export interface SongCardProps {
    song: ISuggestions;
    onShow?: () => void;
    onHidden?: () => void;
}
