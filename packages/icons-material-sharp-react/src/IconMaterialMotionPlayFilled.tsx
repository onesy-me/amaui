import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMotionPlayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionPlayFilled'

      short_name='MotionPlay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m400-320 240-160-240-160v320Zm80 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-43 9-84.5t26-80.5l62 62q-8 26-12.5 51.5T160-480q0 134 93 227t227 93q134 0 227-93t93-227q0-134-93-227t-227-93q-27 0-52.5 4.5T377-783l-61-61q40-18 80-27t84-9q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM220-680q-25 0-42.5-17.5T160-740q0-25 17.5-42.5T220-800q25 0 42.5 17.5T280-740q0 25-17.5 42.5T220-680Zm20 200q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70q-100 0-170-70t-70-170Z"/>
    </Icon>
  );
});

IconMaterialMotionPlayFilled.displayName = 'OnesyIconMaterialMotionPlayFilled';

export default IconMaterialMotionPlayFilled;
