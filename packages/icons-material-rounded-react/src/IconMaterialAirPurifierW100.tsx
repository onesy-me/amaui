import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirPurifierW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirPurifierW100'

      short_name='AirPurifier'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-232v-448q0-44.55 31.73-76.28Q235.45-788 280-788h280q44.55 0 76.28 31.72Q668-724.55 668-680v26q0 5.95-4.11 9.97-4.1 4.03-10.18 4.03-5.71 0-9.71-4-4-4-4-10v-26q0-33-23.5-56.5T560-760H280q-33 0-56.5 23.5T200-680v448q0 14 9 23t23 9h376q14 0 23-9t9-23v-34q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v34q0 24.75-17.62 42.37Q632.75-172 608-172H232q-24.75 0-42.37-17.63Q172-207.25 172-232Zm248-140q44.55 0 76.27-31.73Q528-435.45 528-480t-31.73-76.28Q464.55-588 420-588t-76.27 31.72Q312-524.55 312-480t31.73 76.27Q375.45-372 420-372Zm0-28q-33 0-56.5-23.5T340-480q0-33 23.5-56.5T420-560q33 0 56.5 23.5T500-480q0 33-23.5 56.5T420-400Zm387-199.96q0 5.96-4.03 9.96-4.02 4-9.97 4-17 0-31 7.5T740-554q-11 23-31.26 35.5Q688.47-506 664-506q-6.22 0-10.61-3.5T649-520q0-7 4.39-10.5T664-534q17.22 0 30.61-7.5T716-566q11-23 32-35.5t45-12.5q5.95 0 9.97 4.04 4.03 4.03 4.03 10ZM807-440q0 7-4.39 10.5T792-426q-17.22 0-30.61 7.5T740-394q-11 23-31.26 35.5Q688.47-346 664-346q-6.22 0-10.61-3.5T649-360q0-7 4.39-10.5T664-374q17.22 0 30.61-7.5T716-406q11-21 31.26-34.5Q767.53-454 792-454q6.22 0 10.61 3.5T807-440ZM640-200H200h440-70 70Z"/>
    </Icon>
  );
});

IconMaterialAirPurifierW100.displayName = 'OnesyIconMaterialAirPurifierW100';

export default IconMaterialAirPurifierW100;
