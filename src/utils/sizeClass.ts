export type SizeClass = 'default' | 'large' | 'medium' | 'normal' | 'small';

export const getSizeClass = (isContainer: boolean = false, size: SizeClass) => {
    let className = '';

    let modifier = 'is';

    if (isContainer) {
        modifier = 'are';
    }

    switch (size) {
        case 'large':
            className += modifier + '-large';
            break;
        case 'medium':
            className += modifier + '-medium';
            break;
        case 'normal':
            className += modifier + '-normal';
            break;
        case 'small':
            className += modifier + '-small';
            break;

        default:
    }

    return className.trim() + ' ';
};
