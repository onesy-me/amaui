import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddReaction = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddReaction'

      short_name='AddReaction'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480Zm0 400q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q33 0 65 5t62 15q23 8 29 23.5t1 30.5q-5 15-18.5 23.5T588-781q-26-9-52.5-14t-55.5-5q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35q-5-19 5-31t25-15q15-3 29.5 4.5T871-564q5 20 7 41t2 43q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm320-680h-40q-17 0-28.5-11.5T720-800q0-17 11.5-28.5T760-840h40v-40q0-17 11.5-28.5T840-920q17 0 28.5 11.5T880-880v40h40q17 0 28.5 11.5T960-800q0 17-11.5 28.5T920-760h-40v40q0 17-11.5 28.5T840-680q-17 0-28.5-11.5T800-720v-40ZM620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm140 260q58 0 107-28t79-76q6-12-1-24t-21-12H316q-14 0-21 12t-1 24q30 48 79.5 76T480-260Z"/>
    </Icon>
  );
});

IconMaterialAddReaction.displayName = 'OnesyIconMaterialAddReaction';

export default IconMaterialAddReaction;
