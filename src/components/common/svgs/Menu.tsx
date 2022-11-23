import React from 'react';
import Svg, {Path} from 'react-native-svg';

type MenuComponentProps = {
  color: string;
};

const MenuComponent = ({color}: MenuComponentProps) => {
  return (
    <Svg width="22" height="21" viewBox="0 0 22 21" fill="none">
      <Path
        d="M19.4016 4.17794H2.2745C1.31545 4.17794 0.537354 3.34921 0.537354 2.32774C0.537354 1.30628 1.31545 0.477539 2.2745 0.477539H19.4016C20.3607 0.477539 21.1388 1.30628 21.1388 2.32774C21.1388 3.34921 20.3607 4.17794 19.4016 4.17794ZM21.1388 10.5958C21.1388 9.57436 20.3607 8.74563 19.4016 8.74563H2.2745C1.31545 8.74563 0.537354 9.57436 0.537354 10.5958C0.537354 11.6173 1.31545 12.446 2.2745 12.446H19.4016C20.3607 12.446 21.1388 11.6173 21.1388 10.5958ZM21.1388 18.8639C21.1388 17.8424 20.3607 17.0137 19.4016 17.0137H2.2745C1.31545 17.0137 0.537354 17.8424 0.537354 18.8639C0.537354 19.8854 1.31545 20.7141 2.2745 20.7141H19.4016C20.3607 20.7141 21.1388 19.8854 21.1388 18.8639Z"
        fill={color}
      />
    </Svg>
  );
};

export default MenuComponent;