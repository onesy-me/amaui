import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddShoppingCart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddShoppingCart'

      short_name='AddShoppingCart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L669-440H324l-44 80h480v80H145l119-216-144-304H40Z"/>
    </Icon>
  );
});

IconMaterialAddShoppingCart.displayName = 'OnesyIconMaterialAddShoppingCart';

export default IconMaterialAddShoppingCart;
