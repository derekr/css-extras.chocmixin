
Hooks.addMenuItem("Actions/CSS/Show color", "alt-cmd-c", function () {
  
  Recipe.run(function (recipe) {
    var colorRange = recipe.wordRangeForRange(recipe.selection);
    var color = recipe.textInRange(colorRange);
    
    var colorPopover = new Popover(Editor.current(), colorRange);
    colorPopover.htmlPath = 'index.html';
    colorPopover.size = { width: 42, height: 42 };
    
    colorPopover.onLoad = function () {
      colorPopover.applyFunction('setColor', [color]);
    };
    
    colorPopover.run();
  });
  
});