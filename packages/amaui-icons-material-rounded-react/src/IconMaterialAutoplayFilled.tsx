import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoplayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoplayFilled'

      short_name='Autoplay'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M380 719V433q0-12 10.5-18t20.5 1l223 143q9 6 9 17t-9 17L411 736q-10 7-20.5 1T380 719ZM120 828v68q0 17-11.5 28.5T80 936q-17 0-28.5-11.5T40 896V736q0-17 11.5-28.5T80 696h160q17 0 28.5 11.5T280 736q0 17-11.5 28.5T240 776h-58q51 75 129.5 117.5T480 936q104 0 190-54t132-145q9-17 23.5-27t33.5-6q18 4 23.5 20.5T879 760q-54 116-161 186t-238 70q-108 0-202.5-49.5T120 828ZM83 536q-17 0-27.5-12.5T48 494q10-47 26-86.5t43-79.5q10-15 26-17t29 11q14 14 14 30.5T175 386q-17 26-27 52t-18 57q-4 18-16.5 29.5T83 536Zm357-358q0 19-11.5 31T398 225q-30 7-55.5 18T291 271q-16 11-32.5 10T228 266q-12-12-10.5-27.5T233 212q39-26 77.5-42.5T396 144q18-3 31 7t13 27Zm294 88q-14 14-31 14.5T670 270q-26-17-52-27t-57-18q-18-4-29.5-16.5T520 178q0-17 12.5-27t29.5-7q48 9 87 25t79 43q14 10 16 26t-10 28Zm144 270q-19 0-31-11.5T831 494q-8-31-18.5-56.5T785 385q-11-16-10-32.5t15-30.5q12-12 27.5-10t26.5 16q27 40 43 79t25 87q3 17-7 29.5T878 536Z"/>
    </Icon>
  );
});

IconMaterialAutoplayFilled.displayName = 'AmauiIconMaterialAutoplayFilled';

export default IconMaterialAutoplayFilled;
