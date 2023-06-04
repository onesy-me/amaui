import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGolfCourseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GolfCourseFilled'

      short_name='GolfCourse'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.5 21q-.625 0-1.062-.438Q18 20.125 18 19.5t.438-1.062Q18.875 18 19.5 18t1.062.438Q21 18.875 21 19.5t-.438 1.062Q20.125 21 19.5 21ZM10 22q-2.5 0-4.25-.587Q4 20.825 4 20q0-.575.825-1.025.825-.45 2.175-.725V20h2V2l8 3.9L11 9v9.05q2.15.125 3.575.662Q16 19.25 16 20q0 .825-1.75 1.413Q12.5 22 10 22Z"/>
    </Icon>
  );
});

IconMaterialGolfCourseFilled.displayName = 'AmauiIconMaterialGolfCourseFilled';

export default IconMaterialGolfCourseFilled;
