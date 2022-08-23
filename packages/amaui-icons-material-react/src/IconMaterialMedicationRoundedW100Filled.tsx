import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMedicationRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicationRoundedW100Filled'
      short_name='Medication'

      {...props}
    >
      <path d="M12 16.2Q12.15 16.2 12.25 16.1Q12.35 16 12.35 15.85V13.7H14.5Q14.65 13.7 14.75 13.6Q14.85 13.5 14.85 13.35Q14.85 13.2 14.75 13.1Q14.65 13 14.5 13H12.35V10.85Q12.35 10.7 12.25 10.6Q12.15 10.5 12 10.5Q11.85 10.5 11.75 10.6Q11.65 10.7 11.65 10.85V13H9.5Q9.35 13 9.25 13.1Q9.15 13.2 9.15 13.35Q9.15 13.5 9.25 13.6Q9.35 13.7 9.5 13.7H11.65V15.85Q11.65 16 11.75 16.1Q11.85 16.2 12 16.2ZM7.8 19.55Q7.175 19.55 6.738 19.113Q6.3 18.675 6.3 18.05V8.65Q6.3 8.025 6.738 7.587Q7.175 7.15 7.8 7.15H16.2Q16.825 7.15 17.262 7.587Q17.7 8.025 17.7 8.65V18.05Q17.7 18.675 17.262 19.113Q16.825 19.55 16.2 19.55ZM6.95 5.15Q6.8 5.15 6.7 5.05Q6.6 4.95 6.6 4.8Q6.6 4.65 6.7 4.55Q6.8 4.45 6.95 4.45H17.05Q17.2 4.45 17.3 4.55Q17.4 4.65 17.4 4.8Q17.4 4.95 17.3 5.05Q17.2 5.15 17.05 5.15Z"/>
    </Icon>
  );
});

IconMaterialMedicationRoundedW100Filled.displayName = 'AmauiIconMaterialMedicationRoundedW100Filled';

export default IconMaterialMedicationRoundedW100Filled;
