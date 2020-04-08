let sketch = function (p) {
  let name = "tiles";
  let tileSize = 60;
  let w = 31 * tileSize;
  let h = 31 * tileSize;

  let tiles = [];
  let stroke = 0;
  let padding = 0;//tileSize / 5;
  // let colorPalette = [
  //   "#170C0C",
  //   "#141E9A",
  //   "#0B2ED3",
  //   "#1050DC",
  //   "#1FB6E6",
  //   "#78DCF1",
  //   "#CDE9F0",
  //   "#FAFAFA",
  // ];

  // let colorPalette = [
  //   "#3A3335",
  //   "#D81E5B",
  //   "#F0544F",
  //   "#FDF0D5",
  //   "#C6D8D3",
  // ];
  
  // let colorPalette = [
  //   "#F7F052",
  //   "#D81E5B",
  //   "#004FFF",
  //   "#011627",
  //   "#FBFEF9",
  // ];

  let colorPalette = [
    "#6C756B",
    "#1C2541",
    "#D2FF28",
    "#54F2F2",
    "#D81E5B",
    "#FFFFFF",
  ];

  getCountries = function() {
  let EU = 515 - 10 - 39 // s.t. the sum is 31 * 31
  let SA = 11
  let NA = 304
  let AM = NA + SA
  let AS = 107
  let AF = 59
  let OC = 14
  return [EU, AM, AS, AF, OC]
}
let countries = getCountries();
let nb_countries = countries.reduce((a,b) => a + b, 0)


  quarterCircle = function (x, y, c) {
    const corner = p.random([0, 1, 2, 3]);
    p.fill(c);

    switch (corner) {
      case 0:
        p.arc(x, y, tileSize * 2, tileSize * 2, 0, p.HALF_PI, p.PIE);
        break;
      case 1:
        p.arc(x + tileSize, y, tileSize * 2, tileSize * 2, p.HALF_PI, p.PI, p.PIE);
        break;
      case 2:
        p.arc(x + tileSize, y + tileSize, tileSize * 2, tileSize * 2, p.PI, p.PI + p.HALF_PI, p.PIE);
        break;
      case 3:
        p.arc(x, y + tileSize, tileSize * 2, tileSize * 2, p.HALF_PI + p.PI, 2 * p.PI, p.PIE);
        break;
      default:
        break;
    }
  }

  halfCircle = function (x, y, c) {
    const corner = p.random([0, 1, 2, 3]);
    p.fill(c);

    switch (corner) {
      case 0:
        p.arc(x + tileSize / 2, y, tileSize, tileSize, 0, p.PI, p.OPEN);
        break;
      case 1:
        p.arc(x + tileSize, y + tileSize / 2, tileSize, tileSize, p.HALF_PI, p.PI + p.HALF_PI, p.PIE);
        break;
      case 2:
        p.arc(x + tileSize / 2, y + tileSize, tileSize, tileSize, p.PI, 2 * p.PI, p.PIE);
        break;
      case 3:
        p.arc(x, y + tileSize / 2, tileSize, tileSize, 0 - p.HALF_PI, p.PI - p.HALF_PI, p.PIE);
        break;
      default:
        break;
    }
  }

  smallCircle = function (x, y, c) {
    p.fill(c);
    p.arc(x + tileSize / 2, y + tileSize / 2, tileSize / 2, tileSize / 2, 0, 2 * p.PI, p.OPEN);
  }

  largeCircle = function (x, y, c) {
    p.fill(c);
    p.arc(x + tileSize / 2, y + tileSize / 2, tileSize, tileSize, 0, 2 * p.PI, p.OPEN);
  }

  donuts = function (x, y, c, c2) {
    largeCircle(x, y, c);
    smallCircle(x, y, c2);
  }

  diagonals = function (x, y, c) {
    const corner = p.random([0, 1]);
    switch (corner) {
      case 0:
        p.fill(c);
        p.triangle(x, y, x + tileSize, y, x + tileSize, y + tileSize);
        break;
      case 1:
        p.fill(c);
        p.triangle(x + tileSize, y, x, y + tileSize, x + tileSize, y + tileSize);
        break;
      default:
        break;
    }
  } 

  let tileDecorations = [
    quarterCircle,
    halfCircle,
    smallCircle,
    largeCircle,
    donuts,
    diagonals
  ];

  p.setup = function () {
    p.createCanvas(w, h + 20*tileSize);
    p.pixelDensity(2);
    p.strokeWeight(stroke);
    p.noLoop();
  };

  p.draw = function () {
    createTileArray();

    for (let i = 0; i < tiles.length; i++) {
      let tile = tiles[i];
      if (Math.random() > 0.5) {
        p.fill(tile.color);
        p.square(tile.x_pos, tile.y_pos, tileSize);
        decorationFunction = p.random(tileDecorations);
        if (decorationFunction == tileDecorations[4]) {
          decorationFunction(tile.x_pos, tile.y_pos, colorPalette[5], tile.color);
        }
        else {
          decorationFunction(tile.x_pos, tile.y_pos, colorPalette[5]);
        }
      }
      else {
        p.fill(colorPalette[5]);
        p.square(tile.x_pos, tile.y_pos, tileSize);
        decorationFunction = p.random(tileDecorations);
        if (decorationFunction == tileDecorations[4]) {
          decorationFunction(tile.x_pos, tile.y_pos, tile.color, colorPalette[5]);
        }
        else {
          decorationFunction(tile.x_pos, tile.y_pos, tile.color);
        }
      }


    }
    makeLegend();
  };

  makeLegend = function() {
    countries_name = ['Europe', 'America', 'Asia', 'Africa', 'Oceania'];
    countries_count = getCountries();

    for (let i = 0; i < countries_name.length; i++) {
      p.fill(0);
      p.textSize(16);
      p.text(countries_name[i] + ' (' + countries_count[i] + ')', tileSize * 1.5, tileSize * 2*(i+0.9) + h);
      
      // p.fill(colorPalette[i]);
      smallCircle(0, tileSize * 2*(i+1) + h - tileSize, colorPalette[i])
    }

    shapes = listLegend();
    categories = ['Physics', 'Chemistry', 'Peace', 'Medicine', 'Economy', 'Literature']
    for (let i = 0; i < categories.length; i++) {
      p.fill(255);
      p.strokeWeight(2);
      p.square(tileSize * 15, tileSize * (2*i+1) + h, tileSize);
      shapes[i](tileSize * 15, tileSize * (2*i+1) + h, tileSize)

      p.fill(0);
      p.textSize(16);
      p.text(categories[i], tileSize * 17, tileSize * (2*i+1.7) + h);
      // p.square(tileSize * 15, tileSize * (2*i+1) + h, tileSize);
    }
    
  }

  legendCircleSmall = function(x, y) {
    p.arc(x + tileSize / 2, y + tileSize / 2, tileSize / 2, tileSize / 2, 0, 2 * p.PI, p.OPEN);
  }
  legendCircleLarge = function(x, y) {
    p.arc(x + tileSize / 2, y + tileSize / 2, tileSize, tileSize, 0, 2 * p.PI, p.OPEN);
  }
  legendDonut = function(x, y) {
    legendCircleLarge(x, y);
    legendCircleSmall(x, y);
  }
  legendHelfCircle = function(x, y) {
    p.arc(x + tileSize / 2, y, tileSize, tileSize, 0, p.PI, p.PIE);
  }
  legendQuarterCircle = function(x, y) {
    p.arc(x, y, tileSize * 2, tileSize * 2, 0, p.HALF_PI, p.PIE);
  }
  legendTriangle = function(x, y) {
    p.triangle(x + tileSize, y, x, y + tileSize, x + tileSize, y + tileSize);
  }

  listLegend = function() {
    return [legendCircleSmall, legendCircleLarge, legendDonut, legendHelfCircle, legendQuarterCircle, legendTriangle]
  }

  createTileArray = function () {
    tiles = [];

    for (let y = 0; y < h; y += tileSize + padding) {
      for (let x = 0; x < w; x += tileSize + padding) {
        do {
          some_index = 0
          random_num = Math.random()
          sum = 0
          sum += countries[some_index]
          while (random_num > sum / countries.reduce((a,b) => a + b, 0)) {
            some_index += 1
            sum += countries[some_index]
          }
        }
        while (countries[some_index] <= 0)
        countries[some_index] = countries[some_index] - 1

        tiles.push({
          x_pos: x,
          y_pos: y,
          color: colorPalette[some_index],
        });
      }
    }
  }

  // p.mouseClicked = function () {
  //   padding = p.map(p.mouseX, 0, p.width, 0, tileSize);
  //   stroke = p.map(p.mouseY, 0, p.height, 0, 10);
  //   p.strokeWeight(stroke);
  //   p.clear();
  //   p.redraw();
  // };

  p.keyPressed = function () {
    if (p.keyCode == 83) {
      var today = new Date();
      var date = today.getFullYear() + "_" + (today.getMonth() + 1) + "_" + today.getDate();
      var time = today.getHours() + "_" + today.getMinutes() + "_" + today.getSeconds();
      var fileName = name + "_" + date + "_" + time;
      p.saveCanvas(fileName, "png");
    }
    // if (p.keyCode == 82) {
    //   padding = 0;
    //   p.strokeWeight(0);
    //   p.clear();
    //   p.redraw();
    // }
  };
};

let myp5 = new p5(sketch);
