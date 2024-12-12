import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrightness4W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness4W100'

      short_name='Brightness4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M504-320q66.4 0 113.2-46.8T664-480q0-66.4-46.8-113.2T504-640h-13.12q-6.12 0-11.88 2-11.74 2.34-14.87 13.67Q461-613 470-606q29.72 22.33 45.36 55.42Q531-517.48 531-480q0 37-15.5 70.5T470-354.03q-9 7.03-6.52 18.72 2.48 11.7 14.52 13.31 6 2 12.5 2H504ZM367.63-212H272q-24.75 0-42.37-17.63Q212-247.25 212-272v-95.63L142-438q-9-9-13-19.81-4-10.82-4-22 0-11.19 4-22.19 4-11 13-20l70-70.37V-688q0-24.75 17.63-42.38Q247.25-748 272-748h95.63L438-818q9-9 19.81-13 10.82-4 22-4 11.19 0 22.19 4 11 4 20 13l70.37 70H688q24.75 0 42.38 17.62Q748-712.75 748-688v95.63L818-522q9 9 13 19.81 4 10.82 4 22 0 11.19-4 22.19-4 11-13 20l-70 70.37V-272q0 24.75-17.62 42.37Q712.75-212 688-212h-95.63L522-142q-9 9-19.81 13-10.82 4-22 4-11.19 0-22.19-4-11-4-20-13l-70.37-70Zm12.29-28L457-163q9 9 23 9t23-9l77.08-77H688q14 0 23-9t9-23v-107.92L797-457q9-9 9-23t-9-23l-77-77.08V-688q0-14-9-23t-23-9H580.08L503-797q-9-9-23-9t-23 9l-77.08 77H272q-14 0-23 9t-9 23v107.92L163-503q-9 9-9 23t9 23l77 77.08V-272q0 14 9 23t23 9h107.92ZM480-480Z"/>
    </Icon>
  );
});

IconMaterialBrightness4W100.displayName = 'OnesyIconMaterialBrightness4W100';

export default IconMaterialBrightness4W100;
