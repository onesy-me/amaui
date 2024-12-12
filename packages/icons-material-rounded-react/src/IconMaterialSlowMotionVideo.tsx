import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSlowMotionVideo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlowMotionVideo'

      short_name='SlowMotionVideo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m426-330 195-125q14-9 14-25t-14-25L426-630q-15-10-30.5-1.5T380-605v250q0 18 15.5 26.5T426-330ZM121-440q17 0 30.5 11t18.5 28q6 23 14.5 43.5T204-317q9 15 7.5 32T198-256q-11 11-27 10t-25-14q-22-31-37-66.5T86-400q-3-16 7.5-28t27.5-12Zm77-264q12 12 13 29t-7 31q-11 20-19.5 41T170-559q-5 17-18.5 28T121-520q-17 0-27.5-12.5T87-561q8-38 23-73.5t36-66.5q9-13 25-13.5t27 10.5Zm56 505q12-13 29.5-14t32.5 8q20 11 40.5 20t42.5 15q17 5 28 18t11 30q0 17-12.5 27T397-88q-38-8-71.5-23T260-146q-14-9-15.5-25t9.5-28Zm186-639q0 17-10.5 30T402-790q-23 6-44 14.5T317-755q-15 9-32.5 7.5T255-761q-12-12-10.5-28.5T260-815q32-20 66.5-34.5T399-872q16-3 28.5 7t12.5 27Zm360 358q0-113-69.5-199.5T553-792q-15-4-24-17t-9-29q0-16 11-26.5t25-7.5q140 28 232 137t92 255q0 146-92 255T556-88q-14 3-25-7.5T520-122q0-16 9-29t24-17q108-26 177.5-112.5T800-480Z"/>
    </Icon>
  );
});

IconMaterialSlowMotionVideo.displayName = 'OnesyIconMaterialSlowMotionVideo';

export default IconMaterialSlowMotionVideo;
