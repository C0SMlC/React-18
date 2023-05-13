import React, { useRef } from 'react';
import { useEffect } from 'react';

const UseEffect = () => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
    document.title = 'cbnxm';
  });

  return (
    <div>
      <input ref={ref} type="text" />
    </div>
  );
};

export default UseEffect;
