import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWeatherSnowyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeatherSnowyW100'

      short_name='WeatherSnowy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-222q-11 0-19.5-8.5T232-250q0-11 8.5-19.5T260-278q11 0 19.5 8.5T288-250q0 11-8.5 19.5T260-222Zm120 120q-11 0-19.5-8.5T352-130q0-11 8.5-19.5T380-158q11 0 19.5 8.5T408-130q0 11-8.5 19.5T380-102Zm120-120q-11 0-19.5-8.5T472-250q0-11 8.5-19.5T500-278q11 0 19.5 8.5T528-250q0 11-8.5 19.5T500-222Zm240 0q-11 0-19.5-8.5T712-250q0-11 8.5-19.5T740-278q11 0 19.5 8.5T768-250q0 11-8.5 19.5T740-222ZM620-102q-11 0-19.5-8.5T592-130q0-11 8.5-19.5T620-158q11 0 19.5 8.5T648-130q0 11-8.5 19.5T620-102ZM300-386q-81 0-137.5-56.5T106-580q0-76 51.5-131T287-774q29.09-56.07 79.55-88.03Q417-894 479.62-894q85.38 0 145.88 57T695-695q75 4 117 49.5t42 105.8q0 63.7-44.92 108.7-44.91 45-109.08 45H300Zm0-28h400q52 0 89-37t37-89q0-52-37-89t-89-37h-34v-14q0-76.72-54.68-131.36Q556.63-866 479.85-866q-55.85 0-101.73 30.33Q332.23-805.33 309-754l-3.14 8H298q-67.74 2.37-115.87 50.39Q134-647.59 134-580q0 68.77 48.61 117.39Q231.23-414 300-414Zm180-126Z"/>
    </Icon>
  );
});

IconMaterialWeatherSnowyW100.displayName = 'OnesyIconMaterialWeatherSnowyW100';

export default IconMaterialWeatherSnowyW100;
