class Rope
  {
    constructor(nlink, pointA)
    {
      this.nlink = nlink
  const group = Body.nextGroup(true);
  const rects = Composites.stack(100, 100, this.nlink, 1, 5, 5, function(x, y) {
      return Bodies.rectangle(x, y, 30, 5, { collisionFilter: { group: group } });
  });
      
    }}