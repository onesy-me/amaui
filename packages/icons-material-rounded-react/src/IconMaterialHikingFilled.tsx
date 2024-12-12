import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHikingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HikingFilled'

      short_name='Hiking'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M436-360 371-72q-3 14-14.5 23T330-40q-20 0-32-15t-8-34l113-573q6-29 27-43.5t44-14.5q23 0 42.5 10t31.5 30l40 64q18 29 46.5 52.5T700-529v-41q0-13 8.5-21.5T730-600q13 0 21.5 8.5T760-570v500q0 13-8.5 21.5T730-40q-13 0-21.5-8.5T700-70v-376q-48-11-89-35t-71-59l-24 120 72 68q6 6 9 13.5t3 15.5v243q0 17-11.5 28.5T560-40q-17 0-28.5-11.5T520-80v-200l-84-80Zm-178-82-46-9q-16-3-25-16.5t-6-30.5l30-157q6-34 36-51.5t65-10.5q17 3 25.5 16.5T343-670l-38 196q-3 17-16.5 26t-30.5 6Zm282-298q-33 0-56.5-23.5T460-820q0-33 23.5-56.5T540-900q33 0 56.5 23.5T620-820q0 33-23.5 56.5T540-740Z"/>
    </Icon>
  );
});

IconMaterialHikingFilled.displayName = 'OnesyIconMaterialHikingFilled';

export default IconMaterialHikingFilled;
