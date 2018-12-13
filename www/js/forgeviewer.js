// var viewer;
// function getForgeToken(callback) {
//     console.log("started")
//     jQuery.ajax({
//       url: '/user/token',
//       success: function (res) {
//         console.log('res de token client', res);
//         callback(res.access_token, res.expires_in)
//       }
//     });
    
//     console.log("ended")
// }

// var options = {
//     env: 'AutodeskProduction',
//     getAccessToken: getForgeToken
// }

// var svfUrl = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWwyMDE4LTEyLTA1LTEwLTA0LTM3LWQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlL0JvZHlfT2JhbF8xLmlwdA';

function getElById(name) {
    return document.getElementById(name);
}

// // getElById('btnViewer').addEventListener('click',function(){

// //     console.log(options)
// //     var call = function(access_token, expires_in) {
// //         options.getAccessToken.expires_in = expires_in
// //         options.getAccessToken.access_token = access_token

// //         Autodesk.Viewing.Initializer(options, function onInitialized() {
// //             Autodesk.Viewing.Document.load(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);
// //         });
// //     }

// //     getForgeToken(call)
// // })
//     // Choose any of the available viewable
//     // var initialViewable = viewable[0]; // You can check for other available views in your model,
//     // var svfUrl = doc.getViewablePath(initialViewable);
//     var modelOptions = {
//         sharedPropertyDbPath: doc.getPropertyDbPath()
//     };

// getElById('btnViewer').addEventListener('click',function(){
//     // Autodesk.Viewing.Initializer(options, function onInitialized() {
//     //     Autodesk.Viewing.Document.load(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);
//     // })
//     var viewerDiv = document.getElementById('forgeViewer');
//     ///////////////USE ONLY ONE OPTION AT A TIME/////////////////////////

//     /////////////////////// Headless Viewer /////////////////////////////
//     //viewer = new Autodesk.Viewing.Viewer3D(viewerDiv);
//     //////////////////////////////////////////////////////////////////////

//     //////////////////Viewer with Autodesk Toolbar///////////////////////
//     viewer = new Autodesk.Viewing.Private.GuiViewer3D(viewerDiv);
//     //////////////////////////////////////////////////////////////////////
//     viewer.start(svfUrl, modelOptions, onLoadModelSuccess, onLoadModelError);
// })

// /**
//  * Autodesk.Viewing.Document.load() success callback.
//  * Proceeds with model initialization.
//  */
// function onDocumentLoadSuccess(doc) {

//     // A document contains references to 3D and 2D viewables.
//     var viewable = Autodesk.Viewing.Document.getSubItemsWithProperties(doc.getRootItem(), {
//         'type': 'geometry',
//         'role': '3d'
//     }, true);
//     if (viewable.length === 0) {
//         console.error('Document contains no viewables.');
//         return;
//     }

//     // Choose any of the available viewable
//     var initialViewable = viewable[0]; // You can check for other available views in your model,
//     var svfUrl = doc.getViewablePath(initialViewable);
//     var modelOptions = {
//         sharedPropertyDbPath: doc.getPropertyDbPath()
//     };

   

//     ///////////////USE ONLY ONE OPTION AT A TIME/////////////////////////

//     /////////////////////// Headless Viewer /////////////////////////////
//     //viewer = new Autodesk.Viewing.Viewer3D(viewerDiv);
//     //////////////////////////////////////////////////////////////////////

//     //////////////////Viewer with Autodesk Toolbar///////////////////////
//     // viewer = new Autodesk.Viewing.Private.GuiViewer3D(viewerDiv);
//     //////////////////////////////////////////////////////////////////////

//     // viewer.start(svfUrl, modelOptions, onLoadModelSuccess, onLoadModelError);
// }


// /**
//  * Autodesk.Viewing.Document.load() failure callback.
//  */
// function onDocumentLoadFailure(viewerErrorCode) {
//     console.error('onDocumentLoadFailure() - errorCode:' + viewerErrorCode);
// }

