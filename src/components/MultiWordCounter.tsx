import CountingZone from './CountingZone';
import TotalCountBar from './TotalCountBar'

type Props = {
    // onActive: boolean;
}


const MultiWordCounter: React.FC<Props> = () => {
    return (
        <div>
            <TotalCountBar
            //   counters={counters}
            //   addCounterTop={actions.counterActions.addCounterTop}
            //   addCounterBelow={actions.counterActions.addCounterBelow}
            //   refresh={actions.counterActions.refresh}
            //   switchMode={actions.modeActions}
            />
            <CountingZone
            //   counters={counters}
            //   actions={actions.counterActions}
            //   mode={mode}
            />
        </div>
    );
}

export default MultiWordCounter;