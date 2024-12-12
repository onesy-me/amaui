import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHdrEnhancedSelectFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrEnhancedSelectFilled'

      short_name='HdrEnhancedSelect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-400q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm-40-120v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM820-80v-80h-80v-60h80v-80h60v80h80v60h-80v80h-60Zm-300 0v-240h200v156h-36l36 84h-60l-36-80h-44v80h-60Zm60-140v-40h80v40h-80ZM0-80v-240h60v80h80v-80h60v240h-60v-100H60v100H0Zm260 0v-240h170l30 30v180l-30 30H260Zm60-60v-120h80v120h-80Z"/>
    </Icon>
  );
});

IconMaterialHdrEnhancedSelectFilled.displayName = 'OnesyIconMaterialHdrEnhancedSelectFilled';

export default IconMaterialHdrEnhancedSelectFilled;
