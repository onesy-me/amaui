import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGarageDoorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageDoorW100'

      short_name='GarageDoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M249.96-172q-5.96 0-9.96-4.02-4-4.03-4-9.98v-387l-116 86q-5 3-10 2.5t-9-5.5q-4-5-3.5-10t5.5-9l341-253q8-6 17.21-8.5T480-773q9.58 0 18.79 2.5Q508-768 516-762l342 253q5 4 5.5 9t-3.5 10q-4 5-9 5.5t-10-2.5l-116-86v387q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-380H264v380q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM354-212q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h252q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H354Zm0-118q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h252q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H354Zm0-118q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h252q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H354Zm-89-146h431L480-753 265-594Z"/>
    </Icon>
  );
});

IconMaterialGarageDoorW100.displayName = 'OnesyIconMaterialGarageDoorW100';

export default IconMaterialGarageDoorW100;
