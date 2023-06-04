import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKayakingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KayakingW100'

      short_name='Kayaking'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.65 22.35v-.7H3q.8 0 1.538-.25.737-.25 1.462-.675.725.425 1.463.675.737.25 1.537.25.8 0 1.55-.25t1.45-.675q.725.425 1.463.675.737.25 1.537.25.8 0 1.55-.25t1.45-.675q.7.425 1.45.675.75.25 1.55.25h.35v.7H21q-.7 0-1.45-.2T18 21.525q-.8.425-1.55.625t-1.45.2q-.7 0-1.45-.2T12 21.525q-.8.425-1.55.625t-1.45.2q-.7 0-1.45-.2T6 21.525q-.8.425-1.55.625t-1.45.2ZM12 9.1q-.65 0-1.125-.475T10.4 7.5q0-.65.475-1.125T12 5.9q.65 0 1.125.475T13.6 7.5q0 .65-.475 1.125T12 9.1ZM9 19.15q-.75 0-1.55-.25T6 18l-.275.275q-.125.125-.325.25-.925-.175-1.862-.438-.938-.262-1.763-.587 1.2-.425 2.738-.837Q6.05 16.25 7.625 16l1.6-4.8q.175-.475.638-.688.462-.212.912.013l2.85 1.45 3.025-1.75 1.825-4.075-.5-1.325.975-2.175 2.475 1.1-.975 2.175-1.325.5L14.95 15.8q2.1.225 3.95.712 1.85.488 3.325.988-1 .35-1.925.613-.925.262-1.725.412-.175-.125-.312-.25Q18.125 18.15 18 18q-.675.65-1.462.9-.788.25-1.538.25t-1.537-.263q-.788-.262-1.463-.912-.675.65-1.462.912-.788.263-1.538.263Zm5.2-3.4 2-4.5-2.575 1.525-2.125-1.1-1.4 4.1q.4-.05.9-.087.5-.038 1-.038.475 0 1.05.025.575.025 1.15.075Z"/>
    </Icon>
  );
});

IconMaterialKayakingW100.displayName = 'AmauiIconMaterialKayakingW100';

export default IconMaterialKayakingW100;
