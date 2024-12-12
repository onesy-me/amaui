import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDisabledVisibleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisabledVisibleFilled'

      short_name='DisabledVisible'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-160q59 0 109.5-27t80.5-73q-30-46-80.5-73T680-360q-59 0-109.5 27T490-260q30 46 80.5 73T680-160Zm0 80q-78 0-143-34t-106-91q-8-12-12.5-25.5T414-258q0-14 4-29t13-28q40-57 105.5-91T680-440q78 0 143 34t106 91q8 12 12.5 25.5T946-262q0 14-4 29t-13 28q-40 57-105.5 91T680-80Zm0-120q-25 0-42.5-17.5T620-260q0-25 17.5-42.5T680-320q25 0 42.5 17.5T740-260q0 25-17.5 42.5T680-200Zm-361 87q-110-48-174.5-147T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q155 0 267.5 101T877-525q2 20-9 30.5T842-482q-15 2-28.5-6.5T798-517q-14-121-105-202t-213-81q-56 0-105.5 18T284-732l209 209q14 14 12.5 29.5T493-467q-11 11-26.5 12.5T437-467L228-676q-32 41-50 90.5T160-480q0 99 53 177.5T351-187q20 8 24 23.5t-2 29.5q-6 14-20.5 21.5T319-113Z"/>
    </Icon>
  );
});

IconMaterialDisabledVisibleFilled.displayName = 'OnesyIconMaterialDisabledVisibleFilled';

export default IconMaterialDisabledVisibleFilled;
