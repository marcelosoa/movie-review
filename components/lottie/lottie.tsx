import React, { useEffect, useRef } from 'react';
import LottieView from 'lottie-react-native';

export const LottieComponent = () => {
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    animationRef.current?.play();
    animationRef.current?.play(30, 120);
  }, []);

  return (
    <LottieView
      ref={animationRef}
      style={{
        width: 200,
        height: 200,
      }}
      source={require('../../assets/images/lottie1.json')}
    />
  );
}