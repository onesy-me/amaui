import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSick = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Sick'

      short_name='Sick'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M87-556q26-140 135.5-232T480-880q74 0 139.5 24T737-788q-14 26-22.5 44.5T703-709q-44-42-101-66.5T480-800q-101 0-181 56.5T183-599q-27-1-52.5 10T87-556ZM480-80q-148 0-257.5-92T87-404q17 22 42.5 33.5T183-360q36 88 116 144t181 56q133 0 226.5-93.5T800-480q0-17-1.5-34t-5.5-34q11 4 22.5 6t24.5 2q9 0 18-1t17-3q2 16 3.5 31.5T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM336-496l84-84-85-85-42 42 43 42-43 43 43 42Zm504-104q-33 0-56.5-23.5T760-680q0-27 15-57.5T840-840q50 72 65 102.5t15 57.5q0 33-23.5 56.5T840-600ZM625-495l43-43-43-43 42-42-42-42-85 85 85 85Zm-145 75q-26 0-50.5 6T383-397l-143-83q0-16-8-30t-22-22q-22-12-45.5-5.5T128-510q-12 22-5.5 45.5T150-428q14 8 30 8t30-8l119 69q-17 17-30.5 36.5T276-280h66q21-36 57-58t81-22q45 0 81 22t57 58h66q-24-62-78.5-101T480-420Zm0-60Z"/>
    </Icon>
  );
});

IconMaterialSick.displayName = 'OnesyIconMaterialSick';

export default IconMaterialSick;
