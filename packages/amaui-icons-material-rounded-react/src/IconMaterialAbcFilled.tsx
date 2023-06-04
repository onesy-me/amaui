import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAbcFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AbcFilled'

      short_name='Abc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 15q-.425 0-.712-.288Q16 14.425 16 14v-4q0-.425.288-.713Q16.575 9 17 9h3q.425 0 .712.287Q21 9.575 21 10v.25q0 .325-.212.537-.213.213-.538.213-.25 0-.438-.125-.187-.125-.262-.375H17.5v3h2.05q.075-.25.262-.375Q20 13 20.25 13q.325 0 .538.212.212.213.212.538V14q0 .425-.288.712Q20.425 15 20 15Zm-6.5 0q-.425 0-.712-.288Q9.5 14.425 9.5 14v-4q0-.425.288-.713Q10.075 9 10.5 9h3q.425 0 .713.287.287.288.287.713v1q0 .425-.287.712-.288.288-.713.288.425 0 .713.287.287.288.287.713v1q0 .425-.287.712-.288.288-.713.288Zm.5-3.75h2v-.75h-2Zm0 2.25h2v-.75h-2ZM3.75 15q-.325 0-.537-.213Q3 14.575 3 14.25V10q0-.425.288-.713Q3.575 9 4 9h3q.425 0 .713.287Q8 9.575 8 10v4.25q0 .325-.213.537Q7.575 15 7.25 15q-.325 0-.537-.213-.213-.212-.213-.537v-.75h-2v.75q0 .325-.213.537Q4.075 15 3.75 15Zm.75-3h2v-1.5h-2Z"/>
    </Icon>
  );
});

IconMaterialAbcFilled.displayName = 'AmauiIconMaterialAbcFilled';

export default IconMaterialAbcFilled;
