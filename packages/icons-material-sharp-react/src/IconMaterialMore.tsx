import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMore = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='More'

      short_name='More'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M318-200 120-480l198-280h522v560H318Zm42-80h400v-400H360L218-480l142 200Zm400 0v-400 400ZM380-440q17 0 28.5-11.5T420-480q0-17-11.5-28.5T380-520q-17 0-28.5 11.5T340-480q0 17 11.5 28.5T380-440Zm140 0q17 0 28.5-11.5T560-480q0-17-11.5-28.5T520-520q-17 0-28.5 11.5T480-480q0 17 11.5 28.5T520-440Zm140 0q17 0 28.5-11.5T700-480q0-17-11.5-28.5T660-520q-17 0-28.5 11.5T620-480q0 17 11.5 28.5T660-440Z"/>
    </Icon>
  );
});

IconMaterialMore.displayName = 'OnesyIconMaterialMore';

export default IconMaterialMore;
