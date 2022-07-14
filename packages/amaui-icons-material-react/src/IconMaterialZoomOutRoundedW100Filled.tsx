import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialZoomOutRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZoomOutRoundedW100Filled'
      short_name='ZoomOut'

      {...props}
    >
      <path d="M19.2 19.65 13.2 13.65Q12.45 14.3 11.475 14.65Q10.5 15 9.55 15Q7.25 15 5.65 13.4Q4.05 11.8 4.05 9.5Q4.05 7.2 5.65 5.6Q7.25 4 9.55 4Q11.85 4 13.45 5.6Q15.05 7.2 15.05 9.5Q15.05 10.525 14.675 11.5Q14.3 12.475 13.7 13.15L19.725 19.175Q19.825 19.275 19.812 19.413Q19.8 19.55 19.7 19.65Q19.575 19.775 19.45 19.775Q19.325 19.775 19.2 19.65ZM9.55 14.3Q11.575 14.3 12.963 12.912Q14.35 11.525 14.35 9.5Q14.35 7.475 12.963 6.087Q11.575 4.7 9.55 4.7Q7.525 4.7 6.138 6.087Q4.75 7.475 4.75 9.5Q4.75 11.525 6.138 12.912Q7.525 14.3 9.55 14.3ZM7.675 9.85Q7.55 9.85 7.45 9.75Q7.35 9.65 7.35 9.5Q7.35 9.35 7.45 9.25Q7.55 9.15 7.7 9.15H11.425Q11.55 9.15 11.65 9.25Q11.75 9.35 11.75 9.5Q11.75 9.65 11.65 9.75Q11.55 9.85 11.4 9.85Z"/>
    </Icon>
  );
});

export default IconMaterialZoomOutRoundedW100Filled;
