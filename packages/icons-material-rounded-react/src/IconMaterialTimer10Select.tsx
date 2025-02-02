import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimer10Select = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer10Select'

      short_name='Timer10Select'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-320h120v-320H400v320Zm0 120q-50 0-85-35t-35-85v-320q0-50 35-85t85-35h120q50 0 85 35t35 85v320q0 50-35 85t-85 35H400ZM120-640h-20q-25 0-42.5-17.5T40-700q0-25 17.5-42.5T100-760h80q25 0 42.5 17.5T240-700v440q0 25-17.5 42.5T180-200q-25 0-42.5-17.5T120-260v-380Zm746 440H720q-17 0-28.5-11.5T680-240q0-17 11.5-28.5T720-280h120v-40H734q-23 0-38.5-15.5T680-374v-92q0-23 15.5-38.5T734-520h146q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440H760v40h106q23 0 38.5 15.5T920-346v92q0 23-15.5 38.5T866-200Z"/>
    </Icon>
  );
});

IconMaterialTimer10Select.displayName = 'OnesyIconMaterialTimer10Select';

export default IconMaterialTimer10Select;
