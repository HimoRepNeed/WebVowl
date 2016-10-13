export class Label {

    frozen;
    locked;
    pinned;

    constructor(public property, public link) {

        Object.defineProperty(this, "fixed", {
            get: function () {
                var inverseFixed = property.inverse() ? property.inverse().fixed : false;
                return property.fixed || inverseFixed;
            },
            set: function (v) {
                property.fixed = v;
                if (property.inverse()) property.inverse().fixed = v;
            }
        });

        this.frozen = property.frozen;
        this.locked = property.locked;
        this.pinned = property.pinned;
    }

    actualRadius() {
        return this.property.actualRadius();
    }

    draw(container) {
        return this.property.draw(container);
    }

    inverse() {
        return this.property.inverse();
    }

    equals(other) {
        if (!other) {
            return false;
        }

        var instance = other instanceof Label;
        var equalProperty = this.property.equals(other.property);

        var equalInverse = false;
        if (this.inverse()) {
            let inv = this.inverse();
            equalInverse = inv.equals(other.inverse());
        } else if (!other.inverse()) {
            equalInverse = true;
        }

        return instance && equalProperty && equalInverse;
    }
}