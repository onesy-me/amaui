import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChatPasteGoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatPasteGoFilled'

      short_name='ChatPasteGo'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M727 816H600q-17 0-28.5-11.5T560 776q0-17 11.5-28.5T600 736h127l-35-35q-11-12-11.5-28.5T692 644q12-12 28-12t28 12l104 104q12 12 12 28t-12 28L748 908q-12 12-28 12t-28-12q-12-12-11.5-28.5T692 851l35-35ZM320 496h240q17 0 28.5-11.5T600 456q0-17-11.5-28.5T560 416H320q-17 0-28.5 11.5T280 456q0 17 11.5 28.5T320 496Zm0 160h120q17 0 28.5-11.5T480 616q0-17-11.5-28.5T440 576H320q-17 0-28.5 11.5T280 616q0 17 11.5 28.5T320 656Zm-80 160-86 86q-10 10-22 5t-12-19V336q0-33 23.5-56.5T200 256h480q33 0 56.5 23.5T760 336v203q-10-2-20-2.5t-20-.5q-101 0-170.5 70T480 776q0 10 .5 20t2.5 20H240Z"/>
    </Icon>
  );
});

IconMaterialChatPasteGoFilled.displayName = 'AmauiIconMaterialChatPasteGoFilled';

export default IconMaterialChatPasteGoFilled;
