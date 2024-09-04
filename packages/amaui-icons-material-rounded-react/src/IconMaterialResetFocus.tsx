import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetFocus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetFocus'

      short_name='ResetFocus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M540-420v70q0 13-8.5 21.5T510-320q-13 0-21.5-8.5T480-350v-70q0-25 17.5-42.5T540-480h70q13 0 21.5 8.5T640-450q0 13-8.5 21.5T610-420h-70Zm0 280h70q13 0 21.5 8.5T640-110q0 13-8.5 21.5T610-80h-70q-25 0-42.5-17.5T480-140v-70q0-13 8.5-21.5T510-240q13 0 21.5 8.5T540-210v70Zm280-280h-70q-13 0-21.5-8.5T720-450q0-13 8.5-21.5T750-480h70q25 0 42.5 17.5T880-420v70q0 13-8.5 21.5T850-320q-13 0-21.5-8.5T820-350v-70Zm0 280v-70q0-13 8.5-21.5T850-240q13 0 21.5 8.5T880-210v70q0 25-17.5 42.5T820-80h-70q-13 0-21.5-8.5T720-110q0-13 8.5-21.5T750-140h70ZM480-760q-117 0-198.5 81.5T200-480q0 72 32.5 132t87.5 98v-70q0-17 11.5-28.5T360-360q17 0 28.5 11.5T400-320v160q0 17-11.5 28.5T360-120H200q-17 0-28.5-11.5T160-160q0-17 11.5-28.5T200-200h54q-62-50-98-122.5T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q113 0 203.5 63T814-615q6 16 0 31t-22 21q-16 6-31.5 0T739-585q-31-78-100.5-126.5T480-760Z"/>
    </Icon>
  );
});

IconMaterialResetFocus.displayName = 'AmauiIconMaterialResetFocus';

export default IconMaterialResetFocus;
