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
      <path d="m11.9 22 4.55-12h2.1l4.55 12H21l-1.05-3.05H15.1L14 22Zm3.8-4.8h3.6l-1.75-4.95h-.1ZM4 19l-1.4-1.4 5.05-5.05q-.95-1.05-1.662-2.175Q5.275 9.25 4.75 8h2.1q.45.9.963 1.625.512.725 1.237 1.525 1.1-1.2 1.825-2.462Q11.6 7.425 12.1 6H1V4h7V2h2v2h7v2h-2.9q-.525 1.775-1.425 3.45-.9 1.675-2.225 3.15l2.4 2.45-.75 2.05L9 14Z"/>
    </Icon>
  );
});

IconMaterialTranslateFilled.displayName = 'AmauiIconMaterialTranslateFilled';

export default IconMaterialTranslateFilled;
