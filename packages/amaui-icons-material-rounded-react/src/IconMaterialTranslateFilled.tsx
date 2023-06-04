import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTranslateFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TranslateFilled'

      short_name='Translate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.35 22q-.6 0-.862-.387-.263-.388-.063-.963l3.65-9.675q.15-.4.563-.688Q17.05 10 17.5 10q.425 0 .85.287.425.288.575.688l3.65 9.675q.2.575-.062.963-.263.387-.888.387-.275 0-.5-.175-.225-.175-.325-.425l-.85-2.45H15.1l-.875 2.45q-.1.25-.35.425-.25.175-.525.175Zm2.35-4.8h3.6l-1.75-4.95h-.1ZM7.15 8.55q.4.725.85 1.337.45.613 1.05 1.263 1.1-1.2 1.825-2.462Q11.6 7.425 12.1 6H2q-.425 0-.712-.287Q1 5.425 1 5t.288-.713Q1.575 4 2 4h6V3q0-.425.288-.713Q8.575 2 9 2t.713.287Q10 2.575 10 3v1h6q.425 0 .712.287Q17 4.575 17 5t-.288.713Q16.425 6 16 6h-1.9q-.525 1.775-1.425 3.45-.9 1.675-2.225 3.15l2.4 2.45-.75 2.05L9 14l-4.3 4.3q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7l4.35-4.35q-.675-.775-1.25-1.563-.575-.787-1.025-1.662Q5.1 8.8 5.35 8.4t.875-.4q.25 0 .525.162.275.163.4.388Z"/>
    </Icon>
  );
});

IconMaterialTranslateFilled.displayName = 'AmauiIconMaterialTranslateFilled';

export default IconMaterialTranslateFilled;
