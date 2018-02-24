### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

class CardGame

  attr_reader :value

  def initialize(suit, value)
    @suit = suit
    @value = value
  end

  def self.checkforace(card)
    if card.value == 1
      return true
    else
      return false
    end
  end

  def self.highest_card(card1, card2)
    if card1.value > card2.value
      return card1
    elsif card1.value == card2.value
      return nil
    else
      card2
    end
  end

def self.cards_total(cards)
  total = 0
  for card in cards
    total += card.value
  end
  return "You have a total of " + total.to_s
end

end

# card = CardGame.new("", 1)
# p CardGame.checkforace(card)
#
# card = CardGame.new("", 5)
# p CardGame.checkforace(card)
#
# card = CardGame.new("", 8)
# p CardGame.checkforace(card)

# card = CardGame.new("", 0)
# p CardGame.checkforace(card)
#
#
# card1 = CardGame.new("Diamonds", 7)
# card2 = CardGame.new("Spades", 10)
# p CardGame.highest_card(card1, card2)
#
# card1 = CardGame.new("Diamonds", 7)
# card2 = CardGame.new("Spades", 3)
# p CardGame.highest_card(card1, card2)

# card1 = CardGame.new("Diamonds", 6)
# card2 = CardGame.new("Spades", 6)
# p CardGame.highest_card(card1, card2)

card1 = CardGame.new("Diamonds", 7)
card2 = CardGame.new("Spades", 3)
card3 = CardGame.new("Hearts", 9)
cards = [card1, card2, card3]
p CardGame.cards_total(cards)

card1 = CardGame.new("Diamonds", 10)
card2 = CardGame.new("Spades", 1)
card3 = CardGame.new("Hearts", 4)
cards = [card1, card2, card3]
p CardGame.cards_total(cards)
