import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNephrologyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NephrologyW100'

      short_name='Nephrology'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M402-162v-187q-14 13-30.47 20-16.46 7-35.53 7-84 0-139-63.5T142-536v-48q0-87 55-150.5T336-798q39.17 0 66.58 27.38Q430-743.24 430-704.12q0 39.12-27.42 66.62Q375.17-610 336-610h-54v-28h54q27 0 46.5-19.5T402-704q0-27-19.5-46.5T336-770q-72 0-119 55.5T170-584v48q0 75 47 130.5T336-350q27 0 46.5-19.5T402-416q0-27-19.5-46.5T336-482h-54v-28h54q39.17 0 66.58 27.42Q430-455.17 430-416v254h-28Zm128 0v-254q0-39.17 27.42-66.58Q584.83-510 624-510h54v28h-54q-27 0-46.5 19.5T558-416q0 27 19.5 46.5T624-350q72 0 119-55.5T790-536v-48q0-75-47-130.5T624-770q-27 0-46.5 19.5T558-704q0 27 19.5 46.5T624-638h54v28h-54q-39.17 0-66.58-27.38Q530-664.76 530-703.88q0-39.12 27.42-66.62Q584.83-798 624-798q84 0 139 63.5T818-584v48q0 87-55 150.5T624-322q-19.07 0-35.53-7Q572-336 558-349v187h-28ZM170-536v-48 48Zm620-48v48-48Z"/>
    </Icon>
  );
});

IconMaterialNephrologyW100.displayName = 'OnesyIconMaterialNephrologyW100';

export default IconMaterialNephrologyW100;
