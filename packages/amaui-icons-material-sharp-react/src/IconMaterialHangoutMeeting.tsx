import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHangoutMeeting = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HangoutMeeting'

      short_name='HangoutMeeting'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M380 656h160q17 0 28.5-11.5T580 616v-30l80 50V436l-80 50v-30q0-17-11.5-28.5T540 416H380q-17 0-28.5 11.5T340 456v160q0 17 11.5 28.5T380 656Zm100 360V876q-73 0-138.5-27.5t-114.5-74q-49-46.5-78-108T120 536q0-75 28.5-140.5t77-114.5q48.5-49 114-77T480 176q75 0 140.5 28T735 281q49 49 77 114.5T840 536q0 141-94 266.5T480 1016Zm80-144q96-72 148-159.5T760 536q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 104 84 182t196 78h80v76Zm-80-308Z"/>
    </Icon>
  );
});

IconMaterialHangoutMeeting.displayName = 'AmauiIconMaterialHangoutMeeting';

export default IconMaterialHangoutMeeting;
