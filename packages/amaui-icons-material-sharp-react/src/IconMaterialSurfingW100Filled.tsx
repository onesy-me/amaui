import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSurfingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SurfingW100Filled'

      short_name='Surfing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.65 22.35v-.7H3q.8 0 1.538-.25.737-.25 1.462-.675.725.425 1.463.675.737.25 1.537.25.8 0 1.55-.25t1.45-.675q.725.425 1.463.675.737.25 1.537.25.8 0 1.55-.25t1.45-.675q.7.425 1.45.675.75.25 1.55.25h.35v.7H21q-.7 0-1.45-.2T18 21.525q-.8.425-1.55.625t-1.45.2q-.7 0-1.45-.2T12 21.525q-.8.425-1.55.625t-1.45.2q-.7 0-1.45-.2T6 21.525q-.8.425-1.55.625t-1.45.2ZM17 5.1q-.65 0-1.125-.475T15.4 3.5q0-.65.475-1.125T17 1.9q.65 0 1.125.475T18.6 3.5q0 .65-.475 1.125T17 5.1ZM9.45 19.125q-2.5-1.5-4.15-3.225-1.65-1.725-1.65-2.625 0-.375.387-.5.388-.125.813-.125.675 0 2.025.35 1.35.35 3.15 1.15L8.5 8.975l4.225-3.125L8.9 5.125 6.4 6.85 6 6.275 8.75 4.4l5.3.975q.2.05.413.187.212.138.337.388l.875 1.55q.65 1.125 1.787 1.887 1.138.763 2.488.913v.725q-1.65-.175-3.012-1.138-1.363-.962-2.213-2.637l-3.65 2.7 4.275 3.375v3.85q.35.25.938.713.587.462.887.712-.25.2-.838.375-.587.175-1.337.175t-1.537-.263q-.788-.262-1.463-.912-.675.65-1.337.875-.663.225-1.213.275Zm5.2-2.475v-2.725l-4.6-3.4.675 3.9q.875.425 1.85 1l2.075 1.225Z"/>
    </Icon>
  );
});

IconMaterialSurfingW100Filled.displayName = 'AmauiIconMaterialSurfingW100Filled';

export default IconMaterialSurfingW100Filled;
