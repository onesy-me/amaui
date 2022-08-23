import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTapasRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TapasRoundedW100Filled'
      short_name='Tapas'

      {...props}
    >
      <path d="M7.15 22.15V12.85H5Q4.225 12.85 3.688 12.312Q3.15 11.775 3.15 11Q3.15 10.225 3.688 9.688Q4.225 9.15 5 9.15H7.15V7.85H5Q4.225 7.85 3.688 7.312Q3.15 6.775 3.15 6Q3.15 5.225 3.688 4.687Q4.225 4.15 5 4.15H7.15V1.85Q7.15 1.7 7.25 1.6Q7.35 1.5 7.5 1.5Q7.65 1.5 7.75 1.6Q7.85 1.7 7.85 1.85V4.15H10Q10.775 4.15 11.312 4.687Q11.85 5.225 11.85 6Q11.85 6.775 11.312 7.312Q10.775 7.85 10 7.85H7.85V9.15H10Q10.775 9.15 11.312 9.688Q11.85 10.225 11.85 11Q11.85 11.775 11.312 12.312Q10.775 12.85 10 12.85H7.85V22.15Q7.85 22.3 7.75 22.4Q7.65 22.5 7.5 22.5Q7.35 22.5 7.25 22.4Q7.15 22.3 7.15 22.15ZM17.15 21.8V13.35Q15.85 13 15 12.087Q14.15 11.175 14.15 10V2.25Q14.15 1.925 14.363 1.712Q14.575 1.5 14.9 1.5H20.1Q20.425 1.5 20.638 1.712Q20.85 1.925 20.85 2.25V10Q20.85 11.175 20 12.087Q19.15 13 17.85 13.35V21.8H19.5Q19.65 21.8 19.75 21.9Q19.85 22 19.85 22.15Q19.85 22.3 19.75 22.4Q19.65 22.5 19.5 22.5H15.5Q15.35 22.5 15.25 22.4Q15.15 22.3 15.15 22.15Q15.15 22 15.25 21.9Q15.35 21.8 15.5 21.8ZM14.85 6.65H20.15V2.2H14.85Z"/>
    </Icon>
  );
});

IconMaterialTapasRoundedW100Filled.displayName = 'AmauiIconMaterialTapasRoundedW100Filled';

export default IconMaterialTapasRoundedW100Filled;
