import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLaundryTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaundryTwoTone'
      short_name='Laundry'

      {...props}
    >
      <path d="M6 13.975q.475-.2.975-.313.5-.112 1.025-.162V7.575L4.875 9.3 3.85 7.55 7.7 5.325q.6 1.225 1.763 1.95Q10.625 8 12 8t2.538-.725Q15.7 6.55 16.3 5.325l3.825 2.225-1 1.75L16 7.575V17.4q.1-.05.225-.125t.2-.125L18 15.775v-4.8l1.025.55q.35.2.75.088.4-.113.6-.463l1.975-3.475q.2-.35.1-.75T22 6.3l-4.975-2.875q-.3-.175-.612-.3Q16.1 3 15.75 3q-.35 0-.613.212-.262.213-.387.538-.35.95-.912 1.6Q13.275 6 12 6q-1.275 0-1.837-.65-.563-.65-.913-1.6-.125-.325-.375-.538Q8.625 3 8.275 3t-.675.125q-.325.125-.625.3L2 6.3q-.35.2-.462.612-.113.413.087.763l2 3.475q.2.35.6.463.4.112.75-.088L6 10.975ZM8.375 17q-.425 0-.838.137-.412.138-.712.388l-1.425 1.2q-.325.275-.725.25-.4-.025-.675-.35-.275-.325-.237-.737.037-.413.362-.688l1.4-1.2q.575-.5 1.313-.762.737-.263 1.537-.263.8 0 1.525.263.725.262 1.3.762l2.9 2.475q.3.25.712.388.413.137.838.137.45 0 .838-.125.387-.125.687-.4l1.4-1.2q.325-.275.737-.25.413.025.688.35.275.325.238.737-.038.413-.363.688l-1.4 1.2q-.575.5-1.3.75-.725.25-1.525.25-.8 0-1.537-.25-.738-.25-1.313-.75l-2.9-2.475q-.3-.25-.687-.388Q8.825 17 8.375 17ZM12 8Z"/>
    </Icon>
  );
});

IconMaterialLaundryTwoTone.displayName = 'AmauiIconMaterialLaundryTwoTone';

export default IconMaterialLaundryTwoTone;
