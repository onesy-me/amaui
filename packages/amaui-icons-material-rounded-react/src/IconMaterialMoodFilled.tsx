import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoodFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoodFilled'

      short_name='Mood'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.5 11q.65 0 1.075-.425Q17 10.15 17 9.5q0-.65-.425-1.075Q16.15 8 15.5 8q-.65 0-1.075.425Q14 8.85 14 9.5q0 .65.425 1.075Q14.85 11 15.5 11Zm-7 0q.65 0 1.075-.425Q10 10.15 10 9.5q0-.65-.425-1.075Q9.15 8 8.5 8q-.65 0-1.075.425Q7 8.85 7 9.5q0 .65.425 1.075Q7.85 11 8.5 11Zm3.5 6.5q1.55 0 2.775-.75Q16 16 16.725 14.775q.175-.3.025-.537-.15-.238-.5-.238h-8.5q-.35 0-.5.238-.15.237.025.537Q8 16 9.225 16.75T12 17.5Zm0 4.5q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialMoodFilled.displayName = 'AmauiIconMaterialMoodFilled';

export default IconMaterialMoodFilled;
