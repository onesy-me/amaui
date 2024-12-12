import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReceiptLongFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReceiptLongFilled'

      short_name='ReceiptLong'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80q-50 0-85-35t-35-85v-120h120v-560l60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60v680q0 50-35 85t-85 35H240Zm480-80q17 0 28.5-11.5T760-200v-560H320v440h360v120q0 17 11.5 28.5T720-160ZM360-600v-80h240v80H360Zm0 120v-80h240v80H360Zm320-120q-17 0-28.5-11.5T640-640q0-17 11.5-28.5T680-680q17 0 28.5 11.5T720-640q0 17-11.5 28.5T680-600Zm0 120q-17 0-28.5-11.5T640-520q0-17 11.5-28.5T680-560q17 0 28.5 11.5T720-520q0 17-11.5 28.5T680-480Z"/>
    </Icon>
  );
});

IconMaterialReceiptLongFilled.displayName = 'OnesyIconMaterialReceiptLongFilled';

export default IconMaterialReceiptLongFilled;
