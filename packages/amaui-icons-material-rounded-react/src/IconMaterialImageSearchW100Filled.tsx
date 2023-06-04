import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImageSearchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageSearchW100Filled'

      short_name='ImageSearch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3H10V5H5.8q-.35 0-.575.225Q5 5.45 5 5.8v12.4q0 .35.225.575Q5.45 19 5.8 19h12.4q.35 0 .575-.225Q19 18.55 19 18.2v-5.4l.7.7v4.7q0 .65-.425 1.075-.425.425-1.075.425Zm15.15-7.75-2.9-2.9q-.5.375-.937.512-.438.138-1.013.138-1.35 0-2.275-.925Q12.9 7.85 12.9 6.5q0-1.35.925-2.275Q14.75 3.3 16.1 3.3q1.35 0 2.275.925.925.925.925 2.275 0 .575-.175 1.087Q18.95 8.1 18.6 8.6l2.85 2.85q.1.1.112.238.013.137-.112.262t-.25.125q-.125 0-.25-.125ZM16.1 9q1.05 0 1.775-.725.725-.725.725-1.775 0-1.05-.725-1.775Q17.15 4 16.1 4q-1.05 0-1.775.725Q13.6 5.45 13.6 6.5q0 1.05.725 1.775Q15.05 9 16.1 9Zm-7.35 7.35q-.25 0-.35-.225-.1-.225.05-.425l.85-1.1q.125-.15.313-.162.187-.013.312.137L11.2 16.05l2.175-2.7q.125-.15.313-.15.187 0 .312.15l1.775 2.35q.15.2.037.425-.112.225-.362.225Z"/>
    </Icon>
  );
});

IconMaterialImageSearchW100Filled.displayName = 'AmauiIconMaterialImageSearchW100Filled';

export default IconMaterialImageSearchW100Filled;
