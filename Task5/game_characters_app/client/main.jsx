import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import App from '/imports/ui/App';

Meteor.startup(() => {
    console.log("Tu jestem")
    render(<App/>, document.getElementById('react-target'));
});