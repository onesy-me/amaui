import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonSearchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonSearchW100'

      short_name='PersonSearch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-512q-44.55 0-76.27-31.72Q332-575.45 332-620t31.73-76.28Q395.45-728 440-728t76.28 31.72Q548-664.55 548-620t-31.72 76.28Q484.55-512 440-512Zm0-28q33 0 56.5-23.5T520-620q0-33-23.5-56.5T440-700q-33 0-56.5 23.5T360-620q0 33 23.5 56.5T440-540Zm398 438L738-202q-19 14-39 20t-38.79 6Q608-176 572-212.24q-36-36.23-36-88Q536-352 572.24-388q36.23-36 88-36Q712-424 748-387.83q36 36.16 36 87.83 0 19-6 39t-20 39l100 100-20 20ZM660-204q41 0 68.5-27.5T756-300q0-41-27.5-68.5T660-396q-41 0-68.5 27.5T564-300q0 41 27.5 68.5T660-204Zm-488-28v-52q0-23 13.5-41.5T222-356q41-20 111.5-39T485-406q-4 8-7.48 14.18-3.47 6.19-5.52 12.82-75-6-140 12.5T236-332q-17 8-26.5 20.67Q200-298.67 200-284v24h260q1 6 3 13.5t4 14.5H172Zm268-388Zm20 360Z"/>
    </Icon>
  );
});

IconMaterialPersonSearchW100.displayName = 'OnesyIconMaterialPersonSearchW100';

export default IconMaterialPersonSearchW100;
