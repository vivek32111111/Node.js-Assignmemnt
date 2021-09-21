export const calculateMetrics = (req, res, query) => {
    if(query.object == 'circle' || query.object == 'Circle' || query.object == 'CIRCLE') {
        var areaOfCircle = (22 / 7) * (query.radius ** 2);
        res.write(`Area of Circle is ${areaOfCircle.toFixed(2)}`);
    }
    if(query.object == 'sphere' || query.object == 'Sphere' || query.object == 'SPHERE') {
        var volumeOfSphere = (4 / 3) * 3.14 * (query.radius ** 3);
        res.write(`Area of Sphere ${volumeOfSphere.toFixed(2)}`);
    }
    res.end();
}