import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignSelfStretchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignSelfStretchFilled'

      short_name='AlignSelfStretch'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 976q-17 0-28.5-11.5T80 936q0-17 11.5-28.5T120 896h720q17 0 28.5 11.5T880 936q0 17-11.5 28.5T840 976H120Zm340-180q-17 0-28.5-11.5T420 756V376q0-17 11.5-28.5T460 336h40q17 0 28.5 11.5T540 376v380q0 17-11.5 28.5T500 796h-40ZM120 256q-17 0-28.5-11.5T80 216q0-17 11.5-28.5T120 176h720q17 0 28.5 11.5T880 216q0 17-11.5 28.5T840 256H120Z"/>
    </Icon>
  );
});

IconMaterialAlignSelfStretchFilled.displayName = 'AmauiIconMaterialAlignSelfStretchFilled';

export default IconMaterialAlignSelfStretchFilled;
