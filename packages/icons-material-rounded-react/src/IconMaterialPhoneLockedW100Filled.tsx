import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneLockedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneLockedW100Filled'

      short_name='PhoneLocked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M610-572q-13 0-21.5-8.5T580-602v-116q0-13 8.5-21.5T610-748l2 28 8-68q0-29 19.5-48.5T688-856q29 0 48.5 19.5T756-788l-8 68 18-28q13 0 21.5 8.5T796-718v116q0 13-8.5 21.5T766-572H610Zm30-148h80l8-68q0-17-11.5-28.5T688-828q-17 0-28.5 11.5T648-788l-8 68Zm105 548q-94 0-195.5-49.5T359-360q-88-89-137.5-190T172-745q0-18 12-30.5t30-12.5h80q17 0 29.5 10.5T341-750l18 82q3 17-1 30t-14 21l-85 77q26 47 56.5 86.5T380-379q36 36 78 67t93 59l83-85q10-11 21.5-14t26.5-1l68 14q17 4 27.5 17t10.5 30v78q0 18-12.5 30T745-172Z"/>
    </Icon>
  );
});

IconMaterialPhoneLockedW100Filled.displayName = 'OnesyIconMaterialPhoneLockedW100Filled';

export default IconMaterialPhoneLockedW100Filled;
