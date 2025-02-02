import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHdrPlusOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrPlusOffW100'

      short_name='HdrPlusOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-800q-42 0-79 9.5T330-763q-5 3-10.5 1.5T311-768q-3-5-1.5-10t6.5-8q40-22 78-32t86-10q72 0 135.5 27.5T726-726q47 47 74.5 110.5T828-480q0 42-9 82.5T787-316q-3 5-8.5 6.5T768-311q-5-3-6.5-8.5T763-330q18-34 27.5-71t9.5-79q0-134-93-227t-227-93Zm-16 190-28-28v-52q0-6 4-10t10-4q6 0 10 4t4 10v80Zm220-34v88q0 26-17 43t-43 17h-46l-42-42v-152q0-6 4-10t10-4h74q26 0 43 17t17 43ZM564-524h60q14 0 23-9t9-23v-88q0-14-9-23t-23-9h-60v152ZM404-324q14 0 23-9t9-23v-8q0-14-9-23t-23-9h-80v72h80Zm133-213ZM324-296v66q0 6-4 10t-10 4q-6 0-10-4t-4-10v-180q0-6 4-10t10-4h94q25 0 42.5 17.5T464-364v8q0 20-12.5 35.5T420-298l27 62q3 7-1 13.5t-12 6.5q-5 0-8-2.5t-5-6.5l-31-71h-66Zm-28-348 28 28v106q0 6-4 10t-10 4q-6 0-10-4t-4-10v-134Zm164 184ZM224-717l19 21q-35 40-59 95t-24 121q0 134 93 227t227 93q68 0 123.5-25t93.5-58l19 20q-48 44-109 67.5T480-132q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-74 26-133t66-104ZM866-74q-5 5-10 5t-10-5L74-846q-4-4-4.5-9.5T74-866q5-5 10-5t10 5L866-94q4 4 4.5 9.5T866-74Z"/>
    </Icon>
  );
});

IconMaterialHdrPlusOffW100.displayName = 'OnesyIconMaterialHdrPlusOffW100';

export default IconMaterialHdrPlusOffW100;
