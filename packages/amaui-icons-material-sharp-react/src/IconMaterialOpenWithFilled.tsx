import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenWithFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenWithFilled'

      short_name='OpenWith'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 22-4.25-4.25L9.2 16.3l1.8 1.85V14h2v4.15l1.8-1.85 1.45 1.45Zm-5.75-5.75L2 12l4.25-4.25 1.4 1.45-1.8 1.8H10v2H5.85l1.85 1.8Zm11.5 0L16.3 14.8l1.85-1.8H14v-2h4.15L16.3 9.2l1.45-1.45L22 12ZM11 10V5.85l-1.8 1.8-1.45-1.4L12 2l4.25 4.25L14.8 7.7 13 5.85V10Z"/>
    </Icon>
  );
});

IconMaterialOpenWithFilled.displayName = 'AmauiIconMaterialOpenWithFilled';

export default IconMaterialOpenWithFilled;
