import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCasinoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CasinoW100Filled'

      short_name='Casino'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M330-300q12.5 0 21.25-8.75T360-330q0-12.5-8.75-21.25T330-360q-12.5 0-21.25 8.75T300-330q0 12.5 8.75 21.25T330-300Zm0-300q12.5 0 21.25-8.75T360-630q0-12.5-8.75-21.25T330-660q-12.5 0-21.25 8.75T300-630q0 12.5 8.75 21.25T330-600Zm150 150q12.5 0 21.25-8.75T510-480q0-12.5-8.75-21.25T480-510q-12.5 0-21.25 8.75T450-480q0 12.5 8.75 21.25T480-450Zm150 150q12.5 0 21.25-8.75T660-330q0-12.5-8.75-21.25T630-360q-12.5 0-21.25 8.75T600-330q0 12.5 8.75 21.25T630-300Zm0-300q12.5 0 21.25-8.75T660-630q0-12.5-8.75-21.25T630-660q-12.5 0-21.25 8.75T600-630q0 12.5 8.75 21.25T630-600ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialCasinoW100Filled.displayName = 'OnesyIconMaterialCasinoW100Filled';

export default IconMaterialCasinoW100Filled;
