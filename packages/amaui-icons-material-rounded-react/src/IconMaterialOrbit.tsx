import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOrbit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Orbit'

      short_name='Orbit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-100q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 22-6.5 42.5T354-159v-27q30 13 62 19.5t64 6.5q123 0 212.5-80T797-439q2-17 14-29t29-12q17 0 28.5 12t9.5 29q-16 152-129 255.5T480-80q-45 0-88-9.5T309-118q-16 9-33.5 13.5T240-100Zm0-80q25 0 42.5-17.5T300-240q0-25-17.5-42.5T240-300q-25 0-42.5 17.5T180-240q0 25 17.5 42.5T240-180Zm240-160q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-460q-123 0-212.5 80T163-521q-2 17-14 29t-29 12q-17 0-28.5-12T82-521q16-152 129-255.5T480-880q45 0 88 9.5t83 28.5q16-9 33.5-13.5T720-860q58 0 99 41t41 99q0 58-41 99t-99 41q-58 0-99-41t-41-99q0-22 6.5-42.5T606-801v27q-30-13-62-19.5t-64-6.5Zm240 140q25 0 42.5-17.5T780-720q0-25-17.5-42.5T720-780q-25 0-42.5 17.5T660-720q0 25 17.5 42.5T720-660ZM240-240Zm480-480Z"/>
    </Icon>
  );
});

IconMaterialOrbit.displayName = 'AmauiIconMaterialOrbit';

export default IconMaterialOrbit;
