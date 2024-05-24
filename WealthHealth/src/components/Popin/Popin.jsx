import { useState, forwardRef, useImperativeHandle } from 'react';
import './Popin.css';

const Popin = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const showPopin = () => {
    setIsOpen(true);
  };

  const hidePopin = () => {
    setIsOpen(false);
  };

  useImperativeHandle(ref, () => ({
    showPopin,
    hidePopin
  }));

  return (
    <div>
      {isOpen && (
        <div className="popin">
          <div className='popin-contain'>
            <span className="close-button" onClick={hidePopin}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.707107" width="1" height="15" rx="0.5" transform="rotate(-45 0 0.707107)" fill="#111111"/>
                <rect x="10.6066" width="1" height="15" rx="0.5" transform="rotate(45 10.6066 0)" fill="#111111"/>
              </svg>
            </span>
            <div className="content">
              {props.children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

Popin.displayName = 'Popin';

export default Popin;