import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSnowshoeing = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Snowshoeing'

      short_name='Snowshoeing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-40q-18 0-43.5-19T255-98l-95-122 47-38 46 59 115-81 64-325-72 28v137h-80v-189l165-69q32-14 47-18t28-4q21 0 38.5 11t29.5 29l40 63q26 41 70.5 69T800-520v80q-66 0-123.5-28T580-541l-24 120 84 80v241q15-1 28.5-5t25.5-11q4-2 7.5-3t7.5-1q14 0 22.5 9.5T740-90q0 8-3.5 14.5T725-64q-20 12-42.5 18T635-40H480v-60h80v-181l-84-80-36 129-137 97 3 4q9 12 20.5 20T352-98q9 5 14 10.5t5 16.5q0 13-9 22t-22 9Zm240-700q-33 0-56.5-23.5T500-820q0-33 23.5-56.5T580-900q33 0 56.5 23.5T660-820q0 33-23.5 56.5T580-740Z"/>
    </Icon>
  );
});

IconMaterialSnowshoeing.displayName = 'OnesyIconMaterialSnowshoeing';

export default IconMaterialSnowshoeing;
