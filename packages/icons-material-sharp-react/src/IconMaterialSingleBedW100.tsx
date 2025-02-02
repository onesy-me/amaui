import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSingleBedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SingleBedW100'

      short_name='SingleBed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M268-252h-16l-12-80h-28v-176h80v-148h376v148h80v176h-28l-12 80h-16l-12-80H280l-12 80Zm226-256h146v-120H494v120Zm-174 0h146v-120H320v120Zm-80 148h480v-120H240v120Zm480 0H240h480Z"/>
    </Icon>
  );
});

IconMaterialSingleBedW100.displayName = 'OnesyIconMaterialSingleBedW100';

export default IconMaterialSingleBedW100;
