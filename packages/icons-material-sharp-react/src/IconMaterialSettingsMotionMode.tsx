import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsMotionMode = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsMotionMode'

      short_name='SettingsMotionMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-80v-400q16 0 31 2.5t29 7.5v380q-14 5-29 7.5T680-80Zm-100-28v-344q14-8 28.5-14.5T640-476v392q-17-3-31.5-9.5T580-108Zm200 0v-344q45 26 72.5 71T880-280q0 56-27.5 101T780-108Zm-240-30q-28-27-44-63.5T480-280q0-42 16-79t44-64v285Zm-60-342ZM370-80l-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-74 56q-22-11-45-18.5T714-558l63-48-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q17 17 36.5 30.5T400-275q1 57 23.5 107T484-80H370Zm41-279q6-20 14.5-38.5T445-433q-11-8-17-20.5t-6-26.5q0-25 17.5-42.5T482-540q14 0 27 6.5t21 17.5q17-11 35-19.5t38-13.5q-18-32-50-51.5T482-620q-59 0-99.5 41T342-480q0 38 18.5 70.5T411-359Z"/>
    </Icon>
  );
});

IconMaterialSettingsMotionMode.displayName = 'OnesyIconMaterialSettingsMotionMode';

export default IconMaterialSettingsMotionMode;
