import CountingZone from './CountingZone';
import TotalCountBar from './TotalCountBar'

type Props = {
    // onActive: boolean;
}


const MultiWordCounter: React.FC<Props> = () => {
    return (
        <div>
            <TotalCountBar />
            <CountingZone />
        </div>
    );
}

export default MultiWordCounter;