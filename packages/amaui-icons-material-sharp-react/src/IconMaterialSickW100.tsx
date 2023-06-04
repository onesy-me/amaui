import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSickW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SickW100'

      short_name='Sick'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.8 9.1q.9-2.55 3.125-4.175T12 3.3q1.675 0 3.15.587 1.475.588 2.65 1.638-.075.2-.125.387-.05.188-.1.363-1.1-1.05-2.525-1.663Q13.625 4 12 4 9.475 4 7.475 5.412q-2 1.413-2.9 3.613-.2 0-.387.012Q4 9.05 3.8 9.1ZM12 20.7q-2.85 0-5.075-1.613Q4.7 17.475 3.8 14.925q.2.05.388.063.187.012.387.012.9 2.2 2.9 3.6T12 20q3.325 0 5.663-2.337Q20 15.325 20 12q0-.425-.038-.85-.037-.425-.137-.85.2.05.375.1t.375.075q.075.375.1.75.025.375.025.775 0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm-3.6-9.65L9.925 9.5l-1.55-1.55-.475.475 1.075 1.05L7.9 10.55ZM21 8.6q-.65 0-1.125-.475T19.4 7q0-.575.288-1.188Q19.975 5.2 21 3.7q1.025 1.5 1.312 2.112.288.613.288 1.188 0 .65-.475 1.125T21 8.6Zm-5.375 2.45.5-.5-1.075-1.075 1.05-1.05-.475-.475-1.55 1.55ZM12 13.5q-.7 0-1.4.212-.7.213-1.325.663L5.6 12.225q0-.35-.125-.675-.125-.325-.425-.5-.4-.225-.837-.112-.438.112-.663.512-.225.4-.112.837.112.438.512.663.3.175.65.125.35-.05.65-.225l3.475 2q-.275.275-.525.6-.25.325-.45.75h.8q.525-.9 1.425-1.45.9-.55 2.025-.55t2.025.55q.9.55 1.425 1.45h.8q-.725-1.425-1.887-2.063Q13.2 13.5 12 13.5Zm0-1.5Z"/>
    </Icon>
  );
});

IconMaterialSickW100.displayName = 'AmauiIconMaterialSickW100';

export default IconMaterialSickW100;
