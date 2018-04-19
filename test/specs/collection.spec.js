let shoppingList = [
    'beer',
    'water',
    'fruit',
    'vegetables',
    'chewing gum'
]

test('Check shoppingList to contain beer', () => {
  expect(shoppingList).toContain('beer');
});
