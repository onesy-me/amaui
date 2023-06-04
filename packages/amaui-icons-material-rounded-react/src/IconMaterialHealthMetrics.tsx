import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHealthMetrics = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HealthMetrics'

      short_name='HealthMetrics'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M360 976q-33 0-56.5-23.5T280 896V776H160q-33 0-56.5-23.5T80 696V456q0-33 23.5-56.5T160 376h120V256q0-33 23.5-56.5T360 176h240q33 0 56.5 23.5T680 256v120h120q33 0 56.5 23.5T880 456v240q0 33-23.5 56.5T800 776H680v120q0 33-23.5 56.5T600 976H360ZM160 536h200q10 0 19 5t14 13l35 52 54-162q4-12 14.5-20t23.5-8q10 0 19 5t14 13l68 102h179v-80H640q-17 0-28.5-11.5T600 416V256H360v160q0 17-11.5 28.5T320 456H160v80Zm0 80v80h160q17 0 28.5 11.5T360 736v160h240V736q0-17 11.5-28.5T640 696h160v-80H600q-10 0-19-5t-15-13l-34-52-54 162q-4 12-15 20t-24 8q-10 0-19-5t-14-13l-68-102H160Zm-80 0h80v80h160q17 0 28.5 11.5T360 736v160h240V736q0-17 11.5-28.5T640 696h160v-80h80v-80h-80v-80H640q-17 0-28.5-11.5T600 416V256H360v160q0 17-11.5 28.5T320 456H160v80H80v80Z"/>
    </Icon>
  );
});

IconMaterialHealthMetrics.displayName = 'AmauiIconMaterialHealthMetrics';

export default IconMaterialHealthMetrics;
