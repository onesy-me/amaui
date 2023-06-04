import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSailingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SailingW100'

      short_name='Sailing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m4.25 12.85 6.1-8.775v8.775Zm1.325-.7H9.65V6.3Zm7.825.7q.25-.75.5-2.288.25-1.537.25-3.062 0-1.725-.25-3.188-.25-1.462-.475-2.387 1.4.75 2.6 1.875 1.2 1.125 2.1 2.538.9 1.412 1.475 3.062.575 1.65.725 3.45Zm.925-.7h5.2q-.35-2.625-1.688-4.913Q16.5 4.95 14.475 3.4q.175 1 .275 2.075.1 1.075.1 2.025 0 1.125-.15 2.325-.15 1.2-.375 2.325ZM9 19.15q-.75 0-1.525-.25Q6.7 18.65 6 18q-.2.2-.45.413-.25.212-.475.312-.775-.6-1.325-1.388-.55-.787-.9-1.687h18.3q-.35.9-.9 1.687-.55.788-1.325 1.388-.225-.1-.475-.312Q18.2 18.2 18 18q-.7.65-1.475.9-.775.25-1.525.25-.75 0-1.537-.25-.788-.25-1.463-.925-.675.675-1.462.925-.788.25-1.538.25Zm-6.35 3.2v-.7H3q.8 0 1.55-.25T6 20.725q.725.425 1.463.675.737.25 1.537.25.8 0 1.538-.25.737-.25 1.462-.675.725.425 1.463.675.737.25 1.537.25.8 0 1.55-.25t1.45-.675q.725.425 1.463.675.737.25 1.537.25h.35v.7H21q-.7 0-1.45-.2T18 21.525q-.8.425-1.55.625t-1.45.2q-.7 0-1.45-.2T12 21.525q-.8.425-1.55.625t-1.45.2q-.7 0-1.45-.2T6 21.525q-.8.425-1.55.625t-1.45.2Zm7-10.2Zm4.675 0Z"/>
    </Icon>
  );
});

IconMaterialSailingW100.displayName = 'AmauiIconMaterialSailingW100';

export default IconMaterialSailingW100;
