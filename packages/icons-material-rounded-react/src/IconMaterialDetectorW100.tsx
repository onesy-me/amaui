import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetectorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorW100'

      short_name='Detector'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-172q-73 0-140.5-25T215-269q-3-2-4.5-5t-1.5-7q0-6 4-10t10-4q3 0 5.5 1t4.5 3q52 45 115.5 68T481-200q68 0 131.5-22.5T728-289q2-2 4.5-3t5.5-1q6 0 10 4t4 10q0 4-1.5 6.5T746-268q-57 47-125 71.5T480-172Zm0-148q-43 0-83-14.5T323-375q-3-2-5-5t-2-7q0-6 4-10t10-4q3 0 5.5 1t4.5 3q30 24 66.5 36.5T481-348q38 0 74-12.5t66-36.5q2-2 4.5-3t5.5-1q6 0 10 4t4 10q0 4-2 7t-5 5q-35 27-74.5 41T480-320ZM200-760v48q0 14 9 23t23 9h496q14 0 23-9t9-23v-48H200Zm94 108 22 59q4 10 12 15.5t18 5.5h268q10 0 18-5.5t12-15.5l22-59H294Zm52 108q-19 0-34.5-10.5T289-583l-25-69h-32q-25 0-42.5-17.5T172-712v-46q0-13 8.5-21.5T202-788h556q13 0 21.5 8.5T788-758v46q0 25-17.5 42.5T728-652h-32l-27 69q-7 17-22 28t-34 11H346ZM200-760v80-80Z"/>
    </Icon>
  );
});

IconMaterialDetectorW100.displayName = 'OnesyIconMaterialDetectorW100';

export default IconMaterialDetectorW100;
