/**
 * Created by lizhaocai on 2017/5/15.
 */
import 'antd/dist/antd.css'
import 'angular';

var app = angular.module("app", []);

//自定义组件directive

app.directive("antdButton", function () {
    return {
        template: function (element, attrs) {
            return "<button type='button' class='ant-btn ant-btn-primary'>" + attrs.text + "</button>"
        }
    };
});