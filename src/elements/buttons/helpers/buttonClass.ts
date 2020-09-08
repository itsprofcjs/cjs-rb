import { ColorClass, getColorClass } from '../../../utils/colorClass';
import { SizeClass, getSizeClass } from '../../../utils/sizeClass';

export interface ButtonConfig {
    className?: string;
    isActive?: boolean;
    isDelete?: boolean;
    isFocused?: boolean;
    isFullWidth?: boolean;
    isHovered?: boolean;
    isInverted?: boolean;
    isLight?: boolean;
    isLoading?: boolean;
    isOutlined?: boolean;
    isRounded?: boolean;
    isSelected?: boolean;
    isStatic?: boolean;
    kind?: ColorClass;
    prefix?: string;
    scale?: SizeClass;
}

export const getButtonClass = ({
    className = '',
    isActive = false,
    isDelete = false,
    isFocused = false,
    isFullWidth = false,
    isHovered = false,
    isInverted = false,
    isLight = false,
    isLoading = false,
    isOutlined = false,
    isRounded = false,
    isSelected = false,
    isStatic = false,
    kind = 'default',
    prefix = 'button',
    scale = 'default',
    ...restPayload
}: ButtonConfig) => {
    let name = '';

    const sizeClass = getSizeClass(scale);

    if (isDelete) {
        name = 'delete ' + sizeClass;
    } else {
        name = prefix + ' ';

        const colorClass = getColorClass(kind, isLight);

        name += colorClass;

        name += sizeClass;

        if (isActive) {
            name += 'is-active ';
        }

        if (isFocused) {
            name += 'is-focused ';
        }

        if (isFullWidth) {
            name += 'is-fullwidth ';
        }

        if (isHovered) {
            name += 'is-hovered ';
        }

        if (isInverted) {
            name += 'is-inverted ';
        }

        if (isLoading) {
            name += 'is-loading ';
        }

        if (isOutlined) {
            name += 'is-outlined ';
        }

        if (isRounded) {
            name += 'is-rounded ';
        }

        if (isSelected) {
            name += 'is-selected ';
        }

        if (isStatic) {
            name += 'is-static ';
        }
    }

    name = name.trim();

    name += ' ' + className;

    return { className: name.trim(), restPayload };
};
