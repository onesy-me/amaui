import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPokerChip = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PokerChip'

      short_name='PokerChip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-83v-40q-35-5-67.5-19T312-256l-28 29q33 26 72.5 42.5T440-163Zm80 0q44-5 83.5-21.5T676-227l-28-29q-28 20-60.5 34T520-203v40Zm-40-117q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm253-4q26-33 42.5-72.5T797-440h-40q-5 35-19 67.5T704-312l29 28Zm-506 0 29-29q-20-28-34-60t-19-67h-40q5 44 21.5 83.5T227-284Zm237-57-86-115q-8-11-8-24t8-24l86-115q6-8 16-8t16 8l86 115q8 11 8 24t-8 24l-86 115q-6 8-16 8t-16-8ZM163-520h40q5-35 19-67t34-60l-29-29q-26 33-42.5 72.5T163-520Zm594 0h40q-5-44-22-83.5T732-676l-28 28q20 28 34 60.5t19 67.5ZM313-704q28-20 60-34t67-19v-40q-44 5-83.5 21.5T284-733l29 29Zm335 0 28-28q-33-26-72.5-43T520-797v40q35 5 67.5 19t60.5 34Z"/>
    </Icon>
  );
});

IconMaterialPokerChip.displayName = 'AmauiIconMaterialPokerChip';

export default IconMaterialPokerChip;
