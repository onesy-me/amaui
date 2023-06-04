import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackgroundDotLarge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackgroundDotLarge'

      short_name='BackgroundDotLarge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M340 776q25 0 42.5-17.5T400 716q0-25-17.5-42.5T340 656q-25 0-42.5 17.5T280 716q0 25 17.5 42.5T340 776Zm0-280q25 0 42.5-17.5T400 436q0-25-17.5-42.5T340 376q-25 0-42.5 17.5T280 436q0 25 17.5 42.5T340 496Zm280 280q25 0 42.5-17.5T680 716q0-25-17.5-42.5T620 656q-25 0-42.5 17.5T560 716q0 25 17.5 42.5T620 776Zm0-280q25 0 42.5-17.5T680 436q0-25-17.5-42.5T620 376q-25 0-42.5 17.5T560 436q0 25 17.5 42.5T620 496ZM120 936V216h720v720H120Zm80-80h560V296H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialBackgroundDotLarge.displayName = 'AmauiIconMaterialBackgroundDotLarge';

export default IconMaterialBackgroundDotLarge;
