import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSaveAs = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SaveAs'

      short_name='SaveAs'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h447q16 0 30.5 6t25.5 17l114 114q11 11 17 25.5t6 30.5v127q0 17-11.5 28.5T800-480q-17 0-28.5-11.5T760-520v-127L647-760H200v560h200q17 0 28.5 11.5T440-160q0 17-11.5 28.5T400-120H200Zm0-640v560-560ZM520-80v-66q0-8 3-15.5t9-13.5l209-208q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-260L655-52q-6 6-13.5 9T626-40h-66q-17 0-28.5-11.5T520-80Zm300-223-37-37 37 37ZM580-100h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19ZM280-560h280q17 0 28.5-11.5T600-600v-80q0-17-11.5-28.5T560-720H280q-17 0-28.5 11.5T240-680v80q0 17 11.5 28.5T280-560Zm200 320h4l116-115v-5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/>
    </Icon>
  );
});

IconMaterialSaveAs.displayName = 'OnesyIconMaterialSaveAs';

export default IconMaterialSaveAs;
