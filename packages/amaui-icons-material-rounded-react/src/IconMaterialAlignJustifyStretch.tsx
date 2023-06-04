import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignJustifyStretch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifyStretch'

      short_name='AlignJustifyStretch'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M840 976q-17 0-28.5-11.5T800 936V216q0-17 11.5-28.5T840 176q17 0 28.5 11.5T880 216v720q0 17-11.5 28.5T840 976Zm-720 0q-17 0-28.5-11.5T80 936V216q0-17 11.5-28.5T120 176q17 0 28.5 11.5T160 216v720q0 17-11.5 28.5T120 976Zm440-480q-17 0-28.5-11.5T520 456v-40q0-17 11.5-28.5T560 376h120q17 0 28.5 11.5T720 416v40q0 17-11.5 28.5T680 496H560Zm-280 0q-17 0-28.5-11.5T240 456v-40q0-17 11.5-28.5T280 376h120q17 0 28.5 11.5T440 416v40q0 17-11.5 28.5T400 496H280Zm280 280q-17 0-28.5-11.5T520 736v-40q0-17 11.5-28.5T560 656h120q17 0 28.5 11.5T720 696v40q0 17-11.5 28.5T680 776H560Zm-280 0q-17 0-28.5-11.5T240 736v-40q0-17 11.5-28.5T280 656h120q17 0 28.5 11.5T440 696v40q0 17-11.5 28.5T400 776H280Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifyStretch.displayName = 'AmauiIconMaterialAlignJustifyStretch';

export default IconMaterialAlignJustifyStretch;
