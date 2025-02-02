import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsSlowMotionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsSlowMotionFilled'

      short_name='SettingsSlowMotion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 22.5-15t24.5-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-74 56q-30-15-62-23t-66-8q-20 0-38.5 3.5T604-548q-19-33-51.5-52.5T482-620q-58 0-99 41t-41 99q0 38 18.5 70t50.5 51q-6 20-8.5 41.5T400-275q1 56 22.5 106.5T484-80H370Zm278-4q-64-10-109.5-56T483-250h59q9 40 37.5 68.5T648-144v60Zm60 1v-61q48-11 79-48t31-88q0-51-31-88t-79-48v-61q72 11 121 66.5T878-280q0 75-49 130.5T708-83ZM483-310q10-64 55.5-110T648-476v60q-40 9-68.5 37.5T542-310h-59Zm155 110v-160l124 80-124 80Z"/>
    </Icon>
  );
});

IconMaterialSettingsSlowMotionFilled.displayName = 'OnesyIconMaterialSettingsSlowMotionFilled';

export default IconMaterialSettingsSlowMotionFilled;
