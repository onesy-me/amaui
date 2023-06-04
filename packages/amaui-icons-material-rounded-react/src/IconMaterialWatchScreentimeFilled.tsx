import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWatchScreentimeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchScreentimeFilled'

      short_name='WatchScreentime'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M390 656q-13 0-21.5-8.5T360 626V526q0-13 8.5-21.5T390 496q13 0 21.5 8.5T420 526v100q0 13-8.5 21.5T390 656Zm90 0q-13 0-21.5-8.5T450 626v-60q0-13 8.5-21.5T480 536q13 0 21.5 8.5T510 566v60q0 13-8.5 21.5T480 656Zm90 0q-13 0-21.5-8.5T540 626v-20q0-13 8.5-21.5T570 576q13 0 21.5 8.5T600 606v20q0 13-8.5 21.5T570 656ZM420 976q-26 0-47.5-15.5T343 919l-37-125q-48-38-77-95t-29-123q0-66 29-123t77-95l37-125q8-26 29.5-41.5T420 176h120q26 0 47.5 15.5T617 233l37 125q48 38 77 95t29 123q0 66-29 123t-77 95l-37 125q-8 26-29.5 41.5T540 976H420Zm60-200q83 0 141.5-58.5T680 576q0-83-58.5-141.5T480 376q-83 0-141.5 58.5T280 576q0 83 58.5 141.5T480 776Z"/>
    </Icon>
  );
});

IconMaterialWatchScreentimeFilled.displayName = 'AmauiIconMaterialWatchScreentimeFilled';

export default IconMaterialWatchScreentimeFilled;
