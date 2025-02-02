import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeepPublicFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeepPublicFilled'

      short_name='KeepPublic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-320q-17 0-28.5-11.5T120-360v-23q0-8 3-15.5t9-13.5l68-68v-280q-17 0-28.5-11.5T160-800q0-17 11.5-28.5T200-840h167q23 0 33 21t-4 41q-18 32-27 66.5t-9 71.5q0 88 49 159t130 102q11 3 18.5 12t7.5 20q0 11-7 19t-18 8H400v223q0 8-3 15.5T388-68l-14 14q-6 6-14 6t-14-6l-14-14q-6-6-9-13.5T320-97v-223H160Zm480-520q83 0 141.5 58.5T840-640q0 83-58.5 141.5T640-440q-83 0-141.5-58.5T440-640q0-83 58.5-141.5T640-840Zm0 80q-25 0-42.5 17.5T580-700q0 25 17.5 42.5T640-640q25 0 42.5-17.5T700-700q0-25-17.5-42.5T640-760Zm0 160q-20 0-39 3.5T564-585q-9 4-11.5 13.5T557-554q17 16 38.5 25t44.5 9q23 0 44.5-9t38.5-25q7-7 4.5-16.5T716-585q-18-8-37-11.5t-39-3.5Z"/>
    </Icon>
  );
});

IconMaterialKeepPublicFilled.displayName = 'OnesyIconMaterialKeepPublicFilled';

export default IconMaterialKeepPublicFilled;
