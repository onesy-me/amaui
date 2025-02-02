import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDialerSipW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DialerSipW100Filled'

      short_name='DialerSip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M745-172q-94 0-195.5-49.5T359.5-360q-88.5-89-138-190T172-745q0-18.43 12-30.71Q196-788 214-788h80q17 0 29.5 10.5T341-750l18 82q3 17-1 30t-14 21l-85 77q26 47 56.5 86.5T380-379q36 36 78 67t93 59l83-85q10-11 21.5-14t26.5-1l68 14q17 4 27.5 17t10.5 30v78q0 18-12.29 30-12.28 12-30.71 12ZM516-638q-5.6 0-9.8-4.2-4.2-4.2-4.2-9.8 0-5.6 4.2-9.8 4.2-4.2 9.8-4.2h56v-34h-56q-5.6 0-9.8-4.2-4.2-4.2-4.2-9.8v-60q0-6 4.2-10t9.8-4h70q5.6 0 9.8 4.2 4.2 4.2 4.2 9.8 0 5.6-4.2 9.8-4.2 4.2-9.8 4.2h-56v32h56q5.6 0 9.8 4.2 4.2 4.2 4.2 9.8v61.82q0 6.18-4.2 10.18t-9.8 4h-70Zm128 0q-5.6 0-9.8-4.2-4.2-4.2-4.2-9.8v-121.9q0-6.1 4.2-10.1t9.8-4q5.6 0 9.8 4.2 4.2 4.2 4.2 9.8v121.9q0 6.1-4.2 10.1t-9.8 4Zm58 0q-5.6 0-9.8-4.2-4.2-4.2-4.2-9.8v-121.9q0-6.1 4.2-10.1t9.8-4h72q5.6 0 9.8 4.2 4.2 4.2 4.2 9.8v60q0 6-4.2 10t-9.8 4h-58v47.65q0 6.35-4.2 10.35t-9.8 4Zm14-90h44v-32h-44v32Z"/>
    </Icon>
  );
});

IconMaterialDialerSipW100Filled.displayName = 'OnesyIconMaterialDialerSipW100Filled';

export default IconMaterialDialerSipW100Filled;
