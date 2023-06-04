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
      <path d="M360 656V496h60v160h-60Zm90 0V536h60v120h-60Zm90 0v-80h60v80h-60ZM360 976l-54-182q-48-38-77-95t-29-123q0-66 29-123t77-95l54-182h240l54 182q48 38 77 95t29 123q0 66-29 123t-77 95l-54 182H360Zm120-200q83 0 141.5-58.5T680 576q0-83-58.5-141.5T480 376q-83 0-141.5 58.5T280 576q0 83 58.5 141.5T480 776Z"/>
    </Icon>
  );
});

IconMaterialWatchScreentimeFilled.displayName = 'AmauiIconMaterialWatchScreentimeFilled';

export default IconMaterialWatchScreentimeFilled;
