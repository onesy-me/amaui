import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWash = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wash'

      short_name='Wash'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M700-640q-39 0-69.5-30.5T600-740q0-45 29-87.5t56-74.5q6-8 15-8t15 8q27 32 56 74.5t29 87.5q0 39-30.5 69.5T700-640ZM240-80q-66 0-113-47T80-240v-216q0-31 14.5-57.5T135-557l306-199q11-7 23-5.5t21 10.5q20 20 23.5 47.5T497-652l-45 72h308q17 0 28.5 11.5T800-540q0 17-11.5 28.5T760-500H380q-23 0-35-20.5t1-40.5l39-63-207 134q-9 5-13.5 14t-4.5 20v216q0 33 23.5 56.5T240-160h480q17 0 28.5 11.5T760-120q0 17-11.5 28.5T720-80H240Zm600-280H520q-17 0-28.5-11.5T480-400q0-17 11.5-28.5T520-440h320q17 0 28.5 11.5T880-400q0 17-11.5 28.5T840-360Zm-40 140H520q-17 0-28.5-11.5T480-260q0-17 11.5-28.5T520-300h280q17 0 28.5 11.5T840-260q0 17-11.5 28.5T800-220ZM320-330Z"/>
    </Icon>
  );
});

IconMaterialWash.displayName = 'OnesyIconMaterialWash';

export default IconMaterialWash;
