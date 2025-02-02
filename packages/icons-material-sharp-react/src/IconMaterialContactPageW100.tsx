import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContactPageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactPageW100'

      short_name='ContactPage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-424q23 0 38.5-15.5T534-478q0-23-15.5-38.5T480-532q-23 0-38.5 15.5T426-478q0 23 15.5 38.5T480-424ZM346-296h268v-1q0-17-9-28t-24-18q-23.66-10.04-49.14-15.52Q506.39-364 480-364t-51.86 5.48Q402.66-353.04 379-343q-15 7-24 18t-9 28v1Zm402 164H212v-696h326l210 210v486Zm-28-28v-446L526-800H240v640h480Zm-480 0v-640 640Z"/>
    </Icon>
  );
});

IconMaterialContactPageW100.displayName = 'OnesyIconMaterialContactPageW100';

export default IconMaterialContactPageW100;
