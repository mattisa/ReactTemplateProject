class WebSocketConnector {

    listeners = [];

    constructor() {
        this.websocketHost = location.origin.replace(/^http/, 'ws');
        this.connect();
    }

    handleClose() {
        console.log('connection lost to ws..')
        setTimeout(this.connect.bind(this), 5000);
    }
	handleError() {
		console.log("Error : " + evt.toString());
	}

    connect() {
        console.log('connecting ws..')
        this.wsConnection = new WebSocket(`${this.websocketHost}/ws/controlMessages`);
        this.wsConnection.onmessage = this.notify.bind(this)
        this.wsConnection.onclose = this.handleClose.bind(this);
        this.wsConnection.onError = this.handleError.bind(this);
    }

    send(message) {
        if (typeof message === 'object') {
//            console.log(JSON.stringify(message));
            return this.wsConnection.send(JSON.stringify(message));
        }
    }
    notify(event) {
        this.listeners.forEach((fn) => {
            fn(JSON.parse(event.data));
        });
    }

    subscribe(listener) {
        this.listeners.push(listener);
    }
    unsubscripe(listener) {
        const index = this.listeners.indexOf(listener);
        if(index => 0 ) {
            this.listener.splice(index, 1);
        }
    }
}

const connector = new WebSocketConnector();
export default connector;
