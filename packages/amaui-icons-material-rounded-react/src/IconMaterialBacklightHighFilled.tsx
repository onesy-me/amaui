import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBacklightHighFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BacklightHighFilled'

      short_name='BacklightHigh'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 696q-17 0-28.5-11.5T40 656q0-17 11.5-28.5T80 616h80q17 0 28.5 11.5T200 656q0 17-11.5 28.5T160 696H80Zm202-238q-11 11-28 11t-28-11l-57-57q-11-11-11-27.5t11-28.5q12-12 28-12t28 12l57 57q11 11 11 28t-11 28Zm58 358q-25 0-42.5-17.5T280 756q0-25 17.5-42.5T340 696h280q25 0 42.5 17.5T680 756q0 25-17.5 42.5T620 816H340Zm140-440q-17 0-28.5-11.5T440 336V216q0-17 11.5-28.5T480 176q17 0 28.5 11.5T520 216v120q0 17-11.5 28.5T480 376Zm198 82q-11-11-11-28t11-28l57-57q11-11 27.5-11t28.5 11q12 12 12 28t-12 28l-57 57q-11 11-28 11t-28-11Zm122 238q-17 0-28.5-11.5T760 656q0-17 11.5-28.5T800 616h80q17 0 28.5 11.5T920 656q0 17-11.5 28.5T880 696h-80Z"/>
    </Icon>
  );
});

IconMaterialBacklightHighFilled.displayName = 'AmauiIconMaterialBacklightHighFilled';

export default IconMaterialBacklightHighFilled;
