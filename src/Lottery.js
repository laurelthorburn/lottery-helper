import React, {useState} from 'react';

const Lottery = ({title, balls, values}) => {

    const [numbers, setNumbers] = useState('');

const handleRoll = () => {
console.log('Hello')
}
    return ( 
        <>
        Lottery: {title}
        total balls: {balls}
        total values: {values}

        <button onClick={handleRoll}>Generate New Numbers</button>
        </>
     );
}
 
export default Lottery;