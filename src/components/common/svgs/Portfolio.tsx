import React from 'react';
import Svg, {Rect} from 'react-native-svg';

type PortfolioComponentProps = {
  color: string;
};

const PortfolioComponent = ({color}: PortfolioComponentProps) => {
  return (
    <Svg width="23" height="23" viewBox="0 0 23 23" fill="none">
      <Rect
        x="1.50049"
        y="1.97754"
        width="20"
        height="19"
        rx="1.5"
        stroke={color}
        strokeWidth={3}
      />
      <Rect
        x="14.5005"
        y="8.97754"
        width="7"
        height="5"
        rx="1.5"
        stroke={color}
        strokeWidth={3}
      />
    </Svg>
  );
};

export default PortfolioComponent;
