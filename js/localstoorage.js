  var iniList;


    iniList=[
    { 
        id:'1',
      name: 'Animals', 
        pubdate: new Date('2015', '03', '08'),
      cards:[{ 
      cardid:'1',
      content: 'Includes over 250 glyphs in font format from the Glyphicon Halflings set.', 
      pubdate: new Date('2015', '03', '08')
      }, 
      { 
      cardid:'2',
      content: 'Glyphicons Halflings are normally not available for free',
      pubdate: new Date('2015', '08', '01')
      }, 
      { 
      cardid:'3',
      content: 'Includes over 250 glyphs in font format from the Glyphicon Halflings set.',
      pubdate: new Date('2015', '08', '01')
      }, 
      { 
      cardid:'4',
      content: 'Glyphicons Halflings are normally not available for free',
      pubdate: new Date('2015', '08', '01')
      }, 
      { 
      cardid:'5',
      content: 'Includes over 250 glyphs in font format from the Glyphicon Halflings set.',
      pubdate: new Date('2015', '08', '01')
      }]
    }, 
    { 
      id:'2',
        name: 'Cars',
        pubdate: new Date('2015', '08', '01'),
      cards:[{ 
      cardid:'1',
      content: 'Includes over 250 glyphs in font format from the Glyphicon Halflings set.', 
      pubdate: new Date('2015', '03', '08')
      }, 
      { 
      cardid:'2',
      content: 'Glyphicons Halflings are normally not available for free',
      pubdate: new Date('2015', '08', '01')
      }]
    }, 
    { 
      id:'3',
        name: 'Countries',
        pubdate: new Date('2015', '07', '08'),
      cards:[{ 
      cardid:'1',
      content: 'Includes over 250 glyphs in font format from the Glyphicon Halflings set.', 
      pubdate: new Date('2015', '03', '08')
      }, 
      { 
      cardid:'2',
      content: 'Glyphicons Halflings are normally not available for free',
      pubdate: new Date('2015', '08', '01')
      },
      { 
      cardid:'1',
      content: 'Includes over 250 glyphs in font format from the Glyphicon Halflings set.', 
      pubdate: new Date('2015', '03', '08')
      }]
    }, 
    { 
      id:'4',
        name: 'Oceans',
        pubdate: new Date('2015', '08', '16'),
      cards:[{ 
      cardid:'1',
      content: 'Includes over 250 glyphs in font format from the Glyphicon Halflings set.', 
      pubdate: new Date('2015', '03', '08')
      }, 
      { 
      cardid:'2',
      content: 'Glyphicons Halflings are normally not available for free',
      pubdate: new Date('2015', '08', '01')
      }]
    }
  ];

  if ((typeof(Storage) != "undefined")) {
    if (localStorage.getItem("lists")) {
      console.log('lists exists. Fetching from localstorage...');
    }else{
      localStorage.setItem("lists", JSON.stringify(iniList));
    }
} else {
    alert("localStorage is not available!");
}