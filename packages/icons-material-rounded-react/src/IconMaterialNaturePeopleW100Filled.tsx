import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNaturePeopleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NaturePeopleW100Filled'

      short_name='NaturePeople'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M184.23-448q-17.23 0-28.73-11.27-11.5-11.26-11.5-28.5 0-17.23 11.27-28.73 11.26-11.5 28.5-11.5 17.23 0 28.73 11.27 11.5 11.26 11.5 28.5 0 17.23-11.27 28.73-11.26 11.5-28.5 11.5ZM212-134h378v-258h-96q-50 0-84-33.5T376-504q0-41 27-74.5t69-51.5q0-63 42-100.5t90-37.5q48 0 90 37.5T736-630q42 18 69 51.5t27 74.5q0 45-34 78.5T714-392h-96v258h186q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H186q-12.75 0-21.37-8.51-8.63-8.51-8.63-21.09V-254q-11 0-19.5-8.5T128-282v-112q0-5.95 4.02-9.98Q136.05-408 142-408h84q5.95 0 9.98 4.02Q240-399.95 240-394v112q0 11-8.5 19.5T212-254v120Z"/>
    </Icon>
  );
});

IconMaterialNaturePeopleW100Filled.displayName = 'OnesyIconMaterialNaturePeopleW100Filled';

export default IconMaterialNaturePeopleW100Filled;
