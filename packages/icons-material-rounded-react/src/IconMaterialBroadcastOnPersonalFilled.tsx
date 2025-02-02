import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBroadcastOnPersonalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BroadcastOnPersonalFilled'

      short_name='BroadcastOnPersonal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-360q0-19 8.5-36t23.5-28l240-180q11-8 23-12t25-4q13 0 25 4t23 12l172 128q14 10 9.5 26T608-671q-58 14-107 46.5T418-543q-28 41-42.5 87.5T361-360q0 40 9.5 79t29.5 74q9 16 .5 31.5T375-160H160Zm520-400q-83 0-141.5 58T480-360q0 32 10 62t29 56q8 11 7.5 23t-9.5 21q-9 9-21 8.5T476-200q-26-35-41-75.5T420-360q0-109 76-184.5T680-620q109 0 184.5 75.5T940-360q0 44-14 84.5T885-200q-8 10-20 10.5t-21-8.5q-9-9-9.5-21.5T842-243q19-26 28.5-55.5T880-360q0-84-58-142t-142-58Zm0 100q-42 0-71 29t-29 71q0 12 3 23t9 22q6 11 6 24.5t-9 22.5q-9 9-21.5 8.5T548-271q-14-20-21-42.5t-7-46.5q0-67 47-113.5T680-520q67 0 113.5 46.5T840-360q0 23-6.5 46T813-271q-7 10-19 10.5t-21-8.5q-9-9-9.5-22t5.5-24q5-11 8-22t3-23q0-42-29-71t-71-29Zm0 340q-13 0-21.5-8.5T650-150v-170q-9-8-14.5-18.5T630-360q0-21 15-35.5t35-14.5q21 0 35.5 14.5T730-360q0 11-4.5 22T710-320v170q0 13-8.5 21.5T680-120Z"/>
    </Icon>
  );
});

IconMaterialBroadcastOnPersonalFilled.displayName = 'OnesyIconMaterialBroadcastOnPersonalFilled';

export default IconMaterialBroadcastOnPersonalFilled;
