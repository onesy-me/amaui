import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorOpenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorOpenW100'

      short_name='DoorOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-452q11 0 19.5-8.5T468-480q0-11-8.5-19.5T440-508q-11 0-19.5 8.5T412-480q0 11 8.5 19.5T440-452ZM280-172v-28l263-22q12-1 20.5-10t8.5-21v-454q0-25-16.5-43T515-770l-203-16v-28l206 16q35 3 58.5 29t23.5 61v455q0 23-16 40t-39 19l-265 22Zm0-28h400v-554q0-14-9-23t-23-9H312q-14 0-23 9t-9 23v554Zm-70 28q-6 0-10-4t-4-10q0-6 4-10t10-4h42v-554q0-25 17.5-42.5T312-814h336q25 0 42.5 17.5T708-754v554h42q6 0 10 4t4 10q0 6-4 10t-10 4H210Z"/>
    </Icon>
  );
});

IconMaterialDoorOpenW100.displayName = 'OnesyIconMaterialDoorOpenW100';

export default IconMaterialDoorOpenW100;
