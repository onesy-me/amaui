import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScoreboard = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Scoreboard'

      short_name='Scoreboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M620-360q-17 0-28.5-11.5T580-400v-160q0-17 11.5-28.5T620-600h100q17 0 28.5 11.5T760-560v160q0 17-11.5 28.5T720-360H620Zm20-60h60v-120h-60v120Zm-380 0h90q13 0 21.5 8.5T380-390q0 13-8.5 21.5T350-360H240q-17 0-28.5-11.5T200-400v-60q0-17 11.5-28.5T240-500h80v-40h-90q-13 0-21.5-8.5T200-570q0-13 8.5-21.5T230-600h110q17 0 28.5 11.5T380-560v60q0 17-11.5 28.5T340-460h-80v40ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h120v-40q0-17 11.5-28.5T320-880q17 0 28.5 11.5T360-840v40h240v-40q0-17 11.5-28.5T640-880q17 0 28.5 11.5T680-840v40h120q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h290v-30q0-13 8.5-21.5T480-300q13 0 21.5 8.5T510-270v30h290v-480H510v30q0 13-8.5 21.5T480-660q-13 0-21.5-8.5T450-690v-30H160v480Zm0 0v-480 480Zm320-280q-13 0-21.5-8.5T450-550q0-13 8.5-21.5T480-580q13 0 21.5 8.5T510-550q0 13-8.5 21.5T480-520Zm0 140q-13 0-21.5-8.5T450-410q0-13 8.5-21.5T480-440q13 0 21.5 8.5T510-410q0 13-8.5 21.5T480-380Z"/>
    </Icon>
  );
});

IconMaterialScoreboard.displayName = 'OnesyIconMaterialScoreboard';

export default IconMaterialScoreboard;
