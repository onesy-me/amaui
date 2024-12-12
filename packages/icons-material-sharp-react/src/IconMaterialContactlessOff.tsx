import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContactlessOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactlessOff'

      short_name='ContactlessOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m594-266-74-32q11-26 18.5-54.5T551-410l68 68q-5 20-11 39t-14 37Zm-130-54-74-30q14-30 20-62.5t6-67.5q0-19-1.5-37t-5.5-35l87 87q-2 38-9.5 74T464-320Zm-128-54-74-30q6-18 10-37t4-39q0-20-4-39t-10-37l74-30q9 24 14.5 50.5T356-480q0 29-5.5 55.5T336-374Zm299-66-81-81q-3-38-11.5-73T520-662l74-32q21 50 31.5 103.5T636-480v20q0 10-1 20ZM480-595l-35-35 21-9q5 11 8 22l6 22ZM819-28 701-146q-48 32-103.5 49T480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-62 17-117.5T146-701L27-820l57-57L876-85l-57 57ZM480-160q45 0 85.5-12t76.5-33L205-642q-21 36-33 76.5T160-480q0 133 93.5 226.5T480-160Zm335-100-59-59q21-35 32.5-75.5T800-480q0-133-93.5-226.5T480-800q-45 0-85.5 11.5T319-756l-59-59q48-31 103.5-48T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 61-17 116.5T815-260ZM538-538ZM424-424Z"/>
    </Icon>
  );
});

IconMaterialContactlessOff.displayName = 'OnesyIconMaterialContactlessOff';

export default IconMaterialContactlessOff;
