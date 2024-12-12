import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeCoolOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeCoolOffFilled'

      short_name='ModeCoolOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-247v127q0 17-11.5 28.5T480-80q-17 0-28.5-11.5T440-120v-126L338-145q-12 11-28.5 10.5T282-146q-11-11-11-28t11-28l141-142-80-80-141 142q-11 11-27.5 11.5T146-282q-11-11-11-28t11-28l100-102H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h127L59-708q-12-12-11.5-28.5T60-765q12-12 28.5-12t28.5 12L796-85q12 12 12 28t-12 28q-12 12-28.5 12T739-29L520-247Zm80-193h-45L440-555v-45L282-758q-11-11-11.5-27.5T282-814q11-11 28-11t28 11l102 100v-126q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v126l102-101q12-11 28.5-10.5T678-814q11 11 11 28t-11 28L520-600v80h80l158-158q11-11 27.5-11.5T814-678q11 11 11 28t-11 28L714-520h126q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H714l101 102q6 6 8.5 13.5t2.5 15q0 7.5-3 14.5t-9 13q-11 11-28 11t-28-11L600-440Z"/>
    </Icon>
  );
});

IconMaterialModeCoolOffFilled.displayName = 'OnesyIconMaterialModeCoolOffFilled';

export default IconMaterialModeCoolOffFilled;
