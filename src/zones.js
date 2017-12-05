class Zone {
    constructor(id) {
        this.id = id;
        this.children = [];
        this.keyed = {};
    }
    add(key, component) {
        this.keyed[key] = component;
        this.children.push({ c : component, key : key});
    }
}

export function init (instance, zId) {
    const ev = new CustomEvent(`zone.${zId}.ready`);
    window.dispatchEvent(ev);
    addListener(instance, zId);
}

export function onInit (zId) {
    return new Promise((resolve, reject) => {
        window.addEventListener(`zone.${zId}.ready`, (e) => {
            return resolve(e);
        })
    });
}

export function add(zId, key, component) {
    return new Promise((resolve, reject) => {
        const ev = new CustomEvent(`zone.${zId}.add`, {
            detail : { key, component }
        });
        window.dispatchEvent(ev);
    })
}

function addListener(instance, zId) {
    if(!instance.zone) { instance.zone = new Zone(zId); instance.state = { zoneUpdates : 0 }};
    window.addEventListener(`zone.${zId}.add`, (e) => {
        instance.zone.add(e.detail.key, e.detail.component);
        instance.setState({
            'zoneUpdates': instance.state.zoneUpdates + 1
        });
    })
}