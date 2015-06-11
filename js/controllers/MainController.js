app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = "Venkatesh's board";
  $scope.lists = [
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
      cardid:'3',
      content: 'Includes over 250 glyphs in font format from the Glyphicon Halflings set.',
      pubdate: new Date('2015', '08', '01')
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
    
    $scope.newCardContent=new Array();
    $scope.addCardIndex=new Array();
    
    $scope.editCardContent=new Array();
    $scope.editCardIndex=new Array();
    $scope.currentAddCardClass='.addCard0';
    $scope.hiddenAddCardHiddenClass='.addCardHidden0';
    $scope.cardHoverIn = function(index) { 
      $(index).css("display","block");
      console.log("Hovering card ->"+index);
    };
    $scope.cardHoverOut = function(index) {
      $(index).css("display","none");
      console.log("Hover Out card ->"+index);
    };

    $scope.editCard = function(parentIndex,index) {
      //cardId='#'+parentIndex+'cardContent'+index;
      $scope.editCardIndex[parentIndex][index]=false;
      //$(cardId).css("display","none");
      console.log("editCardContent ->"+$scope.editCardIndex[parentIndex][index]);
      console.log("Hover Out card ->"+index);
    };

    $scope.cancelEditCard = function(parentIndex,index) {
      $scope.editCardIndex[parentIndex][index]=true;
    };

    $scope.saveCard = function(parentIndex,index) {
      $scope.lists[parentIndex].cards[index].content=$scope.editCardContent[parentIndex][index];
      $scope.editCardIndex[parentIndex][index]=true;
      console.log("Saved ->"+$scope.editCardContent);
      console.log("Hover Out card ->"+index);
    };

    $scope.deleteCard = function(parentIndex,index) {
      $scope.lists[parentIndex].cards.splice(index, 1);
      console.log("Card Deleted->"+index);
    };

    $scope.addCardProcess = function(index) { 
    
    $scope.addCardIndex[index]=false;
    console.log("Card adding...");
    };

    $scope.cancelAdd = function(index) { 
    $scope.addCardIndex[index]=true;
    console.log("Cancelled");
    };

    $scope.addCard = function(index,icontent) { 
    newCard={
      cardid:'5',
      content: icontent, 
      pubdate: new Date('2015', '03', '08')
    };
    $scope.lists[index].cards.push(newCard); 
    console.log("Card added ->"+newCard.cardid);

    $scope.newCardContent[index]="";
    $scope.addCardIndex[index]=true;
  };

console.log($scope.editCardContent);

}]);
