import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrackChangesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrackChangesFilled'

      short_name='TrackChanges'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2h.25q.325 0 .538.212.212.213.212.538v7.525q.45.275.725.712Q14 11.425 14 12q0 .825-.587 1.412Q12.825 14 12 14q-.825 0-1.412-.588Q10 12.825 10 12q0-.575.275-1.025.275-.45.725-.7v-2.15q-1.3.35-2.15 1.412Q8 10.6 8 12q0 1.65 1.175 2.825Q10.35 16 12 16q1.65 0 2.825-1.175Q16 13.65 16 12q0-.575-.162-1.138-.163-.562-.488-1.062-.225-.35-.187-.688.037-.337.287-.587.3-.3.762-.3.463 0 .738.4.55.8.8 1.662Q18 11.15 18 12q0 2.5-1.75 4.25T12 18q-2.5 0-4.25-1.75T6 12q0-2.25 1.425-3.912Q8.85 6.425 11 6.075V4.05q-2.975.375-4.987 2.625Q4 8.925 4 12q0 3.35 2.325 5.675Q8.65 20 12 20q3.35 0 5.675-2.325Q20 15.35 20 12q0-1.475-.425-2.65-.425-1.175-1.2-2.175-.275-.35-.262-.75.012-.4.312-.7.3-.3.713-.3.412 0 .662.325 1.05 1.275 1.625 2.825Q22 10.125 22 12q0 2.075-.788 3.9-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialTrackChangesFilled.displayName = 'AmauiIconMaterialTrackChangesFilled';

export default IconMaterialTrackChangesFilled;
