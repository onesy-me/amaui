import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialZoomInRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZoomInRoundedFilled'
      short_name='ZoomIn'

      {...props}
    >
      <path d="M18.9 20.3 13.3 14.7Q12.55 15.3 11.575 15.65Q10.6 16 9.5 16Q6.775 16 4.888 14.113Q3 12.225 3 9.5Q3 6.775 4.888 4.887Q6.775 3 9.5 3Q12.225 3 14.113 4.887Q16 6.775 16 9.5Q16 10.6 15.65 11.575Q15.3 12.55 14.7 13.3L20.325 18.925Q20.6 19.2 20.588 19.612Q20.575 20.025 20.3 20.3Q20.025 20.575 19.6 20.575Q19.175 20.575 18.9 20.3ZM9.5 14Q11.375 14 12.688 12.688Q14 11.375 14 9.5Q14 7.625 12.688 6.312Q11.375 5 9.5 5Q7.625 5 6.312 6.312Q5 7.625 5 9.5Q5 11.375 6.312 12.688Q7.625 14 9.5 14ZM9.5 12.5Q9.075 12.5 8.788 12.212Q8.5 11.925 8.5 11.5V10.5H7.475Q7.05 10.5 6.775 10.212Q6.5 9.925 6.5 9.5Q6.5 9.075 6.787 8.787Q7.075 8.5 7.5 8.5H8.5V7.475Q8.5 7.05 8.788 6.775Q9.075 6.5 9.5 6.5Q9.925 6.5 10.213 6.787Q10.5 7.075 10.5 7.5V8.5H11.525Q11.95 8.5 12.225 8.787Q12.5 9.075 12.5 9.5Q12.5 9.925 12.213 10.212Q11.925 10.5 11.5 10.5H10.5V11.525Q10.5 11.95 10.213 12.225Q9.925 12.5 9.5 12.5Z"/>
    </Icon>
  );
});

IconMaterialZoomInRoundedFilled.displayName = 'AmauiIconMaterialZoomInRoundedFilled';

export default IconMaterialZoomInRoundedFilled;
