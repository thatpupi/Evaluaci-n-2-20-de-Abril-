var ciudades = [
    {name:'Puente Alto',population:568106},
    {name:'Santiago',population:521627},
    {name:'Maipú',population:404495},
    {name:'La Florida',population:390095}
  ];
  //seleccionar todos los "circle" en el documento  
  d3.selectAll('circle')
    .data(ciudades)
    .attr('fill','#5F9EA0')
    .attr('r', function(d) {
      return d.population*6/57000;
    })
  //seleccionar todos los "text" en el documento      
  d3.selectAll('text')
    .data(ciudades)
    .attr('fill','#222222')                      
    .text(function(d) {
      return ". " + d.name;
    });
