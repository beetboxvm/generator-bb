'use strict';

module.exports = function() {

    if (this.props.vagrant_plugins) {
        // Install recommended vagrant plugins.
        this.spawnCommandSync('vagrant', ['plugin', 'install', 'vagrant-hostsupdater']);
        this.spawnCommandSync('vagrant', ['plugin', 'install', 'vagrant-auto_network']);
        this.spawnCommandSync('vagrant', ['plugin', 'install', 'vagrant-cachier']);
    }
};