// /**
//  * viewer.loadModel() success callback.
//  * Invoked after the model's SVF has been initially loaded.
//  * It may trigger before any geometry has been downloaded and displayed on-screen.
//  */
// function onLoadModelSuccess(model) {
//     console.log('onLoadModelSuccess()!');
//     console.log('Validate model loaded: ' + (viewer.model === model));
//     console.log(model);
// }

// /**
//  * viewer.loadModel() failure callback.
//  * Invoked when there's an error fetching the SVF file.
//  */
// function onLoadModelError(viewerErrorCode) {
//     console.error('onLoadModelError() - errorCode:' + viewerErrorCode);
// }


// /////////////////////////////////////////////////////////////////////////////////
// //
// // Load Viewer Background Color Extension
// //
// /////////////////////////////////////////////////////////////////////////////////

// function changeBackground (){
//        viewer.setBackgroundColor(0, 59, 111, 255,255, 255);
// }

// /////////////////////////////////////////////////////////////////////////////////
// //
// // Unload Viewer Background Color Extension
// //
// /////////////////////////////////////////////////////////////////////////////////

// function resetBackground (){
//        viewer.setBackgroundColor(169,169,169, 255,255, 255);
// }

// /////////////////////////////////////////////////////////////////////////////////
// //
// // Load Viewer Markup3D Extension
// //
// /////////////////////////////////////////////////////////////////////////////////
// // 3D Markup extension to display values of the selected objects in the model. 

// function loadMarkup3D (){
//        viewer.loadExtension('Viewing.Extension.Markup3D');
// }

// /////////////////////////////////////////////////////////////////////////////////
// //
// // Load Viewer Transform Extension
// //
// /////////////////////////////////////////////////////////////////////////////////
// // Transformation is allowed with this extension to move object selected in the XYZ
// // position or rotation in XYZ as well.

// function loadTransform (){
//        viewer.loadExtension('Viewing.Extension.Transform');
// }

// /////////////////////////////////////////////////////////////////////////////////
// //
// // Load Viewer Control Selector Extension
// //
// /////////////////////////////////////////////////////////////////////////////////
// // This extension allows you to remove certain extensions from the original toolbar 
// // provided to you.

// function loadControlSelector(){
//        viewer.loadExtension('_Viewing.Extension.ControlSelector');
// }

// function getForgeToken(callback) {
//     console.log("started")
//     jQuery.ajax({
//       url: '/user/token',
//       success: function (res) {
//         console.log('res de token client', res);
//         callback(res.access_token, res.expires_in)
//       }
//     });
    
//     console.log("ended")
  
//   }

// var viewer;
// var options = {
//     env: 'AutodeskProduction',
//     accessToken: getForgeToken
// };

// var documentId = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWwyMDE4LTEyLTA1LTEwLTA0LTM3LWQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlL0JvZHlfT2JhbF8xLmlwdA'
// Autodesk.Viewing.Initializer(options, function onInitialized(){
//     Autodesk.Viewing.Document.load(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);
// });

// getElById('btnViewer').addEventListener('click',function(){
//     Autodesk.Viewing.Initializer(options, function onInitialized(){
//         Autodesk.Viewing.Document.load(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);
//     });
// });


var viewer;
var lmvDoc;
var viewables;
var indexViewable;
var options = {
    env: 'AutodeskProduction',
    getAccessToken: getForgeToken
}

var documentId;
documentId = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWwyMDE4LTEyLTEwLTA5LTE5LTM1LWQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlL1NlYXQuZHdm';
var myEl = document.getElementById('btnViewer');

Autodesk.Viewing.Initializer(options, function onInitialized() {
    Autodesk.Viewing.Document.load(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);
    // loadModel();
});

// myEl.addEventListener('click', function () {
//     Autodesk.Viewing.Initializer(options, function onInitialized() {
//         Autodesk.Viewing.Document.load(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);
//         // loadModel();
//     });
// });

// // Autodesk.Viewing.Initializer(options, function onInitialized() {
// //     Autodesk.Viewing.Document.load(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);

// // });

