class Zone {
    constructor(id) {
        this.id = id;
        this.children = [];
        this.keyed = {};
    }
    add(key, component, type) {
        this.keyed[key] = component;
        this.children.push({ c : component, key : key, type: type});
    }
}

export const TYPES = {
    INTERACTIVE : 'interactive',
    COMPONENT : 'component'
}

export function initInjector (zId) {
    return new Promise((resolve, reject) => {
        window.addEventListener(`zone.${zId}.connected`, (e) => {
            return resolve(e);
        })
        const ev = new CustomEvent(`zone.${zId}.ready`);
        window.dispatchEvent(ev);
    })
}

export function initHost (zId, instance) {
    window.addEventListener(`zone.${zId}.ready`, (e) => {
        addListener(instance, zId)
        const ev = new CustomEvent(`zone.${zId}.connected`);
        window.dispatchEvent(ev);
    })
}

export function add(zId, key, component) {
    const type = TYPES.COMPONENT;
    return new Promise((resolve, reject) => {
        const ev = new CustomEvent(`zone.${zId}.add`, {
            detail : { key, component, type }
        });
        window.dispatchEvent(ev);
    })
}

export function confirmInteractive(zId, node) {
    const ev = new CustomEvent(`zone.${zId}.confirmInteractive`, {
        detail : { node } 
    });
    window.dispatchEvent(ev);
}

export function addInteractive(zId, key) {
    const type = TYPES.INTERACTIVE;
    return new Promise((resolve, reject) => {

        window.addEventListener(`zone.${zId}.confirmInteractive`, (e) => {
            resolve(e.detail.node);
        })

        const get = new CustomEvent(`zone.${zId}.add`, { detail : { key, type } });
        window.dispatchEvent(get);
    })
}

function addListener(instance, zId) {
    if(!instance.zone) { instance.zone = new Zone(zId); instance.state = { zoneUpdates : 0 }};
    window.addEventListener(`zone.${zId}.add`, (e) => {
        instance.zone.add(e.detail.key, e.detail.component ? e.detail.component : null, e.detail.type);
        instance.setState({
            'zoneUpdates': instance.state.zoneUpdates + 1
        });
    })
}