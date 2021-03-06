module('coin', lazy('coin'));

test('valid', function(){
  
  expectEvent(coin, 'update');
  
  is(coin.anis.glow);
  
});

test('touch should collect', function(){
  
  expectCall(coin, 'collect');
  
  coin.touch();
  
});

test('collect should dispose and stuff', function(){
  
  expectCall(coin.sfx, 'play');
  expectCall(coin, 'dispose');
  
  expectTrigger(coin, 'collect');
  
  coin.collect();
  
});
