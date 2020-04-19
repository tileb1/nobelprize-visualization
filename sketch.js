let sketch = function (p) {
let TILE_SIZE = 50;
let w = 1650;
let h = 103100;
  let tiles = [
{'x_pos': 10, 'y_pos': 160, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 60, 'y_pos': 160, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 110, 'y_pos': 160, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 160, 'y_pos': 160, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 210, 'y_pos': 160, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 5},
{'x_pos': 260, 'y_pos': 160, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 310, 'y_pos': 160, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 5},
{'x_pos': 360, 'y_pos': 160, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 5},
{'x_pos': 410, 'y_pos': 160, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 5},
{'x_pos': 460, 'y_pos': 160, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 510, 'y_pos': 160, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 560, 'y_pos': 160, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 610, 'y_pos': 160, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 660, 'y_pos': 160, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 710, 'y_pos': 160, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 5},
{'x_pos': 760, 'y_pos': 160, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 810, 'y_pos': 160, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 5},
{'x_pos': 860, 'y_pos': 160, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 910, 'y_pos': 160, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 5},
{'x_pos': 960, 'y_pos': 160, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 5},
{'x_pos': 1010, 'y_pos': 160, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 1060, 'y_pos': 160, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 1110, 'y_pos': 160, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 2},
{'x_pos': 1160, 'y_pos': 160, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 5},
{'x_pos': 1210, 'y_pos': 160, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 1260, 'y_pos': 160, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 5},
{'x_pos': 1310, 'y_pos': 160, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 5},
{'x_pos': 10, 'y_pos': 260, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 2},
{'x_pos': 60, 'y_pos': 260, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 110, 'y_pos': 260, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 160, 'y_pos': 260, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 210, 'y_pos': 260, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 260, 'y_pos': 260, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 310, 'y_pos': 260, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 360, 'y_pos': 260, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 410, 'y_pos': 260, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 5},
{'x_pos': 460, 'y_pos': 260, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 510, 'y_pos': 260, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 560, 'y_pos': 260, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 610, 'y_pos': 260, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 660, 'y_pos': 260, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 710, 'y_pos': 260, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 5},
{'x_pos': 760, 'y_pos': 260, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 810, 'y_pos': 260, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 860, 'y_pos': 260, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 910, 'y_pos': 260, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 960, 'y_pos': 260, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 2},
{'x_pos': 1010, 'y_pos': 260, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1060, 'y_pos': 260, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 1110, 'y_pos': 260, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1160, 'y_pos': 260, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1210, 'y_pos': 260, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1260, 'y_pos': 260, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1310, 'y_pos': 260, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1360, 'y_pos': 260, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 5},
{'x_pos': 1410, 'y_pos': 260, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 5},
{'x_pos': 1460, 'y_pos': 260, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1510, 'y_pos': 260, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 2},
{'x_pos': 10, 'y_pos': 310, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 60, 'y_pos': 310, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 110, 'y_pos': 310, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 160, 'y_pos': 310, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 5},
{'x_pos': 210, 'y_pos': 310, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 260, 'y_pos': 310, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 310, 'y_pos': 310, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 360, 'y_pos': 310, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 410, 'y_pos': 310, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 460, 'y_pos': 310, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 510, 'y_pos': 310, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 560, 'y_pos': 310, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 610, 'y_pos': 310, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 660, 'y_pos': 310, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 710, 'y_pos': 310, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 760, 'y_pos': 310, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 5},
{'x_pos': 810, 'y_pos': 310, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 860, 'y_pos': 310, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 910, 'y_pos': 310, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 2},
{'x_pos': 960, 'y_pos': 310, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 5},
{'x_pos': 1010, 'y_pos': 310, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1060, 'y_pos': 310, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 1110, 'y_pos': 310, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1160, 'y_pos': 310, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1210, 'y_pos': 310, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 1260, 'y_pos': 310, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1310, 'y_pos': 310, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 1360, 'y_pos': 310, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 1410, 'y_pos': 310, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 1460, 'y_pos': 310, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1510, 'y_pos': 310, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 10, 'y_pos': 360, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 60, 'y_pos': 360, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 0},
{'x_pos': 110, 'y_pos': 360, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 160, 'y_pos': 360, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 210, 'y_pos': 360, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 260, 'y_pos': 360, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 310, 'y_pos': 360, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 360, 'y_pos': 360, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 410, 'y_pos': 360, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 460, 'y_pos': 360, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 5},
{'x_pos': 510, 'y_pos': 360, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 5},
{'x_pos': 560, 'y_pos': 360, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 610, 'y_pos': 360, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 660, 'y_pos': 360, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 710, 'y_pos': 360, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 760, 'y_pos': 360, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 810, 'y_pos': 360, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 5},
{'x_pos': 860, 'y_pos': 360, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 3},
{'x_pos': 910, 'y_pos': 360, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 960, 'y_pos': 360, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 1010, 'y_pos': 360, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 5},
{'x_pos': 1060, 'y_pos': 360, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 1110, 'y_pos': 360, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 5},
{'x_pos': 1160, 'y_pos': 360, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 1210, 'y_pos': 360, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1260, 'y_pos': 360, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 1310, 'y_pos': 360, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 5},
{'x_pos': 1360, 'y_pos': 360, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 1410, 'y_pos': 360, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 1460, 'y_pos': 360, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 1510, 'y_pos': 360, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 5},
{'x_pos': 10, 'y_pos': 410, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 60, 'y_pos': 410, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 110, 'y_pos': 410, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 160, 'y_pos': 410, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 210, 'y_pos': 410, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 5},
{'x_pos': 260, 'y_pos': 410, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 5},
{'x_pos': 310, 'y_pos': 410, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 360, 'y_pos': 410, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 410, 'y_pos': 410, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 460, 'y_pos': 410, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 510, 'y_pos': 410, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 560, 'y_pos': 410, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 1},
{'x_pos': 610, 'y_pos': 410, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 0},
{'x_pos': 660, 'y_pos': 410, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 10, 'y_pos': 510, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 60, 'y_pos': 510, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 110, 'y_pos': 510, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 160, 'y_pos': 510, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 210, 'y_pos': 510, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 260, 'y_pos': 510, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 5},
{'x_pos': 310, 'y_pos': 510, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 360, 'y_pos': 510, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 410, 'y_pos': 510, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 460, 'y_pos': 510, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 510, 'y_pos': 510, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 560, 'y_pos': 510, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 610, 'y_pos': 510, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 2},
{'x_pos': 660, 'y_pos': 510, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 710, 'y_pos': 510, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 760, 'y_pos': 510, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 810, 'y_pos': 510, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 860, 'y_pos': 510, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 910, 'y_pos': 510, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 960, 'y_pos': 510, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 2},
{'x_pos': 1010, 'y_pos': 510, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 2},
{'x_pos': 1060, 'y_pos': 510, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 1},
{'x_pos': 1110, 'y_pos': 510, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 5},
{'x_pos': 1160, 'y_pos': 510, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 3},
{'x_pos': 1210, 'y_pos': 510, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 1260, 'y_pos': 510, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1310, 'y_pos': 510, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 1360, 'y_pos': 510, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 1410, 'y_pos': 510, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 5},
{'x_pos': 1460, 'y_pos': 510, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 5},
{'x_pos': 1510, 'y_pos': 510, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 2},
{'x_pos': 10, 'y_pos': 560, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 60, 'y_pos': 560, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 3},
{'x_pos': 110, 'y_pos': 560, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 160, 'y_pos': 560, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 210, 'y_pos': 560, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 260, 'y_pos': 560, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 310, 'y_pos': 560, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 5},
{'x_pos': 360, 'y_pos': 560, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 410, 'y_pos': 560, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 460, 'y_pos': 560, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 510, 'y_pos': 560, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 5},
{'x_pos': 560, 'y_pos': 560, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 610, 'y_pos': 560, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 5},
{'x_pos': 660, 'y_pos': 560, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 710, 'y_pos': 560, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 3},
{'x_pos': 760, 'y_pos': 560, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 5},
{'x_pos': 810, 'y_pos': 560, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 860, 'y_pos': 560, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 910, 'y_pos': 560, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 2},
{'x_pos': 960, 'y_pos': 560, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 1010, 'y_pos': 560, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1060, 'y_pos': 560, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1110, 'y_pos': 560, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 1160, 'y_pos': 560, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1210, 'y_pos': 560, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 1260, 'y_pos': 560, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 5},
{'x_pos': 1310, 'y_pos': 560, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 5},
{'x_pos': 1360, 'y_pos': 560, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 1410, 'y_pos': 560, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 5},
{'x_pos': 1460, 'y_pos': 560, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1510, 'y_pos': 560, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 10, 'y_pos': 610, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 60, 'y_pos': 610, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 110, 'y_pos': 610, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 160, 'y_pos': 610, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 210, 'y_pos': 610, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 260, 'y_pos': 610, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 310, 'y_pos': 610, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 360, 'y_pos': 610, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 410, 'y_pos': 610, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 5},
{'x_pos': 460, 'y_pos': 610, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 1},
{'x_pos': 510, 'y_pos': 610, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 0},
{'x_pos': 560, 'y_pos': 610, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 610, 'y_pos': 610, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 1},
{'x_pos': 660, 'y_pos': 610, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 2},
{'x_pos': 710, 'y_pos': 610, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 3},
{'x_pos': 760, 'y_pos': 610, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 810, 'y_pos': 610, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 860, 'y_pos': 610, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 910, 'y_pos': 610, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 960, 'y_pos': 610, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 1010, 'y_pos': 610, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 2},
{'x_pos': 1060, 'y_pos': 610, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 1110, 'y_pos': 610, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 1160, 'y_pos': 610, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 5},
{'x_pos': 1210, 'y_pos': 610, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1260, 'y_pos': 610, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 2},
{'x_pos': 1310, 'y_pos': 610, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 2},
{'x_pos': 1360, 'y_pos': 610, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1410, 'y_pos': 610, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1460, 'y_pos': 610, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 1510, 'y_pos': 610, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 10, 'y_pos': 660, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 60, 'y_pos': 660, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 0},
{'x_pos': 110, 'y_pos': 660, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 160, 'y_pos': 660, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 5},
{'x_pos': 210, 'y_pos': 660, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 260, 'y_pos': 660, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 310, 'y_pos': 660, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 360, 'y_pos': 660, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 410, 'y_pos': 660, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 1},
{'x_pos': 460, 'y_pos': 660, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 510, 'y_pos': 660, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 560, 'y_pos': 660, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 0},
{'x_pos': 610, 'y_pos': 660, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 660, 'y_pos': 660, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 2},
{'x_pos': 710, 'y_pos': 660, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 760, 'y_pos': 660, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 810, 'y_pos': 660, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 2},
{'x_pos': 860, 'y_pos': 660, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 3},
{'x_pos': 910, 'y_pos': 660, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 5},
{'x_pos': 960, 'y_pos': 660, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1010, 'y_pos': 660, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 0},
{'x_pos': 1060, 'y_pos': 660, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 1110, 'y_pos': 660, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 1},
{'x_pos': 1160, 'y_pos': 660, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 1210, 'y_pos': 660, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 1260, 'y_pos': 660, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 1310, 'y_pos': 660, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1360, 'y_pos': 660, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1410, 'y_pos': 660, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 1460, 'y_pos': 660, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 1510, 'y_pos': 660, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 10, 'y_pos': 710, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 60, 'y_pos': 710, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 110, 'y_pos': 710, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 160, 'y_pos': 710, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 210, 'y_pos': 710, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 260, 'y_pos': 710, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 310, 'y_pos': 710, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 360, 'y_pos': 710, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 410, 'y_pos': 710, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 5},
{'x_pos': 460, 'y_pos': 710, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 510, 'y_pos': 710, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 560, 'y_pos': 710, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 0},
{'x_pos': 610, 'y_pos': 710, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 660, 'y_pos': 710, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 710, 'y_pos': 710, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 760, 'y_pos': 710, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 810, 'y_pos': 710, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 0},
{'x_pos': 860, 'y_pos': 710, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 910, 'y_pos': 710, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 960, 'y_pos': 710, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 1010, 'y_pos': 710, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 1060, 'y_pos': 710, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1110, 'y_pos': 710, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 1160, 'y_pos': 710, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 5},
{'x_pos': 1210, 'y_pos': 710, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 5},
{'x_pos': 1260, 'y_pos': 710, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 1310, 'y_pos': 710, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1360, 'y_pos': 710, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 5},
{'x_pos': 1410, 'y_pos': 710, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1460, 'y_pos': 710, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 1510, 'y_pos': 710, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 10, 'y_pos': 760, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 60, 'y_pos': 760, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 3},
{'x_pos': 110, 'y_pos': 760, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 160, 'y_pos': 760, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 210, 'y_pos': 760, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 5},
{'x_pos': 260, 'y_pos': 760, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 310, 'y_pos': 760, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 360, 'y_pos': 760, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 410, 'y_pos': 760, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 5},
{'x_pos': 460, 'y_pos': 760, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 510, 'y_pos': 760, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 560, 'y_pos': 760, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 610, 'y_pos': 760, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 660, 'y_pos': 760, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 3},
{'x_pos': 710, 'y_pos': 760, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 760, 'y_pos': 760, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 810, 'y_pos': 760, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 860, 'y_pos': 760, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 5},
{'x_pos': 910, 'y_pos': 760, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 960, 'y_pos': 760, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 2},
{'x_pos': 1010, 'y_pos': 760, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 1060, 'y_pos': 760, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1110, 'y_pos': 760, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 1160, 'y_pos': 760, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1210, 'y_pos': 760, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 5},
{'x_pos': 1260, 'y_pos': 760, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1310, 'y_pos': 760, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 1360, 'y_pos': 760, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 1410, 'y_pos': 760, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1460, 'y_pos': 760, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 1},
{'x_pos': 1510, 'y_pos': 760, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 10, 'y_pos': 810, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 60, 'y_pos': 810, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 110, 'y_pos': 810, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 5},
{'x_pos': 160, 'y_pos': 810, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 5},
{'x_pos': 210, 'y_pos': 810, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 260, 'y_pos': 810, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 310, 'y_pos': 810, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 360, 'y_pos': 810, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 0},
{'x_pos': 410, 'y_pos': 810, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 460, 'y_pos': 810, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 510, 'y_pos': 810, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 560, 'y_pos': 810, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 610, 'y_pos': 810, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 660, 'y_pos': 810, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 5},
{'x_pos': 710, 'y_pos': 810, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 760, 'y_pos': 810, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 810, 'y_pos': 810, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 860, 'y_pos': 810, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 0},
{'x_pos': 910, 'y_pos': 810, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 5},
{'x_pos': 960, 'y_pos': 810, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 1010, 'y_pos': 810, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 1060, 'y_pos': 810, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 1110, 'y_pos': 810, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 1160, 'y_pos': 810, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 1210, 'y_pos': 810, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 1260, 'y_pos': 810, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 1310, 'y_pos': 810, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 1360, 'y_pos': 810, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 0},
{'x_pos': 1410, 'y_pos': 810, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 1460, 'y_pos': 810, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 1510, 'y_pos': 810, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 10, 'y_pos': 860, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 0},
{'x_pos': 60, 'y_pos': 860, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 110, 'y_pos': 860, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 2},
{'x_pos': 160, 'y_pos': 860, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 2},
{'x_pos': 210, 'y_pos': 860, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 3},
{'x_pos': 260, 'y_pos': 860, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 310, 'y_pos': 860, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 360, 'y_pos': 860, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 410, 'y_pos': 860, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 460, 'y_pos': 860, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 2},
{'x_pos': 510, 'y_pos': 860, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 560, 'y_pos': 860, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 610, 'y_pos': 860, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 1},
{'x_pos': 660, 'y_pos': 860, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 710, 'y_pos': 860, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 760, 'y_pos': 860, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 810, 'y_pos': 860, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 1},
{'x_pos': 860, 'y_pos': 860, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 910, 'y_pos': 860, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 1},
{'x_pos': 960, 'y_pos': 860, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 2},
{'x_pos': 1010, 'y_pos': 860, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 1060, 'y_pos': 860, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 1110, 'y_pos': 860, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 1160, 'y_pos': 860, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1210, 'y_pos': 860, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 1260, 'y_pos': 860, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 1310, 'y_pos': 860, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 1360, 'y_pos': 860, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 5},
{'x_pos': 1410, 'y_pos': 860, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 1460, 'y_pos': 860, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 1510, 'y_pos': 860, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 10, 'y_pos': 910, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 60, 'y_pos': 910, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 110, 'y_pos': 910, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 160, 'y_pos': 910, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 210, 'y_pos': 910, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 260, 'y_pos': 910, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 2},
{'x_pos': 310, 'y_pos': 910, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 360, 'y_pos': 910, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 410, 'y_pos': 910, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 460, 'y_pos': 910, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 510, 'y_pos': 910, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 5},
{'x_pos': 560, 'y_pos': 910, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 2},
{'x_pos': 610, 'y_pos': 910, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 660, 'y_pos': 910, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 710, 'y_pos': 910, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 760, 'y_pos': 910, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 810, 'y_pos': 910, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 3},
{'x_pos': 860, 'y_pos': 910, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 910, 'y_pos': 910, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 960, 'y_pos': 910, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 0},
{'x_pos': 1010, 'y_pos': 910, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1060, 'y_pos': 910, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 2},
{'x_pos': 1110, 'y_pos': 910, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 1160, 'y_pos': 910, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1210, 'y_pos': 910, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1260, 'y_pos': 910, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 1310, 'y_pos': 910, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 1360, 'y_pos': 910, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 5},
{'x_pos': 1410, 'y_pos': 910, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 1460, 'y_pos': 910, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 1510, 'y_pos': 910, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 5},
{'x_pos': 10, 'y_pos': 960, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 60, 'y_pos': 960, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 110, 'y_pos': 960, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 160, 'y_pos': 960, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 5},
{'x_pos': 210, 'y_pos': 960, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 260, 'y_pos': 960, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 310, 'y_pos': 960, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 360, 'y_pos': 960, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 2},
{'x_pos': 410, 'y_pos': 960, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 460, 'y_pos': 960, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 510, 'y_pos': 960, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 0},
{'x_pos': 560, 'y_pos': 960, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 610, 'y_pos': 960, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 660, 'y_pos': 960, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 710, 'y_pos': 960, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 760, 'y_pos': 960, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 810, 'y_pos': 960, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 3},
{'x_pos': 860, 'y_pos': 960, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 910, 'y_pos': 960, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 960, 'y_pos': 960, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 2},
{'x_pos': 1010, 'y_pos': 960, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1060, 'y_pos': 960, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 1110, 'y_pos': 960, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 1160, 'y_pos': 960, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 1210, 'y_pos': 960, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1260, 'y_pos': 960, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 1310, 'y_pos': 960, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 1360, 'y_pos': 960, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1410, 'y_pos': 960, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1460, 'y_pos': 960, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1510, 'y_pos': 960, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 10, 'y_pos': 1010, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 60, 'y_pos': 1010, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 110, 'y_pos': 1010, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 2},
{'x_pos': 160, 'y_pos': 1010, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 210, 'y_pos': 1010, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 260, 'y_pos': 1010, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 310, 'y_pos': 1010, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 2},
{'x_pos': 360, 'y_pos': 1010, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 410, 'y_pos': 1010, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 2},
{'x_pos': 460, 'y_pos': 1010, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 5},
{'x_pos': 510, 'y_pos': 1010, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 560, 'y_pos': 1010, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 2},
{'x_pos': 610, 'y_pos': 1010, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 660, 'y_pos': 1010, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 3},
{'x_pos': 710, 'y_pos': 1010, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 5},
{'x_pos': 760, 'y_pos': 1010, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 5},
{'x_pos': 810, 'y_pos': 1010, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 2},
{'x_pos': 860, 'y_pos': 1010, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 910, 'y_pos': 1010, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 960, 'y_pos': 1010, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 1010, 'y_pos': 1010, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 1060, 'y_pos': 1010, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 1110, 'y_pos': 1010, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 1160, 'y_pos': 1010, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 1210, 'y_pos': 1010, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 1260, 'y_pos': 1010, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 1310, 'y_pos': 1010, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 5},
{'x_pos': 1360, 'y_pos': 1010, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 1410, 'y_pos': 1010, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 1460, 'y_pos': 1010, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 1510, 'y_pos': 1010, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 10, 'y_pos': 1060, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 60, 'y_pos': 1060, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 110, 'y_pos': 1060, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 160, 'y_pos': 1060, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 210, 'y_pos': 1060, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 260, 'y_pos': 1060, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 310, 'y_pos': 1060, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 360, 'y_pos': 1060, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 410, 'y_pos': 1060, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 460, 'y_pos': 1060, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 510, 'y_pos': 1060, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 560, 'y_pos': 1060, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 610, 'y_pos': 1060, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 660, 'y_pos': 1060, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 710, 'y_pos': 1060, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 760, 'y_pos': 1060, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 810, 'y_pos': 1060, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 860, 'y_pos': 1060, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 910, 'y_pos': 1060, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 2},
{'x_pos': 960, 'y_pos': 1060, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 1010, 'y_pos': 1060, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 1060, 'y_pos': 1060, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 2},
{'x_pos': 1110, 'y_pos': 1060, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1160, 'y_pos': 1060, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 1210, 'y_pos': 1060, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 3},
{'x_pos': 1260, 'y_pos': 1060, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 1310, 'y_pos': 1060, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 1360, 'y_pos': 1060, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 1410, 'y_pos': 1060, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 5},
{'x_pos': 1460, 'y_pos': 1060, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 1510, 'y_pos': 1060, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 1},
{'x_pos': 10, 'y_pos': 1110, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 60, 'y_pos': 1110, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 5},
{'x_pos': 110, 'y_pos': 1110, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 5},
{'x_pos': 160, 'y_pos': 1110, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 210, 'y_pos': 1110, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 3},
{'x_pos': 260, 'y_pos': 1110, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 3},
{'x_pos': 310, 'y_pos': 1110, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 360, 'y_pos': 1110, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 410, 'y_pos': 1110, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 460, 'y_pos': 1110, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 510, 'y_pos': 1110, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 2},
{'x_pos': 560, 'y_pos': 1110, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 610, 'y_pos': 1110, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 5},
{'x_pos': 660, 'y_pos': 1110, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 710, 'y_pos': 1110, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 760, 'y_pos': 1110, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 5},
{'x_pos': 810, 'y_pos': 1110, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 5},
{'x_pos': 860, 'y_pos': 1110, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 910, 'y_pos': 1110, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 960, 'y_pos': 1110, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 1010, 'y_pos': 1110, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 0},
{'x_pos': 1060, 'y_pos': 1110, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 1110, 'y_pos': 1110, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 1160, 'y_pos': 1110, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 1210, 'y_pos': 1110, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 0},
{'x_pos': 1260, 'y_pos': 1110, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 1310, 'y_pos': 1110, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 1360, 'y_pos': 1110, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 1410, 'y_pos': 1110, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 1460, 'y_pos': 1110, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 1510, 'y_pos': 1110, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 10, 'y_pos': 1160, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 0},
{'x_pos': 60, 'y_pos': 1160, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 110, 'y_pos': 1160, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 3},
{'x_pos': 160, 'y_pos': 1160, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 2},
{'x_pos': 210, 'y_pos': 1160, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 260, 'y_pos': 1160, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 310, 'y_pos': 1160, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 360, 'y_pos': 1160, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 410, 'y_pos': 1160, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 460, 'y_pos': 1160, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 510, 'y_pos': 1160, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 560, 'y_pos': 1160, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 610, 'y_pos': 1160, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 660, 'y_pos': 1160, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 710, 'y_pos': 1160, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 1},
{'x_pos': 760, 'y_pos': 1160, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 810, 'y_pos': 1160, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 1},
{'x_pos': 860, 'y_pos': 1160, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 910, 'y_pos': 1160, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 960, 'y_pos': 1160, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 1010, 'y_pos': 1160, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 1060, 'y_pos': 1160, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 1110, 'y_pos': 1160, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 1160, 'y_pos': 1160, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 5},
{'x_pos': 1210, 'y_pos': 1160, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 1260, 'y_pos': 1160, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 3},
{'x_pos': 1310, 'y_pos': 1160, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 1360, 'y_pos': 1160, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1410, 'y_pos': 1160, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 1460, 'y_pos': 1160, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1510, 'y_pos': 1160, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 10, 'y_pos': 1210, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 60, 'y_pos': 1210, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 110, 'y_pos': 1210, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 160, 'y_pos': 1210, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 210, 'y_pos': 1210, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 2},
{'x_pos': 260, 'y_pos': 1210, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 3},
{'x_pos': 310, 'y_pos': 1210, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 3},
{'x_pos': 360, 'y_pos': 1210, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 3},
{'x_pos': 410, 'y_pos': 1210, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 460, 'y_pos': 1210, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 510, 'y_pos': 1210, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 560, 'y_pos': 1210, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 610, 'y_pos': 1210, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 3},
{'x_pos': 660, 'y_pos': 1210, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 710, 'y_pos': 1210, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 760, 'y_pos': 1210, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 810, 'y_pos': 1210, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 860, 'y_pos': 1210, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 910, 'y_pos': 1210, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 960, 'y_pos': 1210, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 1010, 'y_pos': 1210, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 1060, 'y_pos': 1210, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 1110, 'y_pos': 1210, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1160, 'y_pos': 1210, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 1210, 'y_pos': 1210, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 2},
{'x_pos': 1260, 'y_pos': 1210, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 0},
{'x_pos': 1310, 'y_pos': 1210, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 1360, 'y_pos': 1210, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 5},
{'x_pos': 1410, 'y_pos': 1210, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 1460, 'y_pos': 1210, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 5},
{'x_pos': 1510, 'y_pos': 1210, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 2},
{'x_pos': 10, 'y_pos': 1260, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 5},
{'x_pos': 60, 'y_pos': 1260, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 110, 'y_pos': 1260, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 160, 'y_pos': 1260, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 210, 'y_pos': 1260, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 260, 'y_pos': 1260, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 310, 'y_pos': 1260, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 360, 'y_pos': 1260, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 4},
{'x_pos': 410, 'y_pos': 1260, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 460, 'y_pos': 1260, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 510, 'y_pos': 1260, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 560, 'y_pos': 1260, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 2},
{'x_pos': 610, 'y_pos': 1260, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 660, 'y_pos': 1260, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 5},
{'x_pos': 710, 'y_pos': 1260, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 760, 'y_pos': 1260, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 810, 'y_pos': 1260, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 860, 'y_pos': 1260, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 910, 'y_pos': 1260, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 5},
{'x_pos': 960, 'y_pos': 1260, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 4},
{'x_pos': 1010, 'y_pos': 1260, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 1060, 'y_pos': 1260, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 1110, 'y_pos': 1260, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 3},
{'x_pos': 1160, 'y_pos': 1260, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 1210, 'y_pos': 1260, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 1260, 'y_pos': 1260, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 1},
{'x_pos': 1310, 'y_pos': 1260, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 1360, 'y_pos': 1260, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1410, 'y_pos': 1260, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 1460, 'y_pos': 1260, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 1510, 'y_pos': 1260, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 1},
{'x_pos': 10, 'y_pos': 1310, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 60, 'y_pos': 1310, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 110, 'y_pos': 1310, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 160, 'y_pos': 1310, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 210, 'y_pos': 1310, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 5},
{'x_pos': 260, 'y_pos': 1310, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 310, 'y_pos': 1310, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 360, 'y_pos': 1310, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 410, 'y_pos': 1310, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 5},
{'x_pos': 460, 'y_pos': 1310, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 510, 'y_pos': 1310, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 3},
{'x_pos': 560, 'y_pos': 1310, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 1},
{'x_pos': 610, 'y_pos': 1310, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 5},
{'x_pos': 660, 'y_pos': 1310, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 0},
{'x_pos': 710, 'y_pos': 1310, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 760, 'y_pos': 1310, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 5},
{'x_pos': 810, 'y_pos': 1310, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 5},
{'x_pos': 860, 'y_pos': 1310, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 910, 'y_pos': 1310, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 10, 'y_pos': 1410, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 60, 'y_pos': 1410, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 110, 'y_pos': 1410, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 160, 'y_pos': 1410, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 210, 'y_pos': 1410, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 260, 'y_pos': 1410, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 310, 'y_pos': 1410, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 5},
{'x_pos': 360, 'y_pos': 1410, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 410, 'y_pos': 1410, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 460, 'y_pos': 1410, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 510, 'y_pos': 1410, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 560, 'y_pos': 1410, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 610, 'y_pos': 1410, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 660, 'y_pos': 1410, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 710, 'y_pos': 1410, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 5},
{'x_pos': 760, 'y_pos': 1410, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 810, 'y_pos': 1410, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 860, 'y_pos': 1410, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 5},
{'x_pos': 910, 'y_pos': 1410, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 960, 'y_pos': 1410, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 1010, 'y_pos': 1410, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 1},
{'x_pos': 1060, 'y_pos': 1410, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 1110, 'y_pos': 1410, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 5},
{'x_pos': 1160, 'y_pos': 1410, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1210, 'y_pos': 1410, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 1260, 'y_pos': 1410, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 1310, 'y_pos': 1410, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 1360, 'y_pos': 1410, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 1410, 'y_pos': 1410, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1460, 'y_pos': 1410, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1510, 'y_pos': 1410, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 10, 'y_pos': 1460, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 60, 'y_pos': 1460, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 110, 'y_pos': 1460, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 160, 'y_pos': 1460, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 210, 'y_pos': 1460, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 260, 'y_pos': 1460, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 310, 'y_pos': 1460, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 360, 'y_pos': 1460, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 410, 'y_pos': 1460, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 460, 'y_pos': 1460, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 510, 'y_pos': 1460, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 560, 'y_pos': 1460, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 610, 'y_pos': 1460, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 660, 'y_pos': 1460, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 710, 'y_pos': 1460, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 760, 'y_pos': 1460, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 810, 'y_pos': 1460, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 860, 'y_pos': 1460, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 910, 'y_pos': 1460, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 960, 'y_pos': 1460, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 1010, 'y_pos': 1460, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1060, 'y_pos': 1460, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 1110, 'y_pos': 1460, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1160, 'y_pos': 1460, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 1210, 'y_pos': 1460, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1260, 'y_pos': 1460, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 1310, 'y_pos': 1460, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 1360, 'y_pos': 1460, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 1410, 'y_pos': 1460, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 1460, 'y_pos': 1460, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 1510, 'y_pos': 1460, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 5},
{'x_pos': 10, 'y_pos': 1510, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 60, 'y_pos': 1510, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 5},
{'x_pos': 110, 'y_pos': 1510, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 160, 'y_pos': 1510, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 210, 'y_pos': 1510, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 260, 'y_pos': 1510, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 310, 'y_pos': 1510, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 360, 'y_pos': 1510, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 410, 'y_pos': 1510, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 460, 'y_pos': 1510, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 510, 'y_pos': 1510, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 560, 'y_pos': 1510, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 610, 'y_pos': 1510, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 660, 'y_pos': 1510, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 710, 'y_pos': 1510, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 760, 'y_pos': 1510, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 810, 'y_pos': 1510, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 860, 'y_pos': 1510, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 910, 'y_pos': 1510, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 960, 'y_pos': 1510, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 1010, 'y_pos': 1510, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1060, 'y_pos': 1510, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 1110, 'y_pos': 1510, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 5},
{'x_pos': 1160, 'y_pos': 1510, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 5},
{'x_pos': 1210, 'y_pos': 1510, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1260, 'y_pos': 1510, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1310, 'y_pos': 1510, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 1360, 'y_pos': 1510, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 1410, 'y_pos': 1510, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 1460, 'y_pos': 1510, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 1510, 'y_pos': 1510, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 10, 'y_pos': 1560, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 60, 'y_pos': 1560, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 110, 'y_pos': 1560, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 160, 'y_pos': 1560, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 210, 'y_pos': 1560, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 260, 'y_pos': 1560, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 5},
{'x_pos': 310, 'y_pos': 1560, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 360, 'y_pos': 1560, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 410, 'y_pos': 1560, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 5},
{'x_pos': 460, 'y_pos': 1560, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 510, 'y_pos': 1560, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 560, 'y_pos': 1560, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 610, 'y_pos': 1560, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 660, 'y_pos': 1560, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 710, 'y_pos': 1560, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 760, 'y_pos': 1560, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 810, 'y_pos': 1560, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 860, 'y_pos': 1560, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 910, 'y_pos': 1560, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 960, 'y_pos': 1560, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 1010, 'y_pos': 1560, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 5},
{'x_pos': 1060, 'y_pos': 1560, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 1110, 'y_pos': 1560, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 1160, 'y_pos': 1560, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 1210, 'y_pos': 1560, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 1260, 'y_pos': 1560, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 1310, 'y_pos': 1560, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 1360, 'y_pos': 1560, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 1410, 'y_pos': 1560, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 1460, 'y_pos': 1560, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1510, 'y_pos': 1560, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 10, 'y_pos': 1610, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 60, 'y_pos': 1610, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 110, 'y_pos': 1610, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 160, 'y_pos': 1610, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 210, 'y_pos': 1610, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 260, 'y_pos': 1610, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 310, 'y_pos': 1610, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 360, 'y_pos': 1610, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 410, 'y_pos': 1610, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 460, 'y_pos': 1610, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 5},
{'x_pos': 510, 'y_pos': 1610, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 560, 'y_pos': 1610, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 610, 'y_pos': 1610, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 660, 'y_pos': 1610, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 710, 'y_pos': 1610, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 760, 'y_pos': 1610, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 810, 'y_pos': 1610, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 860, 'y_pos': 1610, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 910, 'y_pos': 1610, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 960, 'y_pos': 1610, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1010, 'y_pos': 1610, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1060, 'y_pos': 1610, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1110, 'y_pos': 1610, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 1160, 'y_pos': 1610, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 5},
{'x_pos': 1210, 'y_pos': 1610, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 1260, 'y_pos': 1610, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 1310, 'y_pos': 1610, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 1360, 'y_pos': 1610, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1410, 'y_pos': 1610, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 1460, 'y_pos': 1610, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 1510, 'y_pos': 1610, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 10, 'y_pos': 1660, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 60, 'y_pos': 1660, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 110, 'y_pos': 1660, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 160, 'y_pos': 1660, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 210, 'y_pos': 1660, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 260, 'y_pos': 1660, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 5},
{'x_pos': 310, 'y_pos': 1660, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 360, 'y_pos': 1660, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 410, 'y_pos': 1660, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 460, 'y_pos': 1660, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 510, 'y_pos': 1660, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 560, 'y_pos': 1660, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 610, 'y_pos': 1660, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 660, 'y_pos': 1660, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 710, 'y_pos': 1660, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 760, 'y_pos': 1660, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 810, 'y_pos': 1660, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 2},
{'x_pos': 860, 'y_pos': 1660, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 910, 'y_pos': 1660, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 960, 'y_pos': 1660, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 1010, 'y_pos': 1660, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 1060, 'y_pos': 1660, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 5},
{'x_pos': 1110, 'y_pos': 1660, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 1160, 'y_pos': 1660, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 1210, 'y_pos': 1660, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 1260, 'y_pos': 1660, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 1310, 'y_pos': 1660, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 2},
{'x_pos': 1360, 'y_pos': 1660, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1410, 'y_pos': 1660, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 1460, 'y_pos': 1660, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 1510, 'y_pos': 1660, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 10, 'y_pos': 1710, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 60, 'y_pos': 1710, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 110, 'y_pos': 1710, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 160, 'y_pos': 1710, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 210, 'y_pos': 1710, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 260, 'y_pos': 1710, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 310, 'y_pos': 1710, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 5},
{'x_pos': 360, 'y_pos': 1710, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 410, 'y_pos': 1710, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 460, 'y_pos': 1710, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 510, 'y_pos': 1710, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 560, 'y_pos': 1710, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 610, 'y_pos': 1710, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 660, 'y_pos': 1710, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 710, 'y_pos': 1710, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 760, 'y_pos': 1710, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 810, 'y_pos': 1710, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 2},
{'x_pos': 860, 'y_pos': 1710, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 910, 'y_pos': 1710, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 960, 'y_pos': 1710, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1010, 'y_pos': 1710, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 1060, 'y_pos': 1710, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 1110, 'y_pos': 1710, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 5},
{'x_pos': 1160, 'y_pos': 1710, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 1210, 'y_pos': 1710, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1260, 'y_pos': 1710, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 1310, 'y_pos': 1710, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 1360, 'y_pos': 1710, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 1410, 'y_pos': 1710, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 5},
{'x_pos': 1460, 'y_pos': 1710, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 1510, 'y_pos': 1710, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 10, 'y_pos': 1760, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 60, 'y_pos': 1760, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 110, 'y_pos': 1760, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 160, 'y_pos': 1760, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 210, 'y_pos': 1760, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 260, 'y_pos': 1760, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 310, 'y_pos': 1760, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 360, 'y_pos': 1760, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 410, 'y_pos': 1760, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 460, 'y_pos': 1760, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 510, 'y_pos': 1760, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 560, 'y_pos': 1760, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 610, 'y_pos': 1760, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 660, 'y_pos': 1760, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 710, 'y_pos': 1760, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 760, 'y_pos': 1760, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 810, 'y_pos': 1760, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 860, 'y_pos': 1760, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 910, 'y_pos': 1760, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 960, 'y_pos': 1760, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 1010, 'y_pos': 1760, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 1060, 'y_pos': 1760, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1110, 'y_pos': 1760, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 2},
{'x_pos': 1160, 'y_pos': 1760, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1210, 'y_pos': 1760, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1260, 'y_pos': 1760, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 1310, 'y_pos': 1760, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 1360, 'y_pos': 1760, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 1410, 'y_pos': 1760, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1460, 'y_pos': 1760, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 1510, 'y_pos': 1760, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 10, 'y_pos': 1810, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 60, 'y_pos': 1810, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 110, 'y_pos': 1810, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 160, 'y_pos': 1810, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 2},
{'x_pos': 210, 'y_pos': 1810, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 260, 'y_pos': 1810, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 310, 'y_pos': 1810, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 360, 'y_pos': 1810, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 410, 'y_pos': 1810, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 460, 'y_pos': 1810, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 510, 'y_pos': 1810, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 560, 'y_pos': 1810, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 610, 'y_pos': 1810, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 660, 'y_pos': 1810, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 710, 'y_pos': 1810, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 760, 'y_pos': 1810, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 810, 'y_pos': 1810, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 860, 'y_pos': 1810, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 910, 'y_pos': 1810, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 960, 'y_pos': 1810, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1010, 'y_pos': 1810, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 5},
{'x_pos': 1060, 'y_pos': 1810, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 3},
{'x_pos': 1110, 'y_pos': 1810, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1160, 'y_pos': 1810, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1210, 'y_pos': 1810, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 1260, 'y_pos': 1810, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 1310, 'y_pos': 1810, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1360, 'y_pos': 1810, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 1410, 'y_pos': 1810, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 5},
{'x_pos': 1460, 'y_pos': 1810, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 1510, 'y_pos': 1810, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 10, 'y_pos': 1860, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 5},
{'x_pos': 60, 'y_pos': 1860, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 110, 'y_pos': 1860, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 160, 'y_pos': 1860, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 5},
{'x_pos': 210, 'y_pos': 1860, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 260, 'y_pos': 1860, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 2},
{'x_pos': 310, 'y_pos': 1860, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 2},
{'x_pos': 360, 'y_pos': 1860, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 410, 'y_pos': 1860, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 4},
{'x_pos': 460, 'y_pos': 1860, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 510, 'y_pos': 1860, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 560, 'y_pos': 1860, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 3},
{'x_pos': 610, 'y_pos': 1860, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 660, 'y_pos': 1860, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 5},
{'x_pos': 710, 'y_pos': 1860, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 1},
{'x_pos': 760, 'y_pos': 1860, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 810, 'y_pos': 1860, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 860, 'y_pos': 1860, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 910, 'y_pos': 1860, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 960, 'y_pos': 1860, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 1010, 'y_pos': 1860, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 1060, 'y_pos': 1860, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1110, 'y_pos': 1860, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 1160, 'y_pos': 1860, 'color': '#F7F052', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 1210, 'y_pos': 1860, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 4},
{'x_pos': 10, 'y_pos': 1960, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 1},
{'x_pos': 60, 'y_pos': 1960, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 110, 'y_pos': 1960, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 3},
{'x_pos': 160, 'y_pos': 1960, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 210, 'y_pos': 1960, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 3},
{'x_pos': 260, 'y_pos': 1960, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 310, 'y_pos': 1960, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 360, 'y_pos': 1960, 'color': '#F7F052', 'color_background': '#D81E5B', 'shape_form': 1},
{'x_pos': 410, 'y_pos': 1960, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 460, 'y_pos': 1960, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 510, 'y_pos': 1960, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 1},
{'x_pos': 560, 'y_pos': 1960, 'color': '#004FFF', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 610, 'y_pos': 1960, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 660, 'y_pos': 1960, 'color': '#004FFF', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 10, 'y_pos': 2060, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 5},
{'x_pos': 60, 'y_pos': 2060, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 0},
{'x_pos': 110, 'y_pos': 2060, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 160, 'y_pos': 2060, 'color': '#F7F052', 'color_background': '#011627', 'shape_form': 2},
{'x_pos': 210, 'y_pos': 2060, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 260, 'y_pos': 2060, 'color': '#011627', 'color_background': '#FFFFFF', 'shape_form': 5},
{'x_pos': 310, 'y_pos': 2060, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 2},
{'x_pos': 360, 'y_pos': 2060, 'color': '#D81E5B', 'color_background': '#FFFFFF', 'shape_form': 0},
{'x_pos': 410, 'y_pos': 2060, 'color': '#D81E5B', 'color_background': '#004FFF', 'shape_form': 0},
{'x_pos': 460, 'y_pos': 2060, 'color': '#F7F052', 'color_background': '#004FFF', 'shape_form': 5},
{'x_pos': 510, 'y_pos': 2060, 'color': '#D81E5B', 'color_background': '#011627', 'shape_form': 2},
]

  let name = "tiles";


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
  //   "#FFFFFF"
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
        p.arc(x, y, TILE_SIZE * 2, TILE_SIZE * 2, 0, p.HALF_PI, p.PIE);
        break;
      case 1:
        p.arc(x + TILE_SIZE, y, TILE_SIZE * 2, TILE_SIZE * 2, p.HALF_PI, p.PI, p.PIE);
        break;
      case 2:
        p.arc(x + TILE_SIZE, y + TILE_SIZE, TILE_SIZE * 2, TILE_SIZE * 2, p.PI, p.PI + p.HALF_PI, p.PIE);
        break;
      case 3:
        p.arc(x, y + TILE_SIZE, TILE_SIZE * 2, TILE_SIZE * 2, p.HALF_PI + p.PI, 2 * p.PI, p.PIE);
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
        p.arc(x + TILE_SIZE / 2, y, TILE_SIZE, TILE_SIZE, 0, p.PI, p.OPEN);
        break;
      case 1:
        p.arc(x + TILE_SIZE, y + TILE_SIZE / 2, TILE_SIZE, TILE_SIZE, p.HALF_PI, p.PI + p.HALF_PI, p.PIE);
        break;
      case 2:
        p.arc(x + TILE_SIZE / 2, y + TILE_SIZE, TILE_SIZE, TILE_SIZE, p.PI, 2 * p.PI, p.PIE);
        break;
      case 3:
        p.arc(x, y + TILE_SIZE / 2, TILE_SIZE, TILE_SIZE, 0 - p.HALF_PI, p.PI - p.HALF_PI, p.PIE);
        break;
      default:
        break;
    }
  }

  smallCircle = function (x, y, c) {
    p.fill(c);
    p.arc(x + TILE_SIZE / 2, y + TILE_SIZE / 2, TILE_SIZE / 2, TILE_SIZE / 2, 0, 2 * p.PI, p.OPEN);
  }

  largeCircle = function (x, y, c) {
    p.fill(c);
    p.arc(x + TILE_SIZE / 2, y + TILE_SIZE / 2, TILE_SIZE, TILE_SIZE, 0, 2 * p.PI, p.OPEN);
  }

  donuts = function (x, y, c, c2) {
    largeCircle(x, y, c);
    smallCircle(x, y, c2);
  }

  square2 = function(x, y, c, x2) {

  }

  diagonals = function (x, y, c) {
    const corner = p.random([0, 1]);
    switch (corner) {
      case 0:
        p.fill(c);
        p.triangle(x, y, x + TILE_SIZE, y, x + TILE_SIZE, y + TILE_SIZE);
        break;
      case 1:
        p.fill(c);
        p.triangle(x + TILE_SIZE, y, x, y + TILE_SIZE, x + TILE_SIZE, y + TILE_SIZE);
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
    square2,
    diagonals
  ];

  p.setup = function () {
    p.createCanvas(40 * TILE_SIZE, 60 * TILE_SIZE);
    p.pixelDensity(2);
    p.strokeWeight(stroke);
    p.noLoop();
  };

  p.draw = function () {
    // createTileArray();

    for (let i = 0; i < tiles.length; i++) {
      let tile = tiles[i];
      if (Math.random() > 0.5) {
        p.fill(tile.color_background);
        p.square(tile.x_pos, tile.y_pos, TILE_SIZE);
        decorationFunction = tileDecorations[tile.shape_form];
        if (decorationFunction == tileDecorations[4]) {
              decorationFunction(tile.x_pos, tile.y_pos, tile.color, tile.color_background);
        }
        else{
          decorationFunction(tile.x_pos, tile.y_pos, tile.color);
        }
      }
      else {
        p.fill(tile.color);
        p.square(tile.x_pos, tile.y_pos, TILE_SIZE);
        decorationFunction = tileDecorations[tile.shape_form];
        if (decorationFunction == tileDecorations[4]) {
              decorationFunction(tile.x_pos, tile.y_pos, tile.color_background, tile.color);
        }
        else{
          decorationFunction(tile.x_pos, tile.y_pos, tile.color_background);
        }
      }



      // if (Math.random() > 0.5) {
      //   p.fill(tile.color);
      //   p.square(tile.x_pos, tile.y_pos, TILE_SIZE);
      //   decorationFunction = p.random(tileDecorations);
      //   if (decorationFunction == tileDecorations[4]) {
      //     decorationFunction(tile.x_pos, tile.y_pos, colorPalette[5], tile.color);
      //   }
      //   else {
      //     decorationFunction(tile.x_pos, tile.y_pos, colorPalette[5]);
      //   }
      // }
      // else {
      //   p.fill(colorPalette[5]);
      //   p.square(tile.x_pos, tile.y_pos, TILE_SIZE);
      //   decorationFunction = p.random(tileDecorations);
      //   if (decorationFunction == tileDecorations[4]) {
      //     decorationFunction(tile.x_pos, tile.y_pos, tile.color, colorPalette[5]);
      //   }
      //   else {
      //     decorationFunction(tile.x_pos, tile.y_pos, tile.color);
      //   }
      // }


    }
    makeLegend();
  };

  makeLegend = function() {
    legends =[{'x_pos': 0, 'y_pos': 0, 'color_background': 0, 'shape_form': 0},
    {'x_pos': 100, 'y_pos': 0, 'color_background': 0, 'shape_form': 0},
    {'x_pos': 200, 'y_pos': 0, 'color_background': 0, 'shape_form': 0},
    {'x_pos': 300, 'y_pos': 0, 'color_background': 0, 'shape_form': 0},
    {'x_pos': 400, 'y_pos': 0, 'color_background': 0, 'shape_form': 0},
    {'x_pos': 500, 'y_pos': 0, 'color_background': 0, 'shape_form': 0},
    {'x_pos': 600,
     'y_pos': 0,
     'color_background': '#F7F052',
     'shape_form': 0,
     'color': '#D81E5B'},
    {'x_pos': 700,
     'y_pos': 0,
     'color_background': '#F7F052',
     'shape_form': 0,
     'color': '#004FFF'},
    {'x_pos': 800,
     'y_pos': 0,
     'color_background': '#F7F052',
     'shape_form': 0,
     'color': '#011627'},
    {'x_pos': 900,
     'y_pos': 0,
     'color_background': '#F7F052',
     'shape_form': 0,
     'color': '#FFFFFF'},
    {'x_pos': 1000,
     'y_pos': 0,
     'color_background': '#D81E5B',
     'shape_form': 0,
     'color': '#004FFF'},
    {'x_pos': 1100,
     'y_pos': 0,
     'color_background': '#D81E5B',
     'shape_form': 0,
     'color': '#011627'},
    {'x_pos': 1200,
     'y_pos': 0,
     'color_background': '#D81E5B',
     'shape_form': 0,
     'color': '#FFFFFF'},
    {'x_pos': 1300,
     'y_pos': 0,
     'color_background': '#004FFF',
     'shape_form': 0,
     'color': '#011627'},
    {'x_pos': 1400,
     'y_pos': 0,
     'color_background': '#004FFF',
     'shape_form': 0,
     'color': '#FFFFFF'},
    {'x_pos': 1500,
     'y_pos': 0,
     'color_background': '#011627',
     'shape_form': 0,
     'color': '#FFFFFF'}]
    shapes = listLegend();
    for (let i = 0; i < legends.length; i++) {
      let tile = legends[i]
      p.fill(255);
      p.strokeWeight(3);
      p.square(tile.x_pos, tile.y_pos, TILE_SIZE);
      if (i >= 6) {
        p.fill(tile.color_background);
        p.rect(tile.x_pos, tile.y_pos, TILE_SIZE, TILE_SIZE/2);
        p.fill(tile.color);
        p.rect(tile.x_pos, tile.y_pos+TILE_SIZE/2, TILE_SIZE, TILE_SIZE/2);
      }
      else {
        shapes[i](tile.x_pos, tile.y_pos)
      }
    }
    // countries_name = ['Europe', 'America', 'Asia', 'Africa', 'Oceania'];
    // countries_count = getCountries();

    // for (let i = 0; i < countries_name.length; i++) {
    //   p.fill(0);
    //   p.textSize(16);
    //   p.text(countries_name[i] + ' (' + countries_count[i] + ')', TILE_SIZE * 1.5, TILE_SIZE * 2*(i+0.9) + h);
      
    //   // p.fill(colorPalette[i]);
    //   smallCircle(0, TILE_SIZE * 2*(i+1) + h - TILE_SIZE, colorPalette[i])
    // }

    // shapes = listLegend();
    // categories = ['Physics', 'Chemistry', 'Peace', 'Medicine', 'Economy', 'Literature']
    // for (let i = 0; i < categories.length; i++) {
    //   p.fill(255);
    //   p.strokeWeight(2);
    //   p.square(TILE_SIZE * 15, TILE_SIZE * (2*i+1) + h, TILE_SIZE);
    //   shapes[i](TILE_SIZE * 15, TILE_SIZE * (2*i+1) + h, TILE_SIZE)

    //   p.fill(0);
    //   p.textSize(16);
    //   p.text(categories[i], TILE_SIZE * 17, TILE_SIZE * (2*i+1.7) + h);
      // p.square(tileSize * 15, tileSize * (2*i+1) + h, tileSize);
    // }
    
  }

  legendCircleSmall = function(x, y) {
    p.arc(x + TILE_SIZE / 2, y + TILE_SIZE / 2, TILE_SIZE / 2, TILE_SIZE / 2, 0, 2 * p.PI, p.OPEN);
  }
  legendCircleLarge = function(x, y) {
    p.arc(x + TILE_SIZE / 2, y + TILE_SIZE / 2, TILE_SIZE, TILE_SIZE, 0, 2 * p.PI, p.OPEN);
  }
  legendDonut = function(x, y) {
    // legendCircleLarge(x, y);
    // legendCircleSmall(x, y);
  }
  legendHelfCircle = function(x, y) {
    p.arc(x + TILE_SIZE / 2, y, TILE_SIZE, TILE_SIZE, 0, p.PI, p.PIE);
  }
  legendQuarterCircle = function(x, y) {
    p.arc(x, y, TILE_SIZE * 2, TILE_SIZE * 2, 0, p.HALF_PI, p.PIE);
  }
  legendTriangle = function(x, y) {
    p.triangle(x + TILE_SIZE, y, x, y + TILE_SIZE, x + TILE_SIZE, y + TILE_SIZE);
  }

  listLegend = function() {
    return [legendCircleSmall, legendCircleLarge, legendDonut, legendHelfCircle, legendQuarterCircle, legendTriangle]
  }

  createTileArray = function () {
    tiles = [];

    for (let y = 0; y < h; y += TILE_SIZE + padding) {
      for (let x = 0; x < w; x += TILE_SIZE + padding) {
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
