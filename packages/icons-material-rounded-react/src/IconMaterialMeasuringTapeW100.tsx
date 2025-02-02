import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMeasuringTapeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MeasuringTapeW100'

      short_name='MeasuringTape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-212H292q-24.75 0-42.37-17.63Q232-247.25 232-272v-228q0-120.28 83.8-204.14Q399.6-788 519.8-788T724-704.2q84 83.8 84 204T724.14-296Q640.28-212 520-212Zm0-28q108 0 184-76t76-184q0-108-76-184t-184-76q-108 0-184 76t-76 184v228q0 14 9 23t23 9h228Zm0-146q48 0 81-33t33-81q0-48-33-81t-81-33q-48 0-81 33t-33 81q0 48 33 81t81 33Zm-.12-28Q484-414 459-439.12t-25-61Q434-536 459.12-561t61-25Q556-586 581-560.88t25 61Q606-464 580.88-439t-61 25ZM165.96-212q-5.96 0-9.96-4.02-4-4.03-4-9.98v-120q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v120q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM520-500Z"/>
    </Icon>
  );
});

IconMaterialMeasuringTapeW100.displayName = 'OnesyIconMaterialMeasuringTapeW100';

export default IconMaterialMeasuringTapeW100;
