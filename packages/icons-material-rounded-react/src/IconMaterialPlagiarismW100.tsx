import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlagiarismW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlagiarismW100'

      short_name='Plagiarism'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M438-336q20 0 38-6.5t34-17.5l102 102q4 4 9.5 4.5T632-258q5-5 5-10t-5-10L530-380q13-15 18.5-33.5T554-452q0-47-33-79.5T440-564q-48 0-81 33t-33 81q0 48 32.5 81t79.5 33Zm2-28q-35 0-60.5-25.5T354-450q0-35 25.5-60.5T440-536q35 0 60.5 25.5T526-450q0 35-25.5 60.5T440-364ZM272-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h289q12 0 23.5 5t19.5 13l126 126q8 8 13 19.5t5 23.5v449q0 26-17 43t-43 17H272Zm300-550v-118H272q-12 0-22 10t-10 22v576q0 12 10 22t22 10h416q12 0 22-10t10-22v-460H602q-13 0-21.5-8.5T572-682ZM240-800v148-148 640-640Z"/>
    </Icon>
  );
});

IconMaterialPlagiarismW100.displayName = 'OnesyIconMaterialPlagiarismW100';

export default IconMaterialPlagiarismW100;
