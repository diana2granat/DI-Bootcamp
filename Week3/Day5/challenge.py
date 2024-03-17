# Part 2: Create a deck of cards class.
# The Deck of cards class should NOT inherit from a Card class.
# The requirements are as follows:
# The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
# The Deck class :
#  should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
#  should have a method called deal which deals a single card from the deck. 
#  After a card is dealt, it should be removed from the deck.
#===============================================answer============================================================================
import random


class Deck:
    def __init__(self):
        self.suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        self.values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
        self.a_deck = []

    def shuffle(self):
        self.a_deck = [(suit, value) for suit in self.suits for value in self.values]
        random.shuffle(self.a_deck)

    def check_duplicates(self):
        unique_cards = set(self.a_deck)
        if len(unique_cards) == len(self.a_deck):
            print('is OK')
            return True
        else:
            return False
    
    def deal(self):
        pick_a_card = random.choice(self.a_deck)
        self.a_deck.remove(pick_a_card)
        print(f'The card {pick_a_card} is removed from the deck')
        print(f'The {len(self.a_deck)} cards ramined')
        return pick_a_card


a_shuffle = Deck()
a_shuffle.shuffle()
print(a_shuffle.a_deck)
a_shuffle.check_duplicates()
a_shuffle.deal()


