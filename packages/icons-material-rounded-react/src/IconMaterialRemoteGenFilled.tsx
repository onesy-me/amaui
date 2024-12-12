import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRemoteGenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoteGenFilled'

      short_name='RemoteGen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-40q-33 0-56.5-23.5T240-120v-720q0-33 23.5-56.5T320-920h320q33 0 56.5 23.5T720-840v720q0 33-23.5 56.5T640-40H320Zm160-520q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0-80q-17 0-28.5-11.5T440-680q0-17 11.5-28.5T480-720q17 0 28.5 11.5T520-680q0 17-11.5 28.5T480-640Zm-80 240q17 0 28.5-11.5T440-440q0-17-11.5-28.5T400-480q-17 0-28.5 11.5T360-440q0 17 11.5 28.5T400-400Zm160 0q17 0 28.5-11.5T600-440q0-17-11.5-28.5T560-480q-17 0-28.5 11.5T520-440q0 17 11.5 28.5T560-400ZM400-280q17 0 28.5-11.5T440-320q0-17-11.5-28.5T400-360q-17 0-28.5 11.5T360-320q0 17 11.5 28.5T400-280Zm160 0q17 0 28.5-11.5T600-320q0-17-11.5-28.5T560-360q-17 0-28.5 11.5T520-320q0 17 11.5 28.5T560-280ZM400-160q17 0 28.5-11.5T440-200q0-17-11.5-28.5T400-240q-17 0-28.5 11.5T360-200q0 17 11.5 28.5T400-160Zm160 0q17 0 28.5-11.5T600-200q0-17-11.5-28.5T560-240q-17 0-28.5 11.5T520-200q0 17 11.5 28.5T560-160Z"/>
    </Icon>
  );
});

IconMaterialRemoteGenFilled.displayName = 'OnesyIconMaterialRemoteGenFilled';

export default IconMaterialRemoteGenFilled;
