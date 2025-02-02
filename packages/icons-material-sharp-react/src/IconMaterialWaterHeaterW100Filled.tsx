import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterHeaterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterHeaterW100Filled'

      short_name='WaterHeater'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M337-512q0 43 23 77t59 51q-9-11-14.5-23.8T399-435q0-16.43 6.5-30.71Q412-480 423-491l57-57 56.55 56.91Q548-480 554.5-465.71 561-451.43 561-435q0 14.34-4.98 27.09Q551.05-395.16 542-384q36-17 58.5-51t22.5-77q0-38-17.5-70T559-633l-9 8q-6 6-13.89 9.5-7.9 3.5-17.11 3.5-20 0-34.5-13.94Q470-639.87 470-660v-45q-6 4-27.5 19t-45 39.5q-23.5 24.5-42 58.44Q337-554.13 337-512Zm143 4-37 36q-8 8-12 17.5t-4 19.82q0 21.68 15.59 36.18T480-384q21.82 0 37.41-14.5Q533-413 533-434.66q0-11.34-4-20.34t-12-17l-37-36ZM246-106q-24.75 0-42.37-17.63Q186-141.25 186-166v-554q0-56 39-95t95-39h320q56 0 95 39t39 95v554q0 24.75-17.62 42.37Q738.75-106 714-106H246Zm114-148q41 0 57.5-20t63-20q46.5 0 64 20t55 20q37.5 0 58-20t88.5-20v-426q0-43.72-31.14-74.86T640-826H320q-43.73 0-74.86 31.14Q214-763.72 214-720v426q67 0 86.75 20T360-254Z"/>
    </Icon>
  );
});

IconMaterialWaterHeaterW100Filled.displayName = 'OnesyIconMaterialWaterHeaterW100Filled';

export default IconMaterialWaterHeaterW100Filled;
