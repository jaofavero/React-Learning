import {useRef} from 'react';

export const RefExample = () => {
  const inputRef = useRef();

  const sayInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "Hello, World!";
    }
  };

  return (
    <div className="ref-example">
      <p><button onClick={sayInput}>Code</button></p>
      <input type="text" ref={inputRef} placeholder="What Does The Code Say?" />

    </div>
  );
}