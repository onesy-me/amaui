import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFestivalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FestivalW100'

      short_name='Festival'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.75 21.35q-.35 0-.537-.237-.188-.238-.088-.588.425-1.65.575-3.325.15-1.675.2-3.4-.975-.275-1.612-1.163-.638-.887-.638-2.287v-.15q0-.3.2-.588.2-.287.5-.412Q5.775 7.925 8.238 6q2.462-1.925 3.337-2.775.1-.1.2-.138.1-.037.225-.037t.225.037q.1.038.2.138.875.85 3.338 2.775 2.462 1.925 5.887 3.2.3.125.5.412.2.288.2.588v.15q0 1.4-.637 2.287-.638.888-1.613 1.163.05 1.725.2 3.4.15 1.675.575 3.325.1.35-.087.588-.188.237-.538.237ZM3.1 9.65h17.8q-2.45-1-4.675-2.488Q14 5.675 12 3.8q-2 1.875-4.225 3.362Q5.55 8.65 3.1 9.65Zm11.4 3.5q1 0 1.575-.85t.575-1.95h-4.3q0 1.1.575 1.95.575.85 1.575.85Zm-5 0q1 0 1.575-.85t.575-1.95h-4.3q0 1.1.575 1.95.575.85 1.575.85Zm-5 0q1 0 1.575-.85t.575-1.95h-4.3q0 1.1.575 1.95.575.85 1.575.85Zm-.7 7.5h4.1q.275-1.75.412-3.488.138-1.737.188-3.512-.45-.2-.837-.563-.388-.362-.663-.937-.35.75-.975 1.2-.625.45-1.425.5-.05 1.725-.2 3.425-.15 1.7-.6 3.375Zm4.8 0h6.8q-.275-1.7-.412-3.388-.138-1.687-.188-3.412-.9.075-1.675-.412Q12.35 12.95 12 12.05q-.35.9-1.125 1.388-.775.487-1.675.412-.05 1.725-.188 3.412-.137 1.688-.412 3.388Zm7.5 0h4.1q-.45-1.675-.6-3.375-.15-1.7-.2-3.425-.8-.05-1.45-.5-.65-.45-.95-1.25-.225.6-.637.975-.413.375-.863.575.05 1.775.188 3.512.137 1.738.412 3.488Zm3.4-7.5q1 0 1.575-.85t.575-1.95h-4.3q0 1.1.575 1.95.575.85 1.575.85Z"/>
    </Icon>
  );
});

IconMaterialFestivalW100.displayName = 'AmauiIconMaterialFestivalW100';

export default IconMaterialFestivalW100;
