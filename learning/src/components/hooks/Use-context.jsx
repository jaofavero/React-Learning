import {useContext, useState } from 'react';
import { createContext } from 'react';

const GlobalStateContext = createContext(null);

export const ContextExample = () => {
    const [isToggle, setIsToggle] = useState(false);

    return (
        <GlobalStateContext.Provider value={{ isToggle, setIsToggle }}>
            <h3>variaves globais</h3>
        <div className="context-example">
            <ChildToggle/>
            
        </div>
        </GlobalStateContext.Provider>
    );
};

const ChildToggle = () => {
    const { setIsToggle }= useContext(GlobalStateContext);
    return (
        <div className="child-toggle">
            <button onClick={() => setIsToggle(prev => !prev)}>
                Toggle State
            </button>
            <ChildDisplay/>
        </div>
    );
}

const ChildDisplay = () => {
    const { isToggle } = useContext(GlobalStateContext);
    return (
        <div className="child-display">
            <p>Current State: {isToggle ? 'ON' : 'OFF'}</p>
        </div>
    );
}

