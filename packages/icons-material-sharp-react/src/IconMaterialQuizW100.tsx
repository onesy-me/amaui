import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQuizW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuizW100'

      short_name='Quiz'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M533.76-384q11.24 0 19.74-8.26 8.5-8.27 8.5-19.5 0-11.24-8.26-19.74-8.27-8.5-19.5-8.5-11.24 0-19.74 8.26-8.5 8.27-8.5 19.5 0 11.24 8.26 19.74 8.27 8.5 19.5 8.5ZM520-492h28q2-24 8.5-36.5T588-564q24-21 34-39t10-41q0-39-28-65.5T534-736q-31 0-55.5 16.5T440-674l26 12q12-23 28.5-34.5T534-708q30 0 50 18t20 45.97q0 17.03-9.5 31.53T562-578q-23 20-32.5 39t-9.5 47ZM266-292v-536h536v536H266Zm28-28h480v-480H294v480ZM158-184v-504h28v476h476v28H158Zm136-616v480-480Z"/>
    </Icon>
  );
});

IconMaterialQuizW100.displayName = 'OnesyIconMaterialQuizW100';

export default IconMaterialQuizW100;
