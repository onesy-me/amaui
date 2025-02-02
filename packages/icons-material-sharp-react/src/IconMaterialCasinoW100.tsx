import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCasinoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CasinoW100'

      short_name='Casino'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M330-300q12.5 0 21.25-8.75T360-330q0-12.5-8.75-21.25T330-360q-12.5 0-21.25 8.75T300-330q0 12.5 8.75 21.25T330-300Zm0-300q12.5 0 21.25-8.75T360-630q0-12.5-8.75-21.25T330-660q-12.5 0-21.25 8.75T300-630q0 12.5 8.75 21.25T330-600Zm150 150q12.5 0 21.25-8.75T510-480q0-12.5-8.75-21.25T480-510q-12.5 0-21.25 8.75T450-480q0 12.5 8.75 21.25T480-450Zm150 150q12.5 0 21.25-8.75T660-330q0-12.5-8.75-21.25T630-360q-12.5 0-21.25 8.75T600-330q0 12.5 8.75 21.25T630-300Zm0-300q12.5 0 21.25-8.75T660-630q0-12.5-8.75-21.25T630-660q-12.5 0-21.25 8.75T600-630q0 12.5 8.75 21.25T630-600ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialCasinoW100.displayName = 'OnesyIconMaterialCasinoW100';

export default IconMaterialCasinoW100;
