import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLinkedCameraFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkedCameraFilled'

      short_name='LinkedCamera'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.6 6.325q0-1.65-1.138-2.788Q18.325 2.4 16.675 2.4q-.275 0-.475-.2-.2-.2-.2-.5 0-.275.2-.475.2-.2.475-.2 2.2 0 3.75 1.55 1.55 1.55 1.55 3.75 0 .275-.2.475-.2.2-.475.2-.3 0-.5-.2t-.2-.475ZM4 21q-.825 0-1.412-.587Q2 19.825 2 19V7q0-.825.588-1.412Q3.175 5 4 5h3.15L8.4 3.65q.275-.325.662-.488Q9.45 3 9.875 3H14q.425 0 .713.287Q15 3.575 15 4v2q.825 0 1.413.588Q17 7.175 17 8h4q.425 0 .712.287Q22 8.575 22 9v10q0 .825-.587 1.413Q20.825 21 20 21ZM17.9 6.35q0-.525-.362-.888-.363-.362-.888-.362-.275 0-.462-.213Q16 4.675 16 4.4t.2-.475q.2-.2.475-.2 1.075 0 1.838.762.762.763.762 1.838 0 .275-.2.475-.2.2-.475.2-.275 0-.487-.188-.213-.187-.213-.462ZM12 17.5q1.875 0 3.188-1.312Q16.5 14.875 16.5 13q0-1.875-1.312-3.188Q13.875 8.5 12 8.5q-1.875 0-3.188 1.312Q7.5 11.125 7.5 13q0 1.875 1.312 3.188Q10.125 17.5 12 17.5Z"/>
    </Icon>
  );
});

IconMaterialLinkedCameraFilled.displayName = 'AmauiIconMaterialLinkedCameraFilled';

export default IconMaterialLinkedCameraFilled;
