var editorStage = require('./editor-stage/editor-stage.controller.js');

editorStage.init(null, null)
    .then(
        function(){ console.log('application bootstrapped successfully'); },
        function(err){ console.err(err); }
    )
