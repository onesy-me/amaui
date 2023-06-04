import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLetterSwitch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LetterSwitch'

      short_name='LetterSwitch'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M600 976V736h80v111q42-60 61-129.5T760 576q0-72-19-141.5T680 305v111h-80V176h240v80h-97q50 70 73.5 152T840 576q0 86-23.5 168T743 896h97v80H600ZM306 774h-70v48h70v-48Zm118 0h-70v48h70v-48Zm-1-169v30h79v44h-79v35h-43v-35H279v35h-43v-35h-79v-44h79v-30h43v30h101v-30h43ZM174 976q-5-12-12.5-23.5T144 932q42-6 81.5-18.5T288 866H152v-43h40v-92h113v-39h48v39h118v92h35v43H370q29 29 66 46t79 20q-8 10-14.5 21T489 976q-47-5-87.5-27.5T332 888q-25 40-68.5 58.5T174 976Zm35-464-48-22q29-41 48.5-86t30.5-93h-79v-52h91q4-20 6-41t3-42l53 18q0 18-4 35t-9 34h31q29 0 49 22.5t21 52.5q1 36-4.5 71T380 478q-3 9-9.5 17T356 508q-8 5-18 8t-20 1l-48-9-8-48h48q9 0 18-2.5t12-10.5q9-26 11.5-53.5T353 338q0-14-10.5-24.5T318 303h-26q-13 55-33.5 107.5T209 512Zm241-284q21 34 38.5 70t31.5 74l-52 22q-8-39-25-75.5T402 250l48-22Z"/>
    </Icon>
  );
});

IconMaterialLetterSwitch.displayName = 'AmauiIconMaterialLetterSwitch';

export default IconMaterialLetterSwitch;
