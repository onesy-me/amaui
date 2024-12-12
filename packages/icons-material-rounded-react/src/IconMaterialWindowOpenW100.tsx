import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWindowOpenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowOpenW100'

      short_name='WindowOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-172q-25 0-42.5-17.5T212-232v-496q0-25 17.5-42.5T272-788h416q25 0 42.5 17.5T748-728v496q0 25-17.5 42.5T688-172H272Zm-32-322h212v-13q0-6 4.5-10.5T467-522h26q6 0 10.5 4.5T508-507v13h212v-234q0-14-9-23t-23-9H272q-14 0-23 9t-9 23v234Zm32 294h448-480 32Z"/>
    </Icon>
  );
});

IconMaterialWindowOpenW100.displayName = 'OnesyIconMaterialWindowOpenW100';

export default IconMaterialWindowOpenW100;
