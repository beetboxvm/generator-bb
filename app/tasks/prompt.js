'use strict';

var replaceall = require('replaceall');

module.exports = function() {

    var prompts = [

        {
            type: 'input',
            name: 'vagrant_ip',
            message: 'IP Address for your VM?',
            default: '192.168.88.88'
        },
        {
            type: 'input',
            name: 'beet_domain',
            message: 'and domain name?',
            default: replaceall(' ', '-', this.appname) + '.local'
        },
        {
            type: 'input',
            name: 'beet_root',
            message: 'What is the root directory? (leave blank if project is in the root)',
        },
        {
            type: 'input',
            name: 'beet_site_name',
            message: 'What is the site name?',
        },
        {
            type: 'confirm',
            name: 'drupal_download_drupal',
            message: 'Do you want to download Drupal?',
            default: true
        },
        {
            type: 'confirm',
            name: 'drupal_install_site',
            message: 'Do you want to install Drupal?',
            default: true
        },
        {
            type: 'input',
            name: 'drupal_account_name',
            message: 'Drupal admin account username?',
            default: 'admin'
        },
        {
            type: 'input',
            name: 'drupal_account_pass',
            message: 'Drupal admin account password?',
            default: 'admin'
        },
        {
            type: 'confirm',
            name: 'vagrant_plugins',
            message: 'Do you want to install our recommended Vagrant plugins?',
            default: true
        },

    ];

    if (this.runTests) {
        return this.props = {
            vagrant_ip: "192.168.88.88",
            beet_domain: "beetbox.local",
            beet_root: "",
            beet_site_name: "Beetbox",
            drupal_download_drupal: true,
            drupal_install_site: true,
            drupal_account_name: "admin",
            drupal_account_pass: "admin",
        };
    }

    return this.prompt(prompts).then(function (props) {
        this.props = props;
    }.bind(this));

};
