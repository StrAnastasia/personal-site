import './loading.css';
import { FC, ReactNode, useEffect, useState } from 'react';

const Loading: FC<{ isLoading: boolean; setIsLoading: (a: boolean) => void }> = ({
  isLoading,
  setIsLoading,
}) => {
  useEffect(() => {
    if (isLoading)
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
  }, [isLoading]);
  return (
    <div
      className='loadingWrapper'
      style={{ opacity: isLoading ? '1' : '0', zIndex: isLoading ? 10 : -1 }}
    >
      <div className='loading'>
        <h2>Загрузка</h2>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loading;
