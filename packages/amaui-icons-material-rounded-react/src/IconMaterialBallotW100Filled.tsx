import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBallotW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BallotW100Filled'

      short_name='Ballot'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.35 10h3.8q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-3.8q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm0 4.7h3.8q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-3.8q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm-3.6-4.05h.5q.325 0 .538-.212Q10 10.225 10 9.9v-.5q0-.325-.212-.538-.213-.212-.538-.212h-.5q-.325 0-.537.212Q8 9.075 8 9.4v.5q0 .325.213.538.212.212.537.212Zm0 4.7h.5q.325 0 .538-.213.212-.212.212-.537v-.5q0-.325-.212-.538-.213-.212-.538-.212h-.5q-.325 0-.537.212Q8 13.775 8 14.1v.5q0 .325.213.537.212.213.537.213ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialBallotW100Filled.displayName = 'AmauiIconMaterialBallotW100Filled';

export default IconMaterialBallotW100Filled;
