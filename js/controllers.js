var popup = angular.module('popupCtrls', []);
popup.controller('linkController',['$scope', 
        function($scope) {
            $scope.add = function(){
                console.log('add');
                console.log(typeof chrome.runtime.sendMessage);
                chrome.runtime.sendMessage('addLink', function(response){
                    alert(response);
                });
            };
            $scope.links = [
                {
                    url: 'xxxxx',
                    text: 'text'
                },
                {
                    url: 'xxxxx2',
                    text: 'text2'
                }
            ]
        }
    ]);
    