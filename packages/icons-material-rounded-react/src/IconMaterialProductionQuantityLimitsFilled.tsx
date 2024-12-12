import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialProductionQuantityLimitsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ProductionQuantityLimitsFilled'

      short_name='ProductionQuantityLimits'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM120-800H80q-17 0-28.5-11.5T40-840q0-17 11.5-28.5T80-880h66q11 0 21 6t15 17l159 337h280l145-260q5-10 14-15t20-5q23 0 34.5 19.5t.5 39.5L692-482q-11 20-29.5 31T622-440H324l-44 80h440q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280H280q-45 0-68.5-39t-1.5-79l54-98-144-304Zm360 220q-17 0-28.5-11.5T440-620q0-17 11.5-28.5T480-660q17 0 28.5 11.5T520-620q0 17-11.5 28.5T480-580Zm0-140q-17 0-28.5-11.5T440-760v-120q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v120q0 17-11.5 28.5T480-720Z"/>
    </Icon>
  );
});

IconMaterialProductionQuantityLimitsFilled.displayName = 'OnesyIconMaterialProductionQuantityLimitsFilled';

export default IconMaterialProductionQuantityLimitsFilled;
