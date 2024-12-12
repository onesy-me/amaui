import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWashFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WashFilled'

      short_name='Wash'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80q-66 0-113-47T80-240v-216q0-31 14.5-57.5T135-557l306-199q11-7 23-5.5t21 10.5q20 20 23.5 47.5T497-652l-45 72h308q17 0 28.5 11.5T800-540q0 17-11.5 28.5T760-500H480v60h360q17 0 28.5 11.5T880-400q0 17-11.5 28.5T840-360H480v60h320q17 0 28.5 11.5T840-260q0 17-11.5 28.5T800-220H480v60h240q17 0 28.5 11.5T760-120q0 17-11.5 28.5T720-80H240Zm460-560q-39 0-69.5-30.5T600-740q0-45 29-87.5t56-74.5q6-8 15-8t15 8q27 32 56 74.5t29 87.5q0 39-30.5 69.5T700-640Z"/>
    </Icon>
  );
});

IconMaterialWashFilled.displayName = 'OnesyIconMaterialWashFilled';

export default IconMaterialWashFilled;
