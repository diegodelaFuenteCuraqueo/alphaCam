
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
  let img
  p.setup = () => {
    var canvas = p.createCanvas(800, 600)
    canvas.parent('#image')
    img = p.loadImage('https://3.bp.blogspot.com/-gMq_vCCFvw0/UbYyiWjZi3I/AAAAAAAAAIY/Ni_pXBOxv7o/s1600/Butterfly+Pictures-01.jpg')
  }

  p.draw = () => {
    //p.background(0, 0, 51)
    p.fill(0, 255, 0, 95)
    p.rectMode(p.CENTER)
    p.rect(p.width / 2, p.height / 2, 100, 100)
    p.image(img, 0, 0, p.width, p.height)
  }
}

const webcamSketch = new p5(webcam)
const imageSketch = new p5(image)
