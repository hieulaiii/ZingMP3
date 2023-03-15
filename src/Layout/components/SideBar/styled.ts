import tw from 'twin.macro';

export const Wrapper = tw.div`flex min-h-[calc(100vh - 90px)] bg-layout-sidebar w-[240px]
 flex-shrink-0 flex-col overflow-auto`;

export const Line = tw.div`relative h-[1px] mt-[15px] mb-[15px]
after:(content-[''] left-[25px] right-[25px] top-0 absolute border-t-[1px] border-whiteAlpha-10)`;

export const LogoImage = tw.div`w-full bg-logoZing bg-no-repeat bg-contain w-[120px] h-10`;
