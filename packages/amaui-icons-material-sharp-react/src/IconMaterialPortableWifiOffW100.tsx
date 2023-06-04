import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPortableWifiOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PortableWifiOffW100'

      short_name='PortableWifiOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.85 20.85 8.725 9.725q-.35.5-.537 1.062Q8 11.35 8 12q0 .9.363 1.662.362.763.987 1.338l-.5.5q-.725-.65-1.137-1.55Q7.3 13.05 7.3 12q0-.775.25-1.488.25-.712.675-1.287l-2.35-2.35Q5 7.925 4.5 9.213 4 10.5 4 12q0 1.725.675 3.225t1.85 2.6l-.5.5q-1.275-1.2-2-2.825Q3.3 13.875 3.3 12q0-1.625.55-3.05.55-1.425 1.525-2.575L3.15 4.15l.5-.5 16.7 16.7Zm-.475-4.275-.5-.5q.55-.875.837-1.913Q20 13.125 20 12q0-3.35-2.325-5.675Q15.35 4 12 4q-1.125 0-2.15.287-1.025.288-1.95.838L7.4 4.6q1.025-.625 2.175-.963Q10.725 3.3 12 3.3q1.8 0 3.388.687 1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.275-.337 2.425-.338 1.15-.988 2.15Zm-2.95-2.95-.575-.575q.075-.25.113-.513Q16 12.275 16 12q0-1.65-1.175-2.825Q13.65 8 12 8q-.275 0-.537.037-.263.038-.513.113l-.575-.575q.375-.125.788-.2.412-.075.837-.075 1.95 0 3.325 1.375Q16.7 10.05 16.7 12q0 .425-.075.825-.075.4-.2.8Z"/>
    </Icon>
  );
});

IconMaterialPortableWifiOffW100.displayName = 'AmauiIconMaterialPortableWifiOffW100';

export default IconMaterialPortableWifiOffW100;
