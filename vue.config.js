module.exports = {
  pluginOptions: {
    electronBuilder: {
      preload: 'src/preload.js',
      builderOptions: {
        appId: 'rotekstorage',
        "extends": null,
        win: {
          icon: 'dist_electron/icon.png',
          target: "nsis"
        },
        nsis: {
          allowElevation: false,
          allowToChangeInstallationDirectory: true,
          oneClick: false,
          perMachine: true,
          include: "dist_electron/installer.nsh"
        }
      }
    }
  }
}
