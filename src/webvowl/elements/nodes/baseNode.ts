import { BaseElement } from '../baseElement'

export class BaseNode extends BaseElement {

    // Basic attributes
    complement;
    disjointUnion;
    disjointWith;
    individuals = [];
    intersection;
    union;
    links;
    // Additional attributes
    maxIndividualCount;
    // Element containers
    nodeElement;
    private hoverHighlighting: boolean;

    private _fixed: boolean;
    private _frozen: boolean;
    private _pinned: boolean;
    private _locked: boolean;

    constructor(protected graph) {
        super(graph);
    }

    get frozen(): boolean {
        return this._frozen;
    }

    set frozen(val: boolean) {
        this._frozen = val;
    }

    get pinned(): boolean {
        return this._pinned;
    }

    set pinned(val: boolean) {
        this._pinned = val;
    }

    get locked(): boolean {
        return this._locked;
    }

    set locked(val: boolean) {
        this._locked = val;
    }

    get fixed(): boolean {
        return this._fixed;
    }

    private applyFixedLocationAttributes = () => {
        if (this._locked || this._pinned || this._frozen) {
            this._fixed = true;
        } else {
            this._fixed = false;
        }
    }

    collectCssClasses = () => {
        var cssClasses = [];

        if (typeof this.styleClass === "string") {
            cssClasses.push(this.styleClass);
        }

        cssClasses = cssClasses.concat(this.visualAttributes);

        return cssClasses;
    };

    addMouseListeners = () => {
        // Empty node
        if (!this.nodeElement) {
            console.warn(this);
            return;
        }

        this.nodeElement.selectAll("*")
            .on("mouseover", this.onMouseOver)
            .on("mouseout", this.onMouseOut);
    };

    private onMouseOver = () => {
        if (this.mouseEntered) {
            return;
        }

        let selectedNode = this.nodeElement.node();
        let nodeContainer = selectedNode.parentNode;

        // Append hovered element as last child to the container list.
        nodeContainer.appendChild(selectedNode);

        this.setHoverHighlighting(true);

        this.mouseEntered = true;
    }

    setHoverHighlighting(val: boolean) {
        this.hoverHighlighting = val;
    }

    private onMouseOut = () => {
        this.setHoverHighlighting(false);
        this.mouseEntered = false;
    }
}