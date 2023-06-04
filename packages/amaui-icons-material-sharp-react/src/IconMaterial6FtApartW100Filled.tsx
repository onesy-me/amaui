import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial6FtApartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='6FtApartW100Filled'

      short_name='6FtApart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 5.85q-.575 0-.962-.388Q5.3 5.075 5.3 4.5t.388-.963q.387-.387.962-.387t.963.387Q8 3.925 8 4.5t-.387.962q-.388.388-.963.388ZM3.3 9.35q0-.425.225-.713.225-.287.6-.462.575-.25 1.213-.388.637-.137 1.312-.137t1.313.137q.637.138 1.212.388.375.175.6.462.225.288.225.713Zm14.05-3.5q-.575 0-.962-.388Q16 5.075 16 4.5t.388-.963q.387-.387.962-.387t.962.387q.388.388.388.963t-.388.962q-.387.388-.962.388ZM14 9.35q0-.425.225-.713.225-.287.6-.462.575-.25 1.213-.388.637-.137 1.312-.137t1.313.137q.637.138 1.212.388.375.175.6.462.225.288.225.713Zm-6.85 12.5v-3.7h2.7v.7h-2v.8h2v2.2Zm.7-.7h1.3v-.8h-1.3Zm7.8.7v-3h-1v-.7h2.7v.7h-1v3Zm-4 0v-3.7h2.2v.7h-1.5v.8h1v.7h-1v1.5Zm-6-5.675L3.225 13.75l2.425-2.425.5.5L4.575 13.4h14.85l-1.575-1.575.5-.5 2.425 2.425-2.425 2.425-.5-.5 1.575-1.575H4.575l1.575 1.575Z"/>
    </Icon>
  );
});

IconMaterial6FtApartW100Filled.displayName = 'AmauiIconMaterial6FtApartW100Filled';

export default IconMaterial6FtApartW100Filled;
