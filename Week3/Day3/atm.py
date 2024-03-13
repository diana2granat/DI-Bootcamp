class AtmAccount:

    available_number = 500

    def __init__(self, holder) -> object:
        self._balance = 0.0 # _attributename = protected attribute
        self.__holder = holder #__attributename = private attribute
        self.__account_number = AtmAccount.available_number
        AtmAccount.available_number += 1

    @property
    def balance(self):
        return self._balance
    
    @property
    def funds(self):
        return self._balance
    
    @funds.setter
    def _funds(self, amount):
        self._balance = amount
    
    @property
    def get_holder(self):
        return self.__holder

    def deposit(self, amount) -> None:
        self._balance += amount
        return self.balance

    def withdraw(self, amount):
        self._balance -= amount
        return self.balance
    
    #Dunder Methods

    def __str__(self):
        output = f'''
        Account Number: {self.__account_number}
        Holder: {self.__holder}
        Balance {self.funds}
        '''
        return output
    
    def __repr__(self) -> str:
        return str(self.__dict__)
    
    def __iadd__(self, amount):
        self.deposit(amount)
        return self
    
    def __isub__(self, amount):
        self.withdraw(amount)
        return self




if __name__ == '__main__':

    account1 = AtmAccount('John Doe')
    account2 = AtmAccount('Juliana')
    account1 += 500
    account1 -= 100
    print(account1.balance)
    
    account1.deposit(200)
    account1.withdraw(50)
    print(account1)
    print(repr(account1))
    # print(account1.holder)
    print(AtmAccount.available_number)
    # print(account1.__holder)
    # print(account1._AtmAccount__holder)
    # print(account1.balance)

    #How to know all the possible dunder methods
    print(dir(float))