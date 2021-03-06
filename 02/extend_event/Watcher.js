const fs = require('fs')
const events = require('events')

class Watcher extends events.EventEmitter {
  constructor(watchDir, processDir) {
    super()
    this.watchDir = watchDir
    this.processDir = processDir
  }

  watch() {
    fs.readdir(this.watchDir, (err, files) => {
      if (err) throw err
      for (const index in files) {
        console.log(files[index])
        this.emit('process', files[index])
      }
    })
  }

  start() {
    fs.watchFile(this.watchDir, () => { // 书里的
    // fs.watch(this.watchDir, { recursive: true }, () => { // 不能递归
      console.log('start')
      this.watch()
    })
  }
}

module.exports = Watcher