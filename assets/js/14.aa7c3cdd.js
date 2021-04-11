(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{371:function(a,t,e){"use strict";e.r(t);var n=e(45),s=Object(n.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"blog-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#blog-6"}},[a._v("#")]),a._v(" Blog 6")]),a._v(" "),e("p",[a._v("In this blog we will be building a simple API on the cloud using "),e("a",{attrs:{href:"https://aws.amazon.com/api-gateway/",target:"_blank",rel:"noopener noreferrer"}},[a._v("AWS API Gateway"),e("OutboundLink")],1),a._v(" & "),e("a",{attrs:{href:"https://aws.amazon.com/lambda/",target:"_blank",rel:"noopener noreferrer"}},[a._v("AWS Lambda"),e("OutboundLink")],1),a._v(" that will display "),e("em",[a._v('"hello world"')]),a._v(" when called.")]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"creating-an-amazon-api-gateway"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-amazon-api-gateway"}},[a._v("#")]),a._v(" Creating an Amazon API Gateway")]),a._v(" "),e("p",[a._v("Knowing API requirements will lead you to decide what type of "),e("em",[a._v("API Type")]),a._v(" will be selected when creating an Amazon API Gateway. For this case a few example gateway types are referenced here... "),e("a",{attrs:{href:"https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("HTTP API vs. REST API"),e("OutboundLink")],1),a._v(". In this case we will be selecting the "),e("strong",[a._v("HTTP-API")]),a._v(" for this example "),e("em",[a._v('"hello world"')]),a._v(" API. During the creation process, we first specify an API name and will be doing more configurations later after we finish our "),e("strong",[a._v("Lambda")]),a._v(" function.")]),a._v(" "),e("p",[e("img",{attrs:{src:"/blog6/api-gateway_creation.png",alt:"AWS API Gateway Configuration"}})]),a._v(" "),e("h2",{attrs:{id:"aws-lambda-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aws-lambda-configuration"}},[a._v("#")]),a._v(" AWS Lambda Configuration")]),a._v(" "),e("p",[a._v("We first need to define our Lambda function "),e("em",[a._v("runtime")]),a._v("/"),e("em",[a._v("language")]),a._v(" as well as the function name. In this example I will be naming my Lambda "),e("code",[a._v("helloLambda")]),a._v(" using "),e("code",[a._v("Node.js 14.x")]),a._v(". Since Lamba functionality is all "),e("strong",[a._v("event-trigger")]),a._v(" based, we will specify the event whenever our "),e("em",[a._v("API Gateway")]),a._v(" route is called. In this case during the "),e("strong",[a._v("trigger")]),a._v(" configuration, I specify the previous gateway created "),e("code",[a._v("helloworld-api")]),a._v(" and set my default security for this case to "),e("em",[a._v("open")]),a._v(".")]),a._v(" "),e("p",[e("img",{attrs:{src:"/blog6/lambda_creation.png",alt:"AWS Lambda Configuration"}})]),a._v(" "),e("p",[a._v("AWS provides a default "),e("code",[a._v("index.js")]),a._v(" Lambda will be placed under the bottom panel.")]),a._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[a._v("exports"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("handler")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("async")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("event")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// TODO implement")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" response "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        statusCode"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("200")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        body"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("JSON")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("stringify")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Hello from Lambda!'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("p",[a._v("This code will handle the "),e("strong",[a._v("event")]),a._v(" from the "),e("strong",[a._v("trigger")]),a._v(" we specified and return a response code of "),e("code",[a._v("200")]),a._v(" ("),e("em",[a._v("success")]),a._v(") followed by a message "),e("em",[a._v('"Hello from Lambda!"')]),a._v(" when called.")]),a._v(" "),e("h2",{attrs:{id:"amazon-api-gateway-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#amazon-api-gateway-configuration"}},[a._v("#")]),a._v(" Amazon API Gateway Configuration")]),a._v(" "),e("p",[a._v("Now that we have a Lambda function that will trigger when our "),e("em",[a._v("API Gateway")]),a._v(" is called, we will be configuring it to a specified route to be called via "),e("em",[a._v("REST")]),a._v(" protocol. During our configuration we can specify a "),e("strong",[a._v("Route")]),a._v(", in this case a default route will be created when a "),e("em",[a._v("Gateway")]),a._v(" is created. We will configure an "),e("strong",[a._v("Integration")]),a._v(" to be under a "),e("em",[a._v("Lambda function")]),a._v(". During integration configuration we are required to specifiy the "),e("strong",[a._v("region")]),a._v(" & "),e("strong",[a._v("name of Lambda")]),a._v(". The last step is to test the final API out from the "),e("strong",[a._v("Invoke URL")]),a._v(" specified in the "),e("em",[a._v("API Gateway")]),a._v(" description.")]),a._v(" "),e("p",[e("img",{attrs:{src:"/blog6/api-gateway_test.png",alt:"Final API Output"}})])])}),[],!1,null,null,null);t.default=s.exports}}]);