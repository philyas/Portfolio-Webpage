import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

const Typewriter = ({ text }) => {
    const [currentText, setCurrentText] = useState('');
    const [charIndex, setCharIndex] = useState(0);

    const currentTextStyle = {
        fontSize:{xs:40, lg:50, xl:80},
        color:'white',
        fontWeight:'bold'
    }

    useEffect(() => {
            let interval = setInterval(() => {
                if (charIndex < text.length) {
                    setCurrentText(currentText + text[charIndex]);
                    setCharIndex(charIndex + 1);
                } else {
                    clearInterval(interval);
                }
            }, 120);
    
            return () => clearInterval(interval);

    }, [charIndex, text]);

    return <Typography sx={currentTextStyle}>{currentText}</Typography>;
};

export default Typewriter;
