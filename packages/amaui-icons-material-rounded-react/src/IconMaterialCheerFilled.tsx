import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheerFilled'

      short_name='Cheer'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m303 277-22-64q-4-11 1.5-22t17.5-15q11-4 22 2t15 17l22 63q4 11-2 22t-17 15q-12 4-22.5-1T303 277Zm147-51v-60q0-13 8.5-21.5T480 136q13 0 21.5 8.5T510 166v60q0 13-8.5 21.5T480 256q-13 0-21.5-8.5T450 226Zm152 32 21-63q4-11 14.5-16.5T660 177q11 4 17 15t2 22l-22 63q-4 11-15 17t-22 2q-11-4-16.5-15.5T602 258Zm62 726q-34-5-59.5-27.5T568 902l-34-106q-11-35-1-69.5t36-57.5l49 152q2 8 9 11.5t15 1.5q8-2 11-9t1-15l-82-260q-13-41 2.5-80.5T627 409l14-8q15-8 31-3.5t24 19.5l158 298q5 10 14.5 15.5T889 736q11 0 19 9t6 20l-33 212q-2 17-15 26t-30 7l-172-26Zm-367 0-172 26q-17 2-30-7t-15-26L47 765q-2-11 6-20t19-9q11 0 20.5-5.5T107 715l158-298q8-15 24-19.5t31 3.5l14 8q37 21 52.5 60.5T389 550l-83 260q-2 8 1 15t11 9q8 2 15-1.5t9-11.5l49-153q27 23 37 58t-1 70l-34 106q-11 32-36.5 54.5T297 984Z"/>
    </Icon>
  );
});

IconMaterialCheerFilled.displayName = 'AmauiIconMaterialCheerFilled';

export default IconMaterialCheerFilled;
