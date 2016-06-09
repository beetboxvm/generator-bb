'use strict';

module.exports = function() {

    // Create Vagrantfile
    this.template(
        this.templatePath('Vagrantfile'),
        this.destinationPath('Vagrantfile')
    );

    // Create config.yml
    this.template(
        this.templatePath('.beetbox/config.yml'),
        this.destinationPath('.beetbox/config.yml'),
        {
            data: this.props
        }
    );

};



