import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFeatureSearch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeatureSearch'

      short_name='FeatureSearch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80q-33 0-56.5-23.5T80-160v-560q0-33 23.5-56.5T160-800h162q17 0 28.5 11.5T362-760q0 17-11.5 28.5T322-720H160v560h560v-200q0-17 11.5-28.5T760-400q17 0 28.5 11.5T800-360v200q0 33-23.5 56.5T720-80H160Zm612-524 100 100q11 11 11 28t-11 28q-11 11-28 11t-28-11L716-548q-21 12-45 20t-51 8q-75 0-127.5-52.5T440-700q0-75 52.5-127.5T620-880q75 0 127.5 52.5T800-700q0 27-8 51t-20 45Zm-152 4q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM160-430v270-560 280-12 22Z"/>
    </Icon>
  );
});

IconMaterialFeatureSearch.displayName = 'OnesyIconMaterialFeatureSearch';

export default IconMaterialFeatureSearch;
