import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpeed125Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed125Filled'

      short_name='Speed125'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M700-280q-17 0-28.5-11.5T660-320q0-17 11.5-28.5T700-360h120v-80H700q-17 0-28.5-11.5T660-480v-160q0-17 11.5-28.5T700-680h160q17 0 28.5 11.5T900-640q0 17-11.5 28.5T860-600H740v80h80q33 0 56.5 23.5T900-440v80q0 33-23.5 56.5T820-280H700Zm-120 0H420q-17 0-28.5-11.5T380-320v-120q0-33 23.5-56.5T460-520h80v-80H420q-17 0-28.5-11.5T380-640q0-17 11.5-28.5T420-680h120q33 0 56.5 23.5T620-600v80q0 33-23.5 56.5T540-440h-80v80h120q17 0 28.5 11.5T620-320q0 17-11.5 28.5T580-280Zm-280 0q-17 0-28.5-11.5T260-320q0-17 11.5-28.5T300-360q17 0 28.5 11.5T340-320q0 17-11.5 28.5T300-280ZM140-600h-40q-17 0-28.5-11.5T60-640q0-17 11.5-28.5T100-680h80q17 0 28.5 11.5T220-640v320q0 17-11.5 28.5T180-280q-17 0-28.5-11.5T140-320v-280Z"/>
    </Icon>
  );
});

IconMaterialSpeed125Filled.displayName = 'OnesyIconMaterialSpeed125Filled';

export default IconMaterialSpeed125Filled;
