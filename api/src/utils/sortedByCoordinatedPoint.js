function sortByCoordinatePoint(objects) {
  objects.unshift({
    name: "Empresa",
    coordinate_point: { x: 0, y: 0 },
  });

  objects.sort((a, b) => {
    const [ax, ay] = [a.coordinate_point?.x, a.coordinate_point?.y];
    const [bx, by] = [b.coordinate_point?.x, b.coordinate_point?.y];

    return ax - bx || ay - by;
  });

  objects.push({
    name: "Empresa",
    coordinate_point: { x: 0, y: 0 },
  });
  return objects;
}

module.exports = sortByCoordinatePoint;
