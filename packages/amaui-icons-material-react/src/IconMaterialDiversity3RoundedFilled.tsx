import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDiversity3RoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Diversity3RoundedFilled'
      short_name='Diversity3'

      {...props}
    >
      <path d="M2 20q-.425 0-.712-.288Q1 19.425 1 19v-3q0-.825.588-1.413Q2.175 14 3 14h3.275q.5 0 .95.25.45.25.725.675.725.975 1.788 1.525Q10.8 17 12 17q1.225 0 2.288-.55 1.062-.55 1.762-1.525.325-.425.762-.675.438-.25.913-.25H21q.825 0 1.413.587Q23 15.175 23 16v3q0 .425-.288.712Q22.425 20 22 20h-5q-.425 0-.712-.288Q16 19.425 16 19v-1.275q-.875.625-1.887.95Q13.1 19 12 19q-1.075 0-2.1-.337-1.025-.338-1.9-.963V19q0 .425-.287.712Q7.425 20 7 20Zm10-4q-.95 0-1.8-.438-.85-.437-1.425-1.212-.425-.625-1.062-.987Q7.075 13 6.325 13q.55-.925 2.325-1.463Q10.425 11 12 11q1.575 0 3.35.537 1.775.538 2.325 1.463-.725 0-1.375.363-.65.362-1.075.987-.55.8-1.4 1.225Q12.975 16 12 16Zm-8-3q-1.25 0-2.125-.875T1 10q0-1.25.875-2.125T4 7q1.25 0 2.125.875T7 10q0 1.25-.875 2.125T4 13Zm16 0q-1.25 0-2.125-.875T17 10q0-1.25.875-2.125T20 7q1.25 0 2.125.875T23 10q0 1.25-.875 2.125T20 13Zm-8-3q-1.25 0-2.125-.875T9 7q0-1.25.875-2.125T12 4q1.25 0 2.125.875T15 7q0 1.25-.875 2.125T12 10Z"/>
    </Icon>
  );
});

IconMaterialDiversity3RoundedFilled.displayName = 'AmauiIconMaterialDiversity3RoundedFilled';

export default IconMaterialDiversity3RoundedFilled;
