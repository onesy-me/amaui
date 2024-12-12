import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrayerTimesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrayerTimesW100'

      short_name='PrayerTimes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m513-496 47-34 46 34-18-55 47-33h-58l-17-56-17.6 56H484l47 33-18 55Zm-33.28 176Q546-320 593-366.35t47-113.47q0-6.39-.5-12.79Q639-499 637-505q-8.78 37.43-39.1 61.71Q567.58-419 526.88-419 479-419 446-452q-33-33-33-80 0-38 21.5-67t54.5-41h-8.81q-67.28 0-113.74 46.76Q320-546.48 320-480.14q0 67.14 46.32 113.64t113.4 46.5Zm.28 220L367.77-212H212v-155.77L100-480l112-112.22V-748h155.77L480-860l112.22 112H748v155.78L860-480 748-367.77V-212H592.22L480-100Zm0-40 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0-340Z"/>
    </Icon>
  );
});

IconMaterialPrayerTimesW100.displayName = 'OnesyIconMaterialPrayerTimesW100';

export default IconMaterialPrayerTimesW100;
