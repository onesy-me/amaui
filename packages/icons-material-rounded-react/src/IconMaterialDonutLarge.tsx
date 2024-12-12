import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDonutLarge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DonutLarge'

      short_name='DonutLarge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-480q0 93 52.5 166.5T391-213q18 6 29.5 22.5T432-154q0 29-24.5 46t-53.5 7q-124-41-199-145T80-480q0-130 75-234t199-145q29-10 53.5 7t24.5 46q0 20-11.5 36.5T391-747q-86 27-138.5 100.5T200-480Zm562 282q-32 33-72.5 57.5T605-101q-29 10-53.5-7T527-154q0-20 11.5-36.5T568-213q31-10 59.5-27.5T679-281q23-24 40-51.5t28-59.5q6-18 22.5-29.5T806-433q29 0 46 24.5t7 53.5q-15 44-39.5 84T762-198Zm0-564q33 33 57.5 73t39.5 84q10 29-7 53.5T806-527q-20 0-36.5-11.5T747-568q-11-32-28-59.5T679-679q-23-23-51.5-40.5T568-747q-18-6-29.5-22.5T527-806q0-29 24.5-46t53.5-7q44 15 84.5 39.5T762-762Z"/>
    </Icon>
  );
});

IconMaterialDonutLarge.displayName = 'OnesyIconMaterialDonutLarge';

export default IconMaterialDonutLarge;
