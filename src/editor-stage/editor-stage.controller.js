var pubsub = require('oet-lib/pubsub');
var view = require('./editor-stage.view');


var EditorStage = function(){};
EditorStage.prototype.constructor = EditorStage;
var editorStage = module.exports = new EditorStage();

EditorStage.prototype.init = function(config, wrapper){debugger;
    this.$wrapper = wrapper || document.body;
    registerNotificationInterests();
    return view.init(this);
};


var registerNotificationInterests = function(){
    var messages = [
        'background-changed',
        'background-item-dropped'
    ];
    pubsub.subscribe(messages, notificationHandler);
}


var notificationHandler = function(message, data){
    switch(message){
        case 'background-changed':
        case 'background-item-dropped':
            view.handleBackgroundNotification(data);
            break;
    }
};
