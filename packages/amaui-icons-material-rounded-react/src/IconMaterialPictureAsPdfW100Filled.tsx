import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPictureAsPdfW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureAsPdfW100Filled'

      short_name='PictureAsPdf'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.25 10.35h1.3q.3 0 .5-.2t.2-.5v-1.3q0-.3-.2-.5t-.5-.2h-1.6q-.175 0-.287.112-.113.113-.113.288V12q0 .125.113.238.112.112.237.112.125 0 .237-.112.113-.113.113-.238Zm0-.7v-1.3h1.3v1.3Zm4.95 2.7q.3 0 .5-.2t.2-.5v-3.3q0-.3-.2-.5t-.5-.2h-1.5q-.175 0-.287.112-.113.113-.113.288v3.9q0 .175.113.288.112.112.287.112Zm-1.2-.7v-3.3h1.2v3.3Zm3.9-1.3h1.15q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H16.9v-1.3h1.15q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H16.6q-.175 0-.288.112-.112.113-.112.288V12q0 .125.112.238.113.112.238.112.125 0 .238-.112.112-.113.112-.238ZM8.15 16.7q-.65 0-1.075-.425-.425-.425-.425-1.075V4.8q0-.65.425-1.075Q7.5 3.3 8.15 3.3h10.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm-2.7 2.7q-.65 0-1.075-.425-.425-.425-.425-1.075V7.15q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V17.9q0 .35.225.575.225.225.575.225H16.2q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialPictureAsPdfW100Filled.displayName = 'AmauiIconMaterialPictureAsPdfW100Filled';

export default IconMaterialPictureAsPdfW100Filled;
