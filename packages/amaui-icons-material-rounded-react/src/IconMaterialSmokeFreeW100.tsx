import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmokeFreeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmokeFreeW100'

      short_name='SmokeFree'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.05 15.2v-1.4h.7v1.4Zm-1-.6-.8-.8h.8Zm2.7.6v-1.4h.7v1.4Zm.3 6.25L13.8 15.2H4.15q-.3 0-.5-.2t-.2-.5q0-.275.213-.488.212-.212.487-.212h8.25L3.05 4.45q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l17 17q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125ZM18.4 12.3q-.15 0-.25-.1t-.1-.25V11q0-.875-.575-1.463Q16.9 8.95 16.1 8.95h-1.55q-1.05 0-1.8-.775T12 6.3q0-.925.625-1.612Q13.25 4 14.2 3.875q.125-.025.238.075.112.1.112.25 0 .125-.1.237-.1.113-.25.138-.65.125-1.075.6Q12.7 5.65 12.7 6.3q0 .75.55 1.35.55.6 1.3.6h1.55q1.1 0 1.875.812.775.813.775 1.938v.95q0 .15-.1.25t-.25.1Zm1.7 0q-.15 0-.25-.1t-.1-.25v-1.9q0-1.575-1.038-2.55-1.037-.975-2.612-1.1-.15-.025-.25-.113-.1-.087-.1-.237 0-.125.1-.225t.25-.15q.55-.125.925-.5t.5-.925q.05-.15.15-.25.1-.1.225-.1.15 0 .25.112.1.113.075.238-.075.575-.35 1-.275.425-.675.65 1.275.35 2.263 1.4.987 1.05.987 2.75v1.9q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialSmokeFreeW100.displayName = 'AmauiIconMaterialSmokeFreeW100';

export default IconMaterialSmokeFreeW100;
