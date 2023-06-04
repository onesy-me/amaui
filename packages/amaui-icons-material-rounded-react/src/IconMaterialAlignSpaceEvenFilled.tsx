import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignSpaceEvenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignSpaceEvenFilled'

      short_name='AlignSpaceEven'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M320 776q-17 0-28.5-11.5T280 736v-40q0-17 11.5-28.5T320 656h320q17 0 28.5 11.5T680 696v40q0 17-11.5 28.5T640 776H320Zm0-280q-17 0-28.5-11.5T280 456v-40q0-17 11.5-28.5T320 376h320q17 0 28.5 11.5T680 416v40q0 17-11.5 28.5T640 496H320ZM120 976q-17 0-28.5-11.5T80 936q0-17 11.5-28.5T120 896h720q17 0 28.5 11.5T880 936q0 17-11.5 28.5T840 976H120Zm0-720q-17 0-28.5-11.5T80 216q0-17 11.5-28.5T120 176h720q17 0 28.5 11.5T880 216q0 17-11.5 28.5T840 256H120Z"/>
    </Icon>
  );
});

IconMaterialAlignSpaceEvenFilled.displayName = 'AmauiIconMaterialAlignSpaceEvenFilled';

export default IconMaterialAlignSpaceEvenFilled;
