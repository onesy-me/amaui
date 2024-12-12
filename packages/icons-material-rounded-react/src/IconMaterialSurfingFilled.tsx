import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSurfingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SurfingFilled'

      short_name='Surfing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-40q-17 0-28.5-11.5T80-80q0-17 11.5-28.5T120-120q26 0 51.5-6.5T220-147q9-5 20-5t20 5q23 14 48.5 20.5T360-120q26 0 51.5-6.5T460-147q9-5 20.5-5t19.5 5q23 14 48.5 20.5T600-120q26 0 51.5-6.5T700-147q8-5 20-5t20 5q23 14 48.5 20.5T840-120q17 0 28.5 11.5T880-80q0 17-11.5 28.5T840-40q-31 0-61-7.5T720-70q-29 15-59 22.5T600-40q-31 0-61-7.5T480-70q-29 15-59 22.5T360-40q-31 0-61-7.5T240-70q-29 15-59 22.5T120-40Zm367-520 153 120v154q16 11 31 23t29 23q-21 18-46 29t-54 11q-36 0-67-17t-53-43q-22 26-53 43t-67 17q-10 0-19.5-1.5T322-206q-86-59-144-119t-58-104q0-31 24-41t50-10q29 0 67 8.5t81 24.5l-21-124q-4-20 4.5-39.5T352-642l86-58q-3 0-14.5-2.5t-25.5-5-25.5-5Q361-715 358-715l-80 55q-14 9-30 6t-26-17q-9-14-6-30.5t17-25.5l93-64q7-5 14.5-6.5t15.5.5l206 38q14 2 27 11t22 25l35 62q21 38 56.5 64t80.5 34q16 3 26.5 15t10.5 28q0 17-12 28t-28 9q-66-9-118.5-46T577-621l-90 61Zm-75 44 18 106q27 13 67 34.5t63 35.5v-60L412-516Zm268-224q-33 0-56.5-23.5T600-820q0-33 23.5-56.5T680-900q33 0 56.5 23.5T760-820q0 33-23.5 56.5T680-740Z"/>
    </Icon>
  );
});

IconMaterialSurfingFilled.displayName = 'OnesyIconMaterialSurfingFilled';

export default IconMaterialSurfingFilled;
