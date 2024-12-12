import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTapAndPlayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TapAndPlayFilled'

      short_name='TapAndPlay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-40q-17 0-28.5-11.5T200-80q0-17 11.5-28.5T240-120q17 0 28.5 11.5T280-80q0 17-11.5 28.5T240-40Zm40-680v160q0 17-11.5 28.5T240-520q-17 0-28.5-11.5T200-560v-280q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v760q0 17-11.5 28.5T720-40q-17 0-28.5-11.5T680-80v-640H280Zm33 567q-15-15-33.5-26T240-195q-17-5-28.5-16.5T200-240q0-17 12-28.5t28-8.5q37 6 70.5 23.5T370-210q26 26 43.5 59.5T437-80q3 16-8.5 28T400-40q-17 0-28.5-11.5T355-80q-5-21-16-39.5T313-153Zm113-113q-38-38-85.5-61.5T240-358q-17-2-28.5-13.5T200-400q0-17 12-28.5t29-9.5q69 7 131 36.5T483-323q49 49 77.5 111T597-81q2 17-9 29t-28 12q-17 0-29-11.5T517-80q-7-53-30-100.5T426-266Z"/>
    </Icon>
  );
});

IconMaterialTapAndPlayFilled.displayName = 'OnesyIconMaterialTapAndPlayFilled';

export default IconMaterialTapAndPlayFilled;
