import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMedicationTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicationTwoTone'
      short_name='Medication'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M7,19h10V8H7V19z M8,12h2.5V9.5h3V12H16v3h-2.5v2.5h-3V15H8V12z" opacity=".3"/><rect height="2" width="12" x="6" y="3"/><path d="M17,6H7C5.9,6,5,6.9,5,8v11c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V8C19,6.9,18.1,6,17,6z M17,19H7V8h10V19z"/><polygon points="10.5,17.5 13.5,17.5 13.5,15 16,15 16,12 13.5,12 13.5,9.5 10.5,9.5 10.5,12 8,12 8,15 10.5,15"/></g></g>
    </Icon>
  );
});

export default IconMaterialMedicationTwoTone;
