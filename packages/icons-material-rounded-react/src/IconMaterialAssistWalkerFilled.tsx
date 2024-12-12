import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssistWalkerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistWalkerFilled'

      short_name='AssistWalker'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m523-153 31-298q-57-15-86-39.5T410-544l-95 94 73 73q6 6 9 13.5t3 15.5v188q0 17-11.5 28.5T360-120q-17 0-28.5-11.5T320-160v-170l-31-28 5 37q1 8-1 16t-7 14L173-146q-10 13-26.5 15t-29.5-9q-13-11-15-27t9-29l101-130-57-112q-8-17-9-42.5t17-43.5l134-132q12-12 26.5-18t29.5-6q24 0 38 9t19 14l80 79q27 27 66 42.5t84 15.5h66q23 0 40 15.5t19 38.5l26 254q13 8 21 21.5t8 30.5q0 25-17.5 42.5T760-100q-25 0-43-17.5T699-160q0-17 8-30.5t22-21.5l-5-48H594l-11 113q-2 11-10.5 19t-19.5 8q-14 0-23-9.5t-7-23.5Zm-23-507q-33 0-56.5-23.5T420-740q0-33 23.5-56.5T500-820q33 0 56.5 23.5T580-740q0 33-23.5 56.5T500-660Zm100 340h118l-14-140h-89l-15 140Z"/>
    </Icon>
  );
});

IconMaterialAssistWalkerFilled.displayName = 'OnesyIconMaterialAssistWalkerFilled';

export default IconMaterialAssistWalkerFilled;
