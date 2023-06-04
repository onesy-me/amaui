import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialModeFanOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeFanOffW100'

      short_name='ModeFanOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.45 12.4q0 1.2-.575 1.925-.575.725-1.575.725-.425 0-1.025-.25-.6-.25-.9-.525l-4.425-4.4q.075-1.2.588-2.175.512-.975 1.312-1.5.275-.15.388-.4.112-.25.112-.6 0-.45-.3-.7-.3-.25-.8-.25-1.525 0-2.537.662Q9.7 5.575 9.65 6.625q0 .375.112.725.113.35.288.7L9 7q-.275-1.825 1.25-2.638 1.525-.812 3-.812.8 0 1.3.462.5.463.5 1.188 0 .5-.212.925-.213.425-.588.7-.55.35-.95 1.037-.4.688-.6 1.613.35.125.6.263.25.137.45.337L16.1 9.2q.35-.125.65-.188.3-.062.625-.062 1.35 0 2.213.962.862.963.862 2.488Zm.025 9.9L15 16.8q.05.125.05.25v.25q0 1.375-1.162 2.262-1.163.888-3.038.888-.8 0-1.35-.488-.55-.487-.55-1.212 0-.5.213-.925.212-.425.587-.675.575-.375.963-1.063.387-.687.587-1.562-.325-.125-.575-.263-.25-.137-.475-.337l-2.35.85q-.35.125-.662.2-.313.075-.638.075-1.5 0-2.275-1.013-.775-1.012-.775-2.437 0-1.3.6-1.975t1.625-.675q.55 0 1.238.275.687.275 1.037.625l-6.625-6.6.5-.5 19.05 19.05ZM18.3 14.35q.65 0 1.05-.525t.4-1.425q0-1.25-.65-2t-1.725-.75q-.2 0-.413.025-.212.025-.487.15l-2.25.825q.225.4.337.712.113.313.113.588.625.225.95.6.325.375 1.2 1.2.325.275.7.438.375.162.775.162Zm-11.75 0q.325 0 .975-.2l2.275-.8q-.225-.375-.325-.813-.1-.437-.05-.862-.425-.225-.85-.525-.425-.3-.7-.525-.55-.475-1.2-.725-.65-.25-1.075-.25-.575 0-.962.5-.388.5-.388 1.45 0 1.2.625 1.975.625.775 1.675.775Zm4.3 5.4q1.575 0 2.538-.675.962-.675.962-1.675 0-.375-.125-.862-.125-.488-.325-.838l-1.2-1.2q-.175.05-.35.075-.175.025-.35.025-.2 1.05-.675 1.875-.475.825-1.175 1.275-.2.125-.35.413-.15.287-.15.587 0 .45.35.725.35.275.85.275Zm3.825-7.8ZM12.7 14.5Zm-3.275-2.825Zm2.525-1.8Z"/>
    </Icon>
  );
});

IconMaterialModeFanOffW100.displayName = 'AmauiIconMaterialModeFanOffW100';

export default IconMaterialModeFanOffW100;
