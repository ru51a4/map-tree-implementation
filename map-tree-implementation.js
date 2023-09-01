class node {
    keyCh = "";
    childs = [];
    value = "";
    constructor() { }
}

class map {
    startNode;

    constructor() {
        this.startNode = new node();
    }

    set = (key, value) => {
        key = key.split("");
        let _node = this.startNode;
        while (key.length) {
            let ch = key.shift();
            let checkNode = (_node) => {
                for (let i = 0; i <= _node.childs?.length - 1; i++) {
                    if (_node.childs[i].keyCh === ch) {
                        return _node.childs[i];
                    }
                }
                return null;
            }
            let c = checkNode(_node);
            let prevNode = _node;
            if (!c) {
                _node = new node();
                _node.keyCh = ch;
                prevNode.childs.push(_node);
            } else {
                _node = c;
            }
        }
        _node.value = value;
    }

    get = (key) => {
        key = key.split("");
        let _node = this.startNode;
        while (key.length) {
            let ch = key.shift();
            let checkNode = (_node) => {
                for (let i = 0; i <= _node.childs?.length - 1; i++) {
                    if (_node.childs[i].keyCh === ch) {
                        return _node.childs[i];
                    }
                }
                return null;
            }
            let c = checkNode(_node);
            if (!c) {
                return "undefined";
            } else {
                _node = c;
            }
        }
        return _node.value;
    }
}

let _map = new map();
_map.set("hello", "world");
_map.set("helloworld", "worldhello");
console.log(_map.get("hello"))
console.log(_map.get("helloworld"))
