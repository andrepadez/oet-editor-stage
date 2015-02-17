var templator = require('oet-lib/templator');
var promise = require('oet-lib/promise');
var collidesWith = require('oet-lib/dom/utils/collides-with');

var $scope;

var EditorStageView = function(){};
EditorStageView.prototype.constructor = EditorStageView;
var editorStageView = module.exports = new EditorStageView();

EditorStageView.prototype.init = function(controller){
    $scope = controller;
    return this.render( $scope.$wrapper )
        .then( registerDOM.bind(null, $scope.$wrapper) )
        .then( registerBehaviour );
};

EditorStageView.prototype.render = function(wrapper){
    return templator.render('views/editor-stage/main.html')
        .then( templator.inject.bind(null, wrapper) );
};

EditorStageView.prototype.handleBackgroundNotification = function(data){
    if(data.color){
        $scope.DOM.editor.style.backgroundColor = data.color;
    } else if(collidesWith($scope.DOM.editor, data)) {
        $scope.DOM.editor.style.backgroundColor = data.dragged.dataset.color;
    }
};

var registerDOM = function(wrapper){
    $scope.DOM = {};
    $scope.DOM.wrapper = wrapper;
    $scope.DOM.editor = document.querySelector('.editor-stage');
};

var registerBehaviour = function(){
    
};
