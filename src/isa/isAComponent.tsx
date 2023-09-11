import React, { useState, useRef, useEffect } from 'react';
import '../styles/isa.css';

interface IsAComponentProps {
  name: string,
  adjectives: Array<string>,
  startFlashes: number,
  endFlashes: number,
  cursorInterval: number,
  typingInterval: number,
  continuous: boolean,
}

const STATES = {
  PRE_FLASH: 1,
  FLASHING: 2,
  TEXT_WRITING: 3,
  END_FLASHING: 4,
  POST_FLASHING: 5,
  ERASING: 6,
}

const IsAComponent: React.FC<IsAComponentProps> = ({
  name,
  adjectives,
  startFlashes,
  endFlashes,
  cursorInterval,
  typingInterval,
  continuous = false,
}) => {
  const [startFsCounter, setStartFs] = useState(0);
  const [currentState, setCurrentState] = useState(STATES.PRE_FLASH);
  const [displayString, setDisplayString] = useState(<div><span/></div>);
  const [adjectiveSelected, setAdjectiveSelected] = useState(Math.floor(Math.random() * adjectives.length));
  const [remainingAdjectives, setRemainingAdjectives] = useState(adjectives);

  const startFsRef = useRef<number>(0);
  const currentStateRef = useRef<number>(STATES.PRE_FLASH);

  currentStateRef.current = currentState;
  startFsRef.current = startFsCounter;


  const resetWord = React.useCallback(() => {
    setStartFs(0);
    setCurrentState(STATES.PRE_FLASH);
    const newRemainingAdjectives = [...remainingAdjectives.slice(0, adjectiveSelected), ...remainingAdjectives.slice(adjectiveSelected + 1)];
    if (newRemainingAdjectives.length === 0 && remainingAdjectives[0] !== '?') newRemainingAdjectives.push('?');
    else if (newRemainingAdjectives.length === 0) newRemainingAdjectives.push(...adjectives);
    setRemainingAdjectives(newRemainingAdjectives);
    setAdjectiveSelected(Math.floor(Math.random() * newRemainingAdjectives.length));
  }, [adjectiveSelected, remainingAdjectives, adjectives])

  useEffect(() => {
  const constructString: () => JSX.Element = () => {
    switch(currentStateRef.current){
      case STATES.PRE_FLASH:
        return (
          <div>
            {`${name} is `}
            <br />
            <span className='invisible'>|</span>
          </div>
        );
      case STATES.FLASHING:
        return (
          <div>
            {`${name} is `}
            <br />
            <span className={startFsRef.current % 2 === 1 ? 'visible' : 'invisible'}>|</span>
          </div>
        );
      case STATES.TEXT_WRITING:
        return (
          <div>
            {`${name} is `}
            <br />
            <span className="visibe">
              {remainingAdjectives[adjectiveSelected].slice(0,startFsRef.current)}{startFsRef.current === 0 ? '' : '|'}
            </span>
          </div>
        );
      case STATES.END_FLASHING:
        return (
          <div>
            {`${name} is `}
            <br />
            <span className="visible">
              {remainingAdjectives[adjectiveSelected]}
            </span>
            <span className={startFsRef.current % 2 === 1 ? 'visible' : 'invisible'}>|</span>
          </div>
        );
      case STATES.POST_FLASHING:
        return (
          <div>
            {`${name} is ${remainingAdjectives[adjectiveSelected]}`}
            <br />
            <span className="visible">
              {remainingAdjectives[adjectiveSelected]}
            </span>
            <span className="invisible">|</span>
          </div>
        );
      case STATES.ERASING:
        return (
          <div>
            {`${name} is `}
            <br />
            <span className="visibe">
              {remainingAdjectives[adjectiveSelected].slice(0, 0 - startFsRef.current)}{startFsRef.current === 0 ? '' : '|'}
            </span>
          </div>
        );
      default:
        return (
          <div>
            {`${name} is ${remainingAdjectives[adjectiveSelected]} `}
            <span className="invisible">|</span>
          </div>
        );
    }
  }
    setDisplayString(constructString());
  }, [startFsCounter, currentState, adjectiveSelected, remainingAdjectives, name]);

  useEffect(() => {
  const incrementCounter = () => {
    switch(currentStateRef.current) {
      case STATES.PRE_FLASH:
        setStartFs(1);
        setCurrentState(STATES.FLASHING);
        break;
      case STATES.FLASHING:
        if(startFsRef.current > (startFlashes * 2)) {
          setCurrentState(STATES.TEXT_WRITING);
          setStartFs(1);
        } else {
          setStartFs(startFsRef.current + 1);
        }
        break;
      case STATES.TEXT_WRITING:
        if(startFsRef.current > remainingAdjectives[adjectiveSelected].length) {
          setCurrentState(STATES.END_FLASHING);
          setStartFs(1);
        } else {
          setStartFs(startFsRef.current + 1);
        }
        break;
      case STATES.END_FLASHING:
        if(startFsRef.current > endFlashes * 2) {
          setCurrentState(continuous ? STATES.ERASING : STATES.POST_FLASHING);
          setStartFs(1);
        } else {
          setStartFs(startFsRef.current + 1);
        }
        break;
      case STATES.POST_FLASHING:
        setStartFs(-1);
        break;
      case STATES.ERASING:
        if(startFsRef.current > remainingAdjectives[adjectiveSelected].length) {
            resetWord();
        } else {
          setStartFs(startFsRef.current + 1);
        }
        break;
    }
  }
    let id: NodeJS.Timeout;
    if (currentStateRef.current !== STATES.POST_FLASHING) {
      id = setTimeout(() => {
        incrementCounter();
      }, (currentStateRef.current === STATES.END_FLASHING || currentStateRef.current === STATES.FLASHING) ? cursorInterval : typingInterval);
    }
   return () => clearTimeout(id);
  }, [currentState, startFsCounter, cursorInterval, typingInterval, adjectiveSelected, continuous, endFlashes, remainingAdjectives, resetWord, startFlashes]);

  return (
    <div className={`banner ${STATES.POST_FLASHING === currentStateRef.current ? 'finished': 'unFinished'}`}onClick={continuous ? () => {} : resetWord}>
      {displayString}
    </div>
  );

}

export default IsAComponent;
