import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmoticonFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmoticonFilled'

      short_name='Emoticon'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-280q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T320-340q0 26-17.5 43T260-280Zm0-280q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T320-620q0 26-17.5 43T260-560Zm140 120v-80h160v80H400Zm288 200-66-44q28-43 43-92.5T680-480q0-66-21.5-124T598-709l61-51q48 57 74.5 128.5T760-480q0 67-19 127.5T688-240Z"/>
    </Icon>
  );
});

IconMaterialEmoticonFilled.displayName = 'OnesyIconMaterialEmoticonFilled';

export default IconMaterialEmoticonFilled;
