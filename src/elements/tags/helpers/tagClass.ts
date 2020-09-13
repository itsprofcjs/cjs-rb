import { getColorClass, ColorClass } from '../../../utils/colorClass';
import { getSizeClass, SizeClass } from '../../../utils/sizeClass';

export interface TagClass {
    className?: string;
    isDelete?: boolean;
    isLight?: boolean;
    isRounded?: boolean;
    kind?: ColorClass;
    prefix?: string;
    scale?: SizeClass;
}

export const getTagClass = ({
    className = '',
    isDelete = false,
    isLight = false,
    isRounded = false,
    kind = 'default',
    prefix = 'tag',
    scale = 'default',
    ...restPayload
}: TagClass) => {
    let name = prefix + ' ';

    const sizeClass = getSizeClass(scale);

    if (isDelete) {
        name += 'is-delete ' + sizeClass;
    } else {
        const colorClass = getColorClass(kind, isLight);

        name += colorClass;

        name += sizeClass;

        if (isRounded) {
            name += 'is-rounded ';
        }
    }

    name = name.trim();

    name += ' ' + className;

    return { className: name.trim(), restPayload };
};
