import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDentistrySharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DentistrySharpW100'
      short_name='Dentistry'

      {...props}
    >
      <path d="M16.75 3.425q1.125.025 1.913.8.787.775.787 1.9 0 .225-.025.637-.025.413-.1.988l-1.4 10.075q-.05.475-.412.75-.363.275-.838.275-.35 0-.6-.212-.25-.213-.45-.488l-3.05-4.075q-.125-.15-.263-.25-.137-.1-.337-.1t-.6.4L8.4 18.075q-.225.275-.5.525t-.625.25q-.475 0-.825-.288-.35-.287-.4-.762L4.675 7.75q-.075-.575-.1-.988-.025-.412-.025-.637 0-1.125.788-1.913.787-.787 1.912-.787.675 0 1.188.237.512.238 1.012.513t1.1.513q.6.237 1.45.237.875 0 1.488-.237.612-.238 1.112-.513.5-.275 1-.513.5-.237 1.15-.237Zm0 .7q-.575 0-1.012.237-.438.238-.938.513-.5.275-1.15.512-.65.238-1.65.238-.95 0-1.6-.238-.65-.237-1.15-.512-.5-.275-.963-.513-.462-.237-1.037-.237-.825 0-1.412.588-.588.587-.588 1.412 0 .2.025.575.025.375.1.875L6.75 17.7q.025.2.175.312.15.113.35.113.2 0 .338-.163.137-.162.262-.337l2.925-3.9q.225-.3.525-.5.3-.2.675-.2.35 0 .663.2.312.2.537.5l2.95 3.975q.125.15.238.3.112.15.312.15t.362-.112q.163-.113.188-.313l1.375-10.15q.075-.5.1-.875.025-.375.025-.575 0-.825-.587-1.412-.588-.588-1.413-.588Zm-4.75 7Z"/>
    </Icon>
  );
});

IconMaterialDentistrySharpW100.displayName = 'AmauiIconMaterialDentistrySharpW100';

export default IconMaterialDentistrySharpW100;
