# Testing task 1:

## Carry out static testing on the code below.

### Read through code below and comment on any errors you can spot.

#### Don't correct the errors!


```ruby
class CardGame

  def initialize(suit, value)
    @suit = suit
    @value = value;
  end

  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end
# convention to use lower case in variable names i.e. checkforace
# needs to be a self method, or as is but taking in no argument, so can be called on card i.e. card.checkforace
# if condition needs == instead of =


  dif highest_card(card1 card2)
  if card1.value > card2.value
    return card.name
  else
    card2
  end
end
end

# syntax errors in line 30, should be def instead of dif, missing comma to separate arguments card1 and card2
# no name variable in the class so .name will return undefined method
# as no explicit return in else statement, it may not return anything. 
# line 32 calls name on card, but arguments passed in to function are card1 and card2
# as with method above, needs to be a self method
# convention that code inside the method should be indented


def self.cards_total(cards)
  total
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
end

# end on line 37 means this method is outside the class so won't work
# total is not to set to any amount in line 47
# line 50 will generate error as can't concatenate a string and an integer

```
