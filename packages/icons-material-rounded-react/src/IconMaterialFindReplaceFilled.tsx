import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFindReplaceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FindReplaceFilled'

      short_name='FindReplace'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-720q-63 0-113.5 34.5T254-595q-6 15-19.5 22.5T205-568q-16-3-25.5-15.5T175-610q27-84 99-137t166-53q59 0 110.5 22.5T640-716v-44q0-17 11.5-28.5T680-800q17 0 28.5 11.5T720-760v160q0 17-11.5 28.5T680-560H520q-17 0-28.5-11.5T480-600q0-17 11.5-28.5T520-640h80q-29-36-69.5-58T440-720Zm0 480q-59 0-110.5-22.5T240-324v44q0 17-11.5 28.5T200-240q-17 0-28.5-11.5T160-280v-160q0-17 11.5-28.5T200-480h160q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400h-80q29 36 69.5 58t90.5 22q62 0 111.5-33t72.5-87q7-16 20.5-25.5T675-472q17 4 25 18t3 30q-7 20-16.5 37.5T664-352l148 148q11 11 11 28t-11 28q-11 11-28 11t-28-11L608-296q-36 27-78.5 41.5T440-240Z"/>
    </Icon>
  );
});

IconMaterialFindReplaceFilled.displayName = 'OnesyIconMaterialFindReplaceFilled';

export default IconMaterialFindReplaceFilled;
