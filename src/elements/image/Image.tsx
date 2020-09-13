import React, { ClassAttributes, ImgHTMLAttributes } from 'react';

type Dimensions = '16' | '24' | '32' | '48' | '64' | '96' | '128' | 'default';

type Ratios =
    | '1by1'
    | '1by2'
    | '1by3'
    | '2by1'
    | '2by3'
    | '3by1'
    | '3by2'
    | '3by4'
    | '3by5'
    | '4by3'
    | '4by5'
    | '5by3'
    | '5by4'
    | '9by16'
    | '16by9'
    | 'default';

export interface Props extends ClassAttributes<HTMLImageElement>, ImgHTMLAttributes<HTMLImageElement> {
    caption?: string;
    captionClass?: string;
    containerClass?: string;
    dimension?: Dimensions;
    isFullwidth?: boolean;
    isRounded?: boolean;
    isSquare?: boolean;
    ratio?: Ratios;
}

const getDimensionClass = (dimension: Dimensions) => {
    let name = '';

    switch (dimension) {
        case '16':
            name = 'is-16x16';
            break;
        case '24':
            name = 'is-24x24';
            break;
        case '32':
            name = 'is-32x32';
            break;
        case '48':
            name = 'is-48x48';
            break;
        case '64':
            name = 'is-64x64';
            break;
        case '96':
            name = 'is-96x96';
            break;
        case '128':
            name = 'is-128x128';
            break;
        default:
            break;
    }

    return name + ' ';
};

const getRatioClass = (ratio: Ratios) => {
    if (ratio === 'default') {
        return ' ';
    } else {
        return 'is-' + ratio + ' ';
    }
};

export const Image = ({
    caption = '',
    captionClass = '',
    className = '',
    containerClass = '',
    dimension = 'default',
    isFullwidth = false,
    isRounded = false,
    isSquare = false,
    ratio = 'default',
    ref,
    src = '',
    ...imageProps
}: Props) => {
    let figureClass = 'image ';
    let imageClass = '';

    figureClass += getRatioClass(ratio);

    if (isFullwidth) {
        figureClass += 'is-fullwidth ';
    }

    if (isSquare) {
        figureClass += 'is-square ';
    } else {
        figureClass += getDimensionClass(dimension);
    }

    if (isRounded) {
        imageClass += 'is-rounded ';
    }

    figureClass = figureClass.trim() + ' ' + containerClass;
    imageClass += className;

    imageClass = imageClass.trim();

    return (
        <figure ref={ref} className={figureClass}>
            <img alt="" className={imageClass} src={src} {...imageProps} />
            {caption && <figcaption className={captionClass}>{caption}</figcaption>}
        </figure>
    );
};
