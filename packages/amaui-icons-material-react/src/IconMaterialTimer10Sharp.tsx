import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTimer10Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer10Sharp'
      short_name='Timer10'

      {...props}
    >
      <path d="M4.35 16.95V9.15L2.8 10.25L2 9.1L4.8 7.05H5.9V16.95ZM11.1 17Q9.075 17 8.113 15.4Q7.15 13.8 7.15 12Q7.15 10.2 8.113 8.6Q9.075 7 11.1 7Q13.125 7 14.062 8.6Q15 10.2 15 12Q15 13.775 14.062 15.387Q13.125 17 11.1 17ZM11.1 15.55Q12.45 15.55 12.95 14.325Q13.45 13.1 13.45 12Q13.45 10.9 12.975 9.675Q12.5 8.45 11.1 8.45Q9.7 8.45 9.225 9.662Q8.75 10.875 8.75 12Q8.75 13.1 9.25 14.325Q9.75 15.55 11.1 15.55ZM19 17Q18.025 17 17.15 16.562Q16.275 16.125 15.9 15.1L17.25 14.5Q17.525 15.075 17.963 15.363Q18.4 15.65 19 15.65Q19.375 15.65 19.863 15.475Q20.35 15.3 20.35 14.8Q20.35 14.375 19.938 14.125Q19.525 13.875 18.85 13.75Q17.9 13.55 17.025 13.087Q16.15 12.625 16.15 11.5Q16.15 10.4 17.038 9.925Q17.925 9.45 18.9 9.45Q19.775 9.45 20.562 9.787Q21.35 10.125 21.7 11L20.4 11.55Q20.175 11.125 19.8 10.938Q19.425 10.75 18.9 10.75Q18.55 10.75 18.125 10.9Q17.7 11.05 17.7 11.5Q17.7 11.925 18.05 12.137Q18.4 12.35 19.2 12.5Q20.15 12.7 21.025 13.137Q21.9 13.575 21.9 14.75Q21.9 15.95 20.975 16.475Q20.05 17 19 17Z"/>
    </Icon>
  );
});

IconMaterialTimer10Sharp.displayName = 'AmauiIconMaterialTimer10Sharp';

export default IconMaterialTimer10Sharp;
