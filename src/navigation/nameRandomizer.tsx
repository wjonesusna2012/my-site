import { random } from 'lodash';
import React, { useState } from 'react';
import { wWords, jWords } from './constants';
const NameRandomizer: React.FC = () => {
  const [inputWords, setInputWords] = useState<Array<string>>(['William', 'Jones']);
  const getRandomWords = (firstArray: Array<string>, secondArray: Array<string>) => {
    const rand1 = random(0, firstArray.length - 1);
    const rand2 = random(0, secondArray.length - 1);
    return [firstArray[rand1], secondArray[rand2]];
  }
  return (
    <div className="NavFlexItemStatic" style={{width: '200px'}} onClick={() => {
      const result = getRandomWords(wWords, jWords);
      setInputWords(result);
    }}>
      <div className="firstLetterEmphasized">{inputWords[0]}</div>
      <div className="firstLetterEmphasized">{inputWords[1]}</div>
    </div>
  );
};

export default NameRandomizer;