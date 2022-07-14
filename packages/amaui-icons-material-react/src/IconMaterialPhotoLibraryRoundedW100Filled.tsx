import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoLibraryRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoLibraryRoundedW100Filled'
      short_name='PhotoLibrary'

      {...props}
    >
      <path d="M10 13.6H16.7Q16.975 13.6 17.075 13.375Q17.175 13.15 17.025 12.95L15.25 10.6Q15.125 10.45 14.938 10.45Q14.75 10.45 14.625 10.6L12.45 13.3L11.175 11.825Q11.05 11.675 10.863 11.675Q10.675 11.675 10.55 11.85L9.7 12.95Q9.55 13.15 9.65 13.375Q9.75 13.6 10 13.6ZM8.15 16.7Q7.5 16.7 7.075 16.275Q6.65 15.85 6.65 15.2V4.8Q6.65 4.15 7.075 3.725Q7.5 3.3 8.15 3.3H18.55Q19.2 3.3 19.625 3.725Q20.05 4.15 20.05 4.8V15.2Q20.05 15.85 19.625 16.275Q19.2 16.7 18.55 16.7ZM5.45 19.4Q4.8 19.4 4.375 18.975Q3.95 18.55 3.95 17.9V7.15Q3.95 7 4.05 6.9Q4.15 6.8 4.3 6.8Q4.45 6.8 4.55 6.9Q4.65 7 4.65 7.15V17.9Q4.65 18.25 4.875 18.475Q5.1 18.7 5.45 18.7H16.2Q16.35 18.7 16.45 18.8Q16.55 18.9 16.55 19.05Q16.55 19.2 16.45 19.3Q16.35 19.4 16.2 19.4Z"/>
    </Icon>
  );
});

export default IconMaterialPhotoLibraryRoundedW100Filled;
