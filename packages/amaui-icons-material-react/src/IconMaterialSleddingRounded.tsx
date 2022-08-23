import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSleddingRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SleddingRounded'
      short_name='Sledding'

      {...props}
    >
      <path d="M12 6.5Q11.175 6.5 10.588 5.912Q10 5.325 10 4.5Q10 3.675 10.588 3.087Q11.175 2.5 12 2.5Q12.825 2.5 13.413 3.087Q14 3.675 14 4.5Q14 5.325 13.413 5.912Q12.825 6.5 12 6.5ZM19.125 23Q18.65 23 18.338 22.95Q18.025 22.9 17.75 22.8L1.7 17.575Q1.425 17.475 1.275 17.212Q1.125 16.95 1.225 16.65Q1.325 16.35 1.6 16.2Q1.875 16.05 2.175 16.15L5.4 17.2L5.85 15.775L2.65 14.725Q2.35 14.625 2.213 14.35Q2.075 14.075 2.175 13.775Q2.275 13.475 2.55 13.337Q2.825 13.2 3.1 13.3L4 13.6V10.825Q4 10.225 4.325 9.712Q4.65 9.2 5.2 8.975L9.475 7.15Q9.675 7.05 9.863 7.025Q10.05 7 10.275 7Q11.125 7 11.65 7.737Q12.175 8.475 11.9 9.35L10.85 12.6L13 12.25Q13.675 12.125 14.263 12.45Q14.85 12.775 15.15 13.4L17.225 17.9L18.45 18.3Q18.725 18.4 18.875 18.675Q19.025 18.95 18.925 19.225Q18.825 19.525 18.55 19.675Q18.275 19.825 17.975 19.725L15.375 18.875L14.9 20.3L18.225 21.375Q18.425 21.425 18.638 21.462Q18.85 21.5 19.125 21.5Q20.025 21.5 20.763 20.762Q21.5 20.025 21.5 19.125Q21.5 18.425 21.212 17.85Q20.925 17.275 20.3 16.9Q20.075 16.75 19.975 16.5Q19.875 16.25 19.95 16.025Q20.075 15.675 20.4 15.525Q20.725 15.375 21.025 15.55Q21.975 16.1 22.488 17.025Q23 17.95 23 19.125Q23 20.675 21.837 21.837Q20.675 23 19.125 23ZM7 14.575Q6.85 14.25 6.812 13.887Q6.775 13.525 6.9 13.175L7.925 10L6 10.825Q6 10.825 6 10.825Q6 10.825 6 10.825V14.25ZM13.475 19.85 13.95 18.4 7.275 16.25 6.825 17.675ZM14.625 17.05 13.45 14.5 9.475 15.375Z"/>
    </Icon>
  );
});

IconMaterialSleddingRounded.displayName = 'AmauiIconMaterialSleddingRounded';

export default IconMaterialSleddingRounded;
