import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPipExitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PipExitFilled'

      short_name='PipExit'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 896q-33 0-56.5-23.5T80 816V576q0-17 11.5-28.5T120 536h240q33 0 56.5-23.5T440 456V296q0-17 11.5-28.5T480 256h320q33 0 56.5 23.5T880 336v480q0 33-23.5 56.5T800 896H160Zm360-400q-17 0-28.5 11.5T480 536v160q0 17 11.5 28.5T520 736q17 0 28.5-11.5T560 696v-63l95 95q12 12 28 12t28-12q12-12 12-28.5T711 671l-95-95h64q17 0 28.5-11.5T720 536q0-17-11.5-28.5T680 496H520Zm-400-40q-17 0-28.5-11.5T80 416V296q0-17 11.5-28.5T120 256h200q17 0 28.5 11.5T360 296v120q0 17-11.5 28.5T320 456H120Z"/>
    </Icon>
  );
});

IconMaterialPipExitFilled.displayName = 'AmauiIconMaterialPipExitFilled';

export default IconMaterialPipExitFilled;
