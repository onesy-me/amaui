import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCompressRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompressRoundedW100Filled'
      short_name='Compress'

      {...props}
    >
      <path d="M12 21.5Q11.85 21.5 11.75 21.4Q11.65 21.3 11.65 21.15V17.1L9.625 19.125Q9.525 19.225 9.4 19.225Q9.275 19.225 9.15 19.1Q9.025 18.975 9.025 18.85Q9.025 18.725 9.15 18.6L11.475 16.275Q11.7 16.05 12 16.05Q12.3 16.05 12.525 16.275L14.875 18.625Q14.975 18.725 14.975 18.85Q14.975 18.975 14.85 19.1Q14.725 19.225 14.6 19.225Q14.475 19.225 14.35 19.1L12.35 17.1V21.175Q12.35 21.3 12.25 21.4Q12.15 21.5 12 21.5ZM4.975 13.2Q4.85 13.2 4.75 13.1Q4.65 13 4.65 12.85Q4.65 12.7 4.75 12.6Q4.85 12.5 5 12.5H19.025Q19.15 12.5 19.25 12.6Q19.35 12.7 19.35 12.85Q19.35 13 19.25 13.1Q19.15 13.2 19 13.2ZM4.975 10.5Q4.85 10.5 4.75 10.4Q4.65 10.3 4.65 10.15Q4.65 10 4.75 9.9Q4.85 9.8 5 9.8H19.025Q19.15 9.8 19.25 9.9Q19.35 10 19.35 10.15Q19.35 10.3 19.25 10.4Q19.15 10.5 19 10.5ZM11.475 6.725 9.125 4.375Q9.025 4.275 9.025 4.15Q9.025 4.025 9.15 3.9Q9.275 3.775 9.4 3.775Q9.525 3.775 9.65 3.9L11.65 5.9V1.825Q11.65 1.7 11.75 1.6Q11.85 1.5 12 1.5Q12.15 1.5 12.25 1.6Q12.35 1.7 12.35 1.85V5.9L14.375 3.875Q14.475 3.775 14.6 3.775Q14.725 3.775 14.85 3.9Q14.975 4.025 14.975 4.15Q14.975 4.275 14.85 4.4L12.525 6.725Q12.3 6.95 12 6.95Q11.7 6.95 11.475 6.725Z"/>
    </Icon>
  );
});

IconMaterialCompressRoundedW100Filled.displayName = 'AmauiIconMaterialCompressRoundedW100Filled';

export default IconMaterialCompressRoundedW100Filled;
