import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMemoryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MemoryW100Filled'

      short_name='Memory'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.05 13.7q-.325 0-.537-.213-.213-.212-.213-.537v-1.9q0-.325.213-.538.212-.212.537-.212h1.9q.325 0 .538.212.212.213.212.538v1.9q0 .325-.212.537-.213.213-.538.213ZM10 19.1q-.15 0-.25-.1t-.1-.25V17.7H7.8q-.65 0-1.075-.425Q6.3 16.85 6.3 16.2v-1.85H5.25q-.15 0-.25-.1T4.9 14q0-.15.1-.25t.25-.1H6.3v-3.3H5.25q-.15 0-.25-.1T4.9 10q0-.15.1-.25t.25-.1H6.3V7.8q0-.65.425-1.075Q7.15 6.3 7.8 6.3h1.85V5.25q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V6.3h3.3V5.25q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V6.3h1.85q.65 0 1.075.425.425.425.425 1.075v1.85h1.05q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H17.7v3.3h1.05q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H17.7v1.85q0 .65-.425 1.075-.425.425-1.075.425h-1.85v1.05q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V17.7h-3.3v1.05q0 .15-.1.25t-.25.1ZM7.8 17h8.4q.3 0 .55-.25.25-.25.25-.55V7.8q0-.3-.25-.55Q16.5 7 16.2 7H7.8q-.3 0-.55.25Q7 7.5 7 7.8v8.4q0 .3.25.55.25.25.55.25Z"/>
    </Icon>
  );
});

IconMaterialMemoryW100Filled.displayName = 'AmauiIconMaterialMemoryW100Filled';

export default IconMaterialMemoryW100Filled;
