import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStrategyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StrategyW100Filled'

      short_name='Strategy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m231-536-84-48q-6.75-3.71-10.87-10.77Q132-601.83 132-610v-96q0-8.17 4.13-15.23 4.12-7.06 10.87-10.77l84-48q6.68-4 14.84-4t15.16 4l84 48q6.75 3.71 10.88 10.77Q360-714.17 360-706v96q0 8.17-4.12 15.23-4.13 7.06-10.88 10.77l-84 48q-6.68 4-14.84 4T231-536Zm417 122v-151l70 41q14.25 8.13 22.13 21.43Q748-489.26 748-473v182q0 16.26-7.87 29.57-7.88 13.3-22.13 21.43l-154 90q-14.33 8-30.16 8-15.84 0-29.84-8l-154-90q-14.25-8.13-22.12-21.43Q320-274.74 320-291v-182q0-16.26 7.88-29.57 7.87-13.3 22.12-21.43l70-41v151q0 47.88 33.08 80.94 33.09 33.06 81 33.06Q582-300 615-333.06T648-414ZM548-640v226q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-384q0-12.75 8.63-21.38Q537.25-828 550-828h222q17.5 0 26.25 16T797-781l-20 30q-5 7.65-5 16.82 0 9.18 5 17.18l20 30q10 15 1.25 31T772-640H548Z"/>
    </Icon>
  );
});

IconMaterialStrategyW100Filled.displayName = 'OnesyIconMaterialStrategyW100Filled';

export default IconMaterialStrategyW100Filled;
