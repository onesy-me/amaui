import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOrbitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OrbitW100'

      short_name='Orbit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M257-150q-45 0-76-31t-31-76q0-45 31-76t76-31q45 0 76 31t31 76q0 19.56-7 37.78Q350-201 337-187v-7q33 17 69 25.5t74 8.5q134 0 227-93t93-227h28q0 72-27.41 135.56-27.4 63.56-74.38 110.57-46.98 47.02-110.49 74.44Q552.21-132 480-132q-41.91 0-81.95-9.5Q358-151 320-171q-14 11-30.18 16T257-150Zm.06-28Q290-178 313-201.06t23-56Q336-290 312.94-313t-56-23Q224-336 201-312.94t-23 56Q178-224 201.06-201t56 23ZM480-373q-45 0-76-31t-31-76q0-45 31-76t76-31q45 0 76 31t31 76q0 45-31 76t-76 31ZM132-480q0-72 27.4-135.56 27.41-63.56 74.39-110.57 46.98-47.02 110.49-74.44Q407.79-828 480-828q41.91 0 81.95 9.5Q602-809 640-789q14.43-10 30.22-15 15.78-5 32.78-5 45 0 75.5 30.5T809-703q0 45-30.5 76T703-596q-45 0-76-31t-31-76q0-19.56 7-37.78Q610-759 623-773v7q-33-17-69-25.5t-74-8.5q-134 0-227 93t-93 227h-28Zm571-144q32.5 0 55.25-23.5T781-703q0-32-22.75-55T703-781q-32 0-55.5 22.85-23.5 22.86-23.5 55.5Q624-670 647.04-647T703-624ZM257-257Zm446-446Z"/>
    </Icon>
  );
});

IconMaterialOrbitW100.displayName = 'AmauiIconMaterialOrbitW100';

export default IconMaterialOrbitW100;
