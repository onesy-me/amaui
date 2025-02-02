import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSkullW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkullW100'

      short_name='Skull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M292-132v-152q-36-15-65.5-39T176-378q-21-31-32.5-67T132-520q0-136 97.42-222 97.41-86 250.5-86Q633-828 730.5-742T828-520q0 39-11.5 75T784-378q-21 31-50.5 55T668-283.82V-132H292Zm28-28h62v-56h56v56h84v-56h56v56h62v-142q36-12 65.5-33.5t50.65-50.05q21.15-28.54 32.5-63Q800-483 800-520q0-125-88.5-202.5T480-800q-143 0-231.5 77.5T160-520q0 37 11.35 71.45 11.35 34.46 32.5 63Q225-357 254.5-335.5 284-314 320-302v142Zm110-200h100l-50-100-50 100Zm-89.82-100q24.82 0 42.32-17.68 17.5-17.67 17.5-42.5 0-24.82-17.68-42.32-17.67-17.5-42.5-17.5-24.82 0-42.32 17.68-17.5 17.67-17.5 42.5 0 24.82 17.68 42.32 17.67 17.5 42.5 17.5Zm280 0q24.82 0 42.32-17.68 17.5-17.67 17.5-42.5 0-24.82-17.68-42.32-17.67-17.5-42.5-17.5-24.82 0-42.32 17.68-17.5 17.67-17.5 42.5 0 24.82 17.68 42.32 17.67 17.5 42.5 17.5ZM480-160Z"/>
    </Icon>
  );
});

IconMaterialSkullW100.displayName = 'OnesyIconMaterialSkullW100';

export default IconMaterialSkullW100;
