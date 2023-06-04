import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlaylistRemoveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistRemoveW100'

      short_name='PlaylistRemove'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.525 21.1-.5-.5 2.6-2.6-2.6-2.6.5-.5 2.6 2.6 2.6-2.6.5.5-2.6 2.6 2.6 2.6-.5.5-2.6-2.6Zm-10.75-5.75v-.7h7v.7Zm0-4v-.7h11v.7Zm0-4v-.7h11v.7Z"/>
    </Icon>
  );
});

IconMaterialPlaylistRemoveW100.displayName = 'AmauiIconMaterialPlaylistRemoveW100';

export default IconMaterialPlaylistRemoveW100;
