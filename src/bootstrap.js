var notificationsDashboard = require('oet-notifications-dashboard');
var editorStage = require('./editor-stage/editor-stage.controller.js');

notificationsDashboard.init()
    .then( editorStage.init )
    .then(
        function(){ console.log('application bootstrapped successfully'); },
        function(err){ console.err(err); }
    )
