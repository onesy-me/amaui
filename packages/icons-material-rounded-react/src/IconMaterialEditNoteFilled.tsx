import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditNoteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditNoteFilled'

      short_name='EditNote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-400q-17 0-28.5-11.5T160-440q0-17 11.5-28.5T200-480h200q17 0 28.5 11.5T440-440q0 17-11.5 28.5T400-400H200Zm0-160q-17 0-28.5-11.5T160-600q0-17 11.5-28.5T200-640h360q17 0 28.5 11.5T600-600q0 17-11.5 28.5T560-560H200Zm0-160q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h360q17 0 28.5 11.5T600-760q0 17-11.5 28.5T560-720H200Zm320 520v-66q0-8 3-15.5t9-13.5l209-208q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L655-172q-6 6-13.5 9t-15.5 3h-66q-17 0-28.5-11.5T520-200Zm263-184 37-39-37-37-38 38 38 38ZM580-220h38l121-122-18-19-19-18-122 121v38Zm0 0v-38l122-121 37 37-121 122h-38Z"/>
    </Icon>
  );
});

IconMaterialEditNoteFilled.displayName = 'OnesyIconMaterialEditNoteFilled';

export default IconMaterialEditNoteFilled;
