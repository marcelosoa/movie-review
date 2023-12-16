import React, { useEffect, useRef } from 'react';
import LottieView from 'lottie-react-native';

type LottieProps = {
  source: string
}

export const LottieComponent = ({source}: LottieProps) => {
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    animationRef.current?.play();
    animationRef.current?.play(30, 120);
  }, []);

  return (
    <LottieView
      ref={animationRef}
      style={{
        width: 450,
        height: 240,
      }}
      source={source}
    />
  );
}