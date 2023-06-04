import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialJoinRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JoinRightW100'

      short_name='JoinRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16.425q-.075 0-.137-.025-.063-.025-.163-.1-.8-.55-1.3-1.75T9.9 12q0-1.425.475-2.55.475-1.125 1.325-1.75.1-.075.163-.1.062-.025.137-.025.075 0 .138.025.062.025.162.1.875.725 1.338 1.825.462 1.1.462 2.475 0 1.3-.5 2.512-.5 1.213-1.3 1.788-.1.075-.162.1-.063.025-.138.025ZM8.4 17.7q-2.35 0-4.025-1.675Q2.7 14.35 2.7 12q0-2.375 1.675-4.037Q6.05 6.3 8.4 6.3q.8 0 1.538.2.737.2 1.387.6-.175.125-.3.237-.125.113-.25.238Q10.25 7.3 9.65 7.15 9.05 7 8.4 7 6.325 7 4.863 8.45 3.4 9.9 3.4 12q0 2.075 1.463 3.537Q6.325 17 8.4 17q.65 0 1.25-.163.6-.162 1.125-.437.125.125.263.237.137.113.262.213-.625.425-1.362.637Q9.2 17.7 8.4 17.7Zm7.2 0q-.8 0-1.538-.213-.737-.212-1.387-.612.95-.725 1.538-2.088.587-1.362.587-2.787 0-1.425-.587-2.788-.588-1.362-1.538-2.087.65-.4 1.387-.613Q14.8 6.3 15.6 6.3q2.375 0 4.038 1.663Q21.3 9.625 21.3 12t-1.662 4.038Q17.975 17.7 15.6 17.7Z"/>
    </Icon>
  );
});

IconMaterialJoinRightW100.displayName = 'AmauiIconMaterialJoinRightW100';

export default IconMaterialJoinRightW100;
