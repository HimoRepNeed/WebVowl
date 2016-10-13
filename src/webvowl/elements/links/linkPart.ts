export class LinkPart {
    source;
    target;

    constructor(public domain, public range, public link) {
        this.source = this.domain;
        this.target = this.range;
        // Object.defineProperties(this, {
        //     "source": { value: this.domain, writable: true },
        //     "target": { value: this.range, writable: true }
        // })
    }
}