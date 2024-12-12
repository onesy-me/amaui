import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCloudOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudOff'

      short_name='CloudOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-160q-92 0-156-64T40-380q0-77 47.5-137T210-594q3-8 6-15.5t6-16.5L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11.5 27.5T820-84q-11 11-27.5 11.5T764-83l-78-77H260Zm0-80h346L284-562q-2 11-3 21t-1 21h-20q-58 0-99 41t-41 99q0 58 41 99t99 41Zm185-161Zm419 191-58-56q17-14 25.5-32.5T840-340q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-27 0-52 6.5T380-693l-58-58q35-24 74.5-36.5T480-800q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 39-15 72.5T864-210ZM593-479Z"/>
    </Icon>
  );
});

IconMaterialCloudOff.displayName = 'OnesyIconMaterialCloudOff';

export default IconMaterialCloudOff;
