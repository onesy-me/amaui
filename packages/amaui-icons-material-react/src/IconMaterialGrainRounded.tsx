import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGrainRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GrainRounded'
      short_name='Grain'

      {...props}
    >
      <path d="M10 16Q9.175 16 8.588 15.412Q8 14.825 8 14Q8 13.175 8.588 12.587Q9.175 12 10 12Q10.825 12 11.413 12.587Q12 13.175 12 14Q12 14.825 11.413 15.412Q10.825 16 10 16ZM6 12Q5.175 12 4.588 11.412Q4 10.825 4 10Q4 9.175 4.588 8.587Q5.175 8 6 8Q6.825 8 7.412 8.587Q8 9.175 8 10Q8 10.825 7.412 11.412Q6.825 12 6 12ZM6 20Q5.175 20 4.588 19.413Q4 18.825 4 18Q4 17.175 4.588 16.587Q5.175 16 6 16Q6.825 16 7.412 16.587Q8 17.175 8 18Q8 18.825 7.412 19.413Q6.825 20 6 20ZM18 8Q17.175 8 16.587 7.412Q16 6.825 16 6Q16 5.175 16.587 4.588Q17.175 4 18 4Q18.825 4 19.413 4.588Q20 5.175 20 6Q20 6.825 19.413 7.412Q18.825 8 18 8ZM14 20Q13.175 20 12.588 19.413Q12 18.825 12 18Q12 17.175 12.588 16.587Q13.175 16 14 16Q14.825 16 15.413 16.587Q16 17.175 16 18Q16 18.825 15.413 19.413Q14.825 20 14 20ZM18 16Q17.175 16 16.587 15.412Q16 14.825 16 14Q16 13.175 16.587 12.587Q17.175 12 18 12Q18.825 12 19.413 12.587Q20 13.175 20 14Q20 14.825 19.413 15.412Q18.825 16 18 16ZM14 12Q13.175 12 12.588 11.412Q12 10.825 12 10Q12 9.175 12.588 8.587Q13.175 8 14 8Q14.825 8 15.413 8.587Q16 9.175 16 10Q16 10.825 15.413 11.412Q14.825 12 14 12ZM10 8Q9.175 8 8.588 7.412Q8 6.825 8 6Q8 5.175 8.588 4.588Q9.175 4 10 4Q10.825 4 11.413 4.588Q12 5.175 12 6Q12 6.825 11.413 7.412Q10.825 8 10 8Z"/>
    </Icon>
  );
});

export default IconMaterialGrainRounded;
