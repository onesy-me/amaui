import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExposurePlus2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposurePlus2W100'

      short_name='ExposurePlus2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.575 16.2v-3h-3v-.7h3v-3h.7v3h3v.7h-3v3Zm6.75 1.45v-.85l4.2-4.3q.875-.925 1.287-1.538.413-.612.413-1.362 0-1.125-.75-1.837-.75-.713-2-.713-.9 0-1.562.388-.663.387-1.038 1.112l-.65-.3q.5-.875 1.275-1.388.775-.512 1.975-.512 1.575 0 2.513.95.937.95.937 2.3 0 .9-.463 1.65-.462.75-1.387 1.7l-3.85 3.95v.05h6.2v.7Z"/>
    </Icon>
  );
});

IconMaterialExposurePlus2W100.displayName = 'AmauiIconMaterialExposurePlus2W100';

export default IconMaterialExposurePlus2W100;
