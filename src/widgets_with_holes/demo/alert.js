angular.module('bs.alert', [])
  .directive('bsAlert', function () {
    return {
      restrict: 'E',
      templateUrl: 'alert.html',
      transclude: true,
      scope: {
        type: '@',
        close: '&'
      },
      link: function (scope, iElement, iAttrs) {
        scope.closeable = "close" in iAttrs;
      }
    };
  });
