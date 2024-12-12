import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestFarsightWeather = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestFarsightWeather'

      short_name='NestFarsightWeather'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-340h250q46 0 78-32.5t32-77.5q0-45-30.5-76.5T614-560q-13-45-50-72.5T480-660q-41 0-75 21.5T354-579q-48 2-81 36.5T240-460q0 50 35 85t85 35Zm0-80q-17 0-28.5-11.5T320-460q0-17 11-28t27-12h48l20-45q8-17 22.5-26t31.5-9q20 0 36 11.5t21 31.5l16 57h58q13 0 21 8.5t8 21.5q0 12-8.5 21t-21.5 9H360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialNestFarsightWeather.displayName = 'OnesyIconMaterialNestFarsightWeather';

export default IconMaterialNestFarsightWeather;
