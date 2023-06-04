import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWrist = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wrist'

      short_name='Wrist'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M244 776H80q-17 0-28.5-11.5T40 736q0-17 11.5-28.5T80 696h163q16 0 30.5 6t25.5 17l115 114-30-59q-10-20 1.5-39t34.5-19h380q17 0 28.5 11.5T840 756q0 17-11.5 28.5T800 796H485l6 12q17 35 10.5 72.5T468 945q-12 11-28 11t-27-11L244 776ZM40 416q0-17 11.5-28.5T80 376h144l44-45q17-17 39-26t46-9h407q17 0 28.5 11.5T800 336q0 17-11.5 28.5T760 376H353q-8 0-15 3.5t-13 8.5l-46 45q-11 11-25.5 17t-30.5 6H80q-17 0-28.5-11.5T40 416Zm0 188Zm840 52H600q-17 0-28.5-11.5T560 616q0-17 11.5-28.5T600 576h280q17 0 28.5 11.5T920 616q0 17-11.5 28.5T880 656Zm-40-140H600q-17 0-28.5-11.5T560 476q0-17 11.5-28.5T600 436h240q17 0 28.5 11.5T880 476q0 17-11.5 28.5T840 516Z"/>
    </Icon>
  );
});

IconMaterialWrist.displayName = 'AmauiIconMaterialWrist';

export default IconMaterialWrist;
