import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableBarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableBarW100'

      short_name='TableBar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m286-230 44-110q4-8 11.5-13.5T358-359h108v-202q-132-2-221.5-31T155-660q0-42 94-70.5T480-759q137 0 231 28.5t94 70.5q0 40-90 68.5T494-561v202h108q9 0 16.5 5.5T630-340l44 110q3 7-1 13t-12 6q-5 0-8-2.5t-5-6.5l-44-111H356l-45 111q-2 4-4.5 6.5T299-211q-8 0-12-6t-1-13Zm194-359q111 0 197.5-21t99.5-50q-13-29-99.5-50T480-731q-111 0-197.5 21T183-660q13 29 99.5 50T480-589Zm0-71Z"/>
    </Icon>
  );
});

IconMaterialTableBarW100.displayName = 'OnesyIconMaterialTableBarW100';

export default IconMaterialTableBarW100;
