import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFramePersonOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FramePersonOffFilled'

      short_name='FramePersonOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m790 999-24-23h-86q-17 0-28.5-11.5T640 936q0-17 11.5-28.5T680 896h6l-80-80H280q-17 0-28.5-11.5T240 776v-36q0-21 10.5-39.5T279 671q31-18 64.5-30.5T412 622L160 369v7q0 17-11.5 28.5T120 416q-17 0-28.5-11.5T80 376v-86l-26-26q-12-12-11.5-28.5T55 207q12-12 28.5-12t28.5 12l735 736q12 12 12 28t-12 28q-12 12-28.5 12T790 999Zm90-223v86l-80-80v-6q0-17 11.5-28.5T840 736q17 0 28.5 11.5T880 776ZM160 976q-33 0-56.5-23.5T80 896V776q0-17 11.5-28.5T120 736q17 0 28.5 11.5T160 776v120h120q17 0 28.5 11.5T320 936q0 17-11.5 28.5T280 976H160Zm640-600V256H680q-17 0-28.5-11.5T640 216q0-17 11.5-28.5T680 176h120q33 0 56.5 23.5T880 256v120q0 17-11.5 28.5T840 416q-17 0-28.5-11.5T800 376ZM194 176h86q17 0 28.5 11.5T320 216q0 17-11.5 28.5T280 256h-6l-80-80Zm406 280q0 26-10.5 48.5T562 544L392 374q17-17 39.5-27.5T480 336q50 0 85 35t35 85Z"/>
    </Icon>
  );
});

IconMaterialFramePersonOffFilled.displayName = 'AmauiIconMaterialFramePersonOffFilled';

export default IconMaterialFramePersonOffFilled;
