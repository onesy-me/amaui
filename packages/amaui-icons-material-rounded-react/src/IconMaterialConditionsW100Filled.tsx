import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConditionsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConditionsW100Filled'

      short_name='Conditions'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M400 326q-26.4 0-45.2-18.8Q336 288.4 336 262q0-26.4 18.8-45.2Q373.6 198 400 198q26.4 0 45.2 18.8Q464 235.6 464 262q0 26.4-18.8 45.2Q426.4 326 400 326Zm260 506q48 0 82-34t34-82q0-48-34-82t-82-34q-48 0-82 34t-34 82q0 48 34 82t82 34Zm92-5q-20 16-43.351 24.5Q685.297 860 660 860q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 25.297-8.5 48.649Q787 788 771 808l103 102q4 3.911 4 9.956Q878 926 874.071 930q-3.928 4-10 4Q858 934 854 930L752 827Zm-302 13q6 11 13 20.5t15 18.5v57q0 5.95-4.035 9.975-4.035 4.025-10 4.025T454 945.975q-4-4.025-4-9.975v-96ZM350 698v238q0 5.95-4.035 9.975-4.035 4.025-10 4.025T326 945.975q-4-4.025-4-9.975V426.12q-53.716-4.249-106.358-11.684Q163 407 110 396q-7-2-12-6.5t-3-11q2-6.5 8-9.5t13-1q70 16 141.174 23T400 398q71.652 0 142.826-7Q614 384 684 368q7-2 13.028.909 6.028 2.909 7.972 9.091 2 7-3 11.5t-12 6.5q-52.731 11.379-105.462 18.621Q531.807 421.862 478 426v127q-26 29-42 66t-19 79h-67Z"/>
    </Icon>
  );
});

IconMaterialConditionsW100Filled.displayName = 'AmauiIconMaterialConditionsW100Filled';

export default IconMaterialConditionsW100Filled;
