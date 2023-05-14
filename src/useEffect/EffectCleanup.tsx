import React, { useEffect, useRef } from 'react';

const connect = () => {
  alert('connected');
};

const disconnect = () => {
  alert('disconnected');
};
const EffectCleanup = () => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    connect();

    return () => disconnect();
  });
  return (
    <div>
      <input ref={ref} type="text" className="input" />
    </div>
  );
};

export default EffectCleanup;
