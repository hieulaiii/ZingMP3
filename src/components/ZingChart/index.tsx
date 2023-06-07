import { RealTimeChart, TopZing100, WeekChart } from './components';
import { Container } from '../common/Layout';

export const ZingChart: React.FC = () => (
    <Container tw="px-2 lg:px-[60px] w-full flex-col">
        <RealTimeChart />
        <TopZing100 />
        <WeekChart />
    </Container>
);
