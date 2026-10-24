import React, { useState, useEffect } from 'react';

export default function Typewriter({
  text = 'Spotless In Minutes.',
  speed = 100,
  deleteSpeed = 50,
  pauseDelay = 2400,
  loop = true,
  className = '',
  onComplete
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (!isDeleting && charIndex < text.length) {
      // Typing next character
      timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }, speed);
    } else if (!isDeleting && charIndex === text.length) {
      // Reached full text: trigger onComplete!
      if (onComplete) {
        onComplete(true);
      }
      if (loop) {
        timeout = setTimeout(() => {
          if (onComplete) {
            onComplete(false);
          }
          setIsDeleting(true);
        }, pauseDelay);
      }
    } else if (isDeleting && charIndex > 0) {
      // Deleting character
      timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      }, deleteSpeed);
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting, start typing again
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, text, speed, deleteSpeed, pauseDelay, loop]);

  return (
    <span className={`typewriter-wrap ${className}`} style={{ display: 'inline-block' }}>
      <span>{displayedText}</span>
      <span
        className="typewriter-cursor"
        aria-hidden="true"
        style={{
          display: 'inline-block',
          width: '3px',
          marginLeft: '4px',
          backgroundColor: 'var(--yellow, #F4B840)',
          animation: 'typewriterBlink 0.9s infinite',
          verticalAlign: 'baseline',
          height: '0.85em'
        }}
      />
    </span>
  );
}
