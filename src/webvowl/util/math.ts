export class VowlMath {

    static loopFunction = d3.svg.line()
        .x(function (d: any) {
            return d.x;
        })
        .y(function (d: any) {
            return d.y;
        })
        .interpolate("cardinal")
        .tension(-1);
    /**
	 * Calculates the normal vector of the path between the two nodes.
	 * @param source the first node
	 * @param target the second node
	 * @param length the length of the calculated normal vector
	 * @returns {{x: number, y: number}}
	 */
    static calculateNormalVector = (source, target, length) => {
        let dx = target.x - source.x;
        let dy = target.y - source.y;
        let nx = -dy;
        let ny = dx;
        let vlength = Math.sqrt(nx * nx + ny * ny);
        let ratio = vlength !== 0 ? length / vlength : 0;
        return { "x": nx * ratio, "y": ny * ratio };
    }

    static calculateLoopPath = (link) => {
        let node = link.domain;
        let label = link.label;

        let fairShareLoopAngle = 360 / link.loops.length;
        let fairShareLoopAngleWithMargin = fairShareLoopAngle * 0.8;
        let loopAngle = Math.min(60, fairShareLoopAngleWithMargin);
        let nodex = node.x;
        let nodey = node.y;

        let dx = label.x - nodex;
        let dy = label.y - nodey;
        let labelRadian = Math.atan2(dy, dx);
        let labelAngle = VowlMath.calculateAngle(labelRadian);

        let startAngle = labelAngle - loopAngle / 2;
        let endAngle = labelAngle + loopAngle / 2;

        let arcFrom = VowlMath.calculateRadian(startAngle);
        let arcTo = VowlMath.calculateRadian(endAngle);

        let x1 = Math.cos(arcFrom) * node.actualRadius();
        let y1 = Math.sin(arcFrom) * node.actualRadius();
        let x2 = Math.cos(arcTo) * node.actualRadius();
        let y2 = Math.sin(arcTo) * node.actualRadius();
        let fixPoint1 = { "x": nodex + x1, "y": nodey + y1 };
        let fixPoint2 = { "x": nodex + x2, "y": nodey + y2 };

        return VowlMath.loopFunction([fixPoint1, link.label, fixPoint2]);
    }


    static calculateRadian = (angle) => {
        angle = angle % 360;
        if (angle < 0) {
            angle = angle + 360;
        }
        return (Math.PI * angle) / 180;
    }

    static calculateAngle = (angle) => {
        return angle * (180 / Math.PI);
    }

    static calculateIntersection = (source, target, additionslaDistance) => {
        let tx = target.x;
        let sx = source.x;
        let ty = target.y;
        let sy = source.y;

        let dx = tx - sx;
        let dy = ty - sy;

        let length = Math.sqrt(dx * dx + dy * dy);

        if (length === 0) {
            return { x: sx, y: sy };
        }

        let innerDistance = target.distanceToBorder(dx, dy);

        let ratio = (length - (innerDistance + additionslaDistance)) / length;
        let x = dx * ratio + sx;
        let y = dy * ratio + sy;

        return { x: x, y: y };
    }

    static calculateCenter = (firstPoint, secondPoint) => {
        return {
            x: (firstPoint.x + secondPoint.x) / 2,
            y: (firstPoint.y + secondPoint.y) / 2
        };
    }
}