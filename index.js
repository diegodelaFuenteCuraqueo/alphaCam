
const webcam = (p) => {
  p.setup = () => {
    canvas = p.createCanvas(800, 600)
    canvas.parent('#webcam')
    video = p.createCapture({
      video: {
        facingMode: "environment"
      },
      alpha: true
    })
    video.hide()
  }

  p.draw = () => {
    p.image(video, 0, 0, p.width, p.height)
  }
}

const image = (p) => {
  p.setup = () => {
    var canvas = p.createCanvas(800, 600)
    canvas.parent('#image')
  }

  p.draw = () => {
    p.background(0, 0, 51)
    p.fill(0, 255, 0)
    p.rectMode(p.CENTER)
    p.rect(p.width / 2, p.height / 2, 50, 50)
  }
}

const webcamSketch = new p5(webcam)
const imageSketch = new p5(image)
