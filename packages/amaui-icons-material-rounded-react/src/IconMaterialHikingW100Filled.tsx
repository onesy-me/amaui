import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHikingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HikingW100Filled'

      short_name='Hiking'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 5.1q-.65 0-1.125-.475T11.4 3.5q0-.65.475-1.125T13 1.9q.65 0 1.125.475T14.6 3.5q0 .65-.475 1.125T13 5.1ZM7.75 22.35q-.2 0-.312-.125-.113-.125-.063-.325L10.2 7.325q.075-.425.425-.675.35-.25.725-.25.4 0 .75.175t.55.525l1 1.6q.5.8 1.525 1.538 1.025.737 2.475 1.162V9.75q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V22q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-9.925q-1.35-.275-2.637-1.088-1.288-.812-2.388-2.162l-.925 4.65 1.675 1.6q.225.2.35.487.125.288.125.613V22q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-5.125q0-.2-.088-.362-.087-.163-.237-.288L9.9 14.075 8.15 22.05q-.025.125-.15.213-.125.087-.25.087Zm-.575-10 1.1-5.575-.5-.125q-.525-.125-1 .212-.475.338-.6.863l-.75 3.925q-.05.15.05.262.1.113.25.163Z"/>
    </Icon>
  );
});

IconMaterialHikingW100Filled.displayName = 'AmauiIconMaterialHikingW100Filled';

export default IconMaterialHikingW100Filled;
