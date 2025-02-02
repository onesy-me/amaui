import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPedalBikeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PedalBikeFilled'

      short_name='PedalBike'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160q-85 0-142.5-57.5T0-360q0-85 58.5-142.5T200-560q77 0 129.5 46T396-400h26l-72-200h-30q-17 0-28.5-11.5T280-640q0-17 11.5-28.5T320-680h120q17 0 28.5 11.5T480-640q0 17-11.5 28.5T440-600h-4l14 40h192l-58-160h-64q-17 0-28.5-11.5T480-760q0-17 11.5-28.5T520-800h64q26 0 46.5 14t29.5 38l68 186h32q83 0 141.5 58.5T960-362q0 84-58 143t-142 59q-72 0-126.5-45T564-320H396q-14 69-68 114.5T200-160Zm112-160v-80h-72q-17 0-28.5 11.5T200-360q0 17 11.5 28.5T240-320h72Zm196-80h56q5-23 13.5-43t22.5-37H478l30 80Zm174-52 24 68q5 16 20.5 23t31.5 1q16-6 23-21t1-31l-26-68-74 28Z"/>
    </Icon>
  );
});

IconMaterialPedalBikeFilled.displayName = 'OnesyIconMaterialPedalBikeFilled';

export default IconMaterialPedalBikeFilled;
