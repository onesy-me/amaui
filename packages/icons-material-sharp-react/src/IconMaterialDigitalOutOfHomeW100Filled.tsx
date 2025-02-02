import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDigitalOutOfHomeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DigitalOutOfHomeW100Filled'

      short_name='DigitalOutOfHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M26-66v-828h388v828h-28v-80H54v80H26Zm600 0v-222l86-84-39-179q-38 65-81 91.5T496-428v-28q54-6 84-26t55-61l39-63q14-23 36-26.5t47 7.5l177 73v146h-28v-127l-132-55L886-66h-28l-78-304-126 121v183h-28ZM166-450l122-70-122-70v140Zm514-246q-27 0-45.5-18.5T616-760q0-27 18.5-45.5T680-824q27 0 45.5 18.5T744-760q0 27-18.5 45.5T680-696Z"/>
    </Icon>
  );
});

IconMaterialDigitalOutOfHomeW100Filled.displayName = 'OnesyIconMaterialDigitalOutOfHomeW100Filled';

export default IconMaterialDigitalOutOfHomeW100Filled;
