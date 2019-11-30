const manualWebSocket = require("manual-web-socket");


describe("WebSocket Application", () => {
  it("Connect, send and receive message, receive message, close", () => {
    cy.visit("/", {
      
    
    onBeforeLoad(win) {
    
        win.mws.track(["wss://stream.binance.com:9443"]);
      }
    }).then(win => {
      let trackedConnection; // ManualWebSocket connection reference

      /**
       * Set WebSocket ready state to `OPEN` when connection is established
       * In this example - when button `Connect` is clicked
       */
      win.mws.when("wss://stream.binance.com:9443").then(connection => {
        trackedConnection = connection; // Store connection for further actions
        trackedConnection.readyState = win.mws.readyState.OPEN; // Change readyState from initial `CONNECTING` to `OPEN`
      });
    });
    
  });
});