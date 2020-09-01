import { SizeClass, getSizeClass } from '../../utils/sizeClass';
import { AlignmentClass, getAlignmentClass } from '../../utils/alignmentClass';

/* 
Buttons : These are container class for button elements
*/
export interface ButtonsConfig {
    alignment?: AlignmentClass;
    className?: string;
    hasAddons?: boolean;
    prefix?: string;
    scale?: SizeClass;
}
export const getButtonsClass = ({
    alignment = 'default',
    className = '',
    hasAddons = false,
    prefix = 'buttons',
    scale = 'default',
    ...restPayload
}: ButtonsConfig) => {
    let name = prefix + ' ';

    name += getSizeClass(scale, true);

    name += getAlignmentClass(alignment);

    if (hasAddons) {
        name += 'has-addons ';
    }

    name = name.trim();

    name += ' ' + className;

    return { className: name.trim(), restPayload };
};
