import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCommunication = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Communication'

      short_name='Communication'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-320v-23q0-59 57-78t103-19q46 0 103 19t57 78v23H40Zm160-160q-33 0-56.5-23.5T120-560q0-33 23.5-56.5T200-640q33 0 56.5 23.5T280-560q0 33-23.5 56.5T200-480Zm187 57q-12 0-21-9t-9-21q0-6 9-21 8-10 11-22t3-24q0-12-3-23.5T366-565q-4-5-6.5-10.5T357-587q0-13 8.5-21.5T387-617q8 0 14.5 4.5T413-602q13 18 20 39t7 43q0 22-7 42.5T413-438q-5 6-11.5 10.5T387-423Zm85 86q-13 0-22-8.5t-9-21.5q0-6 2.5-11.5T450-389q25-28 37.5-62t12.5-69q0-35-12.5-68.5T450-650q-4-5-6.5-10t-2.5-11q0-13 8.5-22t21.5-9q7 0 13 3t11 8q33 37 49 81t16 90q0 46-16.5 90.5T495-348q-5 5-10.5 8t-12.5 3Zm128 17v-23q0-59 57-78t103-19q46 0 103 19t57 78v23H600Zm160-160q-33 0-56.5-23.5T680-560q0-33 23.5-56.5T760-640q33 0 56.5 23.5T840-560q0 33-23.5 56.5T760-480Z"/>
    </Icon>
  );
});

IconMaterialCommunication.displayName = 'OnesyIconMaterialCommunication';

export default IconMaterialCommunication;
