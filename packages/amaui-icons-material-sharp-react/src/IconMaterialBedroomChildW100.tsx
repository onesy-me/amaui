import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBedroomChildW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedroomChildW100'

      short_name='BedroomChild'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 16.2h.7v-1.5h9v1.5h.7v-4.9h-1.5V8.6H8.3v2.7H6.8ZM9 11.3v-2h6v2ZM7.5 14v-2h9v2Zm-4.2 6.7V3.3h17.4v17.4ZM4 20h16V4H4Zm0 0V4v16Z"/>
    </Icon>
  );
});

IconMaterialBedroomChildW100.displayName = 'AmauiIconMaterialBedroomChildW100';

export default IconMaterialBedroomChildW100;
