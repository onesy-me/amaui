import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignSpaceAroundFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignSpaceAroundFilled'

      short_name='AlignSpaceAround'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M320 816q-17 0-28.5-11.5T280 776v-40q0-17 11.5-28.5T320 696h320q17 0 28.5 11.5T680 736v40q0 17-11.5 28.5T640 816H320Zm0-360q-17 0-28.5-11.5T280 416v-40q0-17 11.5-28.5T320 336h320q17 0 28.5 11.5T680 376v40q0 17-11.5 28.5T640 456H320ZM120 976q-17 0-28.5-11.5T80 936q0-17 11.5-28.5T120 896h720q17 0 28.5 11.5T880 936q0 17-11.5 28.5T840 976H120Zm0-720q-17 0-28.5-11.5T80 216q0-17 11.5-28.5T120 176h720q17 0 28.5 11.5T880 216q0 17-11.5 28.5T840 256H120Z"/>
    </Icon>
  );
});

IconMaterialAlignSpaceAroundFilled.displayName = 'AmauiIconMaterialAlignSpaceAroundFilled';

export default IconMaterialAlignSpaceAroundFilled;
