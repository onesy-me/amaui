import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRecentActorsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecentActorsFilled'

      short_name='RecentActors'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-200q-33 0-56.5-23.5T40-280v-400q0-33 23.5-56.5T120-760h400q33 0 56.5 23.5T600-680v400q0 33-23.5 56.5T520-200H120Zm0-146q44-26 94-40t106-14q56 0 106 14t94 40v-334H120v334Zm200-84q-46 0-78-32t-32-78q0-46 32-78t78-32q46 0 78 32t32 78q0 46-32 78t-78 32Zm400 230q-17 0-28.5-11.5T680-240v-480q0-17 11.5-28.5T720-760q17 0 28.5 11.5T760-720v480q0 17-11.5 28.5T720-200Zm160 0q-17 0-28.5-11.5T840-240v-480q0-17 11.5-28.5T880-760q17 0 28.5 11.5T920-720v480q0 17-11.5 28.5T880-200Z"/>
    </Icon>
  );
});

IconMaterialRecentActorsFilled.displayName = 'OnesyIconMaterialRecentActorsFilled';

export default IconMaterialRecentActorsFilled;
