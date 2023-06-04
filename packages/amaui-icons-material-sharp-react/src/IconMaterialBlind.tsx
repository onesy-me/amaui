import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBlind = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Blind'

      short_name='Blind'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.5 5q-.825 0-1.412-.588Q9.5 3.825 9.5 3t.588-1.413Q10.675 1 11.5 1t1.413.587Q13.5 2.175 13.5 3q0 .825-.587 1.412Q12.325 5 11.5 5ZM11 22.5v-5l-1.775-2.55L9 18.5l-3 4-1.6-1.2L7 17.825V12.5q0-.775.138-1.713.137-.937.362-1.687L6 9.95v3.55H4V8.8l5.4-3.075q.2-.125.425-.175.225-.05.475-.05.6 0 1.1.3.5.3.75.825l.775 1.675q.5 1.1 1.525 1.65 1.025.55 2.55.55v2h-.975l5.475 9.55-.875.5L14.7 12.225q-1-.325-1.812-.938-.813-.612-1.388-1.487-.25.725-.387 1.662-.138.938-.088 1.738L13 16v6.5Z"/>
    </Icon>
  );
});

IconMaterialBlind.displayName = 'AmauiIconMaterialBlind';

export default IconMaterialBlind;
