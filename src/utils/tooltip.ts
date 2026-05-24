import tippy, { type Placement } from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

export function createTooltip(htmlTag: Element, title: string, placement?: Placement) {
    tippy(htmlTag, {
        content: title,
        placement: placement,
        theme: 'barux',
    });
}