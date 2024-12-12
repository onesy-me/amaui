import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSprinklerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SprinklerW100'

      short_name='Sprinkler'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-492q-11 0-19.5-8.5T452-520q0-11 8.5-19.5T480-548q11 0 19.5 8.5T508-520q0 11-8.5 19.5T480-492Zm0-160q-11 0-19.5-8.5T452-680q0-11 8.5-19.5T480-708q11 0 19.5 8.5T508-680q0 11-8.5 19.5T480-652Zm0-160q-11 0-19.5-8.5T452-840q0-11 8.5-19.5T480-868q11 0 19.5 8.5T508-840q0 11-8.5 19.5T480-812Zm120 400q-11 0-19.5-8.5T572-440q0-11 8.5-19.5T600-468q11 0 19.5 8.5T628-440q0 11-8.5 19.5T600-412Zm113-114q-11 0-19.5-8.5T685-554q0-11 8.5-19.5T713-582q11 0 19.5 8.5T741-554q0 11-8.5 19.5T713-526Zm113-112q-11 0-19.5-8.5T798-666q0-11 8.5-19.5T826-694q11 0 19.5 8.5T854-666q0 11-8.5 19.5T826-638ZM360-412q-11 0-19.5-8.5T332-440q0-11 8.5-19.5T360-468q11 0 19.5 8.5T388-440q0 11-8.5 19.5T360-412ZM247-526q-11 0-19.5-8.5T219-554q0-11 8.5-19.5T247-582q11 0 19.5 8.5T275-554q0 11-8.5 19.5T247-526ZM134-638q-11 0-19.5-8.5T106-666q0-11 8.5-19.5T134-694q11 0 19.5 8.5T162-666q0 11-8.5 19.5T134-638Zm332 372H320q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h320q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H494v146q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-146Z"/>
    </Icon>
  );
});

IconMaterialSprinklerW100.displayName = 'OnesyIconMaterialSprinklerW100';

export default IconMaterialSprinklerW100;
