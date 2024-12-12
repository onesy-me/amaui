import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForward30Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Forward30Filled'

      short_name='Forward30'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-800h6l-34-34q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T509-891l103 103q12 12 12 28t-12 28L509-629q-12 12-28.5 11.5T452-630q-11-12-11.5-28t11.5-28l34-34h-6q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-17 11.5-28.5T800-480q17 0 28.5 11.5T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Zm-60-240h-90q-13 0-21.5-8.5T300-350q0-13 8.5-21.5T330-380h70v-40h-40q-8 0-14-6t-6-14q0-8 6-14t14-6h40v-40h-70q-13 0-21.5-8.5T300-530q0-13 8.5-21.5T330-560h90q17 0 28.5 11.5T460-520v160q0 17-11.5 28.5T420-320Zm120 0q-17 0-28.5-11.5T500-360v-160q0-17 11.5-28.5T540-560h80q17 0 28.5 11.5T660-520v160q0 17-11.5 28.5T620-320h-80Zm20-60h40v-120h-40v120Z"/>
    </Icon>
  );
});

IconMaterialForward30Filled.displayName = 'OnesyIconMaterialForward30Filled';

export default IconMaterialForward30Filled;
