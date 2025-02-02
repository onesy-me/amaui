import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCommentsDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentsDisabled'

      short_name='CommentsDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240q-33 0-56.5-23.5T80-320v-447l-25-25q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57L607-240H160Zm720-560v557q0 14-12 19t-22-5l-91-91h45v-480H280q-20 0-30-12.5T240-840q0-15 10-27.5t30-12.5h520q33 0 56.5 23.5T880-800ZM160-320h367l-80-80H280q-17 0-28.5-11.5T240-440q0-17 11.5-28.5T280-480h87l-40-40h-47q-17 0-28.5-11.5T240-560q0-17 11.5-28.5T280-600h25v58L160-687v367Zm560-120q0 17-11.5 28.5T680-400q-17 0-28.5-11.5T640-440q0-17 11.5-28.5T680-480q17 0 28.5 11.5T720-440Zm-40-80H572q-20 0-30-12.5T532-560q0-15 10-27.5t30-12.5h108q17 0 28.5 11.5T720-560q0 17-11.5 28.5T680-520Zm0-120H452q-20 0-30-12.5T412-680q0-15 10-27.5t30-12.5h228q17 0 28.5 11.5T720-680q0 17-11.5 28.5T680-640ZM344-504Zm171-56Z"/>
    </Icon>
  );
});

IconMaterialCommentsDisabled.displayName = 'OnesyIconMaterialCommentsDisabled';

export default IconMaterialCommentsDisabled;
