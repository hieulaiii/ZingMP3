import tw from 'twin.macro';

import { Text } from '../../Element';

export const TextCustom = tw(Text)`text-whiteAlpha-50 text-xs font-semibold cursor-pointer`;

export const TextCustomHover = tw(TextCustom)`hover:(underline text-textColor-linkHover)`;
