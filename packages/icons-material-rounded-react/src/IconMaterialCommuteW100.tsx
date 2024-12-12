import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCommuteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommuteW100'

      short_name='Commute'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M463-244v56q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-210q0-5 .5-10t2.5-10l39-110q6-17.78 21.75-28.89T534-568h218q19.5 0 35.25 11.11T809-528l39 110q2 5 2.5 10t.5 10v210q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-56H463Zm12-192h336l-29-82q-3-10-11-16t-19-6H534q-11 0-19 6t-11 16l-29 82Zm-12 28v136-136Zm64 98q14.45 0 24.22-9.77Q561-329.55 561-344q0-14.45-9.78-24.23Q541.45-378 527-378t-24.23 9.77Q493-358.45 493-344q0 14.45 9.77 24.23Q512.55-310 527-310Zm232 0q14.45 0 24.22-9.77Q793-329.55 793-344q0-14.45-9.78-24.23Q773.45-378 759-378t-24.22 9.77Q725-358.45 725-344q0 14.45 9.78 24.23Q744.55-310 759-310ZM220.5-186q-9.62 0-13.06-9.5Q204-205 211-212l54-54q-58 0-107-21.5T109-360v-346q0-33 60-50.5T343-774q114 0 174 17.5t60 50.5v44q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-44H137v292h188q12.75 0 21.38 8.62Q355-396.75 355-384v168q0 12.75-8.62 21.37Q337.75-186 325-186H220.5ZM203-326q14.45 0 24.23-9.77Q237-345.55 237-360q0-14.45-9.77-24.23Q217.45-394 203-394q-14.45 0-24.23 9.77Q169-374.45 169-360q0 14.45 9.77 24.23Q188.55-326 203-326Zm260 54h360v-136H463v136Z"/>
    </Icon>
  );
});

IconMaterialCommuteW100.displayName = 'OnesyIconMaterialCommuteW100';

export default IconMaterialCommuteW100;
