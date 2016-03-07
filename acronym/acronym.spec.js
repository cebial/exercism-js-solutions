var Acronyms = require('./acronym');

describe('Acronyms are produced from', function(){
  it('title cased phrases', function() {
    expect(Acronyms.parse('Portable Network Graphics')).toEqual('PNG');
  });

  it('other title cased phrases', function(){
    expect(Acronyms.parse('Ruby on Rails')).toEqual('ROR');
  });

  it('inconsistently cased phrases', function(){
    expect(Acronyms.parse('HyperText Markup Language')).toEqual('HTML');
  });

  it('phrases with punctuation', function() {
    expect(Acronyms.parse('First In, First Out')).toEqual('FIFO');
  });

  it('other phrases with punctuation', function() {
    expect(Acronyms.parse('PHP: Hypertext Preprocessor')).toEqual('PHP');
  });

  it('phrases with punctuation and sentence casing', function() {
    expect(Acronyms.parse('Complementary metal-oxide semiconductor')).toEqual('CMOS');
  });

  // underscore at start of string will fail, that's ok
  it('custom! testing underscores and capitalized words', function() {
    expect(Acronyms.parse('ABC _Delivery_Express')).toEqual('ADE');
  });

  it('custom! Testing numbers', function() {
    expect(Acronyms.parse('3M Delivery-express')).toEqual('3DE');
  });
});