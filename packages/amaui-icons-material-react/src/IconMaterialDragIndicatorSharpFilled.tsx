import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDragIndicatorSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DragIndicatorSharpFilled'
      short_name='DragIndicator'

      {...props}
    >
      <path d="M9 20Q8.175 20 7.588 19.413Q7 18.825 7 18Q7 17.175 7.588 16.587Q8.175 16 9 16Q9.825 16 10.413 16.587Q11 17.175 11 18Q11 18.825 10.413 19.413Q9.825 20 9 20ZM9 14Q8.175 14 7.588 13.412Q7 12.825 7 12Q7 11.175 7.588 10.587Q8.175 10 9 10Q9.825 10 10.413 10.587Q11 11.175 11 12Q11 12.825 10.413 13.412Q9.825 14 9 14ZM9 8Q8.175 8 7.588 7.412Q7 6.825 7 6Q7 5.175 7.588 4.588Q8.175 4 9 4Q9.825 4 10.413 4.588Q11 5.175 11 6Q11 6.825 10.413 7.412Q9.825 8 9 8ZM15 8Q14.175 8 13.588 7.412Q13 6.825 13 6Q13 5.175 13.588 4.588Q14.175 4 15 4Q15.825 4 16.413 4.588Q17 5.175 17 6Q17 6.825 16.413 7.412Q15.825 8 15 8ZM15 14Q14.175 14 13.588 13.412Q13 12.825 13 12Q13 11.175 13.588 10.587Q14.175 10 15 10Q15.825 10 16.413 10.587Q17 11.175 17 12Q17 12.825 16.413 13.412Q15.825 14 15 14ZM15 20Q14.175 20 13.588 19.413Q13 18.825 13 18Q13 17.175 13.588 16.587Q14.175 16 15 16Q15.825 16 16.413 16.587Q17 17.175 17 18Q17 18.825 16.413 19.413Q15.825 20 15 20Z"/>
    </Icon>
  );
});

IconMaterialDragIndicatorSharpFilled.displayName = 'AmauiIconMaterialDragIndicatorSharpFilled';

export default IconMaterialDragIndicatorSharpFilled;
