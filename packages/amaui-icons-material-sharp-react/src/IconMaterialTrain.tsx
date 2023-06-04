import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrain = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Train'

      short_name='Train'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 15.5V6q0-1.325.688-2.113.687-.787 1.812-1.2 1.125-.412 2.562-.55Q10.5 2 12 2q1.65 0 3.113.137 1.462.138 2.55.55 1.087.413 1.712 1.2Q20 4.675 20 6v9.5q0 1.475-1.012 2.488Q17.975 19 16.5 19l1.5 1.5v.5h-2l-2-2h-4l-2 2H6v-.5L7.5 19q-1.475 0-2.487-1.012Q4 16.975 4 15.5ZM12 4q-2.65 0-3.875.312Q6.9 4.625 6.45 5h11.2q-.375-.425-1.612-.713Q14.8 4 12 4Zm-6 6h5V7H6Zm10.5 2H6h12-1.5ZM13 10h5V7h-5Zm-4.5 6q.65 0 1.075-.425Q10 15.15 10 14.5q0-.65-.425-1.075Q9.15 13 8.5 13q-.65 0-1.075.425Q7 13.85 7 14.5q0 .65.425 1.075Q7.85 16 8.5 16Zm7 0q.65 0 1.075-.425Q17 15.15 17 14.5q0-.65-.425-1.075Q16.15 13 15.5 13q-.65 0-1.075.425Q14 13.85 14 14.5q0 .65.425 1.075Q14.85 16 15.5 16Zm-8 1h9q.65 0 1.075-.425Q18 16.15 18 15.5V12H6v3.5q0 .65.425 1.075Q6.85 17 7.5 17ZM12 5h5.65-11.2H12Z"/>
    </Icon>
  );
});

IconMaterialTrain.displayName = 'AmauiIconMaterialTrain';

export default IconMaterialTrain;
