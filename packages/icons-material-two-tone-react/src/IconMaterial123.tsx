import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial123 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='123'

      short_name='123'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M7,15H5.5v-4.5H4V9h3V15z M13.5,13.5h-3v-1h2c0.55,0,1-0.45,1-1V10c0-0.55-0.45-1-1-1H9v1.5h3v1h-2c-0.55,0-1,0.45-1,1V15 h4.5V13.5z M19.5,14v-4c0-0.55-0.45-1-1-1H15v1.5h3v1h-2v1h2v1h-3V15h3.5C19.05,15,19.5,14.55,19.5,14z"/></g>
    </Icon>
  );
});

IconMaterial123.displayName = 'OnesyIconMaterial123';

export default IconMaterial123;
