export type SizeClass = 'default' | 'small' | 'normal' | 'medium' | 'large';

export const getSizeClass = (size: SizeClass, isContainer: boolean = false) => {
    let className = '';

    let modifier = 'is';

    if (isContainer) {
        modifier = 'are';
    }

    switch (size) {
        case 'small':
            className += modifier + '-small';
            break;
        case 'normal':
            className += modifier + '-normal';
            break;
        case 'medium':
            className += modifier + '-medium';
            break;
        case 'large':
            className += modifier + '-large';
            break;

        default:
    }

    return className.trim() + ' ';
};
