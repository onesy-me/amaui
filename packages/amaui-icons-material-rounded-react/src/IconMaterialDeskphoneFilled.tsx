import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeskphoneFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeskphoneFilled'

      short_name='Deskphone'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M680 856h80V296h-80v560ZM280 656q17 0 28.5-11.5T320 616q0-17-11.5-28.5T280 576q-17 0-28.5 11.5T240 616q0 17 11.5 28.5T280 656Zm0 120q17 0 28.5-11.5T320 736q0-17-11.5-28.5T280 696q-17 0-28.5 11.5T240 736q0 17 11.5 28.5T280 776Zm0-240h240q17 0 28.5-11.5T560 496v-80q0-17-11.5-28.5T520 376H280q-17 0-28.5 11.5T240 416v80q0 17 11.5 28.5T280 536Zm120 120q17 0 28.5-11.5T440 616q0-17-11.5-28.5T400 576q-17 0-28.5 11.5T360 616q0 17 11.5 28.5T400 656Zm0 120q17 0 28.5-11.5T440 736q0-17-11.5-28.5T400 696q-17 0-28.5 11.5T360 736q0 17 11.5 28.5T400 776Zm120-120q17 0 28.5-11.5T560 616q0-17-11.5-28.5T520 576q-17 0-28.5 11.5T480 616q0 17 11.5 28.5T520 656Zm0 120q17 0 28.5-11.5T560 736q0-17-11.5-28.5T520 696q-17 0-28.5 11.5T480 736q0 17 11.5 28.5T520 776Zm160 160q-23 0-40.5-11T611 896H200q-33 0-56.5-23.5T120 816V336q0-33 23.5-56.5T200 256h411q11-18 28.5-29t40.5-11h80q33 0 56.5 23.5T840 296v560q0 33-23.5 56.5T760 936h-80Z"/>
    </Icon>
  );
});

IconMaterialDeskphoneFilled.displayName = 'AmauiIconMaterialDeskphoneFilled';

export default IconMaterialDeskphoneFilled;
