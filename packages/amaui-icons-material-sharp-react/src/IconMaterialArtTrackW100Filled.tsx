import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArtTrackW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArtTrackW100Filled'

      short_name='ArtTrack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.4 17.7H2V6.3h11.4Zm3.6 0V6.3h.7v11.4Zm4.3 0V6.3h.7v11.4Zm-17-3h6.8l-2-2.7-1.9 2.5-1.4-1.85Z"/>
    </Icon>
  );
});

IconMaterialArtTrackW100Filled.displayName = 'AmauiIconMaterialArtTrackW100Filled';

export default IconMaterialArtTrackW100Filled;
