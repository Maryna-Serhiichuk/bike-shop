$( function() {
  var availableTags = [
    'Ardis Norman 27.5" 17"',
    'Ardis Verona 28" 19"',
    "Cross Xtreme M 2018",
    "Orbea Occam H20-Eagle M",
  ];
  $( "#autocomplete" ).autocomplete({
    source: availableTags,
    delay: 700,
  });
} );