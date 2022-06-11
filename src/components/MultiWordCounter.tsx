import CountingZone from './CountingZone';
import TotalCountBar from './TotalCountBar'


const MultiWordCounter: React.FC= () => {
    return (
        <div>
            <TotalCountBar />
            <CountingZone />
        </div>
    );
}

export default MultiWordCounter;