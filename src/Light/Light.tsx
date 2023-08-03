import React, { useState } from 'react';

export default function LightSwitch(): JSX.Element {
  const [isLightOn, setIsLightOn] = useState<boolean>(false);

  function toggleLight(): void {
    setIsLightOn((prevState) => !prevState);
  }

  return (
    <>
    <button type="button" onClick={toggleLight}>
      {isLightOn ? 'Close Light' : 'Open Light'}
    </button>
    {isLightOn ? (
      <img src={'data:image/jpeg;base64,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'} alt="Bec aprins" />
    ) : (
      <img src={'https://www.shutterstock.com/image-photo/light-bulb-turned-off-over-260nw-320485652.jpg'} alt="Bec stins" />
    )}
  </>
  );
}
