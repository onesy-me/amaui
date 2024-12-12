import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAppsOutageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppsOutageFilled'

      short_name='AppsOutage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm0-240q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm0-240q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 480q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-35 24.5-57.5T483-800q-2 10-2.5 19.5T480-760q0 31 6.5 60.5T505-644q-6 2-12 3t-13 1Zm280 80q-83 0-141.5-58.5T560-760q0-83 58.5-141.5T760-960q83 0 141.5 58.5T960-760q0 83-58.5 141.5T760-560Zm-40 400q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160Zm0-240q-33 0-56.5-23.5T640-480q0-7 1-13t3-12q26 12 55.5 18.5T760-480q11 0 20.5-.5T800-483q0 34-22.5 58.5T720-400Zm40-240q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm-20-80h40v-160h-40v160Z"/>
    </Icon>
  );
});

IconMaterialAppsOutageFilled.displayName = 'OnesyIconMaterialAppsOutageFilled';

export default IconMaterialAppsOutageFilled;
