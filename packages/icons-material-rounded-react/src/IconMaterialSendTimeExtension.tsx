import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSendTimeExtension = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendTimeExtension'

      short_name='SendTimeExtension'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-145v-64q0-14 8-25t22-14l130-32-130-32q-14-3-22-14t-8-25v-64q0-23 19-34.5t39-1.5l270 135q22 11 22 36t-22 36L578-109q-20 10-39-1.5T520-145Zm-320 25q-33 0-56.5-23.5T120-200v-152q48 0 84-30.5t36-77.5q0-47-36-77.5T120-568v-152q0-33 23.5-56.5T200-800h160q0-42 29-71t71-29q42 0 71 29t29 71h160q33 0 56.5 23.5T800-720v290l-80-40v-250H480v-80q0-8-6-14t-14-6q-8 0-14 6t-6 14v80H200v88q54 20 87 67t33 105q0 57-33 104t-87 68v88h85q17-45 58-78.5t97-39.5v80q-40 8-64 37.5T352-120H200Zm260-390Z"/>
    </Icon>
  );
});

IconMaterialSendTimeExtension.displayName = 'OnesyIconMaterialSendTimeExtension';

export default IconMaterialSendTimeExtension;
