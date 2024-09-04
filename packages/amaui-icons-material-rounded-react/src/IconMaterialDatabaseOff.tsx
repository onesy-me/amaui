import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDatabaseOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DatabaseOff'

      short_name='DatabaseOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M446-446Zm106-95Zm-106 95Zm106-95Zm-106 95Zm106-95ZM763-84 84-763q-11-11-11-27.5T84-819q12-12 28.5-12t28.5 12l679 679q12 12 11.5 28T819-84q-12 11-28 11.5T763-84Zm-283-36q-151 0-255.5-46.5T120-280v-400q0-26 17.5-49.5T187-773l252 252q-72-3-133-18t-106-40v120q51 29 123 44t157 15q20 0 39-.5t38-2.5l70 70q-34 7-71 10t-76 3q-85 0-157-15t-123-44v99q9 29 97.5 54.5T480-200q64 0 128.5-13T715-245l58 58q-49 31-125.5 49T480-120Zm360-560v367q0 17-11.5 28.5T800-273q-17 0-28.5-11.5T760-313v-66q-11 6-22 11t-23 10q-14 5-29-1.5T666-380q-5-14 1.5-29t20.5-20q20-6 38-13.5t34-16.5v-120q-41 23-94 37t-116 19q-17 2-29-9t-14-28q-2-17 8.5-29t27.5-14q38-5 75-13t67-18q30-10 50.5-21.5T760-679q-11-29-100.5-55T480-760q-37 0-75.5 5T331-742q-17 4-31-4.5T282-772q-4-17 4.5-31t25.5-18q38-9 80.5-14t87.5-5q149 0 254.5 47T840-680Z"/>
    </Icon>
  );
});

IconMaterialDatabaseOff.displayName = 'AmauiIconMaterialDatabaseOff';

export default IconMaterialDatabaseOff;
