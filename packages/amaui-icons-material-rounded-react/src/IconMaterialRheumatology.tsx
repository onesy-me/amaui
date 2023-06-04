import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRheumatology = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Rheumatology'

      short_name='Rheumatology'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.275 15.55Zm8.425.4q-.375-.125-.575-.5-.2-.375-.075-.75.15-.425.512-.613.363-.187.763-.037l3 1q.4.125.588.487.187.363.037.788-.125.375-.487.562-.363.188-.763.063ZM19 13q-.425 0-.712-.288Q18 12.425 18 12t.288-.713Q18.575 11 19 11h3q.425 0 .712.287.288.288.288.713t-.288.712Q22.425 13 22 13Zm.325-3.05q-.4.125-.775-.05t-.5-.575q-.125-.425.063-.788.187-.362.587-.487l3-1q.4-.125.763.063.362.187.487.587.125.375-.05.75t-.575.5ZM7.125 14q-1.3 0-2.213-.913Q4 12.175 4 10.875q0-.65.25-1.213.25-.562.675-.987L7 6.575V2h2v5q0 .2-.087.387-.088.188-.213.338L6.325 10.1q-.15.15-.237.35-.088.2-.088.425 0 .45.338.787.337.338.787.338.3 0 .475-.1t.475-.35q.55-.45 1.088-.675.537-.225 1.087-.225.55 0 1.088.225.537.225 1.087.675.3.25.475.35.175.1.475.1.475 0 .8-.338.325-.337.325-.787 0-.225-.087-.437-.088-.213-.238-.363L11.8 7.7q-.125-.15-.212-.325Q11.5 7.2 11.5 7V2h2v4.55l2.1 2.1q.425.425.663 1 .237.575.237 1.225 0 1.3-.9 2.212-.9.913-2.225.913-.825 0-1.337-.312-.513-.313-.863-.613-.375-.3-.587-.363-.213-.062-.338-.062-.225 0-.462.15l-.438.275q-.35.3-.862.613Q7.975 14 7.125 14Zm4.375 8v-4.75q0-.2.088-.387.087-.188.212-.338l2.375-2.375q.15-.15.238-.35.087-.2.087-.425 0-.25-.087-.45-.088-.2-.238-.35L15.6 11.15q.425.425.663 1 .237.575.237 1.225 0 .65-.237 1.2-.238.55-.663.975l-2.1 2.1V22ZM7 22v-4.35l-2.075-2.1q-.425-.425-.675-.975-.25-.55-.25-1.2 0-.65.25-1.225.25-.575.675-1l1.425 1.425q-.175.15-.262.35-.088.2-.088.45 0 .225.088.425.087.2.237.35L8.7 16.525q.125.15.213.338.087.187.087.387V22Zm3.25-14.3Z"/>
    </Icon>
  );
});

IconMaterialRheumatology.displayName = 'AmauiIconMaterialRheumatology';

export default IconMaterialRheumatology;