// /**
// * Autodesk.Viewing.Document.load() success callback.
// * Proceeds with model initialization.
// */
function onDocumentLoadSuccess(doc) {

    // A document contains references to 3D and 2D viewables.
    viewables = Autodesk.Viewing.Document.getSubItemsWithProperties(doc.getRootItem(), {
        'type': 'geometry',
        'role': '3d'
    }, true);
    if (viewables.length === 0) {
        console.error('Document contains no viewables.');
        return;
    }

    // Create Viewer instance and load model.
    var viewerDiv = document.getElementById('forgeViewer');
    viewer = new Autodesk.Viewing.Private.GuiViewer3D(viewerDiv);
    var errorCode = viewer.start();

    // Check for initialization errors.
    if (errorCode) {
        console.error('viewer.start() error - errorCode:' + errorCode);
        return;
    }

    // Choose any of the available viewables.
    indexViewable = 0;
    lmvDoc = doc;

    // Everything is set up, load the model.
    loadModel();
}

// function loadModel() {
//     var initialViewable = viewables[indexViewable];
//     var svfUrl = lmvDoc.getViewablePath(initialViewable);
//     var modelOptions = {
//         sharedPropertyDbPath: lmvDoc.getPropertyDbPath()
//     };
//     viewer.loadModel(svfUrl, modelOptions, onLoadModelSuccess, onLoadModelError);
// }

// /**
//  * Autodesk.Viewing.Document.load() failuire callback.
//  */
function onDocumentLoadFailure(viewerErrorCode) {
    console.error('onDocumentLoadFailure() - errorCode:' + viewerErrorCode);
}

// function loadNextModel() {
//     viewer.tearDown();
//     viewer.setUp(viewer.config);

//     // Next viewable index. Loop back to 0 when overflown.
//     indexViewable = (indexViewable + 1) % viewables.length;
//     loadModel();
// }

// /**
//  * viewer.loadModel() success callback.
//  * Invoked after the model's SVF has been initially loaded.
//  * It may trigger before any geometry has been downloaded and displayed on-screen.
//  */
// function onLoadModelSuccess(model) {
//     console.log('onLoadModelSuccess()!');
//     console.log('Validate model loaded: ' + (viewer.model === model));
//     console.log(model);
// }

// /**
//  * viewer.loadModel() failure callback.
//  * Invoked when there's an error fetching the SVF file.
//  */
// function onLoadModelError(viewerErrorCode) {
//     console.error('onLoadModelError() - errorCode:' + viewerErrorCode);
// }

// /////////////////////////////////////////////////////////////////////////////////
// //
// // Load Viewer Background Color Extension
// //
// /////////////////////////////////////////////////////////////////////////////////

// function changeBackground (){
//     viewer.setBackgroundColor(0, 59, 111, 255,255, 255);
// }

// /////////////////////////////////////////////////////////////////////////////////
// //
// // Unload Viewer Background Color Extension
// //
// /////////////////////////////////////////////////////////////////////////////////

// function resetBackground (){
//     viewer.setBackgroundColor(169,169,169, 255,255, 255);
// }

// /////////////////////////////////////////////////////////////////////////////////
// //
// // Load Viewer Markup3D Extension
// //
// /////////////////////////////////////////////////////////////////////////////////
// // 3D Markup extension to display values of the selected objects in the model. 

// function loadMarkup3D (){
//     viewer.loadExtension('Viewing.Extension.Markup3D');
// }

// /////////////////////////////////////////////////////////////////////////////////
// //
// // Load Viewer Transform Extension
// //
// /////////////////////////////////////////////////////////////////////////////////
// // Transformation is allowed with this extension to move object selected in the XYZ
// // position or rotation in XYZ as well.

// function loadTransform (){
//     viewer.loadExtension('Viewing.Extension.Transform');
// }

// /////////////////////////////////////////////////////////////////////////////////
// //
// // Load Viewer Control Selector Extension
// //
// /////////////////////////////////////////////////////////////////////////////////
// // This extension allows you to remove certain extensions from the original toolbar 
// // provided to you.

// function loadControlSelector(){
//     viewer.loadExtension('_Viewing.Extension.ControlSelector');
// }