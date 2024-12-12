import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNordicWalking = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NordicWalking'

      short_name='NordicWalking'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m168-76 67-301q2-11 10-17t19-6q14 0 23 11t6 25L226-63q-2 11-10 17t-19 6q-14 0-23-11t-6-25Zm122-13 102-515-72 28v96q0 17-11.5 28.5T280-440q-17 0-28.5-11.5T240-480v-122q0-12 6.5-21.5T264-638l178-76q29-12 59-2.5t47 36.5l40 64q21 34 54.5 59t77.5 33q17 3 28.5 15t11.5 29q0 17-11.5 28t-27.5 9q-54-8-101-33.5T540-540l-24 120 72 68q6 6 9 13.5t3 15.5v243q0 17-11.5 28.5T560-40q-17 0-28.5-11.5T520-80v-200l-84-80-65 288q-3 14-14.5 23T330-40q-20 0-32-15t-8-34Zm250-651q-33 0-56.5-23.5T460-820q0-33 23.5-56.5T540-900q33 0 56.5 23.5T620-820q0 33-23.5 56.5T540-740ZM700-70v-300q0-13 8.5-21.5T730-400q13 0 21.5 8.5T760-370v300q0 13-8.5 21.5T730-40q-13 0-21.5-8.5T700-70Z"/>
    </Icon>
  );
});

IconMaterialNordicWalking.displayName = 'OnesyIconMaterialNordicWalking';

export default IconMaterialNordicWalking;
