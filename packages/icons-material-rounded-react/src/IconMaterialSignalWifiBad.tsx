import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalWifiBad = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifiBad'

      short_name='SignalWifiBad'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m760-223-56 55q-11 11-27.5 11.5T648-168q-11-11-11-28t11-28l56-56-56-56q-11-11-11-28t11-28q11-11 28-11t28 11l56 56 56-56q11-11 27.5-11t28.5 11q12 12 12 28.5T872-335l-55 55 55 56q11 11 11.5 27.5T872-168q-11 11-28 11t-28-11l-56-55ZM480-800q113 0 219 35.5T893-660q15 11 22.5 27.5T923-599q0 17-6.5 33T897-537l-46 46q-12 11-28.5 11.5T794-491q-12-12-12-28.5t12-28.5l50-50q-79-60-172-91t-192-31q-99 0-192 31t-172 91l364 364 11-11q12-12 28.5-12t28.5 12q12 12 12 28.5T548-188l-11 11q-12 12-27 18t-30 6q-15 0-30-6t-27-18L63-537q-13-13-19-28.5T38-598q0-17 7-33.5T67-660q88-69 194-104.5T480-800Zm0 323Z"/>
    </Icon>
  );
});

IconMaterialSignalWifiBad.displayName = 'OnesyIconMaterialSignalWifiBad';

export default IconMaterialSignalWifiBad;
