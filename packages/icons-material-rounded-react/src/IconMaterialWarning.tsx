import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWarning = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Warning'

      short_name='Warning'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M109-120q-11 0-20-5.5T75-140q-5-9-5.5-19.5T75-180l370-640q6-10 15.5-15t19.5-5q10 0 19.5 5t15.5 15l370 640q6 10 5.5 20.5T885-140q-5 9-14 14.5t-20 5.5H109Zm69-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm0-120q17 0 28.5-11.5T520-400v-120q0-17-11.5-28.5T480-560q-17 0-28.5 11.5T440-520v120q0 17 11.5 28.5T480-360Zm0-100Z"/>
    </Icon>
  );
});

IconMaterialWarning.displayName = 'OnesyIconMaterialWarning';

export default IconMaterialWarning;
