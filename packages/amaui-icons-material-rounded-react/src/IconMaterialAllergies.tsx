import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAllergies = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Allergies'

      short_name='Allergies'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 11.25V17q0 .425.288.712.287.288.712.288t.713-.288q.287-.287.287-.712v-5.875q0-.175-.037-.35-.038-.175-.113-.325l-1.525-3q-.2-.375-.575-.512Q8.875 6.8 8.5 7t-.512.587q-.138.388.062.763Zm5 0 1.45-2.925q.2-.375.063-.75Q15.875 7.2 15.5 7q-.375-.2-.762-.062-.388.137-.588.512l-1.5 3q-.075.15-.112.325-.038.175-.038.35V17q0 .425.288.712.287.288.712.288t.713-.288q.287-.287.287-.712ZM16 13q.375.2.763.062.387-.137.587-.512l1.1-2.2q.2-.375.063-.763Q18.375 9.2 18 9q-.375-.2-.762-.062-.388.137-.588.512l-1.1 2.225q-.2.375-.062.75.137.375.512.575Zm-8 0q.375-.2.512-.588.138-.387-.062-.762l-1.1-2.2q-.2-.375-.587-.512Q6.375 8.8 6 9t-.512.587q-.138.388.062.763l1.1 2.2q.2.375.588.512Q7.625 13.2 8 13Zm4 9q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"/>
    </Icon>
  );
});

IconMaterialAllergies.displayName = 'AmauiIconMaterialAllergies';

export default IconMaterialAllergies;
