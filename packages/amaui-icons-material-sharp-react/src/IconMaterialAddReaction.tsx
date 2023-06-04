import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddReaction = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddReaction'

      short_name='AddReaction'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 12Zm0 10q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2q1.075 0 2.075.212 1 .213 1.925.613v2.25q-.875-.5-1.887-.788Q13.1 4 12 4 8.675 4 6.338 6.337 4 8.675 4 12t2.338 5.663Q8.675 20 12 20q3.325 0 5.663-2.337Q20 15.325 20 12q0-.8-.163-1.55Q19.675 9.7 19.4 9h2.15q.225.725.338 1.462Q22 11.2 22 12q0 2.075-.788 3.9-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm3.5-11q.65 0 1.075-.425Q17 10.15 17 9.5q0-.65-.425-1.075Q16.15 8 15.5 8q-.65 0-1.075.425Q14 8.85 14 9.5q0 .65.425 1.075Q14.85 11 15.5 11Zm-7 0q.65 0 1.075-.425Q10 10.15 10 9.5q0-.65-.425-1.075Q9.15 8 8.5 8q-.65 0-1.075.425Q7 8.85 7 9.5q0 .65.425 1.075Q7.85 11 8.5 11Zm3.5 6.5q1.775 0 3.137-.975Q16.5 15.55 17.1 14H6.9q.6 1.55 1.963 2.525 1.362.975 3.137.975ZM20 7V5h-2V3h2V1h2v2h2v2h-2v2Z"/>
    </Icon>
  );
});

IconMaterialAddReaction.displayName = 'AmauiIconMaterialAddReaction';

export default IconMaterialAddReaction;
