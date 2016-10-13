
export class RectangularElementTools {

    static distanceToBorder = (rect, dx, dy) => {
        let width = rect.width;
        let height = rect.height;

        let innerDistance;
        let m_link = Math.abs(dy / dx);
        let m_rect = height / width;

        if (m_link <= m_rect) {
            var timesX = dx / (width / 2),
                rectY = dy / timesX;
            innerDistance = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(rectY, 2));
        } else {
            var timesY = dy / (height / 2),
                rectX = dx / timesY;
            innerDistance = Math.sqrt(Math.pow(height / 2, 2) + Math.pow(rectX, 2));
        }

        return innerDistance;
    };

}