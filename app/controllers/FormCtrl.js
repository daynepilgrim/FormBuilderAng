'use strict';

app.controller('FormCtrl', function ($scope) {

    $scope.schema = {
        type: "object",
        properties: {
            "firstName": {
                "title": "First Name",
                "type": "string"
            },
            "lastName": {
                "title": "Last Name",
                "type": "string"
            },
            "applicant.email": {
                "title": "Email",
                "type": "string",
                "pattern": "^\\S+@\\S+$",
                "validationMessage": "Email is not valid."
            },
            "initial": {
                "title": "Initial",
                "type": "string"
            },
            "applicant.homePhone": {
                "title": "Home Phone",
                "type": "number",
                "pattern": "^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$",
                "validationMessage": "Phone is not valid."

            },
            "applicant.applicationDate": {
                "title": "Application Date",
                "type": "string",
                "format": "date"
            }
        },
        "required": [
            "firstName",
            "lastName",
            "email"
        ]
    };

    $scope.form = [
        {
            type: "section",
            htmlClass: "panel panel-danger",
            items: [
                {
                    type: "section",
                    htmlClass: "panel-heading",
                    items: [
                        {
                            type: "template",
                            template: "<h3 class= \"panel-title\">EDUCATION INFORMATION</h3>"
                        }
                    ]
                },
                {
                    type: "section",
                    htmlClass: "panel-body",
                    items: [
                        {
                            "type": "section",
                            "htmlClass": "row",
                            "items": [
                                {
                                    "type": "section",
                                    "htmlClass": "form-group",
                                    "items": [
                                        {
                                            "type": "section",
                                            "htmlClass": "col-md-4",
                                            "items": [ "firstName" ]
                                        },
                                        {
                                            "type": "section",
                                            "htmlClass": "col-md-4",
                                            "items": [ "lastName" ],
                                        },
                                        {
                                            "type": "section",
                                            "htmlClass": "col-md-1",
                                            "items": [ "initial" ]
                                        },
                                        {
                                            "type": "section",
                                            "htmlClass": "col-md-3",
                                            "items": [ "applicant.applicationDate" ]
                                        }
                                    ]
                                },
                                {
                                    "type": "section",
                                    "htmlClass": "form-group",
                                    "items": [
                                        {
                                            "type": "section",
                                            "htmlClass": "col-md-4",
                                            "items": [ "applicant.homePhone" ]
                                        },
                                        {
                                            "type": "section",
                                            "htmlClass": "col-md-4",
                                            "items": [ "cellPhone" ],
                                        },
                                        {
                                            "type": "section",
                                            "htmlClass": "col-md-2",
                                            "items": [ "initial" ]
                                        },
                                        {
                                            "type": "section",
                                            "htmlClass": "col-md-4",
                                            "items": [ "applicationDate" ]
                                        }
                                    ]
                                },
                            ]
                        }
                    ]
                }
            ]
        },  // FORM PANEL SECION
        {
            type: "section",
            htmlClass: "col-md-12",
            items: [
                {
                    type: "submit",
                    style: "btn-primary full-btn",
                    title: "Submit Your Application"
                }
            ]
        }
    ];

    $scope.model = {};

    $scope.submitForm = () => {
        console.log($scope.model);
    }

});