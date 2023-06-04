import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsCell = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsCell'

      short_name='SettingsCell'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 20V0h12v20Zm2-2h8v-1H8Zm0-3h8V5H8ZM8 3h8V2H8Zm0 21q-.425 0-.713-.288Q7 23.425 7 23t.287-.712Q7.575 22 8 22t.713.288Q9 22.575 9 23t-.287.712Q8.425 24 8 24Zm4 0q-.425 0-.712-.288Q11 23.425 11 23t.288-.712Q11.575 22 12 22t.713.288Q13 22.575 13 23t-.287.712Q12.425 24 12 24Zm4 0q-.425 0-.712-.288Q15 23.425 15 23t.288-.712Q15.575 22 16 22t.712.288Q17 22.575 17 23t-.288.712Q16.425 24 16 24ZM8 3V2v1Zm0 15v-1 1Z"/>
    </Icon>
  );
});

IconMaterialSettingsCell.displayName = 'AmauiIconMaterialSettingsCell';

export default IconMaterialSettingsCell;
